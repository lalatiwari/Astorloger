import React, { useEffect, useState } from "react";

const phone = "919452884067";

const services = [
  {
    title: "Palmistry",
    hindi: "हस्त रेखा शास्त्र",
    img: "/services/palmistry.jpg",
    desc: "I deeply analyze the subtle lines of your palm to guide your future."
  },
  {
    title: "Muhurt",
    hindi: "मुहूर्त",
    img: "/services/muhurt.jpg",
    desc: "Right timing is the key to success. Get auspicious timings."
  },
  {
    title: "Health",
    hindi: "स्वास्थ्य",
    img: "/services/health.jpg",
    desc: "Astrological remedies to improve health and remove negative effects."
  },
  {
    title: "Finance Problem",
    hindi: "आर्थिक समस्या",
    img: "/services/finance.jpg",
    desc: "Solve financial problems with expert astrological guidance."
  },
  {
    title: "Education And Job",
    hindi: "शिक्षा और नौकरी",
    img: "/services/education.jpg",
    desc: "Get success in career and education with proper guidance."
  },
  {
    title: "Vastu Sastra",
    hindi: "वास्तु शास्त्र",
    img: "/services/vastu.jpg",
    desc: "Improve home and office energy with vastu consultation."
  },
  {
    title: "Santan Yog",
    hindi: "संतान योग",
    img: "/services/santan.jpg",
    desc: "Guidance for child-related issues and remedies."
  },
  {
    title: "Gemstone",
    hindi: "रत्न शास्त्र",
    img: "/services/gemstone.jpg",
    desc: "Right gemstones can change your destiny."
  },
  {
    title: "Marriage",
    hindi: "विवाह",
    img: "/services/marriage.jpg",
    desc: "Marriage related problems and solutions."
  }
];

const testimonials = [
  {
    name: "Anup Jiaswal",
    text: "Mam bahut hi acche tarike se sab kuch clear bolte hai aur upchar bhi dete hai jisse mujhe bahut fayda mila."
  },
  {
    name: "Bhupendra Thakur",
    text: "Mam gives enough time and I got very good results. Highly satisfied."
  },
  {
    name: "Varun Sharma",
    text: "Mam jyotish gyan se yukt aur bahut hi saral swabhav ke hain."
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
    <div className="bg-gray-100 py-16 px-6">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-10">
        Astrologer Services
      </h2>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-white shadow-md rounded-xl overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">

              <h3 className="font-bold text-lg">
                {item.title}
              </h3>

              <p className="text-orange-500 font-medium text-sm mb-2">
                {item.hindi}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>

              {/* BUTTONS */}
              <div className="flex overflow-hidden rounded-lg">

                {/* CALL NOW */}
                <a
                  href={`tel:+${phone}`}
                  className="w-1/2 bg-black text-white py-2 text-sm text-center hover:bg-gray-800 transition"
                >
                  📞 CALL NOW
                </a>

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/${phone}?text=Hello%20Guruji,%20I%20need%20${item.title}%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-green-500 text-white py-2 text-sm text-center hover:bg-green-600 transition"
                >
                  💬 GET FREE ADVICE
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-orange-400 to-red-600 text-white p-10 rounded-lg text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            हमारे संस्था की ओर से काशी के वैदिक विद्वानों द्वारा विभिन्न अनुष्ठान कराए जाते हैं।
          </h2>
          <p className="text-sm">Need Any Help?</p>
          <p className="font-bold text-lg">+91-9452884067</p>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mt-16 bg-gradient-to-r from-orange-400 to-red-700 py-16 text-white overflow-hidden">
        <h2 className="text-center text-3xl font-bold mb-10">
          Testimonial
        </h2>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 33.33}%)`
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="w-1/3 flex-shrink-0 bg-white text-black p-6 rounded-lg shadow-xl text-center hover:scale-105 transition duration-300"
              >
                <p className="text-sm mb-4 italic">
                  "{item.text}"
                </p>

                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-red-500 text-sm">Customer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;