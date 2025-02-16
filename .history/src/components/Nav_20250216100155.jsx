import React, { useEffect, useRef } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Nav() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      x: '-150px',
      opacity: 0.8,
      duration: 0.5,
      ease: 'power2.in',
      delay: 2, // Added delay of 2 seconds
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 00% top 20%', // Start animation when the element's top reaches the center
        end: 'top 10%', // End before it reaches the top
        scrub: 1,
        toggleActions: 'play none none reverse',
        markers: true, // Keep for debugging, remove later
      },
    });
  }, []);
  

  return (
    <div className='relative pt-8 px-8 h-screen fixed'>
      <div className='absolute top-8 left-4 px-3 z-[99999999] top-2 py-[2.2vh]'>
        <img className='w-12 mt-2 mr-2 select-none' src='/images/tesahalf.png' alt='TESA Logo' />
        <div className='h-12 w-20 bg-red-300 fixed ml-12 overflow-hidden'>
          <h2 ref={titleRef} className='select-none text-zinc-200 pl-4 pt-[0.8vh] text-[3.7vh]'>TESA</h2>
        </div>
      </div>

      <div>
        <div className='right-[40vh] top-4 fixed relative z-[99999999]'>
          <div className='p-7 absolute rounded-md bg-[#2A2929] text-white'>
            <RiMenu3Fill className='text-2xl cursor-pointer group-hover:hidden' />
          </div>
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
    </div>
  );
}

export default Nav;
