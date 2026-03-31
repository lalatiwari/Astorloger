import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a0000] via-[#2b0000] to-[#000000] text-white">

      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Column 1 - Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/products/logo.png" alt="logo" className="w-14" />
            <div>
              <h2 className="text-lg font-semibold">
               प्रज्ञा ज्योतिष संस्थान
              </h2>
              <p className="text-red-500 font-medium text-sm">
                Astrologer Pragya Sharma
              </p>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 inline-block mt-1 rounded">
                Gold Medalist - BHU - Varanasi
              </span>
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-2 text-sm mt-4">
            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">About Us</li>
              <li className="hover:text-red-500 cursor-pointer">Our Service</li>
              <li className="hover:text-red-500 cursor-pointer">Gallery</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            </ul>

            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Palmistry</li>
              <li className="hover:text-red-500 cursor-pointer">Muhurt</li>
              <li className="hover:text-red-500 cursor-pointer">Health</li>
              <li className="hover:text-red-500 cursor-pointer">
                Education and Job
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Vastu Sastra
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-600 inline-block pb-1">
            GET IN TOUCH
          </h3>

          <ul className="space-y-3 text-sm mt-4">
            <li className="flex items-start space-x-2">
              <i className="fa-solid fa-house mt-1 text-red-500"></i>
              <span>
                Banaras Hindu University, Varanasi, Uttar Pradesh - 221005
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <i className="fa-solid fa-phone text-red-500"></i>
              <span>+91-9452884067</span>
            </li>

            <li className="flex items-center space-x-2">
              <i className="fa-solid fa-envelope text-red-500"></i>
              <span>info@varanasiastrloger.com</span>
            </li>

            <li className="flex items-center space-x-2">
              <i className="fa-solid fa-globe text-red-500"></i>
              <span>www.varanasiastrloger.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-4 text-sm border-t border-gray-800">
        Copyright © 2026 Ganapati Jyotish Sodh Sadan Powered By{" "}
        <span className="text-yellow-400 font-semibold">
          Quartz Technologies
        </span>
      </div>

    </footer>
  );
};

export default Footer;