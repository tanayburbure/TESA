import { motion } from "framer-motion";
import { useState } from "react";

// Animation configuration
const ANIMATION_CONFIG = {
  duration: 0.3,
  ease: "easeInOut",
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Control expanded size
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "50vh";

  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      opacity: 1,
      y: i === 0 ? -8 : i === 2 ? 8 : 0,
      width: "24px",
      transition: ANIMATION_CONFIG,
    }),
    open: (i) => ({
      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
      y: i === 0 ? 0 : i === 2 ? 0 : 0,
      opacity: i === 1 ? 0 : 1,
      width: "24px",
      transition: ANIMATION_CONFIG,
    }),
  };

  return (
    <div className="fixed top-6 right-6 z-[99999]">
      <motion.div
        className="w-16 h-16 cursor-pointer bg-[#4A9782] rounded-lg relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? EXPANDED_WIDTH : "64px",
          height: isHovered ? EXPANDED_HEIGHT : "64px",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "top right",
        }}
      >
        {/* Lines container */}
        <div
          className="absolute flex flex-col justify-center items-center"
          style={{
            width: 24,
            height: 24,
            gap: 8,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-full"
              style={{
                height: 2,
                width: 24,
                borderRadius: 9999,
              }}
              variants={lineVariants}
              initial="closed"
              animate={isHovered ? "open" : "closed"}
              custom={i}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
