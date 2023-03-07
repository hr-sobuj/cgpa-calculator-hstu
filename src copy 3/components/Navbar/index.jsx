import React from "react";
import { FaCalculator, FaChartLine, FaFileAlt, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-700 p-4">
      <NavLink to="/">
        <div className="flex items-center">
          <img
            src="https://hstu.ac.bd/img/hstu_logo_.png"
            alt=""
            className="h-8 mr-2"
          />
          <span className="text-xl font-bold text-white">
            Hajee Mohammad Danesh Science & Technology University
          </span>
        </div>
      </NavLink>

      <div className="flex items-center">
        <NavLink
          to="/"
          activeClassName="font-bold"
          className="flex items-center text-white hover:text-gray-300 mx-2"
        >
          <FaHome className="mr-2" /> Home
        </NavLink>
        <NavLink
          to="/gpa_calculator"
          activeClassName="font-bold"
          className="flex items-center text-white hover:text-gray-300 mx-2"
        >
          <FaCalculator className="mr-2" /> GPA Calculator
        </NavLink>
        <NavLink
          to="/cgpa_calculator"
          activeClassName="font-bold"
          className="flex items-center text-white hover:text-gray-300 mx-2"
        >
          <FaChartLine className="mr-2" /> CGPA Calculator
        </NavLink>
        <NavLink
          to="/cover_page"
          activeClassName="font-bold"
          className="flex items-center text-white hover:text-gray-300 mx-2"
        >
          <FaFileAlt className="mr-2" /> Cover Page Design
        </NavLink>
      </div>
    </nav>
  );
}
