"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TryNew() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      style={{ gap: "8px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        rotate: hovered ? 90 : 0,
        scale: hovered ? 1 : 1, // slight zoom
      }}
      transition={{
        duration: 0.25, // faster animation
        ease: [0.4, 0, 0.2, 1], // smooth ease-in-out curve
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-8 h-[3px] bg-black rounded"
          initial={false}
          animate={{
            backgroundColor: hovered ? "#2563eb" : "#000000", // color change on hover
          }}
          transition={{ duration: 0.25 }}
        />
      ))}
    </motion.div>
  );
}
