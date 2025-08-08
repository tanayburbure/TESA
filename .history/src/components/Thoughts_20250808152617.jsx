"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

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
      "Being the Developer of TESA's website. It allowed me to not only contribute technically but also to shape a platform that serves as the backbone of our community engagement. This role has deepened my appreciation for the importance of user experience and information accessibility."
  },
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Tanay Burbure",
    designation: "BE 2025-26",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  }
];

export const Thoughts = ({
  testimonials = defaultTestimonials, // Use defaultTestimonials as default
  autoplay = false
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

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <div className="mx-auto h-[80vh] max-w-sm px-4 py-12 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-96 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
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
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
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
              className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
