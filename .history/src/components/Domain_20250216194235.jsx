import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Domain = () => {
  const [hoverText, setHoverText] = useState("OUR DOMAINS");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const domains = [
    "TECHNICAL", "SPORTS", "T & P", "CULTURAL",
    "MEDIA", "SOCIAL", "STUDY CIRCLE", "EDITORIAL"
  ];

  return (
    <div className='h-[28vw]  mt-20 flex flex-col items-center relative'>
      {/* Flex container with a small gap */}
      <div className='flex items-center justify-center gap-4'> {/* Adjust gap size here */}
        {domains.map((text, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            onHoverStart={() => {
              setHoverText(text);
              setHoveredIndex(index);
            }}
            onHoverEnd={() => {
              setHoverText("OUR DOMAINS");
              setHoveredIndex(null);
            }}
            style={{
              width: '10px',  // Fixed container width
              height: '75px', // Fixed container height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.img
              src='/images/socialbg.jpg'
              alt={text}
              className='rounded w-[70px] h-[65px] md:w-[80px] md:h-[75px] object-cover'
              style={{
                filter: 'grayscale(100%)',
              }}
              initial={false}
              animate={{
                scale: hoveredIndex === index ? 1.3 : 1,
                filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Hover text */}
      <motion.h1
        className='text-[16vh] mt-16 text-zinc-500 font-medium tracking-tight absolute w-full text-center'
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {hoverText}
      </motion.h1>
    </div>
  );
};

export default Domain;