import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="relative">
      {/* Parent container for hover effect */}
      <div className="group flex justify-start">
        {/* Menu Icon */}
        <div className="p-4 bg-gray-800 text-white">
          <FaBars className="text-2xl cursor-pointer" />
        </div>

        {/* Dropdown Menu (hidden by default, shows on hover) */}
        <div className="fixed top-0 left-0 w-0 h-screen bg-gray-800 p-4 opacity-0 pointer-events-none transform -translate-x-full transition-all duration-300 group-hover:w-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto">
          <ul className="flex flex-col space-y-4 mt-10">
            <li>
              <a href="#home" className="text-white hover:text-yellow-400 text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-yellow-400 text-xl">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-yellow-400 text-xl">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-yellow-400 text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
