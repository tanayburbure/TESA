"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function ShrinkingImageCard() {
  const imageRef = useRef(null);
  const [shrunk, setShrunk] = useState(false);

  const toggleShrink = () => {
    setShrunk((prev) => !prev);
    gsap.to(imageRef.current, {
      scale: shrunk ? 1 : 0.7, // shrink to 70% then back
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return (
    <motion.div
      className="w-full h-[30vh] flex items-center bg-gray-100 overflow-hidden p-4 cursor-pointer"
      layout
      onClick={toggleShrink} // click to toggle
    >
      {/* Left side - Image */}
      <div className="h-full flex-1 flex items-center justify-center">
        <motion.div
          ref={imageRef}
          className="w-[80%] h-[80%] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
          }}
          layout
        />
      </div>

      {/* Right side - Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center pl-6"
        layout
      >
        <h2 className="text-2xl font-bold">Stunning View</h2>
        <p className="text-gray-600 mt-2">
          Experience the beauty of nature in its purest form. This image will
          shrink and expand smoothly when clicked.
        </p>
      </motion.div>
    </motion.div>
  );
}
