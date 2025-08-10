import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Icon */}
        <motion.div
          className="relative w-12 h-12 cursor-pointer flex flex-col justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          {/* Horizontal Lines (vanish on hover) */}
          <motion.div
            className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.1 : 1,
              y: -4,
              x: isHovered ? -40 : 0,
              rotateZ: isHovered ? -45 : 0,
              filter: isHovered ? "blur(8px)" : "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: [0.76, 0, 0.24, 1],
              type: "spring",
              stiffness: 150,
            }}
          />
          
          <motion.div
            className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.05 : 1,
              x: isHovered ? 50 : 0,
              filter: isHovered ? "blur(12px)" : "blur(0px)",
              width: isHovered ? "4px" : "32px",
            }}
            transition={{
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05,
              type: "spring",
              stiffness: 120,
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
            }}
            transition={{
              duration: 0.32,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
              type: "spring",
              stiffness: 140,
            }}
          />

          {/* Vertical Lines (appear on hover with materialization effect) */}
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
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
              delay: isHovered ? 0.15 : 0,
              type: "spring",
              stiffness: 200,
              damping: 12,
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
            }}
            transition={{
              duration: 0.45,
              ease: [0.34, 1.56, 0.64, 1],
              delay: isHovered ? 0.25 : 0.05,
              type: "spring",
              stiffness: 220,
              damping: 15,
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
            }}
            transition={{
              duration: 0.42,
              ease: [0.34, 1.56, 0.64, 1],
              delay: isHovered ? 0.35 : 0.1,
              type: "spring",
              stiffness: 210,
              damping: 13,
            }}
          />
        </motion.div>

        {/* TryNew Text */}
        <motion.h1
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          TryNew
        </motion.h1>
      </div>

      {/* Optional: Instructions */}
      <motion.p
        className="absolute bottom-10 text-gray-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Hover over the menu icon to see the transition
      </motion.p>
    </div>
  );
}