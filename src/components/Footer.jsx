import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#1a0000] via-[#2b0000] to-black text-gray-300 pt-14">

      {/* ===== Top Footer ===== */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ===== Column 1 (Logo + About) ===== */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/products/logo.png"
              alt="logo"
              className="w-20 object-contain"
            />

            <div>
              <h2 className="text-white font-bold text-lg">
                प्रज्ञा ज्योतिष संस्थान
              </h2>

              <p className="text-red-400 text-sm">
                Astrologer Pragya Sharma
              </p>
            </div>
          </div>

          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full shadow inline-block">
            Gold Medalist - Vedic Astrology - Indore
          </span>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Providing authentic Vedic astrology guidance with years of
            experience. Helping people find clarity and solutions in life.
          </p>
        </div>

        {/* ===== Column 2 (Quick Links) ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
            QUICK LINKS
            <span className="block w-10 h-[2px] bg-red-500 mt-1"></span>
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">

            <ul className="space-y-3">
              {[
                ["Home", "home"],
                ["About Us", "about"],
                ["Our Service", "services"],
                ["Our Products", "products"],
                ["Contact Us", "contact"],
              ].map(([label, id]) => (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="cursor-pointer flex items-center gap-2 group hover:text-red-400 transition"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition"></span>
                  {label}
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
  {[
    ["Palmistry", "services"],
    ["Muhurt", "services"],
    ["Health", "services"],
    ["Education and Job", "services"],
    ["Vastu Shastra", "services"],
  ].map(([label, id], index) => (
    <li
      key={index}
      onClick={() => scrollToSection(id)}
      className="cursor-pointer flex items-center gap-2 group hover:text-red-400 transition"
    >
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition"></span>
      {label}
    </li>
  ))}
</ul>

          </div>
        </div>

        {/* ===== Column 3 (Contact) ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
            GET IN TOUCH
            <span className="block w-10 h-[2px] bg-red-500 mt-1"></span>
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500/20 group-hover:bg-red-500 transition">
                <i className="fa-solid fa-location-dot text-red-400 group-hover:text-white"></i>
              </div>
              <span className="group-hover:text-white transition">
                Institute of Vedic Astrology, Indore
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500/20 group-hover:bg-green-500 transition">
                <i className="fa-solid fa-phone text-green-400 group-hover:text-white"></i>
              </div>
              <span className="group-hover:text-white transition">
                +91-7974437701
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition">
                <i className="fa-solid fa-envelope text-blue-400 group-hover:text-white"></i>
              </div>
              <span className="group-hover:text-white transition">
                info@bhagyarekha.co.in
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-500/20 group-hover:bg-purple-500 transition">
                <i className="fa-solid fa-globe text-purple-400 group-hover:text-white"></i>
              </div>
              <span className="group-hover:text-white transition">
                https://astorloger.vercel.app/
              </span>
            </li>

          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} All Rights Reserved | Designed with ❤️
      </div>
    </footer>
  );
};

export default Footer;