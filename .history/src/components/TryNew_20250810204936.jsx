"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TryNew() {
  const [hovered, setHovered] = useState(false);

  const lineVariants = {
    initial: { rotate: 0 },
    hovered: { rotate: 90 }, // horizontal → vertical
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          variants={lineVariants}
          animate={hovered ? "hovered" : "initial"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-[3px] bg-black rounded"
        />
      ))}
    </motion.div>
  );
}
