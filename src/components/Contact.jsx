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
    <div className="bg-gray-100 py-16 px-6">

      {/* ✅ TOP HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
      </div>

      {/* FORM + CONTACT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

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
              className={`w-full py-2 text-white rounded transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-red-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit Now"}
            </button>

          </form>
        </div>

        {/* CONTACT */}
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

      {/* CTA */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-orange-400 to-red-600 text-white p-10 rounded-lg text-center">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            We can solve all types of problems for you without a birth chart.
          </h2>

          <div className="flex flex-col items-center mt-4">
            <span className="text-sm mb-1">Need Any Help?</span>
            <div className="text-lg font-bold">
              📞 +91-9452884067
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;