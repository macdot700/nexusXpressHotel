// src/pages/ThankYouPage.jsx
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-grey-1 flex flex-col items-center justify-center px-6 text-center font-poppins text-black">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary-blue mb-4">
          Thank You!
        </h1>
        <p className="text-grey-7 text-lg mb-6">
          Your reservation request has been received. A confirmation invoice will be sent to your email shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary-blue hover:bg-blue-700 text-white text-sm md:text-base font-medium py-3 px-6 rounded-full transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
