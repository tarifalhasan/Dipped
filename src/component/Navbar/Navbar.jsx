import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo 1.png";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-5  flex items-center justify-between z-50 lg:px-24 left-0  fixed w-full bg-transparent">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      {/* Dekstop And Big Screen Navbar */}
      <div>
        <ul className="nav_item hidden md:flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li id="dropdownHoverButton" className="relative">
            <Link
              to="/services "
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-white inline-flex items-center"
              type="button"
            >
              Services
              <RiArrowDownSLine />
            </Link>

            <div
              id="dropdownHover"
              className={`z-10 
                  hidden service_dropdown
                  bg-[#222222] text-lg  divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    to="services/quotes"
                    className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                  >
                    Quotes
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/window_tinting"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                  >
                    Window Tinting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/wheel_repair"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                  >
                    Wheel Repair
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <BiMenu
        onClick={() => openNavbar()}
        className=" md:hidden text-4xl cursor-pointer"
      />
      {/* Mobile Menu */}
      <MobileMenu openNavbar={openNavbar} isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
