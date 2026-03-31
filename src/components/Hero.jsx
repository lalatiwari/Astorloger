import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[250px] md:h-[380px]"  // 👈 Height reduced here
      >
        
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/services/slider1.jpg"
              alt="slider1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/services/slider2.jpg"
              alt="slider2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/services/slider3.jpg"
              alt="slider3"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
}