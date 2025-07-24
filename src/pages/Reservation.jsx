import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [nights, setNights] = useState(1);

  const calculateNights = (checkIn, checkOut) => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = outDate - inDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const handleDateChange = () => {
    const formData = new FormData(form.current);
    const checkIn = formData.get("check_in");
    const checkOut = formData.get("check_out");

    if (checkIn && checkOut) {
      const calculated = calculateNights(checkIn, checkOut);
      setNights(calculated);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const templateParams = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      room_type: formData.get("room_type"),
      check_in: formData.get("check_in"),
      check_out: formData.get("check_out"),
      number_of_nights: nights,
      guests: formData.get("guests"),
      special_requests: formData.get("special_requests"),
    };

    try {
      // Send to guest
      await emailjs.send(
        "service_wjrcah7",
        "template_wneulen", // guest template
        templateParams,
        "FHN_1Krva_7DZA4E9"
      );

      // Send to hotel
      await emailjs.send(
        "service_wjrcah7",
        "template_nk9h8z9", // hotel notification template
        templateParams,
        "FHN_1Krva_7DZA4E9"
      );

      navigate("/thank-you");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong: " + (error?.text || "Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black font-opensans min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-grey-1 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-primary-blue mb-6 text-center">
          Book a Room
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="full_name"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Room Type</label>
            <select
              name="room_type"
              required
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select a room</option>
              <option value="Standard Room">Standard Room</option>
              <option value="Superior Room">Superior Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Executive Room">Executive Room</option>
              <option value="Suite">Nexus Suite</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in</label>
              <input
                type="date"
                name="check_in"
                required
                onChange={handleDateChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-out</label>
              <input
                type="date"
                name="check_out"
                required
                onChange={handleDateChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Nights</label>
            <input
              type="number"
              name="number_of_nights"
              value={nights}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              name="guests"
              required
              min="1"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea
              name="special_requests"
              rows="3"
              className="w-full px-4 py-2 border rounded-md"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-blue text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Sending..." : "Reserve Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
