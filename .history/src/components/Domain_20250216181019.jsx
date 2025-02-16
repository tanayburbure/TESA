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
    <div className='h-[28vw] mt-20 flex flex-col items-center'>
      <div className='flex items-center w-screen justify-center gap-2'>
        {domains.map((text, index) => (
          <div
            key={index}
            className="relative transition-all duration-300 ease-in-out"
            style={{
              transform:
                hoveredIndex === index
                  ? 'scale(1.5) translateX(0)' // Scale up hovered image
                  : hoveredIndex !== null
                  ? `scale(0.9) translateX(${(index - hoveredIndex) * 1}px)` // Shrink unhovered images and shift
                  : 'scale(1)', // Default scale
              zIndex: hoveredIndex === index ? 10 : 1, // Bring hovered image to the top
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={() => handleMouseEnter(text, index)}
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
