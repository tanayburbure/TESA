"use client";
import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

// ---------------------------
// Main Lead Component
// ---------------------------
export default function Lead() {
    return <AnimatedHorizontalScroll products={products} />;
}

// ---------------------------
// Product Data (Unchanged)
// ---------------------------
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

// ---------------------------
// NEW Animated Horizontal Scroll Component
// ---------------------------
const AnimatedHorizontalScroll = ({ products }) => {
    // Ref for the main container that provides the scroll height
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Animate translateX based on scroll progress
    // The animation is split into two phases:
    // 1. [0, 0.2]: Parallax entrance animation (cards move from far right to center)
    // 2. [0.2, 0.95]: Horizontal scroll (cards move from center to far left)
    const x = useTransform(scrollYProgress, [0, 0.2, 0.95], ["100%", "0%", "-100%"]);

    // Parallax animations for the header text, similar to the original
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.1], ["50px", "0px"]);

    return (
        // This outer container is very tall to create a long scroll track
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 text-white">
            {/* This inner container sticks to the top and holds all the visible content */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Animated Header */}
                <motion.div 
                    style={{ opacity: headerOpacity, y: headerY }} 
                    className="absolute w-full px-4"
                >
                    <Header />
                </motion.div>
                
                {/* The horizontally scrolling cards */}
                <motion.div style={{ x }} className="flex gap-12 px-12">
                    {products.map((product) => {
                        return <ProductCard product={product} key={product.title} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};


// ---------------------------
// Header (Centered for this layout)
// ---------------------------
const Header = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
                The Ultimate
            </h1>
            <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
                <span className="text-[#3B6654] font-[font1] md:text-[10vh] font-bold">
                    STARTUP
                </span> Promotion
            </h1>
            <h3 className="pt-1 text-2xl font-[font3]">
                presented by <span className="text-[#3B6654] font-bold">TESA</span>
            </h3>
            <h3 className="text-2xl font-[font1] pt-2 font-medium">
                INNOVATE | COLABORATE | TRANSFORM
            </h3>
        </div>
    );
};

// ---------------------------
// Product Card
// ---------------------------
const ProductCard = ({ product }) => {
    return (
        // Removed whileHover to prevent interference with scroll-driven animation
        <div className="group/product h-[29rem] w-[32rem] relative shrink-0 bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
            <img
                src={product.thumbnail}
                className="object-cover object-center absolute h-full w-full inset-0"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-[font4] font-bold text-white p-2 rounded bg-black/50">
                    {product.title}
                </h2>
            </div>
        </div>
    );
};