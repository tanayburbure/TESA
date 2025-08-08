import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft as IconArrowLeft,
  FaArrowRight as IconArrowRight,
} from "react-icons/fa";

const defaultTestimonials = [
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "BE 2023-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  {
    src: "/images/Ankit_Photo.jpg",
    name: "Ankit Sonavane",
    designation: "BE 2023-24",
    quote:
      "Serving as the president for the TESA 22-23 term, I led with dedication, fostering collaboration and innovation. Through effective communication and proactive decision-making, we overcame challenges, achieved milestones, and enhanced overall department performance. Proud to have contributed to our team's continued success."
  },
  {
    src: "/images/abhinandan.jpg",
    name: "Abhinandan Suryavanshi",
    designation: "BE 2018-19",
    quote:
      "As TESA 2020-21 Secretary, I collaborated with my team, prioritizing mentorship and teamwork to bridge academia and industry successfully. Witnessing students' professional journeys unfold was rewarding, showcasing the impact of unity and guidance. Gratitude to colleagues and mentors who contributed to our collective success, fostering growth and excellence."
  },
  {
    src: "/images/Mayank.png",
    name: "Mayank Deshmukh",
    designation: "BE 2025-26",
    quote:
      "Being the Developer of TESA's website. It allowed me to not only contribute technically but also to shape a platform that serves as the backbone of our community engagement. This role has deepened my appreciation for the importance of user experience and information accessibility. As we continue to grow and evolve, ensuring it remains a valuable asset for both current and future members of TESA."
  },
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Tanay Burbure",
    designation: "BE 2025-26",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  }
];

export function Thoughts({ testimonials = defaultTestimonials }) {
  const [active, setActive] = useState(0);
  const length = testimonials?.length || 0;

  // Automatically cycle testimonials
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % length);
  }, [length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (length > 1) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [length, handleNext]);

  if (!Array.isArray(testimonials) || length === 0)
    return <div>No testimonials available.</div>;

  return (
    <div className="mx-auto max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="relative min-h-[320px] flex flex-col items-center">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -32, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-gray-300 shadow-md"
              style={{ width: "80px", height: "80px" }}
            />
            <p className="text-lg text-gray-800 text-center font-medium max-w-md">
              {testimonials[active].quote}
            </p>
            <div className="mt-2 text-center">
              <span className="font-semibold text-gray-900 block">
                {testimonials[active].name}
              </span>
              <span className="text-sm text-gray-500">
                {testimonials[active].designation}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-4 pt-5">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 outline-none transition"
        >
          <IconArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 outline-none transition"
        >
          <IconArrowRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="flex justify-center gap-1 mt-5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              active === idx
                ? "bg-blue-500 scale-105"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
