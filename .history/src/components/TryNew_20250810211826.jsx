import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation configuration
const ANIMATION_CONFIG = {
  duration: 0.5,
  ease: [0.34, 1.56, 0.64, 1],
  type: "spring",
  stiffness: 160,
  damping: 14
};

// Three lines configuration - only 3 lines total
const hamburgerLines = [
  { id: 'top-line', delay: 0, position: 'top' },
  { id: 'middle-line', delay: 0.1, position: 'middle' },
  { id: 'bottom-line', delay: 0.2, position: 'bottom' }
];

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation for hamburger lines (horizontal bars)
  const getHamburgerLineAnimation = (position) => ({
    opacity: isHovered ? 0 : 1,
    scale: isHovered ? 0.8 : 1,
    rotateZ: isHovered ? 
      (position === 'top' ? 45 : position === 'bottom' ? -45 : 0) : 0,
    y: isHovered ? 
      (position === 'top' ? 4 : position === 'bottom' ? -4 : 0) : 
      (position === 'top' ? -6 : position === 'bottom' ? 6 : 0),
    filter: `blur(${isHovered ? 2 : 0}px)`,
    transformOrigin: "center center",
  });

  const getTransition = (delay) => ({
    ...ANIMATION_CONFIG,
    delay: isHovered ? delay : delay * 0.5,
  });

  return (
    <motion.div
      className="relative w-12 h-12 cursor-pointer flex flex-col justify-center items-center bg-gray-100 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Only 3 horizontal lines - traditional hamburger menu */}
      {hamburgerLines.map((line) => (
        <motion.div
          key={line.id}
          className="w-7 h-0.5 bg-gray-800 rounded-full absolute"
          animate={getHamburgerLineAnimation(line.position)}
          transition={getTransition(line.delay)}
        />
      ))}
    </motion.div>
  );
}
