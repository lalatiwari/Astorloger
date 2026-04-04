import React, { useState } from "react";

const PopupForm = () => {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace("*", "")]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted ✅");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">

      {/* Popup Card */}
      <div className="relative w-[90%] max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-600 text-xl hover:text-black"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Get Expert Advice
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6">
          Talk to astrologer and solve your problems instantly
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          <input
            type="text"
            placeholder="Phone*"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-white rounded-full font-semibold bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition shadow-lg"
          >
            Submit Now
          </button>

        </form>

        {/* Extra CTA */}
        <p className="text-xs text-gray-500 text-center mt-4">
          100% Confidential • Quick Response • Trusted Guidance
        </p>

      </div>
    </div>
  );
};

export default PopupForm;