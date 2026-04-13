import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <div className="w-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop={true}
        className="h-[400px] md:h-[550px]"
      >

        {/* Slides */}
        {[
          "/services/slider5.PNG",
          "/services/slider2.jpg",
          "/services/slider6.PNG",
          "/services/slider4.jpg",
          "/services/slider7.jpeg",
          "/services/slider8.jpeg",
          "/services/slider9.jpeg",
          "/services/slider10.jpeg",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">

              {/* Image */}
              <img
                src={img}
                alt="slider"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition duration-[4000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">

                <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight animate-fadeIn">
                  Discover Your Destiny <br />
                  With Vedic Astrology
                </h1>

                <p className="text-sm md:text-lg mb-6 max-w-xl text-gray-200">
                  Get accurate predictions and solutions from expert astrologer.
                </p>

                <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition shadow-lg hover:scale-105">
                  Book Consultation
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* Custom Styling */}
      <style>
        {`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(6px);
          padding: 20px;
          border-radius: 50%;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255,255,255,0.4);
        }

        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #ef4444;
          transform: scale(1.2);
        }
        `}
      </style>

    </div>
  );
}