import React from "react";

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-10">
        <li className="group">
          <a
            href="#home"
            className="text-white group-hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          <div className="h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300 mt-1"></div>
        </li>
        <li className="group">
          <a
            href="#about"
            className="text-white group-hover:text-yellow-400 transition duration-300"
          >
            About
          </a>
          <div className="h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300 mt-1"></div>
        </li>
        <li className="group">
          <a
            href="#services"
            className="text-white group-hover:text-yellow-400 transition duration-300"
          >
            Services
          </a>
          <div className="h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300 mt-1"></div>
        </li>
        <li className="group">
          <a
            href="#contact"
            className="text-white group-hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
          <div className="h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300 mt-1"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
