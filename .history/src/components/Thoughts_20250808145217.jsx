import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft as IconArrowLeft,
  FaArrowRight as IconArrowRight,
} from "react-icons/fa";

// Remove duplicate testimonial
const defaultTestimonials = [
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "BE 2023-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth.",
  },
  {
    src: "/images/Ankit_Photo.jpg",
    name: "Ankit Sonavane",
    designation: "BE 2023-24",
    quote:
      "Serving as the president for the TESA 22-23 term, I led with dedication, fostering collaboration and innovation. Through effective communication and proactive decision-making, we overcame challenges, achieved milestones, and enhanced overall department performance. Proud to have contributed to our team's continued success.",
  },
  {
    src: "/images/abhinandan.jpg",
    name: "Abhinandan Suryavanshi",
    designation: "BE 2018-19",
    quote:
      "As TESA 2020-21 Secretary, I collaborated with my team, prioritizing mentorship and teamwork to bridge academia and industry successfully. Witnessing students' professional journeys unfold was rewarding, showcasing the impact of unity and guidance. Gratitude to colleagues and mentors who contributed to our collective success, fostering growth and excellence.",
  },
  {
    src: "/images/Mayank.png",
    name: "Mayank Deshmukh",
    designation: "BE 2025-26",
    quote:
      "Being the Developer of TESA's website allowed me to not only contribute technically but also shape a platform that serves as the backbone of our community engagement. This role deepened my appreciation for user experience and information accessibility. As we continue to grow and evolve, ensuring it remains a valuable asset for both current and future members of TESA.",
  },
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Tanay Burbure",
    designation: "BE 2025-26",
    quote:
      "As Vice President of the department batch 2022-23, I forged strong connections with juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth.",
  },
];

// Helper for animated quote
function Thoughts({ quote }) {
  return (
    <motion.p className="mt-8 text-base text-gray-700">
      {quote.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.18,
            ease: "easeInOut",
            delay: 0.02 * index,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}

export const Thoughts = ({
  testimonials = defaultTestimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);
  const length = Array.isArray(testimonials) ? testimonials.length : 0;

  // Use useCallback for stable interval function
  const handleNext = useCallback(() => {
    if (length === 0) return;
    setActive((prev) => (prev + 1) % length);
  }, [length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (autoplay && length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, length, handleNext]);

  const isActive = (idx) => idx === active;

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!Array.isArray(testimonials) || length === 0)
    return <div>No testimonials to show.</div>;

  return (
    <div className="mx-auto max-w-xl px-4 py-12 md:max-w-3xl lg:max-w-4xl font-sans antialiased bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Image Slide */}
        <div className="relative h-72 w-full">
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, idx) =>
              isActive(idx) && (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    zIndex: 40,
                    y: [0, -40, 0],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.38,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom shadow-md"
                >
                  <img
                    src={testimonial.src}
                    alt={`${testimonial.name}'s photo`}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl object-cover border border-gray-100 bg-gray-50"
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Text + Controls */}
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm font-medium text-gray-400">
              {testimonials[active].designation}
            </p>
            <Thoughts quote={testimonials[active].quote} />
          </motion.div>

          <div className="flex gap-4 pt-10 md:pt-0">
            <button
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 transition hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 outline-none"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-600 group-hover/button:rotate-12" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 transition hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 outline-none"
            >
              <IconArrowRight className="h-5 w-5 text-gray-600 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
