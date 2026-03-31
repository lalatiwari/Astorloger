import React, { useState } from "react";

const About = () => {

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

        setFormData({
          name: "",
          phone: "",
          email: "",
        });
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
    <div className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SECTION */}
        <div>
          <p className="text-red-500 font-semibold mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Astologer Pragya Sharma – Gold Medalist
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            With over 5 years of rich and distinguished experience in the field of astrology,
            Astologer Pragya Sharma holds a respected position among renowned astrologers.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            His accurate predictions and Vedic knowledge have helped many people bring
            positive changes in their lives.
          </p>

          <button className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600">
            📞 9452884067
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="text-center">
          <img
            src="/services/about.jpg"
            alt="About"
            className="rounded-lg border-4 border-yellow-400 shadow-lg"
          />
          <p className="mt-3 text-gray-700 font-medium">
            Governor receiving gold medal from Uttar Pradesh Government in 2018
          </p>
        </div>
      </div>

      {/* FORM + CONTACT SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-16">

        {/* FORM */}
        <div className="bg-pink-200 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">
            Enquire Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-white rounded transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-red-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit Now"}
            </button>

          </form>
        </div>

        {/* CONTACT BOX */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-4">
            Any Help We're Always Here
          </h3>

          <div className="bg-green-600 text-white py-3 mb-3 rounded">
            WhatsApp: +91-9452884067
          </div>

          <div className="bg-red-500 text-white py-3 rounded">
            Call: +91-9452884067
          </div>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-orange-400 to-red-600 text-white p-10 rounded-lg text-center">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            We can solve all types of problems for you without a birth chart.
          </h2>

          <div className="flex flex-col items-center justify-center mt-4">
            <span className="text-sm mb-1">Need Any Help?</span>
            <div className="flex items-center gap-2 text-lg font-bold">
              📞 +91-9452884067
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;