
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.nexusxpresshotel.com",
      "https://nexusxpresshotel.com",
    ],
  })
);
app.use(express.json({ limit: "20kb" }));

let oauthState = null;

// Nexus Xpress Hotel room rates in NGN.
// Weekdays: Monday to Thursday.
// Weekends: Friday to Sunday.
const ROOM_RATES = {
  standard: { weekday: 28000, weekend: 25000, label: "Standard Room" },
  superior: { weekday: 33000, weekend: 30000, label: "Superior Room" },
  deluxe: { weekday: 38000, weekend: 35000, label: "Deluxe Room" },
  executive: { weekday: 43000, weekend: 40000, label: "Executive Room" },
  suite: { weekday: 45000, weekend: 43000, label: "Nexus Suite" },
};

async function getZohoAccessToken() {
  const response = await fetch(
    "https://accounts.zoho.com/oauth/v2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    console.error("Zoho authentication failed:", data.error || "Unknown error");
    throw new Error("Zoho authentication failed.");
  }

  return data.access_token;
}

async function zohoRequest(endpoint, options = {}) {
  const accessToken = await getZohoAccessToken();

  const response = await fetch(
    `https://www.zohoapis.com/invoice/v3${endpoint}`,
    {
      ...options,
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "X-com-zoho-invoice-organizationid":
          process.env.ZOHO_ORGANIZATION_ID,
        "Content-Type": "application/json",
        ...options.headers,
      },
    }
  );

  const data = await response.json();

  if (!response.ok || (data.code !== undefined && data.code !== 0)) {
    console.error("Zoho API error:", data.message || data.code);
    throw new Error("The Zoho request failed.");
  }

  return data;
}

async function findOrCreateCustomer({ name, email, phone }) {
  const normalizedEmail = email.trim().toLowerCase();

  const result = await zohoRequest(
    `/contacts?contact_type=customer&search_text=${encodeURIComponent(normalizedEmail)}`
  );

  const contacts = result.contacts || [];

  const existingCustomer = contacts.find(
    (contact) =>
      contact.email &&
      contact.email.trim().toLowerCase() === normalizedEmail
  );

  if (existingCustomer) {
    return existingCustomer;
  }

  const contact = {
    contact_name: name.trim(),
    contact_type: "customer",
    customer_sub_type: "individual",
    email: normalizedEmail,
    billing_address: {
      country: "Nigeria",
    },
  };

  if (phone && phone.trim()) {
    contact.phone = phone.trim();
  }

  const created = await zohoRequest("/contacts", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  if (!created.contact) {
    throw new Error("Zoho did not return the created customer.");
  }

  return created.contact;
}

function parseDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    return null;
  }

  return date;
}

function calculateRoomCharges(roomType, checkIn, checkOut) {
  const roomKey = String(roomType || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

  const aliases = {
    "standardroom": "standard",
    "superiorroom": "superior",
    "deluxeroom": "deluxe",
    "executiveroom": "executive",
    "nexussuite": "suite",
  };

  const key = aliases[roomKey] || roomKey;
  const room = ROOM_RATES[key];

  if (!room) {
    throw new Error("Please select a valid hotel room type.");
  }

  const nights =
    (checkOut.getTime() - checkIn.getTime()) / (24 * 60 * 60 * 1000);

  if (!Number.isInteger(nights) || nights < 1 || nights > 60) {
    throw new Error("Stay must be between 1 and 60 nights.");
  }

  const lineItems = [];
  let total = 0;

  for (let i = 0; i < nights; i++) {
    const night = new Date(
      checkIn.getTime() + i * 24 * 60 * 60 * 1000
    );

    const day = night.getUTCDay();
    const isWeekend = day === 5 || day === 6 || day === 0;
    const rate = isWeekend ? room.weekend : room.weekday;

    lineItems.push({
      name: room.label,
      description: `${room.label}, night ${i + 1} of ${nights}`,
      rate,
      quantity: 1,
    });

    total += rate;
  }

  return { room, nights, total, lineItems };
}

// Prevent duplicate invoice creation from repeated submissions in this
// running server process. This temporary safeguard is not persistent.
const recentReservations = new Map();

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Nexus Xpress Hotel backend is running.",
  });
});

app.get("/api/zoho/test", async (req, res) => {
  try {
    const result = await zohoRequest("/organizations");

    res.json({
      success: true,
      message: "Zoho connection successful.",
      organizations: (result.organizations || []).map((org) => ({
        organization_id: org.organization_id,
        name: org.name,
      })),
    });
  } catch (error) {
    console.error("Zoho test failed:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Search for a customer without creating one.
app.get("/api/zoho/customer-test", async (req, res) => {
  try {
    const email =
      typeof req.query.email === "string" ? req.query.email.trim() : "";

    if (!email || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Provide a valid email query parameter.",
      });
    }

    const result = await zohoRequest(
      `/contacts?contact_type=customer&search_text=${encodeURIComponent(email)}`
    );

    const matches = (result.contacts || [])
      .filter(
        (contact) =>
          contact.email &&
          contact.email.trim().toLowerCase() === email.toLowerCase()
      )
      .map((contact) => ({
        contact_id: contact.contact_id,
        contact_name: contact.contact_name,
        email: contact.email,
      }));

    res.json({
      success: true,
      found: matches.length > 0,
      matches,
    });
  } catch (error) {
    console.error("Customer lookup failed:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create a Zoho invoice and leave it for manual review.
// This endpoint must remain local until production security is added.
app.post("/api/reservations", async (req, res) => {
  try {
    const {
      name,
      guestName,
      email,
      phone,
      roomType,
      room,
      checkIn,
      checkOut,
    } = req.body || {};

    const customerName =
      typeof name === "string" ? name.trim() :
      typeof guestName === "string" ? guestName.trim() : "";

    const customerEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    const customerPhone = typeof phone === "string" ? phone.trim() : "";

    if (!customerName || customerName.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid guest name.",
      });
    }

    if (
      customerEmail.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid guest email address.",
      });
    }

    if (customerPhone.length > 40) {
      return res.status(400).json({
        success: false,
        message: "Phone number is too long.",
      });
    }

    const start = parseDate(checkIn);
    const end = parseDate(checkOut);

    if (!start || !end || end <= start) {
      return res.status(400).json({
        success: false,
        message: "Provide valid check-in and check-out dates.",
      });
    }

    if (start < new Date(`${new Date().toISOString().slice(0, 10)}T00:00:00.000Z`)) {
      return res.status(400).json({
        success: false,
        message: "Check-in cannot be in the past.",
      });
    }

    const charges = calculateRoomCharges(
      roomType || room,
      start,
      end
    );

    // This key prevents rapid duplicate submissions in this process only.
    const fingerprint = crypto
      .createHash("sha256")
      .update(
        [
          customerEmail,
          charges.room.label,
          checkIn,
          checkOut,
        ].join("|")
      )
      .digest("hex");

    const previous = recentReservations.get(fingerprint);

    if (previous && Date.now() - previous.time < 10 * 60 * 1000) {
      return res.status(409).json({
        success: false,
        message:
          "A reservation invoice was already requested recently for these details. Check Zoho before trying again.",
      });
    }

    // Reserve the fingerprint while the invoice request is being processed.
    recentReservations.set(fingerprint, {
      time: Date.now(),
      pending: true,
    });

    try {
      const customer = await findOrCreateCustomer({
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      });

      const today = new Date().toISOString().slice(0, 10);

      const invoicePayload = {
        customer_id: customer.contact_id,
        date: today,
        due_date: checkIn,
        reference_number: `NEX-${crypto.randomUUID()}`,
        notes:
          "Reservation request only. Please verify room availability and payment before confirming the booking.",
        line_items: charges.lineItems,
      };

      // Intentionally do not call any Zoho email/send endpoint.
      const invoiceResult = await zohoRequest("/invoices", {
        method: "POST",
        body: JSON.stringify(invoicePayload),
      });

      if (!invoiceResult.invoice) {
        throw new Error("Zoho did not return the created invoice.");
      }

      const invoice = invoiceResult.invoice;

      recentReservations.set(fingerprint, {
        time: Date.now(),
        pending: false,
        invoiceId: invoice.invoice_id,
      });

      res.status(201).json({
        success: true,
        message:
          "Invoice created in Zoho for review. The guest has not been emailed and the booking is not confirmed.",
        invoice: {
          invoice_id: invoice.invoice_id,
          invoice_number: invoice.invoice_number,
          status: invoice.status,
          date: invoice.date,
          due_date: invoice.due_date,
          total: invoice.total,
          currency_code: invoice.currency_code,
        },
        reservation: {
          room: charges.room.label,
          checkIn,
          checkOut,
          nights: charges.nights,
          calculatedTotal: charges.total,
          currency: "NGN",
        },
      });
    } catch (error) {
      recentReservations.delete(fingerprint);
      throw error;
    }
  } catch (error) {
   console.error("Reservation invoice failed:", error);
console.error("Underlying cause:", error.cause);
    res.status(500).json({
      success: false,
      message:
        "Could not create the invoice. Check the backend terminal for the error before retrying.",
    });
  }
});

// Begin Zoho authorization if needed again.
app.get("/api/zoho/connect", (req, res) => {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const redirectUri = process.env.ZOHO_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return res.status(500).send("Zoho OAuth configuration is missing.");
  }

  oauthState = crypto.randomBytes(24).toString("hex");

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope:
      "ZohoInvoice.invoices.CREATE,ZohoInvoice.invoices.READ,ZohoInvoice.contacts.CREATE,ZohoInvoice.contacts.READ,ZohoInvoice.settings.READ",
    redirect_uri: redirectUri,
    access_type: "offline",
    prompt: "consent",
    state: oauthState,
  });

  res.redirect(
    `https://accounts.zoho.com/oauth/v2/auth?${params.toString()}`
  );
});

app.get("/api/zoho/callback", async (req, res) => {
  try {
    const { code, state, error } = req.query;

    if (error) {
      return res.status(400).send("Zoho authorization was not successful.");
    }

    if (!code || !state || state !== oauthState) {
      return res.status(400).send("Invalid or expired OAuth state.");
    }

    oauthState = null;

    const response = await fetch(
      "https://accounts.zoho.com/oauth/v2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          redirect_uri: process.env.ZOHO_REDIRECT_URI,
          code: String(code),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("OAuth token exchange failed:", data.error);
      return res.status(500).send("Could not complete Zoho authorization.");
    }

    if (data.refresh_token) {
      const fs = require("fs");
      const path = require("path");
      const envPath = path.join(__dirname, ".env");
      let envText = fs.existsSync(envPath)
        ? fs.readFileSync(envPath, "utf8")
        : "";

      const tokenLine = `ZOHO_REFRESH_TOKEN=${data.refresh_token}`;

      if (/^ZOHO_REFRESH_TOKEN=.*$/m.test(envText)) {
        envText = envText.replace(/^ZOHO_REFRESH_TOKEN=.*$/m, tokenLine);
      } else {
        envText += `\n${tokenLine}\n`;
      }

      fs.writeFileSync(envPath, envText);
    }

    res.send("Zoho authorization completed. Return to VS Code.");
  } catch (error) {
    console.error("OAuth callback failed:", error.message);
    res.status(500).send("Zoho authorization failed.");
  }
});

app.listen(PORT, () => {
  console.log(`Nexus backend running on http://localhost:${PORT}`);
});