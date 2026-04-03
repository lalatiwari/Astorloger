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
    <header className="w-full sticky top-0 z-50">

      {/* ===== Top Header ===== */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-start">

          {/* Logo Section */}
          <div
            className="flex items-start space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/products/logo.png"
              alt="logo"
              className="w-24 h-auto object-contain mt-1"
            />

            <div className="leading-tight">
              <h2 className="text-lg font-semibold">
                प्रज्ञा ज्योतिष संस्थान
              </h2>

              <p className="text-red-600 font-semibold text-sm">
                Astrologer Pragya Sharma
              </p>

              <span className="bg-orange-500 text-white text-xs px-2 py-1 inline-block mt-1 rounded">
                Gold Medalist - BHU - Varanasi
              </span>
            </div>
          </div>

          {/* Desktop Contact Section */}
          <div className="hidden md:flex items-center space-x-6 text-sm">

            <div className="flex items-center space-x-2 cursor-pointer hover:text-green-600">
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Whatsapp</span>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
              <i className="fa-solid fa-phone"></i>
              <span>Call Us</span>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer hover:text-red-600">
              <i className="fa-solid fa-location-dot"></i>
              <span>Direction</span>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
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
          <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-red-500">
              Home
            </li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-red-500">
              About Us
            </li>
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-red-500">
              Our Service
            </li>
            <li onClick={() => scrollToSection("products")} className="cursor-pointer hover:text-red-500">
              Our Products
            </li>
            <li onClick={() => scrollToSection("certificates")} className="cursor-pointer hover:text-red-500">
              Certificates
            </li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-red-500">
              Contact Us
            </li>
          </ul>

          {/* Phone */}
          <div className="hidden md:flex items-center space-x-2 text-white">
            <i className="fa-solid fa-phone text-red-500"></i>
            <span>09452884067</span>
          </div>

        </div>

        {/* ===== Mobile Menu ===== */}
        {isOpen && (
          <div className="md:hidden bg-black px-4 pb-4">
            <ul className="flex flex-col space-y-3 text-white text-sm font-medium">
              <li onClick={() => scrollToSection("home")} className="cursor-pointer">
                Home
              </li>
              <li onClick={() => scrollToSection("about")} className="cursor-pointer">
                About Us
              </li>
              <li onClick={() => scrollToSection("services")} className="cursor-pointer">
                Our Service
              </li>
              <li onClick={() => scrollToSection("products")} className="cursor-pointer">
                Our Products
              </li>
              <li onClick={() => scrollToSection("certificates")} className="cursor-pointer">
                Certificates
              </li>
              <li onClick={() => scrollToSection("contact")} className="cursor-pointer">
                Contact Us
              </li>

              <li className="flex items-center space-x-2 pt-3 border-t border-gray-700">
                <i className="fa-solid fa-phone text-red-500"></i>
                <span>09452884067</span>
              </li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}