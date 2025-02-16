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
    <div className='h-[28vw] mt-20 flex flex-col items-center relative'>
      <div className='flex items-center justify-center gap-4'> {/* Fixed gap between items */}
        {domains.map((text, index) => (
          <div
            key={index}
            className="relative transition-all duration-300 ease-in-out"
            style={{
              padding: '10px', // Add padding to compensate for scaling
            }}
            onMouseEnter={() => handleMouseEnter(text, index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className='w-[70px] h-[65px] md:w-[80px] md:h-[75px] rounded grayscale hover:grayscale-0 transition-all duration-300 ease-out cursor-pointer'
              style={{
                transform: hoveredIndex === index ? 'scale(1.3)' : 'scale(1)',
                transformOrigin: 'center', // Scale from the center
                transition: 'transform 0.3s ease-in-out',
              }}
              src='/images/socialbg.jpg'
              alt={text}
            />
          </div>
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 text-zinc-500 font-medium tracking-tight transition-opacity duration-300 absolute w-full text-center'>
        {hoverText}
      </h1>
    </div>
  );
};

export default Domain;