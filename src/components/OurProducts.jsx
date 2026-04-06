import React from "react";

const products = [
  {
    title: "Handwritten Janmkundali",
    img: "/products/kundali.jpg",
    desc: "Get a detailed handwritten horoscope with accurate life predictions."
  },
  {
    title: "Online Consultation",
    img: "/products/consultation.jpg",
    desc: "Consult directly via call or chat for personal life guidance."
  },
  {
    title: "Love & Relationship Solution",
    img: "/products/love.jpg",
    desc: "Solve love, breakup, and marriage problems with expert advice."
  },
  {
    title: "Business & Career Growth",
    img: "/products/career.jpg",
    desc: "Boost career and financial success with astrology guidance."
  }
];

const OurProducts = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">

      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Products
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {products.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-200 mb-4">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">

                <button className="bg-red-600 px-5 py-2 rounded-full text-sm hover:bg-red-700 transition shadow">
                  Book Now
                </button>

                <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                  Learn More
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ===== Bottom CTA ===== */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Get Personalized Astrology Solutions Today
          </h2>

          <p className="mb-6 text-sm">
            Talk to expert astrologer and solve your problems quickly
          </p>

          <a
            href="tel:+917974437701"
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            📞 Call Now
          </a>

        </div>
      </div>

    </section>
  );
};

export default OurProducts;