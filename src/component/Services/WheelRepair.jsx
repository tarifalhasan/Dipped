import React from "react";
import "react-phone-number-input/style.css";
import image from "../../assets/services/wheel_repair.png";
import { WheelRepairData } from "../../static data/services";
const WheelRepair = () => {
  return (
    <section id="WindowTinting">
      <div className="wheel_hero_aria">
        <div className="px-5 lg:px-24 pt-32">
          <div className=" pb-20 flex flex-col gap-5 lg:flex-row">
            <div className="contact_box_2 basis-[100%] lg:basis-[40%] brounded-lg p-8">
              <h3>Ceramic Coating</h3>
              <p className="mt-6">
                Offering quality window tinting for your vehicle
              </p>
            </div>
            <div className=" relative  basis-[100%] lg:basis-[60%]">
              <div className="window_tinting_box_2 bg-[#222] h-[299px] md:h-[515px] w-[94%]"></div>
              <div className="absolute top-7 left-8 ">
                <img className="h-full mx-auto " src={image} alt="tarif" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-24 2xl:px-0">
        <div className="mt-6">
          <h2 className="text-4xl py-4 text-center">
            Las Vegas Paint Protection Film Installer
          </h2>

          {WheelRepairData.map((service, index) => (
            <div className="mt-5 lg:px-28 2xl:px-0" key={index}>
              <div className="grid  gap-10">
                <div>
                  <p className="text-justify opacity-100 text-white  text-lg sm:text-xl">
                    {service.subTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WheelRepair;
