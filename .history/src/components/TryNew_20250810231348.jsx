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
  const EXPANDED_WIDTH = "50vw";  // Change this to control width
  const EXPANDED_HEIGHT = "50vh"; // Change this to control height

  // Animation for horizontal lines (hamburger state)
  const getHorizontalLineAnimation = (position) => ({
    opacity: isHovered ? 0 : 1,
    scale: isHovered ? 0.5 : 1,
    rotateZ: 0,
    width: isHovered ? "2px" : "24px",
    height: "2px",
    filter: `blur(${isHovered ? 3 : 0}px)`,
    y: position === 'top' ? -6 : position === 'bottom' ? 6 : 0,
  });

  // Animation for vertical lines (hover state)
  const getVerticalLineAnimation = (position) => ({
    opacity: isHovered ? 1 : 0,
    scale: isHovered ? 1 : 0.5,
    rotateZ: 0,
    width: "2px",
    height: isHovered ? "24px" : "2px",
    filter: `blur(${isHovered ? 0 : 3}px)`,
    x: position === 'left' ? -6 : position === 'right' ? 6 : 0,
  });

  const getTransition = (delay) => ({
    ...ANIMATION_CONFIG,
    delay: isHovered ? delay : delay * 0.5,
  });

  return (
   <div className=' fixed top-6 right-6 z-[99999]'> {/* Changed to right-6 for right positioning */}
     <motion.div
      className=" w-16 h-16 cursor-pointer bg-[#4A9782] rounded-lg transition-colors relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        width: EXPANDED_WIDTH,
        height: EXPANDED_HEIGHT,
        originX: 1, // This makes it expand from the right edge (towards left)
        originY: 0  // This makes it expand from the top edge
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      {/* Fixed container for lines - stays at original button center */}
      <div className="absolute top-8 left-8 w-0 h-0 flex justify-center items-center">
        {/* Horizontal Lines - visible by default, fade out on hover */}
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getHorizontalLineAnimation('top')}
          transition={getTransition(0)}
        />
        
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getHorizontalLineAnimation('middle')}
          transition={getTransition(0.05)}
        />
        
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getHorizontalLineAnimation('bottom')}
          transition={getTransition(0.1)}
        />

        {/* Vertical Lines - hidden by default, appear on hover */}
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getVerticalLineAnimation('left')}
          transition={getTransition(0.15)}
        />
        
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getVerticalLineAnimation('center')}
          transition={getTransition(0.2)}
        />
        
        <motion.div
          className="bg-gray-800 rounded-full absolute"
          animate={getVerticalLineAnimation('right')}
          transition={getTransition(0.25)}
        />
      </div>
    </motion.div>
   </div>
  );
}
