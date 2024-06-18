import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode } from "swiper/modules";


// import { ServiceData } from "../api/constants.index";

const ActiveSlider = ({ array }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        spaceBetween={10}
        slidesPerView={1.2}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className=" w-full h-full "
        breakpoints={{
          320: {
            slidesPerView: 1.08, // Adjust based on your design needs
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.8, // Adjust based on your design needs
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2.6, // Adjust based on your design needs
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3.6, // Adjust based on your design needs
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 3.6, // Adjust based on your design needs
            spaceBetween: 5,
          },
          1536: {
            slidesPerView: 3.6, // Adjust based on your design needs
            spaceBetween: 5,
          },
        }}
      >
        {array.map((item,index) => (
          <SwiperSlide key={index}
            className="flex flex-col w-full h-auto  items-center text-left"
            style={{ width: "200px" }}
          >
            <div>
            <div className="relative">
              <img src={item.backgroundImage} className="w-96 " alt="" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
              <p className="absolute p-4 text-xl mt-2">{item.title}</p>
            </div>
            
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
