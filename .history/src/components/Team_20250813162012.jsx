"use client";
import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

// --- Product Data ---
// This remains the same as your original component.
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
    // Add more products as needed
];

// --- Main Lead Component ---
export default function Lead() {
    return <HeroParallax products={products} />;
}

// --- Header Component ---
const Header = () => {
    return (
        <div className="max-w-7xl z-[1] relative mx-auto py-10 md:py-16 px-4 w-full left-0 top-0">
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

// --- Product Card Component ---
const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -20 }}
            className="group/product no-draw h-[29rem] w-[32rem] relative shrink-0 bg-zinc-900"
        >
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
        </motion.div>
    );
};

// --- HeroParallax Section (Sticky Horizontal Scroll) ---
const HeroParallax = ({ products }) => {
    const sectionRef = useRef(null);

    // 1. Set up scroll tracking for the section
    // We are tracking the scroll progress from the moment the top of the section
    // hits the top of the viewport (`start start`) until the bottom of the section
    // hits the bottom of the viewport (`end end`).
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // 2. Define the horizontal scroll distance
    // This calculates how far we need to scroll horizontally.
    // It's the total width of all cards minus the width of the screen.
    // We use a rough estimate here. (32rem card width + 5rem space) * number of cards
    const scrollableWidth = products.length * 37 - 100; // in rem

    // 3. Map scroll progress to horizontal movement (translateX)
    // As `scrollYProgress` goes from 0 (start) to 1 (end), `translateX` will go
    // from 0 to the negative of our scrollable width.
    // The `* 16` is a common conversion from rem to pixels (assuming 1rem = 16px).
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -scrollableWidth * 16]);
    
    // Spring physics for smoother animations
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
    const springX = useSpring(translateX, springConfig);

    // Preserving your original 3D tilt animations
    const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
    const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

    return (
        // The `ref` is attached here. The height of this section will determine
        // how long the user scrolls while the animation is happening.
        <div ref={sectionRef} className="h-[300vh] relative">
            
            {/* This div becomes "sticky" and stays in view while the parent scrolls.
                This is what creates the "pinned" effect. */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                
                <motion.div
                    style={{
                        rotateX,
                        rotateZ,
                        opacity,
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <Header />

                    {/* This inner div moves horizontally based on scroll progress */}
                    <motion.div
                        className="flex gap-x-20" // Replaced space-x-20 with gap-x for clarity
                        style={{
                            x: springX, // Use the spring-animated value for smooth motion
                        }}
                    >
                        {products.map((product, index) => (
                            <ProductCard
                                product={product}
                                key={`${product.title}-${index}`}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};