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
      <div className='flex gap-2 items-center justify-center'>
        {domains.map((text, index) => (
          <div
            key={index}
            className="relative transition-all duration-200 ease-in-out"
            style={{
              transform:
                hoveredIndex === index
                  ? 'scale(1.5)' // Scale up hovered image
                  : hoveredIndex !== null
                  ? `scale(0.9) translateX(${(index - hoveredIndex) * -10}px)` // Move and scale down unhovered images
                  : 'scale(1)', // Default scale
              zIndex: hoveredIndex === index ? 10 : 1, // Bring hovered image to the top
              transition: 'transform 0.2s ease-in-out',
              marginLeft: hoveredIndex !== null && index > hoveredIndex ? '-20px' : '0', // Adjust margin to close the gap
              marginRight: hoveredIndex !== null && index < hoveredIndex ? '-20px' : '0', // Adjust margin to close the gap
            }}
            onMouseEnter={() => handleMouseEnter(text, index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className='h-20 w-24 rounded grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer'
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