import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Enquiry Submitted Successfully ✅");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6">

      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* ===== Main Grid ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT: CONTACT INFO ===== */}
        <div className="space-y-6">

          <h3 className="text-2xl font-bold text-gray-800">
            Get In Touch With Expert Astrologer
          </h3>

          <p className="text-gray-600">
            Talk directly with astrologer and get solutions for your life problems instantly.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">

            <a
              href="https://wa.me/919452884067"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 text-white p-4 rounded-xl shadow hover:scale-105 transition"
            >
              <span className="text-xl">💬</span>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm">+91 9452884067</p>
              </div>
            </a>

            <a
              href="tel:+919452884067"
              className="flex items-center gap-4 bg-red-500 text-white p-4 rounded-xl shadow hover:scale-105 transition"
            >
              <span className="text-xl">📞</span>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-sm">+91 9452884067</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-black text-white p-4 rounded-xl shadow">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm">Indore, India</p>
              </div>
            </div>

          </div>

        </div>

        {/* ===== RIGHT: FORM ===== */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border">

          <h3 className="text-xl font-bold mb-6 text-center">
            Enquire Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white rounded-full font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105"
              }`}
            >
              {loading ? "Submitting..." : "Submit Now"}
            </button>

          </form>

        </div>

      </div>

      {/* ===== Bottom CTA ===== */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            We Solve All Life Problems With Astrology
          </h2>

          <p className="mb-6 text-sm">
            Get instant solutions without waiting
          </p>

          <a
            href="tel:+919452884067"
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            📞 Call Now
          </a>

        </div>
      </div>

    </section>
  );
};

export default Contact;