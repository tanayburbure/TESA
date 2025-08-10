import { motion } from 'framer-motion';
import { useState } from 'react';

// Unified animation configuration
const ANIMATION_CONFIG = {
  duration: 0.4,
  ease: [0.34, 1.56, 0.64, 1],
  type: "spring",
  stiffness: 180,
  damping: 15
};

// All lines use the same animation pattern
const allLines = [
  { id: 'line-1', delay: 0 },
  { id: 'line-2', delay: 0.1 },
  { id: 'line-3', delay: 0.2 },
  { id: 'line-4', delay: 0.3 },
  { id: 'line-5', delay: 0.4 },
  { id: 'line-6', delay: 0.5 }
];

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Unified animation function for all lines
  const getUnifiedAnimation = () => ({
    opacity: isHovered ? 1 : 0.8,
    scale: isHovered ? 1.2 : 1,
    rotateZ: isHovered ? 360 : 0,
    x: isHovered ? 0 : 0,
    y: isHovered ? 0 : 0,
    filter: `blur(${isHovered ? 0 : 0}px)`,
    borderRadius: isHovered ? "50%" : "9999px",
  });

  const getTransition = (delay) => ({
    ...ANIMATION_CONFIG,
    delay: isHovered ? delay : delay * 0.5,
  });

  return (
    <motion.div
      className="relative w-12 h-12 cursor-pointer flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {allLines.map((line, index) => (
        <motion.div
          key={line.id}
          className={`absolute bg-gray-800 ${
            index < 3 
              ? 'w-8 h-0.5' // First 3 are horizontal lines
              : 'h-8 w-0.5' // Last 3 are vertical lines
          }`}
          style={{
            // Position the lines
            ...(index === 0 && { top: '25%' }),
            ...(index === 1 && { top: '50%', transform: 'translateY(-50%)' }),
            ...(index === 2 && { bottom: '25%' }),
            ...(index === 3 && { left: '25%' }),
            ...(index === 4 && { left: '50%', transform: 'translateX(-50%)' }),
            ...(index === 5 && { right: '25%' }),
          }}
          animate={getUnifiedAnimation()}
          transition={getTransition(line.delay)}
        />
      ))}
    </motion.div>
  );
}
