import React from "react";

const About = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">

      {/* TOP HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-14">
        About Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between h-full text-left">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Astrologer Pragya Sharma – Gold Medalist
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Jyotisha, or Vedic astrology, is one of the most ancient and respected systems of spiritual science that originated from the sacred Vedas. It is based on the belief that planetary positions at the exact time of birth shape a person’s personality, strengths, challenges, and overall life journey.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Vedic astrology studies the nine major celestial bodies — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. By analyzing their placements in zodiac signs, houses, nakshatras, and dasha periods, it provides meaningful insights into career, marriage, finances, health, and important life events.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Astrologer Pragya Sharma combines traditional Vedic wisdom with practical modern understanding. She has guided many individuals in overcoming life challenges through accurate predictions and personalized consultation.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Along with predictions, she suggests effective remedies such as mantras, gemstones, and spiritual rituals to reduce negative influences and enhance positive energies, bringing peace, prosperity, and balance in life.
            </p>
          </div>

          {/* CALL BUTTON */}
          <a
            href="tel:+919452884067"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600 transition w-fit mt-6"
          >
            📞 9452884067
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/services/about.jpg"
            alt="Astrologer Pragya Sharma"
            className="w-full max-w-md h-full object-cover rounded-lg border-4 border-yellow-400 shadow-lg"
          />
        </div>

      </div>

    </div>
  );
};

export default About;