"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="h-[500px] relative">
      <Swiper
        className="h-[300px] pb-[100px]"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-blue-700">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-green-700">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-orange-700">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-yellow-700">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-pink-700">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-[600px] w-[300px] bg-red-700">
          Slide 1
        </SwiperSlide>
        {/* Additional slides go here */}
      </Swiper>
      {/* Add a separate container for the scrollbar */}
      <div className="absolute bottom-0 left-0 w-full pb-4">
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};
