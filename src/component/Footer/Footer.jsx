import { Link } from "react-router-dom";

import shapeLine from "../../assets/line.png";
import logo from "../../assets/Logo 1.png";
const Footer = () => {
  return (
    <div className="pt-10">
      <img src={shapeLine} alt="shape" />
      <footer className="px-5 lg:px-24 2xl:px-0">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col md:flex-row	 gap-9 justify-between">
          <div className="brand basis-[40%]">
            <ul>
              <li className="text-base opacity-75">
                Dipped Auto Works not only provides Las Vegas with the best car
                wraps but we also provide superior window tinting, collision
                repair, ceramic coating and much more! We also provide
                inexpensive pricing without compromising our high quality of
                service.
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="address">
              <h4>Hours and Addres</h4>
              <ul className="mt-3">
                <li className="text-base">
                  Address : <br />
                  <span className="py-3 block">
                    5380 S Valley View Blvd, <br /> Las Vegas, NV 89118
                  </span>
                </li>
                <li className="text-base">
                  Hours : <br />
                  <span className="py-3 block">
                    Monday - Sunday <br /> 9:00am - 6:00pm
                  </span>
                </li>
              </ul>
            </div>
            <div className="Contact">
              <h4>Contact</h4>
              <ul className="mt-3">
                <li className="text-base">
                  <span className="py-3 block">
                    Phone : <br />
                    702-379-8716
                  </span>
                </li>
                <li>
                  Email :
                  <span className="py-3 block">
                    dippedautoworks702@gmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4>Menu</h4>
              <ul className="mt-3">
                <li className="text-base">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-base">
                  <Link to="about">About</Link>
                </li>
                <li className="text-base">
                  <Link to="services">Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
