
import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate, useSearchParams } from "react-router-dom";

const roomOptions = [
  { name: "Standard Room", weekday: 28000, weekend: 25000, maxGuests: 2 },
  { name: "Superior Room", weekday: 33000, weekend: 30000, maxGuests: 2 },
  { name: "Deluxe Room", weekday: 38000, weekend: 35000, maxGuests: 2 },
  { name: "Executive Room", weekday: 43000, weekend: 40000, maxGuests: 2 },
  { name: "Nexus Suite", weekday: 45000, weekend: 43000, maxGuests: 3 },
];

const getLocalDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const addDays = (dateString, days) => {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + days);
  return getLocalDate(date);
};

const Reservation = () => {
  const form = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedRoom = searchParams.get("room") || "";
  const initialRoom = roomOptions.some(
    (room) => room.name === requestedRoom
  )
    ? requestedRoom
    : "";

  const [loading, setLoading] = useState(false);
  const [roomType, setRoomType] = useState(initialRoom);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [error, setError] = useState("");

  const selectedRoom = roomOptions.find(
    (room) => room.name === roomType
  );

  const nights = useMemo(() => {
    if (!checkIn || !checkOut || checkOut <= checkIn) return 0;

    const start = new Date(`${checkIn}T12:00:00`);
    const end = new Date(`${checkOut}T12:00:00`);

    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const booking = useMemo(() => {
    if (!selectedRoom || nights === 0) {
      return { total: 0, breakdown: [] };
    }

    const breakdown = [];
    let total = 0;

    for (let i = 0; i < nights; i++) {
      const date = new Date(`${checkIn}T12:00:00`);
      date.setDate(date.getDate() + i);

      // Friday, Saturday and Sunday use weekend rates.
      const day = date.getDay();
      const isWeekend = day === 5 || day === 6 || day === 0;
      const rate = isWeekend
        ? selectedRoom.weekend
        : selectedRoom.weekday;

      total += rate;
      breakdown.push({
        date: getLocalDate(date),
        rate,
      });
    }

    return { total, breakdown };
  }, [selectedRoom, checkIn, nights]);

  const handleCheckInChange = (value) => {
    setCheckIn(value);

    if (checkOut && value && checkOut <= value) {
      setCheckOut("");
    }

    setError("");
  };

  const handleCheckOutChange = (value) => {
    setCheckOut(value);
    setError("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");

    if (!selectedRoom) {
      setError("Please select a room.");
      return;
    }

    if (!checkIn || !checkOut || nights < 1) {
      setError("Please select a valid check-in and check-out date.");
      return;
    }

    if (checkIn < getLocalDate()) {
      setError("Check-in cannot be in the past.");
      return;
    }

    if (Number(guests) < 1 || Number(guests) > selectedRoom.maxGuests) {
      setError(
        `This room accommodates up to ${selectedRoom.maxGuests} guests.`
      );
      return;
    }

    setLoading(true);

    const formData = new FormData(form.current);

    const templateParams = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      room_type: selectedRoom.name,
      check_in: checkIn,
      check_out: checkOut,
      number_of_nights: nights,
      guests,
      special_requests: formData.get("special_requests"),
      estimated_total: `₦${booking.total.toLocaleString("en-NG")}`,
      rate_breakdown: booking.breakdown
        .map(
          (night) =>
            `${night.date}: ₦${night.rate.toLocaleString("en-NG")}`
        )
        .join("\n"),
    };

    try {
      await emailjs.send(
        "service_wjrcah7",
        "template_wneulen",
        templateParams,
        "FHN_1Krva_7DZA4E9"
      );

      await emailjs.send(
        "service_wjrcah7",
        "template_nk9h8z9",
        templateParams,
        "FHN_1Krva_7DZA4E9"
      );

      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      setError(
        "We couldn't submit your reservation request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white px-4 py-10 text-brand-text sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block bg-brand-lightBlue px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-sm">
            Reservations
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-deepBlue sm:text-5xl">
            Book Your Stay
          </h1>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-brand-muted">
            Choose your room and dates to request your stay at Nexus Xpress Hotel.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 border border-gray-100 p-5 shadow-sm sm:p-8"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="full_name">
                Full Name
              </label>
              <input
                id="full_name"
                type="text"
                name="full_name"
                autoComplete="name"
                required
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="room_type">
                Room Type
              </label>
              <select
                id="room_type"
                name="room_type"
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                  setGuests("1");
                  setError("");
                }}
                required
                className="w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-blue"
              >
                <option value="">Select a room</option>
                {roomOptions.map((room) => (
                  <option key={room.name} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="check_in">
                  Check-in
                </label>
                <input
                  id="check_in"
                  type="date"
                  name="check_in"
                  value={checkIn}
                  min={getLocalDate()}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="check_out">
                  Check-out
                </label>
                <input
                  id="check_out"
                  type="date"
                  name="check_out"
                  value={checkOut}
                  min={checkIn ? addDays(checkIn, 1) : addDays(getLocalDate(), 1)}
                  onChange={(e) => handleCheckOutChange(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="guests">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-blue"
                >
                  {Array.from(
                    { length: selectedRoom?.maxGuests || 3 },
                    (_, i) => i + 1
                  ).map((count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="number_of_nights">
                  Number of Nights
                </label>
                <input
                  id="number_of_nights"
                  name="number_of_nights"
                  value={nights}
                  readOnly
                  className="w-full border border-gray-200 bg-gray-100 px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="special_requests">
                Special Requests (Optional)
              </label>
              <textarea
                id="special_requests"
                name="special_requests"
                rows={3}
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-brand-blue"
              />
            </div>

            {error && (
              <p role="alert" className="bg-red-50 p-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-deepBlue disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Request Reservation"}
            </button>

            <p className="text-xs leading-5 text-brand-muted">
              This form sends a reservation request. Your stay is not confirmed
              until the hotel confirms availability.
            </p>
          </form>

          <aside className="h-fit border border-gray-100 bg-brand-lightBlue p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-2xl font-semibold text-brand-deepBlue">
              Booking Summary
            </h2>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Room</span>
                <span className="text-right font-semibold">
                  {selectedRoom?.name || "Not selected"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Check-in</span>
                <span className="text-right font-semibold">{checkIn || "Select date"}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Check-out</span>
                <span className="text-right font-semibold">{checkOut || "Select date"}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Guests</span>
                <span className="font-semibold">{guests}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Nights</span>
                <span className="font-semibold">{nights}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-brand-blue/20 pt-5">
              <p className="text-sm text-brand-muted">Estimated room total</p>
              <p className="mt-1 text-3xl font-bold text-brand-deepBlue">
                ₦{booking.total.toLocaleString("en-NG")}
              </p>
              <p className="mt-2 text-xs leading-5 text-brand-muted">
                Weekday rates apply Monday to Thursday. Weekend rates apply
                Friday to Sunday. The estimate covers room charges only and
                is subject to availability and hotel confirmation.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
