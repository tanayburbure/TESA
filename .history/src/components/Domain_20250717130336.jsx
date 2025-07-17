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
    <div className="h-[60vh] flex flex-col items-center justify-center">
      <div className="flex justify-center gap-4">
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
              width: '80px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.img
              src="/images/socialbg.jpg"
              alt={text}
              className="rounded w-[80px] h-[65px] md:w-[80px] md:h-[65px] object-cover"
              style={{
                filter: `grayscale(${hoveredIndex === index ? 0 : 1})`,
              }}
              initial={false}
              animate={{
                scale: hoveredIndex === index ? 1.3 : 1,
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

      <motion.h1
        className="text-[11vw] mt-8 text-[#3b6654] font-[font5] font-medium tracking-tighter w-full text-center"
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
