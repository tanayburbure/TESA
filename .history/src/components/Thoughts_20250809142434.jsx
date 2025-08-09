"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const defaultTestimonials = [
  // ... your testimonials data remains the same
];

const Thoughts = ({
  testimonials = defaultTestimonials,
  autoplay = true
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && testimonials.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials]);

  // Updated function for consistent playing card angles
  const getCardAngle = (index) => {
    const baseAngles = [-8, -4, 0, 4, 8, -6, 2]; // Predefined angles for variety
    return baseAngles[index % baseAngles.length];
  };

  // Alternative: Stack-based angles for more dramatic effect
  const getStackAngle = (index, activeIndex) => {
    if (index === activeIndex) return 0; // Active card is straight
    const distance = Math.abs(index - activeIndex);
    const direction = index < activeIndex ? -1 : 1;
    return direction * (3 + distance * 2); // Gradual angle increase
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <div className="mx-auto h-[80vh] max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-28 md:grid-cols-2">
        <div>
          <div className="relative h-96 w-full mt-4">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getCardAngle(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getCardAngle(index), // Keep consistent angles
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getCardAngle(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full no-draw rounded-3xl object-cover object-center border-2 border-black shadow-lg"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Rest of your component remains the same */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-[3.8vh] font-bold text-black font-[font2]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-700">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg font-medium text-gray-900 leading-6 font-[font3]">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="absolute flex top-[100%] gap-4 mt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button no-draw flex h-12 w-12 items-center justify-center rounded-full bg-[#3B6654]"
            >
              <IconArrowLeft className="h-7 w-7 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-200" />
            </button>
            <button
              onClick={handleNext}
              className="group/button no-draw flex h-12 w-12 items-center justify-center rounded-full bg-[#3B6654]"
            >
              <IconArrowRight className="h-7 w-7 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
