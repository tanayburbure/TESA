import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation configurations
const SPRING_CONFIG = {
  hover: { stiffness: 200, damping: 12 },
  leave: { stiffness: 150, damping: 20 }
};

const EASING = {
  hover: [0.34, 1.56, 0.64, 1],
  leave: [0.76, 0, 0.24, 1]
};

// Line configurations
const horizontalLines = [
  {
    id: 'top',
    initialY: -4,
    hoverTransform: { x: -40, rotateZ: -45, blur: 8 },
    delay: { hover: 0, leave: 0.15 }
  },
  {
    id: 'middle',
    initialY: 0,
    hoverTransform: { x: 50, blur: 12 },
    delay: { hover: 0.05, leave: 0.25 }
  },
  {
    id: 'bottom',
    initialY: 4,
    hoverTransform: { x: -45, rotateZ: 60, blur: 10 },
    delay: { hover: 0.1, leave: 0.35 }
  }
];

const verticalLines = [
  {
    id: 'left',
    hoverTransform: { x: -8 },
    awayTransform: { x: -50, y: -30, rotateZ: 90 },
    delay: { hover: 0.15, leave: 0 }
  },
  {
    id: 'center',
    hoverTransform: { x: 0 },
    awayTransform: { y: 40 },
    delay: { hover: 0.25, leave: 0.05 }
  },
  {
    id: 'right',
    hoverTransform: { x: 8 },
    awayTransform: { x: 60, y: -25, rotateZ: -90 },
    delay: { hover: 0.35, leave: 0.1 }
  }
];

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const getHorizontalAnimation = (line) => ({
    opacity: isHovered ? 0 : 1,
    scale: isHovered ? 0.1 : 1,
    y: line.initialY,
    x: isHovered ? line.hoverTransform.x : 0,
    rotateZ: isHovered ? (line.hoverTransform.rotateZ || 0) : 0,
    filter: `blur(${isHovered ? line.hoverTransform.blur : 0}px)`,
    width: isHovered ? "4px" : "32px",
  });

  const getVerticalAnimation = (line) => ({
    opacity: isHovered ? 1 : 0,
    scale: isHovered ? 1 : 0.1,
    x: isHovered ? line.hoverTransform.x : line.awayTransform.x,
    y: isHovered ? (line.hoverTransform.y || 0) : (line.awayTransform.y || 0),
    rotateZ: isHovered ? 0 : (line.awayTransform.rotateZ || 0),
    filter: `blur(${isHovered ? 0 : 15}px)`,
    height: isHovered ? "32px" : "4px",
    width: "2px",
  });

  const getTransition = (delay) => ({
    duration: isHovered ? 0.4 : 0.35,
    ease: isHovered ? EASING.hover : EASING.leave,
    delay: isHovered ? delay.hover : delay.leave,
    type: "spring",
    ...SPRING_CONFIG[isHovered ? 'hover' : 'leave']
  });

  return (
    <motion.div
      className="relative w-12 h-12 cursor-pointer flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {/* Horizontal Lines */}
      {horizontalLines.map((line) => (
        <motion.div
          key={line.id}
          className="w-8 h-0.5 bg-gray-800 rounded-full absolute"
          animate={getHorizontalAnimation(line)}
          transition={getTransition(line.delay)}
        />
      ))}

      {/* Vertical Lines */}
      {verticalLines.map((line) => (
        <motion.div
          key={line.id}
          className="h-8 w-0.5 bg-gray-800 rounded-full absolute"
          animate={getVerticalAnimation(line)}
          transition={getTransition(line.delay)}
        />
      ))}
    </motion.div>
  );
}
