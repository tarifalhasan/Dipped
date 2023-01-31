import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { testimonialData } from "../../static data/testimonial";
// Import Swiper React components
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import requerment
import { Autoplay, FreeMode, Scrollbar } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "swiper/css/scrollbar";
import styles from "../../styles/Testimonial.module.css";
// import required modules
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial() {
  const FiveStar = () => {
    return (
      <div className="flex justify-center gap-4">
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
      </div>
    );
  };
  const FourStar = () => {
    return (
      <div className="flex justify-center gap-4">
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <AiFillStar className="text-2xl text-[#4FFEF3]" />
        <BsStarHalf className="text-2xl text-gray-600" />
      </div>
    );
  };
  return (
    <div className="px-5 md-px-0">
      <div className="py-10 md:px-24">
        <div class={`services_slider_title ${styles.testomonial_title}`}>
          <h5>TESTIMONIAL</h5>
        </div>
      </div>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        scrollbar={{
          hide: false,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Autoplay, Scrollbar]}
        className="mySwiper px-5 md:px-0"
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide className={styles.TestimonialSidebar} key={index}>
            <div className="py-10">
              <div className="">
                <p className="z-10 text-lg opacity-60 lg:px-10 relative">
                  <RiDoubleQuotesL className="absolute bottom-2 -top-[11px] -z-40 left-[9px] text-[2rem]" />
                  {item.testimonial}
                  <div className="pt-10">
                    {item.ratting === 5 ? <FiveStar /> : <FourStar />}
                  </div>
                  <div className="avatar flex justify-center pt-10 pb-1">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item.profilePhoto}
                        alt={item.clientName}
                      />
                      <div className="font-medium dark:text-white">
                        <div>{item.clientName}</div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
