"use client";
import React, { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// --- Product Data --- (Unchanged)
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

// --- Header Component --- (Unchanged)
const Header = () => {
    return (
        <div className="max-w-7xl z-[1] relative mx-auto py-10 md:py-16 px-4 w-full text-center">
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

// --- Product Card Component --- (Unchanged)
const ProductCard = ({ product }) => {
    return (
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
};


// --- HeroParallax Section --- (UPDATED WITH GSAP)
const HeroParallax = ({ products }) => {
  const sectionRef = useRef(null);
  const horizontalTrackRef = useRef(null); // Ref for the element that will scroll horizontally

  // We still use Framer Motion for the initial 3D tilt effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);

  // This effect sets up the GSAP horizontal scroll animation
  useLayoutEffect(() => {
    const horizontalTrack = horizontalTrackRef.current;
    if (!horizontalTrack) return;

    // Calculate the total distance to scroll
    const scrollAmount = horizontalTrack.scrollWidth - horizontalTrack.clientWidth;
    
    // Create the GSAP timeline
    const tween = gsap.to(horizontalTrack, {
      x: -scrollAmount, // Move it left by the calculated scroll amount
      ease: "none",     // Linear movement, directly tied to scroll
    });

    // Create the ScrollTrigger to pin the section and control the animation
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollAmount}`, // The scroll duration is based on the content width
      pin: true,
      scrub: 1, // Smoothly links the animation to the scrollbar
      animation: tween,
      invalidateOnRefresh: true, // Recalculates on window resize
    });

    // Cleanup function to kill the ScrollTrigger instance when the component unmounts
    return () => {
      st.kill();
    };
  }, [products]); // Re-run if products change

  return (
    // The ref for the GSAP ScrollTrigger is on this main section
    <section ref={sectionRef} className="relative w-full overflow-hidden">
        {/* The pinning will happen on this section */}
        
        {/* We use Framer's motion.div for the initial 3D tilt effect */}
        <motion.div
            style={{
                rotateX,
                rotateZ,
                opacity,
                perspective: "1000px",
            }}
            className="h-screen w-full flex flex-col items-center justify-center"
        >
            <Header />

            {/* This is the container for the cards. It will overflow its parent,
                and GSAP will animate its 'x' position. */}
            <div
                ref={horizontalTrackRef}
                className="flex items-center gap-8 pl-12" // Added some left padding
            >
                {products.map((product) => (
                    <ProductCard product={product} key={product.title} />
                ))}
            </div>
        </motion.div>
    </section>
  );
};