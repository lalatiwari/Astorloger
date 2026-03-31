import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Palmistry",
    img: "/services/palmistry.jpg",
    desc: "I deeply analyze the subtle lines of your palm to guide your future."
  },
  {
    title: "Muhurt",
    img: "/services/muhurt.jpg",
    desc: "Right timing is the key to success. Get auspicious timings."
  },
  {
    title: "Health",
    img: "/services/health.jpg",
    desc: "Astrological remedies to improve health and remove negative effects."
  },
  {
    title: "Finance Problem",
    img: "/services/finance.jpg",
    desc: "Solve financial problems with expert astrological guidance."
  },
  {
    title: "Education And Job",
    img: "/services/education.jpg",
    desc: "Get success in career and education with proper guidance."
  },
  {
    title: "Vastu Sastra",
    img: "/services/vastu.jpg",
    desc: "Improve home and office energy with vastu consultation."
  },
  {
    title: "Santan Yog",
    img: "/services/santan.jpg",
    desc: "Guidance for child-related issues and remedies."
  },
  {
    title: "Gemstone",
    img: "/services/gemstone.jpg",
    desc: "Right gemstones can change your destiny."
  },
  {
    title: "Marriage",
    img: "/services/marriage.jpg",
    desc: "Marriage related problems and solutions."
  }
];

// ✅ Testimonials Data
const testimonials = [
  {
    name: "Bapon",
    text: "Guruji bahut hi acche tarike se sab kuch clear bolte hai aur upchar bhi dete hai jisse personally mujhe bahut hi upkar mila."
  },
  {
    name: "Muskan Singh",
    text: "Guruji gives enough time to tell all our problems. I have got very good results from him. We are satisfied."
  },
  {
    name: "Dilip Bilgaiyan",
    text: "Jyotish ke vaastavik gyan se yukt, shanka samadhan me sahyogi aur bahut hi saral swabhav."
  }
];

const Services = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // slow slide

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
          <div key={index} className="bg-white shadow rounded overflow-hidden">

            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />

            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>

              <div className="flex">
                <button className="w-1/2 bg-black text-white py-2 text-sm">
                  CALL NOW
                </button>
                <button className="w-1/2 bg-red-500 text-white py-2 text-sm">
                  GET FREE ADVICE
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* CTA BANNER */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-orange-400 to-red-600 text-white p-10 rounded-lg text-center">

          <h2 className="text-lg md:text-xl font-semibold mb-4">
            हमारे संस्था की ओर से काशी के वैदिक विद्वानों के द्वारा महामृत्युंजय जप,
            ग्रह शांति, दुश्मनविधा प्रयोग, बगलामुखी प्रयोग, कर्कोटक, रुद्र पाठ सभी प्रकार के अनुष्ठान कराया जाता है।
          </h2>

          <p className="text-sm">Need Any Help?</p>
          <p className="font-bold text-lg">+91-9452884067</p>

        </div>
      </div>

     {/* PITRA DOSH */}
<div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-4 items-center">

  {/* IMAGE */}
  <div className="flex justify-end">
    <img
      src="/services/pitra.jpg"
      alt="Pitra Dosh"
      className="w-full max-h-56 object-contain rounded-lg border-2 border-yellow-400"
    />
  </div>

  {/* TEXT */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Pitra Dosh</h2>

    <p className="text-gray-600 mb-4 leading-relaxed">
      In Vedic astrology, certain planetary combinations in a birth chart indicate the presence of ancestral curses known as Pitra Dosh. This affliction can bring sorrow, challenges, untimely death, career difficulties, and various illnesses to the entire family.
    </p>

    <button className="bg-red-500 text-white px-6 py-2 flex items-center gap-2 w-fit">
      📞 9452884067
    </button>
  </div>

</div>

      {/* ✅ TESTIMONIAL (3 CARD SLIDER) */}
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