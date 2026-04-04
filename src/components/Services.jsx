import React, { useEffect, useState } from "react";

const phone = "919452884067";

const services = [
  {
    title: "Palmistry",
    hindi: "हस्त रेखा शास्त्र",
    img: "/services/palmistry.jpg",
    desc: "Understand your life path, personality, and future through detailed palm analysis."
  },
  {
    title: "Muhurt",
    hindi: "मुहूर्त",
    img: "/services/muhurt.jpg",
    desc: "Choose the most auspicious time for success in important life events."
  },
  {
    title: "Health",
    hindi: "स्वास्थ्य",
    img: "/services/health.jpg",
    desc: "Identify health issues and improve well-being with astrological remedies."
  },
  {
    title: "Finance Problem",
    hindi: "आर्थिक समस्या",
    img: "/services/finance.jpg",
    desc: "Solve financial instability and improve wealth with expert guidance."
  },
  {
    title: "Education & Job",
    hindi: "शिक्षा और नौकरी",
    img: "/services/education.jpg",
    desc: "Get clarity in career decisions and professional growth."
  },
  {
    title: "Vastu Shastra",
    hindi: "वास्तु शास्त्र",
    img: "/services/vastu.jpg",
    desc: "Balance your home and workplace energies for success and peace."
  },
  {
    title: "Santan Yog",
    hindi: "संतान योग",
    img: "/services/santan.jpg",
    desc: "Get guidance for childbirth and family happiness through astrology."
  },
  {
    title: "Gemstone",
    hindi: "रत्न शास्त्र",
    img: "/services/gemstone.jpg",
    desc: "Strengthen planets and improve life using the right gemstones."
  },
  {
    title: "Marriage",
    hindi: "विवाह",
    img: "/services/marriage.jpg",
    desc: "Get compatibility insights and build a happy married life."
  }
];

const testimonials = [
  {
    name: "Anup Jaiswal",
    text: "Bahut hi accurate prediction aur helpful guidance mila."
  },
  {
    name: "Bhupendra Thakur",
    text: "Highly satisfied. Mam gives proper time and solutions."
  },
  {
    name: "Varun Sharma",
    text: "Simple nature and deep knowledge. Highly recommended."
  }
];

const Services = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Astrologer Services
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {services.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-5">

              <p className="text-orange-500 text-sm font-medium mb-2">
                {item.hindi}
              </p>

              <p className="text-gray-600 text-sm mb-5">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">

                <a
                  href={`tel:+${phone}`}
                  className="flex-1 bg-black text-white py-2 rounded-full text-center text-sm hover:bg-gray-800 transition"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-2 rounded-full text-center text-sm hover:bg-green-600 transition"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-10 rounded-2xl text-center shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Need Guidance From Expert Astrologer?
          </h2>
          <p className="mb-4">Get personalized consultation now</p>
          <a
            href={`tel:+${phone}`}
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            📞 Call Now
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20 py-16 bg-gradient-to-r from-[#2b0000] to-black text-white rounded-2xl">

        <h2 className="text-center text-3xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="w-1/3 flex-shrink-0 bg-white text-black p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
              >
                <p className="text-sm mb-4 italic">
                  "{item.text}"
                </p>
                <h4 className="font-bold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Services;