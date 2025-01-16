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
          onMouseEnter={() => handleMouseEnter("Domain 1")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 2")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 3")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 4")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 5")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 5")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 5")}
          onMouseLeave={handleMouseLeave}/>
        <img
          className='h-16 w-24 rounded cursor-pointer'
          src="src/images/socialbg.jpg"
          alt=""
          onMouseEnter={() => handleMouseEnter("Domain 5")}
          onMouseLeave={handleMouseLeave}/>
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight'>
        {hoverText || 'OUR DOMAINS'}
      </h1>
    </div>
  );
};


export default Card