"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// Helper function to combine class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * CometCard Component
 * This component provides the 3D hover effect. It's defined inside the main App
 * component to keep everything in one file.
 */
const CometCard = ({
  children,
  className = "",
  rotateDepth = 10,
  translateDepth = 8,
  scaleOnHover = 1.05,
}) => {
  const ref = useRef(null);

  // Motion values to track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth animation
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  // Transformations for rotation and translation based on mouse position
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  // Handles mouse movement over the card
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  // Resets the card's position when the mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        translateX,
        translateY,
        transformStyle: "preserve-3d", // Essential for 3D effect on children
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: scaleOnHover, transition: { duration: 0.2 } }}
      className={cn(className)}
    >
      {/* This inner div lifts the content, enhancing the 3D effect */}
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className=" font-sans p-4 mt-32">
      <div className="w-full ">
        <h1 className="text-center font-[font3] tracking-tighter text-[6vh]">
          Learn from Real-Life <span className="text-green-800 font-[font2]">INTERVIEW EXP</span> of our students
        </h1>
        <p className="text-center text-md font-[font3]">
          Experience the perfect blend of Culture, Technology, and Athleticism at our captivating events, where
          innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey
          through the realms of Culture, Technology, and Sports.
        </p>

        {/* The grid of interactive cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-12 text-black mt-12">
          <CometCard className="bg-white rounded-xl flex flex-col items-center justify-center p-6 shadow-2xl shadow-green-500/10">
            <img 
              src="./images/s1.png" 
              alt="Students Placed Icon" 
              className="h-24 w-24 object-cover mb-4 "
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/cccccc/FFFFFF?text=Error'; }}
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">500+ Students Placed</h2>
          </CometCard>

          <CometCard className="bg-white rounded-xl flex flex-col items-center justify-center p-6 shadow-2xl shadow-green-500/10">
            <img 
              src="./images/s2.png" 
              alt="MNCs Icon" 
              className="h-24 w-24 object-cover position-center mb-4 "
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/cccccc/FFFFFF?text=Error'; }}
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">20+ MNC's</h2>
          </CometCard>

          <CometCard className="bg-white rounded-xl flex flex-col items-center justify-center p-6 shadow-2xl shadow-green-500/10">
            <img 
              src="./images/s3.png" 
              alt="Core Recruitments Icon" 
              className="h-24 w-24 object-cover mb-4 "
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/cccccc/FFFFFF?text=Error'; }}
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">10+ Core Recruitments</h2>
          </CometCard>
        </div>

        {/* Action buttons at the bottom */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Placements
          </button>
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Share Experience
          </button>
        </div>
      </div>
    </div>
  );
}
