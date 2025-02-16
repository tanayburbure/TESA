import React, { useEffect } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Nav() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('h2', {
      scrollTrigger: {
        trigger: 'h2',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: false,
        ease: 'none',
      },
      x: '-50%',
      duration: 1,
    });
  }, []);

  return (
    <div className='flex relative justify-between items-center pt-8 px-8'>
      <div className='flex items-center px-3 z-[99999999] py-[2.2vh]'>
        <img className='fixed w-14 mt-2 mr-2 select-none' src="/images/tesahalf.png" />
        <h2 className='select-none fixed text-zinc-200 pl-16 text-2xl'>TESA 2.0</h2>
      </div>

      <div className="">
        <div className="group fixed z-[99999999]">
          <div className="p-7 absolute right-0 -top-4 rounded-md bg-[#2A2929] text-white">
            <RiMenu3Fill className="text-2xl cursor-pointer group-hover:hidden" />
          </div>
          <div className="fixed top-0 right-0 w-0 h-screen bg-[#2A2929] p-4 opacity-0 pointer-events-none transform translate-x-full transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto">
            <ul className="space-y-6 text-5xl text-white">
              <li className="hover:scale-105 transition-transform duration-300">About Us</li>
              <li className="hover:scale-105 transition-transform duration-300 group">
                <button onClick={() => document.getElementById('services-submenu').classList.toggle('hidden')}>
                  Services
                </button>
                <ul id="services-submenu" className="hidden space-y-4 text-4xl pl-4">
                  <li className="hover:scale-105 transition-transform duration-300">Web Development</li>
                  <li className="hover:scale-105 transition-transform duration-300">App Development</li>
                  <li className="hover:scale-105 transition-transform duration-300">SEO</li>
                  <li className="hover:scale-105 transition-transform duration-300">Marketing</li>
                </ul>
              </li>
              <li className="hover:scale-105 transition-transform duration-300">Projects</li>
              <li className="hover:scale-105 transition-transform duration-300">Contact</li>
              <li className="hover:scale-105 transition-transform duration-300">Blog</li>
              <li className="hover:scale-105 transition-transform duration-300">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav