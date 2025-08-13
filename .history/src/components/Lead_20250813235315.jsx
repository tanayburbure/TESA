"use client";
import React, { useRef, useEffect, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------
// Main Lead Component
// ---------------------------
export default function Lead() {
  return <HeroParallax products={products} />;
}

// ---------------------------
// Product Data
// ---------------------------
export const products = [
  {
    title: "Vectron XT Films",
    thumbnail: "./images/aditya(vectron).jpg",
    profile: {
      name: "ADITYA NIMBALKAR",
      imageUrl: "./images/aaditya nimbalkar.jpg",
    },
  },
  {
    title: "WEB AGENCY",
    thumbnail: "./images/tanayweb.png",
    profile: {
      name: "TANAY BURBURE",
      imageUrl: "./images/Tanayburbure.jpg",
    },
  },
  {
    title: "SEARCH-IN TECH",
    thumbnail: "./images/Search_In.png",
    profile: {
      name: "ANKIT SONAWANE",
      imageUrl: "./images/Ankit_Photo.jpg",
    },
  },
  {
    title: "FULL STACK DEVELOPER",
    thumbnail: "./images/Mayank start.png",
    profile: {
      name: "Mayank Deshmukh",
      imageUrl: "./images/Mayank.png",
    },
  },
  {
    title: "S2 ART AND CRAFTS",
    thumbnail: "./startup/S2 ART.png",
    profile: {
      name: "SHRADDHA SIDHANKAR",
      imageUrl: "./startup/Shraddha.png",
    },
  },
  {
    title: "SASSY DESIGNS",
    thumbnail: "./startup/sassyDesigns.png",
    profile: {
      name: "TUSHAR PATIL",
      imageUrl: "./startup/sassyDesigns.png",
    },
  },
  {
    title: "FILMMAKER",
    thumbnail: "./startup/adarshgaurav.jpg",
    profile: {
      name: "ADARSH GAURAV",
      imageUrl: "./startup/adarshgaurav.jpg",
    },
  },
];

// ---------------------------
// HeroParallax Section (Intro tilt with framer-motion → GSAP horizontal scroll)
// ---------------------------
const HeroParallax = ({ products }) => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Original framer-motion scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  useEffect(() => {
    // GSAP horizontal scroll kicks in AFTER intro animation finishes
    let ctx = gsap.context(() => {
      const totalScroll = products.length * 36 - 100; // % movement
      gsap.to(containerRef.current, {
        x: `-${totalScroll}%`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=40%", // starts after intro phase
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [products.length]);

  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard key={product.title} product={product} />
    ));
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col [perspective:1000px] [transform-style:preserve-3d]">
        <Header />
        <div className="flex justify-center">
          <motion.div
            style={{
              rotateX,
              rotateZ,
              opacity,
            }}
            className="flex justify-center"
          >
            <div
              ref={containerRef}
              className="flex space-x-20 relative will-change-transform"
            >
              {renderedProducts}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------
// Header
// ---------------------------
const Header = () => {
  return (
    <div className="max-w-7xl z-[1] relative mx-auto py-10 md:py-16 px-4 w-full left-0 top-0">
      <h1 className="text-2xl font-[font2] md:text-6xl font-bold">The Ultimate</h1>
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
        className="rounded-full mt-4 ml-28 font-semibold text-md font-[font3] px-4 pb-2 pt-2 bg-[#4c8069] hover:bg-[#3b6654] transition-colors"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdiPRCJnQJWgy-HcWOuGQEfA5LHrx_3CxFpiDlSpJNJXLUt0Q/viewform",
            "_blank"
          )
        }
      >
        Add your Start-up
      </button>
    </div>
  );
};

// ---------------------------
// Product Card
// ---------------------------
const ProductCard = ({ product }) => {
  return (
    <div className="group/product no-draw h-[29rem] w-[32rem] relative shrink-0 bg-zinc-900">
      <img
        src={product.thumbnail}
        className="object-cover object-center absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h2 className="text-2xl font-[font4] font-bold text-white p-2 rounded bg-black/50">
          {product.title}
        </h2>
      </div>
    </div>
  );
};
