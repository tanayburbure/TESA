import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

// The main App component to render the hamburger menu.
// This is for demonstration purposes.
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <HamburgerMenu />
    </div>
  );
}

// The core HamburgerMenu component.
// It animates three lines into a plus sign on hover.
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the top line
  const topVariants = {
    // Initial state: top line of the hamburger
    closed: { y: -6, rotate: 0 },
    // Hovered state: transform into the top bar of a plus sign
    open: { y: 0, rotate: 90, width: 24, height: 2 },
  };

  // Animation variants for the middle line
  const middleVariants = {
    // Initial state: middle line of the hamburger
    closed: { opacity: 1, scale: 1 },
    // Hovered state: fade out the middle line
    open: { opacity: 0, scale: 0.1 },
  };

  // Animation variants for the bottom line
  const bottomVariants = {
    // Initial state: bottom line of the hamburger
    closed: { y: 6, rotate: 0 },
    // Hovered state: transform into the bottom bar of a plus sign
    open: { y: 0, rotate: 90, width: 24, height: 2 },
  };

  return (
    <motion.div
      className="relative w-12 h-12 flex flex-col justify-center items-center cursor-pointer"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.95 }}
    >
      {/* Container for the three lines to center them */}
      <div className="relative w-6 h-6 flex flex-col justify-between items-center">
        {/* Top Line */}
        <motion.div
          className="h-1 bg-gray-800 rounded-full w-full absolute"
          variants={topVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.2, type: 'tween' }}
        />
        
        {/* Middle Line */}
        <motion.div
          className="h-1 bg-gray-800 rounded-full w-full absolute"
          variants={middleVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.2, type: 'tween' }}
        />

        {/* Bottom Line */}
        <motion.div
          className="h-1 bg-gray-800 rounded-full w-full absolute"
          variants={bottomVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.2, type: 'tween' }}
        />
      </div>
    </motion.div>
  );
}
