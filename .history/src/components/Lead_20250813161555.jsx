"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        }
    },
    {
        title: "WEB AGENCY",
        thumbnail: "./images/tanayweb.png",
        profile: {
            name: "TANAY BURBURE",
            imageUrl: "./images/Tanayburbure.jpg",
        }
    },
    {
        title: "SEARCH-IN TECH",
        thumbnail: "./images/Search_In.png",
        profile: {
            name: "ANKIT SONAWANE",
            imageUrl: "./images/Ankit_Photo.jpg",
        }
    },
    {
        title: "FULL STACK DEVELOPER",
        thumbnail: "./images/Mayank start.png",
        profile: {
            name: "Mayank Deshmukh",
            imageUrl: "./images/Mayank.png",
        }
    },
    {
        title: "S2 ART AND CRAFTS",
        thumbnail: "./startup/S2 ART.png",
        profile: {
            name: "SHRADDHA SIDHANKAR",
            imageUrl: "./startup/Shraddha.png",
        }
    },
    {
        title: "SASSY DESIGNS",
        thumbnail: "./startup/sassyDesigns.png",
        profile: {
            name: "TUSHAR PATIL",
            imageUrl: "./startup/sassyDesigns.png",
        }
    },
    {
        title: "FILMMAKER",
        thumbnail: "./startup/adarshgaurav.jpg",
        profile: {
            name: "ADARSH GAURAV",
            imageUrl: "./startup/adarshgaurav.jpg",
        }
    },
];

// ---------------------------
// HeroParallax Section
// ---------------------------
const HeroParallax = ({ products }) => {
    const containerRef = React.useRef(null);

    // Calculate the total horizontal width
    const totalWidth = products.length * 36; // rem: card width + gaps (~adjustable)
    const horizontalScrollLength = totalWidth - 100; // viewport width in rem (approx)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map vertical scroll progress to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalScrollLength * 16]); // rem → px

    return (
        <section
            ref={containerRef}
            className="relative h-[100vh] overflow-hidden"
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex items-center">
                <motion.div
                    className="flex space-x-20 px-20"
                    style={{ x }}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            product={product}
                            index={index}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </div>

            {/* This spacer div controls how long the horizontal scroll lasts */}
            <div style={{ height: `${products.length * 35}vh` }}></div>
        </section>
    );
};

// ---------------------------
// Header (Placed separately inside ProductCard row’s beginning if needed)
// ---------------------------
// If you want the header to be visible at the start of the horizontal scroll, you can insert it as the first "card"

const Header = () => {
    return (
        <div className="min-w-[32rem] flex flex-col justify-center px-4">
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

// ---------------------------
// Product Card
// ---------------------------
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
