import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation configuration for the main container
const CONTAINER_ANIMATION_CONFIG = {
  duration: 0.15,
  ease: "easeInOut"
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Expanded size
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "102vh";
  
  // Line size
  const LINE_WIDTH = "28px";
  const LINE_HEIGHT = "3px";

  // Animations for the three bars
  const topBarAnimation = {
    y: isHovered ? 0 : -6,
    rotateZ: isHovered ? 45 : 0
  };

  const middleBarAnimation = {
    opacity: isHovered ? 0 : 1,
    rotateZ: 0
  };

  const bottomBarAnimation = {
    y: isHovered ? 0 : 6,
    rotateZ: isHovered ? -45 : 0
  };

  const lineTransition = {
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1],
    type: "spring",
    stiffness: 180,
    damping: 15
  };

  return (
    <div className="fixed top-6 right-6 z-[99999]">
      {/* Expanding green background with blur */}
      <motion.div
        className="absolute top-0 right-0 rounded-lg bg-[#4A9782]/80 backdrop-blur-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? EXPANDED_WIDTH : "64px",
          height: isHovered ? EXPANDED_HEIGHT : "64px",
          marginTop: isHovered ? "-30px" : "0px",
          marginRight: isHovered ? "-30px" : "0px"
        }}
        transition={CONTAINER_ANIMATION_CONFIG}
        style={{
          transformOrigin: "top right",
          zIndex: -1
        }}
      />

      {/* Static lines container */}
      <div
        className="w-16 h-16 cursor-pointer relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
    </div>
  );
}
