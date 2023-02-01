import React from "react";
import "react-phone-number-input/style.css";
import image from "../../assets/services/window_tinting.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./service.css";
// import required modules
import { Navigation } from "swiper";
import slideIMage1 from "../../assets/services/quotes/image 1.png";
import slideIMage2 from "../../assets/services/quotes/image 2.png";
import slideIMage3 from "../../assets/services/quotes/image 3.png";
import {
  WindowTintingData,
  WINDOW_TINTY_GLLARY,
} from "../../static data/services";
const Window = () => {
  const servicesItem = [
    {
      name: "Crack Repair",
    },
    {
      name: "Curb Rash Repair",
    },
    {
      name: "Bend Repair",
    },
    {
      name: "Corrosion Repair",
    },
    {
      name: "Plasti Dipped",
    },
    {
      name: "Gouge Repair",
    },
    {
      name: "Dent Repair",
    },
  ];
  return (
    <section id="WindowTinting">
      <div className="window_tinting_hero">
        <div className="px-5 lg:px-24 pt-32">
          <div className=" pb-20 flex flex-col gap-5 lg:flex-row">
            <div className="contact_box_2 basis-[100%] lg:basis-[40%] brounded-lg p-8">
              <h3>Vehicle Detailing</h3>
              <p className="mt-6">A clean car is a happpy car</p>
            </div>
            <div className=" relative  basis-[100%] lg:basis-[60%]">
              <div className="window_tinting_box_2 bg-[#222]  h-[299px] md:h-[515px] w-[94%]"></div>
              <div className="absolute top-7 left-8 ">
                <img className="h-full mx-auto " src={image} alt="tarif" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <h2 className="text-4xl py-4 text-center">
            Las Vegas Ceramic Coating
          </h2>
          {/* :::::::::: Slider :::::::::::::: */}
          <>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="grid grid-cols-2">
                  <div>
                    <img src={slideIMage1} alt="" />
                  </div>
                  <div>
                    <img src={slideIMage2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-2">
                  <div>
                    <img src={slideIMage3} alt="" />
                  </div>
                  <div>
                    <img src={slideIMage2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <div className="px-5 lg:px-24 2xl:px-0">
            {WindowTintingData.map((service, index) => (
              <div key={index} className="mt-5 lg:px-28 2xl:px-0">
                <div className="grid  gap-10">
                  <div>
                    <p className="text-justify opacity-100 text-white text-base md:text-md ">
                      {service.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="flex justify-evenly px-4 flex-col md:flex-row lg:px-24 2xl:px-0">
              <ul className="windowTintingService flex w-full mx-auto md:gap-10 md:w-auto flex-col   gap-3">
                {servicesItem.map((service, index) => (
                  <li className="text-xl " key={index}>
                    <span className="text-4xl pr-2 text-slate-400">
                      0{index + 1}
                    </span>
                    {service.name}
                  </li>
                ))}
              </ul>
              <div>
                <div className="grid grid-cols-2">
                  {WINDOW_TINTY_GLLARY.map((data, index) => (
                    <div key={index}>
                      <img
                        src={data.img1}
                        className="block w-full transform transition duration-500 hover:scale-90 "
                        alt={data.title}
                      />
                      <img
                        src={data.img2}
                        className="block w-full md:mt-10 transform transition duration-500  hover:scale-90"
                        alt={data.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Window;
