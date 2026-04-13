import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* ===== Top Header ===== */}
      <div className="bg-gray-100 py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* Logo Section */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/products/logo.png"
              alt="logo"
              className="w-20 h-auto object-contain"
            />

            <div className="leading-tight">
              <h2 className="text-lg font-bold text-gray-800">
                प्रज्ञा ज्योतिष संस्थान
              </h2>

              <p className="text-red-600 font-medium text-sm">
                Astrologer Pragya Sharma
              </p>

              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 inline-block mt-1 rounded shadow">
                Gold Medalist - Vedic Astrology - Indore
              </span>
            </div>
          </div>

          {/* ===== Premium Contact Section ===== */}
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium">

            {/* WhatsApp */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-green-50 cursor-pointer transition group">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-500 transition">
                <i className="fa-brands fa-whatsapp text-green-600 group-hover:text-white"></i>
              </div>
              <span className="text-gray-700 group-hover:text-green-600">
                WhatsApp
              </span>
            </div>

            {/* Call */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-red-50 cursor-pointer transition group">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
                <i className="fa-solid fa-phone text-red-600 group-hover:text-white"></i>
              </div>
              <span className="text-gray-700 group-hover:text-red-600">
                Call Us
              </span>
            </div>

            {/* Direction */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-blue-50 cursor-pointer transition group">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-500 transition">
                <i className="fa-solid fa-location-dot text-blue-600 group-hover:text-white"></i>
              </div>
              <span className="text-gray-700 group-hover:text-blue-600">
                Direction
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition shadow-md hover:shadow-lg"
            >
              Request a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-white text-[14px] font-medium items-center">
            {[
              ["Home", "home"],
              ["About Us", "about"],
              ["Our Service", "services"],
              ["Our Products", "products"],
              ["Certificates", "certificates"],
              ["Contact Us", "contact"],
            ].map(([label, id]) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className="cursor-pointer relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Phone */}
          <div className="hidden md:flex items-center space-x-2 text-white font-medium">
            <i className="fa-solid fa-phone text-red-500"></i>
            <span>07974437701</span>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isOpen && (
          <div className="md:hidden bg-black px-4 pb-4">
            <ul className="flex flex-col space-y-4 text-white text-sm font-medium">
              {[
                ["Home", "home"],
                ["About Us", "about"],
                ["Our Service", "services"],
                ["Our Products", "products"],
                ["Certificates", "certificates"],
                ["Contact Us", "contact"],
              ].map(([label, id]) => (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="cursor-pointer hover:text-red-500 transition"
                >
                  {label}
                </li>
              ))}

              <li className="flex items-center space-x-2 pt-3 border-t border-gray-700">
                <i className="fa-solid fa-phone text-red-500"></i>
                <span>07974437701</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}