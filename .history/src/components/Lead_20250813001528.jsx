"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

// Main component export
export default function Startup() {
    return <HeroParallax products={products} />;
}

// Your product data array (const products = [...]) should be here.
// It is omitted from this code block for brevity.
export const products = [
    {
        title: "Vectron XT Films",
        link: "https://gomoonbeam.com",
        thumbnail: "./images/aditya(vectron).jpg",
    },
    {
        title: "WEB AGENCY",
        link: "https://tanayburbure.com",
        thumbnail: "./images/tanayweb.png",
    },
    {
        title: "SEARCH-IN TECH",
        link: "",
        thumbnail: "./images/Search_In.png",
    },
    {
        title: "FULL STACK DEVELOPER",
        link: "https://editorially.org",
        thumbnail: "./images/Mayank start.png",
    },
    {
        title: "S2 ART AND CRAFTS",
        link: "https://editrix.ai",
        thumbnail: "./startup/S2 ART.png",
    },
    {
        title: "SASSY DESIGNS",
        link: "https://app.pixelperfect.quest",
        thumbnail: "./startup/sassyDesigns.png",
    },
    {
        title: "FILMMAKER",
        link: "https://algochurn.com",
        thumbnail: "./startup/adarshgaurav.jpg",
    },
];


const HeroParallax = ({ products }) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // Translates the card row horizontally based on vertical scroll
    // The '-3000' value determines how far the row scrolls.
    // Adjust it based on the number of cards and their width.
    const translateX = useSpring(
        useTransform(scrollYProgress, [0.1, 0.9], [0, -3000]),
        springConfig
    );

    return (
        // This outer div creates the scrollable area. Its height determines
        // how long you scroll vertically to achieve the horizontal effect.
        <div ref={ref} className="h-[300vh] relative">
            {/* This container becomes sticky, pinning the viewport */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <Header />
                {/* Vertically centers the scrolling card container */}
                <div className="flex items-center h-full">
                    <motion.div
                        className="flex"
                        style={{ x: translateX }} // Apply horizontal translation
                    >
                        {products.map((product) => (
                            <ProductCard product={product} key={product.title} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Simplified Header component
const Header = () => {
    return (
        // Positioned absolutely to float above the cards
        <div className="absolute top-0 left-0 w-full z-10 pt-20 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-2xl font-[font2] md:text-6xl font-bold text-white">
                    The Ultimate
                </h1>
                <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
                    <span className="text-[#3B6654] font-[font1] md:text-[10vh] font-bold">
                        STARTUP
                    </span>
                    <span className="text-white"> Promotion</span>
                </h1>
            </div>
        </div>
    );
};

// Simplified ProductCard component
const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -20 }}
            key={product.title}
            // Added margin for spacing between cards
            className="group/product no-draw bg-zinc-900 h-[29rem] w-[32rem] relative shrink-0 mx-10"
        >
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group-hover/product:shadow-2xl h-full w-full"
            >
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-center absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            {/* Black overlay on hover for better title visibility */}
            <div className="absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-50 transition-opacity duration-300 pointer-events-none"></div>

            {/* Title displayed at the bottom of the card */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-2xl font-[font4] font-bold text-white text-center">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};