"use client";
import { useScroll, useTransform, motion } from "motion/react";
import cn from "classnames";

export default function ParallaxScroll({ images, className }) {
  const { scrollYProgress } = useScroll();

  // Column animations
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Split images into thirds
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("items-start w-full select-none", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {/* First column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Card {...el} />
            </motion.div>
          ))}
        </div>

        {/* Second column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Card {...el} />
            </motion.div>
          ))}
        </div>

        {/* Third column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Card {...el} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable card component
function Card({ src, alt, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={src}
        className="h-72 w-full object-cover object-left-top !m-0 !p-0"
        height="400"
        width="400"
        alt={alt || title}
      />
      <div className="p-4">
        <h3 className="text-2xl font-[font3] font-semibold">{title}</h3>
        <p className="text-sm font-[font3] text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
