"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TryNew() {
  const [hovered, setHovered] = useState(false);

  const lineVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    hovered: (i) => ({
      rotate: 90,
      x: i === 0 ? -10 : i === 2 ? 10 : 0, // shift lines apart when vertical
      y: 0,
    }),
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      style={{ gap: "8px" }} // consistent gap between lines
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={lineVariants}
          animate={hovered ? "hovered" : "initial"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-[3px] bg-black rounded"
        />
      ))}
    </motion.div>
  );
}
