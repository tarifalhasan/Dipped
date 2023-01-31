import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo 1.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative ">
      <nav>
        <div className="px-5 lg:px-24">
          <div className="flex items-center justify-between relative">
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={logo} />
              </Link>
            </div>
            {/* Dekstop And Big Screen Navbar */}
            <ul className="nav_item hidden md:flex items-center gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <BiMenu
              onClick={() => openNavbar()}
              className=" md:hidden text-4xl cursor-pointer"
            />
          </div>
          <div
            className={`fixed mobile_navbar w-full transition duration-700 ease-in-out  h-full  bg-slate-600 right-full ${
              isOpen ? "right-0" : "right-full"
            }  z-50 top-0 `}
          >
            <div className="logo flex  justify-between">
              <Link to="/">
                <img src={logo} />
              </Link>
              <ImCross
                onClick={() => openNavbar()}
                className="text-4xl m-2 cursor-pointer"
              />
            </div>
            <ul
              onClick={() => openNavbar()}
              class="nav_item right-full  h-full  pl-10 py-9 grid  pl place-items-cente text-left"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile menu bar */}
    </header>
  );
};

export default Navbar;
