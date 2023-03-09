import { Transition } from "@headlessui/react";
import { useState } from "react";
import {
  FaBars,
  FaCalculator,
  FaChartLine,
  FaFileAlt,
  FaHome,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center">
                {/* <img
                  className="h-8 w-8 mr-2"
                  src="https://hstu.ac.bd/img/hstu_logo_.png"
                  alt="Hajee Mohammad Danesh Science & Technology University"
                />
                <span className="text-xl font-bold text-white inline lg:hidden">
                  HSTU
                </span>
                <span className="text-xl font-bold text-white hidden lg:inline">
                  Hajee Mohammad Danesh Science & Technology University
                </span> */}
                <img
                  className="h-8 w-8 mr-2"
                  src="./logo.png"
                  alt="GPA & CGPA Calculator"
                />
                <span className="text-xl font-bold text-white flex justify-center items-center">
                  <span>
                    {/* <FaCalculator className="text-3xl text-white mb-4 inline-flex justify-center items-center mt-4" /> */}
                  </span>
                  <span>GPA & CGPA Calculator</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <NavLink
                to="/"
                activeClassName="font-bold"
                className="text-white hover:text-gray-300 mx-2 flex items-center"
              >
                <FaHome className="mr-2" /> Home
              </NavLink>
              <NavLink
                to="/gpa_calculator"
                activeClassName="font-bold"
                className="text-white hover:text-gray-300 mx-2 flex items-center"
              >
                <FaCalculator className="mr-2" /> GPA Calculator
              </NavLink>
              <NavLink
                to="/cgpa_calculator"
                activeClassName="font-bold"
                className="text-white hover:text-gray-300 mx-2 flex items-center"
              >
                <FaChartLine className="mr-2" /> CGPA Calculator
              </NavLink>
              <NavLink
                to="/cover_page"
                activeClassName="font-bold"
                className="text-white hover:text-gray-300 mx-2 flex items-center"
              >
                <FaFileAlt className="mr-2" /> Cover Page Design
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              activeClassName="font-bold"
              className="text-white hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-base font-medium"
            >
              <FaHome className="mr-2" /> Home
            </NavLink>
            <NavLink
              to="/gpa_calculator"
              activeClassName="font-bold"
              className="text-white hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-base font-medium"
            >
              <FaCalculator className="mr-2" /> GPA Calculator
            </NavLink>
            <NavLink
              to="/cgpa_calculator"
              activeClassName="font-bold"
              className="text-white hover:text-gray-300 flex items-center px-3 py-2 rounded-md text-base font-medium"
            >
              <FaChartLine className="mr-2" /> CGPA Calculator
            </NavLink>
            <NavLink
              to="/cover_page"
              activeClassName="font-bold"
              className="flex items-center text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
            >
              <FaFileAlt className="mr-2" /> Cover Page Design
            </NavLink>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
