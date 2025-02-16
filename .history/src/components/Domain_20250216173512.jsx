import React from 'react'
import { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (text, index) => {
    setHoverText(text);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverText("");
    setHoveredIndex(null);
  };

  return (
    <div className='h-[28vw] mt-20'>
      <div className='flex gap-2 items-center justify-center'>
        {[...Array(8)].map((_, index) => (
          <img 
            key={index}
            className={`h-16 w-20 rounded grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-[1.5] cursor-pointer ${hoveredIndex === index ? 'ml-4' : ''}`}
            src="/images/socialbg.jpg"
            alt=""
            onMouseEnter={() => handleMouseEnter(["TECHNICAL", "SPORTS", "T & P", "CULTURAL", "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"][index], index)}
            onMouseLeave={handleMouseLeave} />
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight'>
        {hoverText || 'OUR DOMAINS'}
      </h1>
    </div>
  );
};


export default Domain