import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation configuration for the main container
const CONTAINER_ANIMATION_CONFIG = {
  duration: 0.15,
  ease: "easeInOut"
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Control the expanded size here
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "94vh";
  
  // The fixed size for all the lines
  const LINE_WIDTH = "28px";
  const LINE_HEIGHT = "3px";

  // Animation for the top line
  const topBarAnimation = {
    y: isHovered ? 0 : -6, // Move to center on hover
    rotateZ: isHovered ? 45 : 0 // Rotate on hover
  };

  // Animation for the middle line
  const middleBarAnimation = {
    opacity: isHovered ? 0 : 1, // Fade out on hover
    rotateZ: 0 // No rotation
  };

  // Animation for the bottom line
  const bottomBarAnimation = {
    y: isHovered ? 0 : 6, // Move to center on hover
    rotateZ: isHovered ? -45 : 0 // Rotate on hover
  };

  const lineTransition = {
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1],
    type: "spring",
    stiffness: 180,
    damping: 15
  };

  return (
    <div className='fixed top-6 right-6 z-[99999]'>
      <motion.div
  className="w-16 h-16 cursor-pointer bg-[#4A9782] rounded-lg relative"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  animate={{
    width: isHovered ? EXPANDED_WIDTH : "64px",
    height: isHovered ? EXPANDED_HEIGHT : "64px",
    marginTop: isHovered ? "-5px" : "0px",
    marginRight: isHovered ? "-5px" : "0px"
  }}
  whileTap={{ scale: 0.95 }}
  transition={CONTAINER_ANIMATION_CONFIG}
  style={{
    transformOrigin: "top right"
  }}
>

        {/* Fixed container for lines */}
        <div className="absolute top-8 right-8 w-0 h-0 flex justify-center items-center">
          {/* Top Line */}
          <motion.div
            className="bg-gray-800 rounded-full absolute"
            animate={topBarAnimation}
            transition={lineTransition}
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
          />
          
          {/* Middle Line */}
          <motion.div
            className="bg-gray-800 rounded-full absolute"
            animate={middleBarAnimation}
            transition={lineTransition}
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
          />
          
          {/* Bottom Line */}
          <motion.div
            className="bg-gray-800 rounded-full absolute"
            animate={bottomBarAnimation}
            transition={lineTransition}
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
          />
        </div>
      </motion.div>
    </div>
  );
}
