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
      <div className='flex items-center justify-center gap-4 relative'>
        {domains.map((text, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center transition-all duration-300 ease-in-out"
            style={{
              width: hoveredIndex === null ? '100px' : hoveredIndex === index ? '120px' : '90px',
              height: hoveredIndex === null ? '80px' : hoveredIndex === index ? '96px' : '72px',
              transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
              zIndex: hoveredIndex === index ? 10 : 1,
              margin: hoveredIndex === index ? '0 15px' : '0 5px',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={() => handleMouseEnter(text, index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className='w-full h-full rounded grayscale hover:grayscale-0 transition-all duration-300 ease-out cursor-pointer'
              src='/images/socialbg.jpg'
              alt={text}
            />
            <span className='absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 text-sm text-center text-zinc-500 whitespace-nowrap'>{text}</span>
          </div>
        ))}
      </div>
      <h1 className='text-[16vh] mt-16 flex items-center justify-center text-zinc-500 font-medium tracking-tight transition-opacity duration-300 w-full absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {hoverText}
      </h1>
    </div>
  );
};

export default Domain;
