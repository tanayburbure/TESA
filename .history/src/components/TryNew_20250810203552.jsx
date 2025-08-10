import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedHamburgerMenu = ({ 
  onToggle,
  initialState = false,
  size = 56,
  color = "#2563eb",
  hoverColor = "#1d4ed8",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <motion.div
      className={`hamburger-container ${className}`}
      style={{
        width: size,
        height: size,
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.1,
        background: 'rgba(255, 255, 255, 0.15)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          d="M3 6h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          animate={isOpen ? {
            d: "M18 6L6 18",
            stroke: hoverColor
          } : {
            d: "M3 6h18",
            stroke: color
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M3 12h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          animate={isOpen ? {
            opacity: 0,
            pathLength: 0
          } : {
            opacity: 1,
            pathLength: 1,
            stroke: color
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M3 18h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          animate={isOpen ? {
            d: "M6 6l12 12",
            stroke: hoverColor
          } : {
            d: "M3 18h18",
            stroke: color
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Optional ripple effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: `${color}20`,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AdvancedHamburgerMenu;
