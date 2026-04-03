import React from "react";

const products = [
  {
    title: "Handwritten Janmkundali",
    img: "/products/kundali.jpg",
    desc: "I make you the excellent and best handwritten horoscope which contains all important life predictions."
  },
  {
    title: "Online Consultation",
    img: "/products/consultation.jpg",
    desc: "Get personal consultation through call or chat for all your life problems and solutions."
  },
  {
    title: "Love & Relationship Solution",
    img: "/products/love.jpg",
    desc: "Get expert guidance for love, breakup, relationship issues and marriage problems."
  },
  {
    title: "Business & Career Growth",
    img: "/products/career.jpg",
    desc: "Astrology-based guidance to boost your business, job growth and financial success."
  }
];

const OurProducts = () => {

 return (
    <div className="bg-gray-100 py-16 px-6">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-10">
        Our Products
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 text-center">

              <h3 className="text-lg font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>

              <button className="bg-red-500 text-white px-6 py-2 rounded">
                Book Now
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OurProducts;