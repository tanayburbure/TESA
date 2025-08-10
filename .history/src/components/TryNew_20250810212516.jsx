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
   <div className='relative top--4'>
     <motion.div
      className=" w-12 h-12 cursor-pointer flex flex-col justify-center items-center bg-gray-800 rounded-lg  transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      {/* Horizontal Lines - visible by default, fade out on hover */}
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getHorizontalLineAnimation('top')}
        transition={getTransition(0)}
      />
      
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getHorizontalLineAnimation('middle')}
        transition={getTransition(0.05)}
      />
      
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getHorizontalLineAnimation('bottom')}
        transition={getTransition(0.1)}
      />

      {/* Vertical Lines - hidden by default, appear on hover */}
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getVerticalLineAnimation('left')}
        transition={getTransition(0.15)}
      />
      
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getVerticalLineAnimation('center')}
        transition={getTransition(0.2)}
      />
      
      <motion.div
        className="bg-gray-100 rounded-full absolute"
        animate={getVerticalLineAnimation('right')}
        transition={getTransition(0.25)}
      />
    </motion.div>
   </div>
  );
}
