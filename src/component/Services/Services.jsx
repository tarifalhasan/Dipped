import React from "react";
import { servicesData } from "../../static data/services";
const Services = () => {
  return (
    <section id="services">
      <div className="services_hero_aria">
        <div className="px-5 lg:px-24 pt-32">
          <div className="text-left">
            <h2>Car + Vehicle Wrap</h2>
            <p className="text-base lg:text-lg py-3">
              Specializing in all shapes+ sizes of vehicles and various
              materials
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-24">
        <div className="mt-6">
          <h2 className="text-4xl text-center">Quality Las Vegas Car Wraps</h2>

          {servicesData.map((service, index) => (
            <div className="mt-5">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="py-3">{service.title}</h3>
                  <p className="text-justify text-base lg:text-lg opacity-100 text-white ">
                    {service.subTitle}
                  </p>
                </div>
                <div className="grid gallary_img  gap-1">
                  <img
                    src={service.img1}
                    className="block transform transition duration-500 hover:scale-90"
                    alt={service.title}
                  />
                  <img
                    src={service.img2}
                    className="block  md:mt-10 transform transition duration-500 hover:scale-90"
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
