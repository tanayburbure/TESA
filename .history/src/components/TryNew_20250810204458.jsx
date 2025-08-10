import React from 'react';
import { motion } from 'framer-motion';

const TryNew = ({ 
  size = 56,
  color = "#2563eb",
  hoverColor = "#1d4ed8",
  className = "",
  shiftDistance = 120
}) => {
  return (
    <motion.div
      className={`try-new-container ${className}`}
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
      whileHover={{ 
        scale: 1.1,
        x: shiftDistance, // Shift the entire icon to the right
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
        {/* First line - horizontal to vertical */}
        <motion.path
          d="M3 6h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M6 3v18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Second line - horizontal to vertical */}
        <motion.path
          d="M3 12h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M12 3v18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        />
        
        {/* Third line - horizontal to vertical */}
        <motion.path
          d="M3 18h18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M18 3v18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
      
      {/* Optional ripple effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: `${color}20`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default TryNew;
