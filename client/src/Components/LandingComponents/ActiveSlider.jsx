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
            spaceBetween: 15,
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
            <div className="relative ">
              <img src={item.backgroundImage} className="w-96 " alt="" />
              
              <div className="absolute bottom-5 left-5 text-2xl active:scale-50 ease-in-out duration-500 bg-white rounded-full px-3 hover:bg-slate-300 ">{item.brand}</div>
            </div>
            <p className="text-2xl pt-5 text-black font-medium" >{item.title}</p>
            <p className=" text-xl pt-5">{item.productName}</p>
            <p className=" text-gray-600">{item.price}</p>
            
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
