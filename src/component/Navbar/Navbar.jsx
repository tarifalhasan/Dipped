import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo 1.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  const DropDown = () => {
    setIsOpenService(!isOpenService);
  };
  return (
    <header className="px-5 z-50 lg:px-24 fixed w-full bg-transparent">
      <nav>
        <div className="">
          <div className="flex items-center bg-transparent justify-between relative">
            <div className="logo">
              <Link to="/">
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
              <li className="relative">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="text-white inline-flex items-center"
                  type="button"
                  onClick={() => DropDown()}
                >
                  Services
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownHover"
                  className={`z-10 ${
                    isOpenService ? "block" : "hidden"
                  } bg-[#222222] divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Quotes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        WIndow Tinting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
              <li className="relative">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="text-white inline-flex items-center"
                  type="button"
                  onClick={() => DropDown()}
                >
                  Services
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownHover"
                  className={`z-10 ${
                    isOpenService ? "block" : "hidden"
                  } bg-[#222222] divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Quotes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        WIndow Tinting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="servics1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
        </div>
      </nav>
      {/* mobile menu bar */}
    </header>
  );
};

export default Navbar;
