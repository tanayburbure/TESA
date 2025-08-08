"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes safely
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function PageTransition({
  children,
  containerClassName,
  className,
  as: Tag = "div", // default to div so you can nest buttons inside
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  // Direction rotation logic
  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Radial gradients for each side
  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  // Highlight gradient on hover
  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  // Rotate the gradient direction in a loop when not hovered
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex rounded-full border bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 overflow-visible p-px",
        containerClassName
      )}
      {...props}
    >
      {/* Content wrapper with padding and any additional styles */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      {/* Animated gradient background */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Inner black overlay to simulate border */}
      <div className="pointer-events-none absolute inset-[2px] rounded-[100px] bg-black z-0" />
    </Tag>
  );
}
