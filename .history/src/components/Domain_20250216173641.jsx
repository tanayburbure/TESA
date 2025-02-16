import React, { useState } from 'react';

const Domain = () => {
  const [hoverText, setHoverText] = useState("OUR DOMAINS");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const domains = [
    "TECHNICAL", "SPORTS", "T & P", "CULTURAL", "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"
  ];

  const handleMouseEnter = (text, index) => {
    setHoverText(text);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverText("OUR DOMAINS");
    setHoveredIndex(null);
  };

  return (
    <div className='h-[28vw] mt-20'>
      <div className='flex gap-4 items-center justify-center'>
        {domains.map((text, index) => (
          <img 
            key={index}
            className={`h-20 w-24 rounded grayscale transition-transform duration-500 ease-out cursor-pointer ${
              hoveredIndex === index ? 'scale-150 translate-y-[-10px]' : 'hover:scale-125'
            }`}
            src='/images/socialbg.jpg'
            alt={text}
            onMouseEnter={() => handleMouseEnter(text, index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight transition-opacity duration-300'>
        {hoverText}
      </h1>
    </div>
  );
};

export default Domain;
