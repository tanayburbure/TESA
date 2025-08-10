import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TryNew = ({ 
  onToggle,
  initialState = false,
  size = 56,
  color = "#2563eb",
  hoverColor = "#1d4ed8",
  className = ""
}) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

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
        {/* First line - transforms from vertical to horizontal */}
        <motion.path
          d="M6 3v18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M3 6h18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Second line - transforms from vertical to horizontal */}
        <motion.path
          d="M12 3v18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M3 12h18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Third line - transforms from vertical to horizontal */}
        <motion.path
          d="M18 3v18"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          whileHover={{
            d: "M3 18h18",
            stroke: hoverColor
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Optional ripple effect on hover */}
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
