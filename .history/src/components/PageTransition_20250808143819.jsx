import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft as IconArrowLeft, FaArrowRight as IconArrowRight } from "react-icons/fa";

// Default testimonials with an added testimonial
const defaultTestimonials = [
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Ankit Sonavane",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
  {
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },{
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },{
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },{
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },{
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },{
    src: "/images/vaishnavi_ghatge.jpg",
    name: "Vaishnavi Ghatge",
    designation: "Vice President, BE 23-24",
    quote:
      "As the Vice President of the department of batch 2022-23, I forged strong connections with my juniors, prioritizing mentorship and fostering a collaborative environment. Through teamwork and shared dedication, we navigated challenges, achieving collective success. Our department stands as a testament to the power of unity and mentorship, driving excellence and growth."
  },
];

export const PageTransition = ({
    testimonials = defaultTestimonials,
    autoplay = false
  }) => {
    const [active, setActive] = useState(0);
  
    const length = Array.isArray(testimonials) ? testimonials.length : 0;
  
    const handleNext = () => {
      if (length === 0) return;
      setActive((prev) => (prev + 1) % length);
    };
  
    const handlePrev = () => {
      if (length === 0) return;
      setActive((prev) => (prev - 1 + length) % length);
    };
  
    const isActive = (index) => index === active;
  
    useEffect(() => {
      if (autoplay && length > 0) {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
      }
    }, [autoplay, length]);
  
    const randomRotateY = () =>
      Math.floor(Math.random() * 21) - 10;
  
    if (!Array.isArray(testimonials) || length === 0) {
      return <div>No testimonials to show.</div>;
    }
  
    return (
      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence initial={false}>
                {testimonials.map((testimonial, index) =>
                  isActive(index) && (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        zIndex: 40,
                        y: [0, -80, 0],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
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
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Testimonial Content + Arrows */}
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
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };