"use client";
import React, { useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Stunning View",
    description: "Experience the beauty of nature in its purest form.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "City Nights",
    description: "Feel the vibrant energy of the urban landscape.",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ocean Breeze",
    description: "Let the calming waves take you to another world.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mountain Escape",
    description: "Breathe fresh air high above the valleys.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Desert Journey",
    description: "Wander through endless sands under the sun.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Forest Trails",
    description: "Lose yourself among towering green giants.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Snowy Peaks",
    description: "Touch the sky atop pristine mountains.",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golden Fields",
    description: "Feel the warmth of the setting sun.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lakeside Peace",
    description: "Find serenity by the still waters.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hidden Waterfalls",
    description: "Discover the magic of cascading waters.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const ShrinkingImageCard = memo(function ShrinkingImageCard({
  title,
  description,
  img,
}) {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (!cardRef.current) return;

      if (reduce) {
        if (imageRef.current) gsap.set(imageRef.current, { scale: 1, yPercent: 0 });
        if (textRef.current) gsap.set(textRef.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // markers: true, // uncomment to debug
        },
        defaults: { ease: "power3.inOut" },
      });

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 0.33, yPercent: 12 },
          { scale: 1, yPercent: 0 },
          0
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.05
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="w-full h-[26vh] sm:h-[30vh] flex flex-col sm:flex-row items-center bg-gray-100 overflow-hidden p-3 sm:p-4 mb-4 rounded-xl"
      layout
      role="region"
      aria-label={title}
    >
      {/* Left: Image */}
      <div className="h-[48%] sm:h-full w-full sm:w-auto flex-1 flex items-center justify-center">
        <div className="relative w-[88%] sm:w-[80%] h-full sm:h-[80%] rounded-lg overflow-hidden shadow-lg">
          <motion.div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center transform-gpu will-change-transform"
            style={{ backgroundImage: `url('${img}')` }}
            aria-hidden="true"
          />
          {/* Hidden img to leverage decoding/lazy and provide alt text for A11y */}
          <img
            src={img}
            alt={title}
            className="w-0 h-0 opacity-0 pointer-events-none"
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right: Text */}
      <motion.div
        ref={textRef}
        className="flex-1 flex flex-col justify-center pl-0 sm:pl-6 mt-3 sm:mt-0 text-center sm:text-left"
        layout
      >
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
});

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ShrinkingImageCardList() {
  return (
    <motion.div
      className="w-full"
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {cardData.map((card) => (
        <motion.div key={card.title} variants={cardItemVariants}>
          <ShrinkingImageCard
            title={card.title}
            description={card.description}
            img={card.img}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
