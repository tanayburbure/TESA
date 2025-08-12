"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Main Startup component
export default function Startup() {
  return <HeroHorizontal products={products} />;
}

// Product data (unchanged)
export const products = [
  {
    title: "Vectron XT Films",
    thumbnail: "./images/aditya(vectron).jpg",
  },
  {
    title: "WEB AGENCY",
    thumbnail: "./images/tanayweb.png",
  },
  {
    title: "SEARCH-IN TECH",
    thumbnail: "./images/Search_In.png",
  },
  {
    title: "FULL STACK DEVELOPER",
    thumbnail: "./images/Mayank start.png",
  },
  {
    title: "S2 ART AND CRAFTS",
    thumbnail: "./startup/S2 ART.png",
  },
  {
    title: "SASSY DESIGNS",
    thumbnail: "./startup/sassyDesigns.png",
  },
  {
    title: "FILMMAKER",
    thumbnail: "./startup/adarshgaurav.jpg",
  },
];

// HeroHorizontal component
const HeroHorizontal = ({ products }) => {
  const sectionRef = useRef(null);

  // Total horizontal scroll length = number of cards * width - viewport width
  const scrollLength = products.length * 500 - window.innerWidth;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -scrollLength]),
    springConfig
  );

  return (
    <div
      ref={sectionRef}
      className="relative h-[300vh] bg-black"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x: translateX }}
          className="flex space-x-8 px-8"
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ProductCard component (only title kept)
const ProductCard = ({ product }) => {
  return (
    <div className="relative h-[60vh] w-[28rem] flex-shrink-0 bg-zinc-900 rounded-xl overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg">
        <h2 className="text-white text-2xl font-bold">{product.title}</h2>
      </div>
    </div>
  );
};
