import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation configuration
const ANIMATION_CONFIG = {
  duration: 0.4,
  ease: [0.34, 1.56, 0.64, 1],
  type: "spring",
  stiffness: 180,
  damping: 15
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Control the expanded size here
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "50vh";

  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      opacity: 1,
      y: i === 0 ? -6 : i === 2 ? 6 : 0,
      transition: ANIMATION_CONFIG
    }),
    open: (i) => ({
      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
      y: i === 0 || i === 2 ? 0 : 0,
      opacity: i === 1 ? 0 : 1,
      width: i === 1 ? "24px" : "24px",
      transition: ANIMATION_CONFIG
    })
  };

  return (
    <div className='fixed top-6 right-6 z-[99999]'>
      <motion.div
        className="w-16 h-16 cursor-pointer bg-[#4A9782] rounded-lg relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? EXPANDED_WIDTH : "64px",
          height: isHovered ? EXPANDED_HEIGHT : "64px"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.15,
          ease: "easeInOut"
        }}
        style={{
          transformOrigin: "top right"
        }}
      >
        {/* Lines container */}
        <div className="absolute w-[24px] h-[24px] flex flex-col justify-between items-center">
          {/* Use a single set of three lines */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-full"
              style={{
                height: "2px",
                width: "24px",
              }}
              variants={lineVariants}
              initial="closed"
              animate={isHovered ? "open" : "closed"}
              custom={i}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}