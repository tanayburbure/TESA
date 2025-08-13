"use client";
import React from "react";
import { motion } from "framer-motion";

// ---------------------------
// Main Lead Component
// ---------------------------
export default function Lead() {
    return <HorizontalScrollSection products={products} />;
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
// NEW HorizontalScrollSection
// ---------------------------
const HorizontalScrollSection = ({ products }) => {
    return (
        // Main container that locks vertical scroll and enables horizontal scroll
        <div className="h-screen flex items-center overflow-x-auto overflow-y-hidden">
            <div className="flex">
                {/* The Header now acts as the first "page" in the horizontal scroll */}
                <div className="w-screen h-screen shrink-0 flex items-center justify-center">
                    <Header />
                </div>
                
                {/* The Product Cards are mapped out in a row */}
                {products.map((product) => (
                    <div 
                        key={product.title} 
                        className="w-screen h-screen shrink-0 flex items-center justify-center p-8 md:p-20"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};


// ---------------------------
// Header (Slightly simplified for this layout)
// ---------------------------
const Header = () => {
    return (
        <div className="max-w-2xl text-center">
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
                className="rounded-full mt-8 font-semibold text-md font-[font3] px-4 pb-2 pt-2 bg-[#4c8069] hover:bg-[#3b6654] transition-colors"
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
// Product Card (Unchanged)
// ---------------------------
const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -20, scale: 1.05 }}
            className="group/product no-draw h-[29rem] w-[32rem] relative shrink-0 bg-zinc-900 shadow-2xl rounded-lg"
        >
            <img
                src={product.thumbnail}
                className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
                alt={product.title}
            />
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-[font4] font-bold text-white p-2 rounded bg-black/50">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};