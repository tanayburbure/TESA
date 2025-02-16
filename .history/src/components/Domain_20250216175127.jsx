import React, { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("OUR DOMAINS");

  const domains = [
    "TECHNICAL", "SPORTS", "T & P", "CULTURAL", "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"
  ];

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText("OUR DOMAINS");
  };

  return (
    <div className='h-[28vw] mt-20 flex flex-col items-center'>
      <div className='flex gap-4 items-center justify-center'>
        {domains.map((text, index) => (
          <div 
            key={index} 
            className="relative transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10"
            onMouseEnter={() => handleMouseEnter(text)}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              className='h-20 w-24 rounded grayscale hover:grayscale-0 transition-all duration-300 ease-out cursor-pointer'
              src='/images/socialbg.jpg'
              alt={text}
            />
          </div>
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight transition-opacity duration-300'>
        {hoverText}
      </h1>
    </div>
  );
};

export default Domain;