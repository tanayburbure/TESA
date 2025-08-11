"use client";
import React, { useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Card = {
  title: string;
  description: string;
  img: string;
};

const cardData: Card[] = [
  // ... your data
];

const ShrinkingImageCard = memo(function ShrinkingImageCard({
  title,
  description,
  img,
}: Card) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      if (!imageRef.current || !cardRef.current) return;

      gsap.fromTo(
        imageRef.current,
        { scale: 0.33 },
        {
          scale: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            // markers: true, // uncomment for debugging
            // once: true,   // use this if you want it to run only once
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="w-full h-[30vh] flex items-center bg-gray-100 overflow-hidden p-4 mb-4"
      layout
    >
      {/* Left - Image */}
      <div className="h-full flex-1 flex items-center justify-center">
        <motion.div
          ref={imageRef}
          className="w-[80%] h-[80%] bg-cover bg-center rounded-lg shadow-lg transform-gpu will-change-transform"
          style={{ backgroundImage: `url('${img}')` }}
          layout
        />
      </div>

      {/* Right - Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center pl-6"
        layout
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
});

export default function ShrinkingImageCardList() {
  return (
    <div className="w-full">
      {cardData.map((card) => (
        <ShrinkingImageCard
          key={card.title}
          title={card.title}
          description={card.description}
          img={card.img}
        />
      ))}
    </div>
  );
}
