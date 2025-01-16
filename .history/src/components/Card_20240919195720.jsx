import React from 'react'
import { useState } from 'react';
const Card = () => {
  const [hoverText, setHoverText] = useState("");

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText("");
  };

  return (
    <div className='h-[28vw] mt-20'>
      <div className='flex gap-4 items-center justify-center'>
        <img 
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("TECHNICAL")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("SPORTS")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("T & P")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("CULTURAL")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("MEDIA")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("SOCIAL")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("STUDY CIRCLE")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("EDITORIAL")}
          onMouseLeave={handleMouseLeave}/>
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight'>
        {hoverText || 'OUR DOMAINS'}
      </h1>
    </div>
  );
};


export default Card