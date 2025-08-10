import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

export default function SideMenu() {
  return (
    <div className="fixed no-draw top-8 right-8 group">
      <div className="p-7 rounded-md bg-[#2A2929] text-white cursor-pointer transition-all duration-300 hover:bg-gray-700">
        <RiMenu3Fill className="text-2xl" />
      </div>

      <div className="fixed top-0 right-0 w-0 h-screen bg-[#2A2929] p-4 opacity-0 pointer-events-none transform translate-x-full transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto">
        <ul className="space-y-6 text-5xl text-white">
          <li className="hover:scale-105 transition-transform duration-300">Home</li>
          <li className="hover:scale-105 transition-transform duration-300">About Us</li>
          <li className="hover:scale-105 transition-transform duration-300 group">
            <button
              onClick={() =>
                document
                  .getElementById("services-submenu")
                  .classList.toggle("hidden")
              }
            >
              Domain
            </button>
            <ul
              id="services-submenu"
              className="hidden space-y-4 text-4xl pl-4"
            >
              <li className="hover:scale-105 transition-transform duration-300">Technical</li>
              <li className="hover:scale-105 transition-transform duration-300">SPORTS</li>
              <li className="hover:scale-105 transition-transform duration-300">T & P</li>
              <li className="hover:scale-105 transition-transform duration-300">Cultural</li>
              <li className="hover:scale-105 transition-transform duration-300">Media</li>
              <li className="hover:scale-105 transition-transform duration-300">Social</li>
              <li className="hover:scale-105 transition-transform duration-300">Study Circle</li>
              <li className="hover:scale-105 transition-transform duration-300">Editoral</li>
            </ul>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">Interview Exp</li>
          <li className="hover:scale-105 transition-transform duration-300">Startup</li>
        </ul>
      </div>
    </div>
  );
}
