import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { gallary, HomePageServicesSlider } from "../../static data/services";
// Import Swiper styles { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { Link } from "react-router-dom";
// Import Swiper React components
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import requerment
import { Autoplay, EffectCards, FreeMode } from "swiper";
// import required modules
import Testimonial from "../Testimonial/Testimonial";

import line1 from "../../assets/line.png";
import line2 from "../../assets/line_roted.png";
const Home = () => {
  return (
    <section>
      <div className="hero_aria ">
        <div className="relative px-5 lg:px-24">
          <div className="flex ">
            <div className="basis-[60%]">
              <h2>The Best Custom Automotive Shop In Las Vegas</h2>
              <p className="py-7">
                Dipped Auto Works specializes in full-car transformations
                including vehicle wraps, window tinting, ceramic coating, and
                more!
              </p>
              <div className="btn_group mt-1 gap-4 flex">
                <button className="btn px-12 py-2 btn_primary">Call Us</button>
                <button className="btn flex px-2 py-2 gap-2 btn_secondary">
                  <MdOutlineSmartDisplay /> Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] float-right mt-[8%] bg-[#4ffef3] h-1"></div>
      </div>
      <div className="px-5 mt-4 md:mt-16 lg:px-24">
        <div className="flex py-5 pt-[13rem] md:pt-4 md:justify-end gap-5 items-start">
          <div>
            <h3>Full Car Transform</h3>
            <Link to="/">Learn more...</Link>
          </div>
          <div className="flex  items-center gap-3">
            <IoIosArrowBack className="text-xl" />
            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>
      <div>
        <img src={line1} alt="line" />
      </div>
      {/* services slider */}
      <div className="py-10 px-5 lg:px-24">
        <div className="services_slider_title">
          <h5>SERVICES</h5>
        </div>
        <div className="grid gap-4 md:flex justify-between md:pt-10">
          <h3 className="basis-[60%]">
            EXCEPTIONAL QUALITY COMBINED WITH QUICK & AFFORDABLE SERVICES.
          </h3>
          <p className="basis-[40%]">
            Dipped Auto Works not only provides Las Vegas with the best car
            wraps but we also provide superior window tinting, collision repair,
            ceramic coating and much more! We also provide inexpensive pricing
            without compromising our high quality of service. As we continue to
            increase in demand and earn rave customer reviews, we would love for
            you to join in our journey to earning the position as the best place
            in Las Vegas to customize your vehicle.
          </p>
        </div>
      </div>
      {/* slider here */}
      <Swiper
        slidesPerView={2.4}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper px-5 md:px-0"
      >
        {HomePageServicesSlider?.map((service, index) => (
          <SwiperSlide className="grid gap-6" key={index}>
            <div className="feature_image">
              <img
                className="h-auto md:h-[388px]"
                src={service.featureImage}
                alt={service.serviceName}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-5 lg:px-52">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <h1 className="text-5xl md:text-8xl text-[#4FFEF3]">01</h1>
            <h3 className="text-2xl  md:text-3xl">VEHICLE WRAP</h3>
          </div>

          <div className="py-2 md:mt-20">
            <p>
              Praesent varius est nisl, vel mollis massa malesuada non. Aenean
              nec diam ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <button className="btn px-4 py-2 mt-5 btn_secondary text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* ===== SLIDER 2 ===== */}
      <div className="casuser_container flex relative items-center">
        <div className="grid overflow-hidden px-5 md:px-0  gap-5 grid-cols-1 lg:px-24 md:grid-cols-2">
          <div>
            <h3>OUR GALLERY</h3>
            <p className="py-5">
              Praesent varius est nisl, vel mollis massa malesuada non. Aenean
              nec diam ante. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
            <button class="btn px-5 py-2  btn_primary">Show All</button>
          </div>
          {/* effective slider */}
          <div className="px-5 md:px-0">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {gallary?.map((image) => (
                <SwiperSlide key={image.id}>
                  <img className="w-[310px]" src={image.featureImage} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* :::::::::=== Shape Line ======::::::::: */}
      <img src={line2} alt="" />
      {/* Testimonial */}
      <section id="testimonial">
        <Testimonial />
      </section>
    </section>
  );
};

export default Home;
