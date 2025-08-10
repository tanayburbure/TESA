"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TryNew() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      style={{ gap: "8px" }} // consistent gap
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ rotate: hovered ? 90 : 0 }} // rotate the whole group
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-8 h-[3px] bg-black rounded"
        />
      ))}
    </motion.div>
  );
}
