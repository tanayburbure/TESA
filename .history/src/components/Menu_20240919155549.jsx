import React from "react";
import { FaBars } from "react-icons/fa"; // For menu icon

const Menu = () => {
  return (
    <div className="relative">
      {/* Parent container for hover effect */}
      <div className="group flex justify-center">
        {/* Menu Icon */}
        <div className="p-4 bg-gray-800 text-white">
          <FaBars className="text-2xl cursor-pointer" />
        </div>

        {/* Dropdown Menu (hidden by default, shows on hover) */}
        <div className="absolute top-full left-0 mt-2 bg-gray-800 p-4 rounded-md opacity-0 pointer-events-none transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#home" className="text-white hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
