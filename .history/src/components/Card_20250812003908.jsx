"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Export the reusable CometCard component (without any image content)
export const CometCard = ({
  children,
  className = "",
  rotateDepth = 17.5,
  translateDepth = 20,
  scaleOnHover = 1.03,
  ...props
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 10 });

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

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

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
      }}
      initial={{ scale: 1 }}
      whileHover={{ scale: scaleOnHover, transition: { duration: 0.2 } }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Simplified demo component (can be used for testing)
export default function CometCardDemo({
  rotateDepth = 17.5,
  translateDepth = 20,
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <CometCard
        rotateDepth={rotateDepth}
        translateDepth={translateDepth}
        className="w-80 rounded-2xl bg-[#1F2121] p-4 flex flex-col items-center"
      >
        <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-700 flex items-center justify-center">
          <span className="text-white text-sm">Demo Content</span>
        </div>
        <div className="flex justify-between items-center w-full mt-3 px-1 font-mono text-white text-xs">
          <span>Comet Card</span>
          <span className="opacity-50">#DEMO</span>
        </div>
      </CometCard>
    </div>
  );
}
