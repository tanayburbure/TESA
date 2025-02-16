import React from 'react'
import { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("");

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText("");
  };

  return (
    <div className='h-[28vw] mt-20'>
      <div className='flex gap-2 items-center justify-center'>
        <img 
          className='h-16 w-20 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("TECHNICAL")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("SPORTS")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("T & P")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("CULTURAL")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("MEDIA")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("SOCIAL")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("STUDY CIRCLE")}
          onMouseLeave={handleMouseLeave} />
        <img
          className='h-16 w-16 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-125 cursor-pointer'
          src="/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("EDITORIAL")}
          onMouseLeave={handleMouseLeave} />
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight'>
        {hoverText || 'OUR DOMAINS'}
      </h1>
    </div>
  );
};


export default Domain