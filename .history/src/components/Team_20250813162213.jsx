"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// --- Product Data --- (No changes here)
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

// --- Main Lead Component ---
export default function Lead() {
  return <HeroParallax products={products} />;
}


// --- HeroParallax Section ---
const HeroParallax = ({ products }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  // We need to dynamically calculate how far to scroll horizontally.
  // This is the total width of the cards minus the width of the container.
  const [scrollWidth, setScrollWidth] = useState(0);

  useLayoutEffect(() => {
    if (cardsRef.current) {
        // Calculate the total width of the scrollable content
        const totalContentWidth = cardsRef.current.scrollWidth;
        // Calculate the width of the visible container
        const containerWidth = cards_ref.current.offsetWidth;
        // The distance to scroll is the difference
        setScrollWidth(totalContentWidth - containerWidth);
    }
  }, [products]); // Recalculate if the number of products changes

  // Set up scroll tracking relative to the container.
  // The animation will happen over a distance of 300vh.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Map vertical scroll progress (0 to 1) to horizontal movement.
  // It moves from 0 to the calculated negative scroll width.
  const translateX = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], [0, -scrollWidth]),
    springConfig
  );

  // Your original 3D tilt and opacity animations are preserved.
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  return (
    // 1. The main container that defines the scrollable area.
    // The height determines how "long" the scroll effect lasts.
    <div ref={containerRef} className="relative h-[300vh]">
      {/* 2. The sticky container that "pins" the content to the screen. */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            opacity,
            perspective: "1000px", // Added perspective for 3D effect
          }}
          className="h-full flex flex-col items-center justify-center"
        >
          <Header />
          {/* 3. The horizontally scrolling container. */}
          <motion.div
            ref={cardsRef}
            style={{ x: translateX }}
            className="flex gap-8 px-4" // Using gap for spacing
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.title} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Header Component --- (No changes here)
const Header = () => (
    <div className="max-w-7xl relative mx-auto pt-10 pb-4 md:py-16 px-4 w-full text-center">
        <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
            The Ultimate
        </h1>
        <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
            <span className="text-[#3B6654] font-[font1] md:text-[10vh] font-bold">
                STARTUP
            </span>{" "}
            Promotion
        </h1>
        <h3 className="pt-1 text-2xl font-[font3]">
            presented by <span className="text-[#3B6654] font-bold">TESA</span>
        </h3>
        <h3 className="text-2xl font-[font1] pt-2 font-medium">
            INNOVATE | COLABORATE | TRANSFORM
        </h3>
        <button
            className="rounded-full mt-4 font-semibold text-md font-[font3] px-4 pb-2 pt-2 bg-[#4c8069] hover:bg-[#3b6654] transition-colors"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdiPRCJnQJWgy-HcWOuGQEfA5LHrx_3CxFpiDlSpJNJXLUt0Q/viewform", "_blank")}
        >
            Add your Start-up
        </button>
    </div>
);


// --- Product Card Component --- (No changes here)
const ProductCard = ({ product }) => (
    <motion.div
        whileHover={{ y: -20 }}
        className="group/product h-[29rem] w-[32rem] relative flex-shrink-0"
    >
        <img
            src={product.thumbnail}
            className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
            alt={product.title}
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
        <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl font-[font4] font-bold text-white p-2 rounded bg-black/50 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
                {product.title}
            </h2>
        </div>
    </motion.div>
);