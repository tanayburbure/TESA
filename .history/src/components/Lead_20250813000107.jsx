"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

// Combined Lead component
export default function Lead() {
    return <HeroParallax products={products} />;
}

// Product data
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

// HeroParallax component
const HeroParallax = ({ products }) => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // Calculate total width needed for all cards
    const cardWidth = 32; // 32rem per card
    const cardSpacing = 5; // 20/4 = 5rem spacing between cards
    const totalCardsWidth = (cardWidth + cardSpacing) * products.length;

    // Horizontal scroll for cards - moves them horizontally when cards are in fixed position
    const translateX = useSpring(
        useTransform(scrollYProgress, [0.2, 0.8], [0, -(totalCardsWidth * 16)]), // Convert rem to px (16px = 1rem)
        springConfig
    );
    
    // Initial animation - coming from top
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    
    // Vertical position - comes down and stays fixed during horizontal scroll, then continues down
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-700, 0, 0, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[400vh] select-none py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            
            {/* Fixed position container for horizontal scroll */}
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="sticky top-1/2 -translate-y-1/2"
            >
                {/* Horizontal scrolling cards */}
                <motion.div 
                    className="flex space-x-20 pl-20"
                    style={{ x: translateX }}
                >
                    {products.map((product) => (
                        <ProductCard
                            product={product}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

// Header component with all texts
const Header = () => {
    return (
        <div className="max-w-7xl z-[1] relative mx-auto py-20 md:py-28 px-4 w-full left-0 top-0">
            <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
                The Ultimate
            </h1>
            <h1 className="text-2xl font-[font2] md:text-6xl font-bold">
                <span className="text-[#3B6654] font-[font1] md:text-[10vh] font-bold">STARTUP</span> Promotion
            </h1>
            <h3 className="pt-1 text-2xl font-[font3]">presented by <span className="text-[#3B6654] font-bold">TESA</span></h3>
            <h3 className="text-2xl font-[font1] pt-2 font-medium">INNOVATE | COLABORATE | TRANSFORM</h3>
            <button
                className="rounded-full mt-4 ml-28 font-semibold text-md font-[font3] px-4 pb-2 pt-2 bg-[#4c8069] hover:bg-[#3b6654] transition-colors"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdiPRCJnQJWgy-HcWOuGQEfA5LHrx_3CxFpiDlSpJNJXLUt0Q/viewform', '_blank')}
            >
                Add your Start-up
            </button>
        </div>
    );
};

// Simplified ProductCard component - only title inside card
const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product no-draw bg-zinc-900 h-[29rem] w-[32rem] relative shrink-0"
        >
            <img
                src={product.thumbnail}
                height="300"
                width="300"
                className="object-cover object-center absolute h-full w-full inset-0"
                alt={product.title}
            />
            
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            
            {/* Only title overlay - nothing else inside the card */}
            <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-[font4] font-bold text-white p-2 rounded bg-black/50">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};
