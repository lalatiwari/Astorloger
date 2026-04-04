import React, { useState } from "react";

const certificates = [
  {
    title: "International Astrology Conference Certificate",
    img: "/certificates/cert1.jpg"
  },
  {
    title: "Awarded With Gold Medal",
    img: "/certificates/cert2.jpg"
  },
  {
    title: "Kashi Hindu Vishwavidyalaya Certificate",
    img: "/certificates/cert3.jpg"
  },
  {
    title: "Receiving Certificate at BHU",
    img: "/certificates/cert4.jpg"
  }
];

const Certificates = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">

      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Achievements & Certificates
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* ===== Grid ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {certificates.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveImg(item.img)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Title */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-semibold text-center">
                {item.title}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* ===== Modal (Full View) ===== */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImg(null)}
        >
          <img
            src={activeImg}
            alt="certificate"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
};

export default Certificates;