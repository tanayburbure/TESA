import React, { useEffect, useRef } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Nav() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      x: '-150px',
      opacity: 0.8,
      duration: 0.8,
      ease: 'power2.in',
      delay: 2, 
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top -50%', 
        end: 'top 10%', 
        scrub: 3,
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(imgRef.current, { scale: 1.2, duration: 0.5, ease: 'power2.inOut' });
        },
        onLeave: () => {
          gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
        },
      },
    });
  }, []);

  return (
    <div className='fixed w-screen pt-16 px-8 z-[9999]'>

      {/* Logo & Title */}
      <div className='fixed top-8 left-8 flex items-center'>
        <img ref={imgRef} className='w-12 select-none' src='/images/tesahalf.png' alt='TESA Logo' />
        <div className='h-12 w-20 -ml-1 overflow-hidden'>
          <h2 ref={titleRef} className='select-none text-zinc-200 pl-4 text-[3.7vh]'>TESA</h2>
        </div>
      </div>

      {/* Group wrapping Menu Button and Sidebar */}
      <div className='fixed top-8 right-8 group'>

        {/* Menu Button */}
        <div className='p-7 rounded-md bg-[#2A2929] text-white cursor-pointer transition-all duration-300 hover:bg-gray-700'>
          <RiMenu3Fill className='text-2xl' />
        </div>

        {/* Sidebar Menu - Expands on Hover */}
        <div className='fixed top-0 right-0 w-0 h-screen bg-[#2A2929] p-4 opacity-0 pointer-events-none transform translate-x-full transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto'>
          <ul className='space-y-6 text-5xl text-white'>
            <li className='hover:scale-105 transition-transform duration-300'>About Us</li>
            <li className='hover:scale-105 transition-transform duration-300 group'>
              <button onClick={() => document.getElementById('services-submenu').classList.toggle('hidden')}>
                Services
              </button>
              <ul id='services-submenu' className='hidden space-y-4 text-4xl pl-4'>
                <li className='hover:scale-105 transition-transform duration-300'>Web Development</li>
                <li className='hover:scale-105 transition-transform duration-300'>App Development</li>
                <li className='hover:scale-105 transition-transform duration-300'>SEO</li>
                <li className='hover:scale-105 transition-transform duration-300'>Marketing</li>
              </ul>
            </li>
            <li className='hover:scale-105 transition-transform duration-300'>Projects</li>
            <li className='hover:scale-105 transition-transform duration-300'>Contact</li>
            <li className='hover:scale-105 transition-transform duration-300'>Blog</li>
            <li className='hover:scale-105 transition-transform duration-300'>Careers</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Nav;
