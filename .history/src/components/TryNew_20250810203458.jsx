import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedHamburger = ({ 
  color = "#333333", 
  size = 48, 
  strokeWidth = 3,
  duration = 0.3,
  onClick,
  className = "",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen);
  };

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    open: {
      rotate: 0,
      y: 0,
      opacity: 1,
    }
  };

  const topLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: 45,
      y: strokeWidth + 4,
    }
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
      x: 0,
    },
    open: {
      opacity: 0,
      x: -10,
    }
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: -45,
      y: -(strokeWidth + 4),
    }
  };

  return (
    <motion.button
      className={`hamburger-button ${className}`}
      onClick={handleToggle}
      style={{
        width: size,
        height: size,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        style={{
          width: size * 0.6,
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth / 2,
        }}
        variants={topLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration, ease: "easeInOut" }}
      />
      
      <motion.div
        style={{
          width: size * 0.6,
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth / 2,
        }}
        variants={middleLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration, ease: "easeInOut" }}
      />
      
      <motion.div
        style={{
          width: size * 0.6,
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth / 2,
        }}
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default AnimatedHamburger;
