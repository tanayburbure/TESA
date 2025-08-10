import { motion } from "framer-motion";
import { useState } from "react";

const ANIMATION_CONFIG = {
  duration: 0.4,
  ease: [0.34, 1.56, 0.64, 1],
  type: "spring",
  stiffness: 180,
  damping: 15,
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  // Expanded container size
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "50vh";

  // Lines vertical positions in closed state for spacing
  const CLOSED_Y_POSITIONS = [-8, 0, 8];

  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      opacity: 1,
      y: CLOSED_Y_POSITIONS[i],
      transition: ANIMATION_CONFIG,
      width: "24px",
      borderRadius: 9999,
      height: 4,
      backgroundColor: "#1F2937", // Tailwind slate-800 for visible contrast
    }),
    open: (i) => ({
      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
      y: 0,
      opacity: i === 1 ? 0 : 1,
      width: "24px",
      borderRadius: 9999,
      height: 4,
      backgroundColor: "#1F2937",
      transition: ANIMATION_CONFIG,
    }),
  };

  return (
    <div className="fixed top-6 right-6 z-[99999]">
      <motion.div
        className="cursor-pointer bg-[#4A9782] rounded-lg relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? EXPANDED_WIDTH : "64px",
          height: isHovered ? EXPANDED_HEIGHT : "64px",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{
          transformOrigin: "top right",
          borderRadius: "12px",
        }}
      >
        {/* Lines container */}
        <div
          className="absolute flex flex-col justify-center items-center"
          style={{
            width: 24,
            height: 24,
            gap: 8,
            position: "relative",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={lineVariants}
              initial="closed"
              animate={isHovered ? "open" : "closed"}
              custom={i}
              style={{ margin: 0 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
