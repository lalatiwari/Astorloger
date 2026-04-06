import React from "react";

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white">

      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          About Us
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Astrologer Pragya Sharma <br />
            <span className="text-red-500">Gold Medalist</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Jyotisha, or Vedic astrology, is one of the most ancient and respected systems of spiritual science that originated from the sacred Vedas. It helps understand life through planetary positions.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            By analyzing planets like Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu, astrology provides deep insights into career, marriage, finances, and life events.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Astrologer Pragya Sharma blends traditional Vedic knowledge with modern understanding, helping individuals solve problems and achieve success through accurate predictions.
          </p>

          {/* Features / Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Accurate Predictions
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Personal Consultation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Vedic Remedies
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Trusted Guidance
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="tel:+917974437701"
              className="bg-red-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition"
            >
              📞 Call Now
            </a>

            <a
              href="#contact"
              className="border border-red-500 text-red-500 px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              Book Consultation
            </a>
          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="relative flex justify-center">

          {/* Glow Effect */}
          <div className="absolute w-full h-full bg-gradient-to-tr from-red-500/20 to-yellow-400/20 rounded-2xl blur-2xl"></div>

          {/* Image */}
          <img
            src="/services/about.jpg"
            alt="Astrologer Pragya Sharma"
            className="relative w-full max-w-md rounded-2xl shadow-2xl border-4 border-yellow-400 object-cover"
          />

        </div>

      </div>

    </section>
  );
};

export default About;