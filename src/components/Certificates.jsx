import React from "react";

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
  return (
    <div className="bg-white py-16 px-6">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-12">
        Achievements & Certificates
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {certificates.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-100 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl"
          >

            {/* IMAGE AREA */}
            <div className="h-64 w-full flex items-center justify-center bg-gray-200 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TEXT */}
            <div className="p-4 text-center bg-white">
              <p className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition">
                {item.title}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Certificates;