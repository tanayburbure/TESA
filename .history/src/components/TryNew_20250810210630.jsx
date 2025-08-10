import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-12 h-12 cursor-pointer flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {/* Horizontal Lines (vanish on hover, materialize on leave) */}
      <motion.div
        className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.1 : 1,
          y: -4,
          x: isHovered ? -40 : 0,
          rotateZ: isHovered ? -45 : 0,
          filter: isHovered ? "blur(8px)" : "blur(0px)",
          width: isHovered ? "4px" : "32px",
        }}
        transition={{
          duration: isHovered ? 0.3 : 0.4,
          ease: isHovered ? [0.76, 0, 0.24, 1] : [0.34, 1.56, 0.64, 1],
          type: "spring",
          stiffness: isHovered ? 150 : 200,
          damping: isHovered ? 20 : 12,
          delay: isHovered ? 0 : 0.15,
        }}
      />
      
      <motion.div
        className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.05 : 1,
          x: isHovered ? 50 : 0,
          filter: isHovered ? "blur(12px)" : "blur(0px)",
          width: isHovered ? "2px" : "32px",
        }}
        transition={{
          duration: isHovered ? 0.35 : 0.45,
          ease: isHovered ? [0.76, 0, 0.24, 1] : [0.34, 1.56, 0.64, 1],
          delay: isHovered ? 0.05 : 0.25,
          type: "spring",
          stiffness: isHovered ? 120 : 220,
          damping: isHovered ? 25 : 15,
        }}
      />
      
      <motion.div
        className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.1 : 1,
          y: 4,
          x: isHovered ? -45 : 0,
          rotateZ: isHovered ? 60 : 0,
          filter: isHovered ? "blur(10px)" : "blur(0px)",
          width: isHovered ? "3px" : "32px",
        }}
        transition={{
          duration: isHovered ? 0.32 : 0.42,
          ease: isHovered ? [0.76, 0, 0.24, 1] : [0.34, 1.56, 0.64, 1],
          delay: isHovered ? 0.1 : 0.35,
          type: "spring",
          stiffness: isHovered ? 140 : 210,
          damping: isHovered ? 22 : 13,
        }}
      />

      {/* Vertical Lines (materialize on hover, vanish on leave) */}
      <motion.div
        className="h-8 w-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.1,
          x: isHovered ? -8 : -50,
          y: isHovered ? 0 : -30,
          rotateZ: isHovered ? 0 : 90,
          filter: isHovered ? "blur(0px)" : "blur(15px)",
          height: isHovered ? "32px" : "4px",
        }}
        transition={{
          duration: isHovered ? 0.4 : 0.3,
          ease: isHovered ? [0.34, 1.56, 0.64, 1] : [0.76, 0, 0.24, 1],
          delay: isHovered ? 0.15 : 0,
          type: "spring",
          stiffness: isHovered ? 200 : 150,
          damping: isHovered ? 12 : 20,
        }}
      />
      
      <motion.div
        className="h-8 w-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.1,
          y: isHovered ? 0 : 40,
          filter: isHovered ? "blur(0px)" : "blur(20px)",
          height: isHovered ? "32px" : "2px",
          width: isHovered ? "2px" : "1px",
        }}
        transition={{
          duration: isHovered ? 0.45 : 0.35,
          ease: isHovered ? [0.34, 1.56, 0.64, 1] : [0.76, 0, 0.24, 1],
          delay: isHovered ? 0.25 : 0.05,
          type: "spring",
          stiffness: isHovered ? 220 : 120,
          damping: isHovered ? 15 : 25,
        }}
      />
      
      <motion.div
        className="h-8 w-0.5 bg-gray-800 rounded-full absolute"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.1,
          x: isHovered ? 8 : 60,
          y: isHovered ? 0 : -25,
          rotateZ: isHovered ? 0 : -90,
          filter: isHovered ? "blur(0px)" : "blur(18px)",
          height: isHovered ? "32px" : "3px",
          width: isHovered ? "2px" : "1px",
        }}
        transition={{
          duration: isHovered ? 0.42 : 0.32,
          ease: isHovered ? [0.34, 1.56, 0.64, 1] : [0.76, 0, 0.24, 1],
          delay: isHovered ? 0.35 : 0.1,
          type: "spring",
          stiffness: isHovered ? 210 : 140,
          damping: isHovered ? 13 : 22,
        }}
      />
    </motion.div>
  );
}