import React from 'react';
import { motion } from 'framer-motion';

const TryNew = ({ 
  size = 56,
  color = "#2563eb",
  hoverColor = "#1d4ed8",
  strokeWidth = 2,
  className = ""
}) => {
  return (
    <motion.div
      className={`try-new-button ${className}`}
      style={{
        width: size,
        height: size,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
      whileHover={{ 
        scale: 1.05,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div style={{ position: 'relative', width: size * 0.6, height: size * 0.6 }}>
        {/* First horizontal line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '10%',
            top: '25%',
            width: '80%',
            height: strokeWidth,
            backgroundColor: color,
            borderRadius: strokeWidth / 2,
            transformOrigin: 'center center',
          }}
          whileHover={{
            rotate: 90,
            width: strokeWidth,
            height: '80%',
            left: '25%',
            top: '10%',
            backgroundColor: hoverColor,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Second horizontal line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '10%',
            top: '50%',
            width: '80%',
            height: strokeWidth,
            backgroundColor: color,
            borderRadius: strokeWidth / 2,
            transformOrigin: 'center center',
            transform: 'translateY(-50%)',
          }}
          whileHover={{
            rotate: 90,
            width: strokeWidth,
            height: '80%',
            left: '50%',
            top: '10%',
            transform: 'translateX(-50%)',
            backgroundColor: hoverColor,
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
        />

        {/* Third horizontal line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '10%',
            top: '75%',
            width: '80%',
            height: strokeWidth,
            backgroundColor: color,
            borderRadius: strokeWidth / 2,
            transformOrigin: 'center center',
          }}
          whileHover={{
            rotate: 90,
            width: strokeWidth,
            height: '80%',
            right: '25%',
            top: '10%',
            backgroundColor: hoverColor,
          }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default TryNew;
