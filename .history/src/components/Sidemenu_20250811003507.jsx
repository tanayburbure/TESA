import React from 'react';

export default function MenuList() {
  return (
    <ul className="space-y-6 text-5xl text-white">
      <li className="hover:scale-105 transition-transform duration-300">
        Home
      </li>
      <li className="hover:scale-105 transition-transform duration-300">
        About Us
      </li>
      <li className="hover:scale-105 transition-transform duration-300 group">
        <button
          onClick={() =>
            document.getElementById('services-submenu').classList.toggle('hidden')
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
          <li className="hover:scale-105 transition-transform duration-300">Editorial</li>
        </ul>
      </li>
      <li className="hover:scale-105 transition-transform duration-300">
        Interview Exp
      </li>
      <li className="hover:scale-105 transition-transform duration-300">
        Startup
      </li>
    </ul>
  );
}
