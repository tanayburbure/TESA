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

    // Horizontal scroll behavior
    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 0.8, 1], [0, -1200, -1200]),
        springConfig
    );
    
    // Enhanced initial animation similar to GSAP
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [25, 0]),
        { stiffness: 400, damping: 40, bounce: 0 }
    );
    
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [0, 1]),
        { stiffness: 400, damping: 40, bounce: 0 }
    );
    
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [15, 0]),
        { stiffness: 400, damping: 40, bounce: 0 }
    );
    
    // Smooth drop-in animation from top
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [-800, 0, 0, 800]),
        { stiffness: 400, damping: 40, bounce: 0 }
    );

    // Scale animation for smooth entrance
    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [0.7, 1]),
        { stiffness: 400, damping: 40, bounce: 0 }
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] select-none py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                    scale,
                }}
                className="flex justify-center"
            >
                {/* Single row with all cards */}
                <motion.div 
                    className="flex space-x-20"
                    style={{ x: translateX }}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            product={product}
                            index={index}
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

// Enhanced ProductCard with individual smooth animations
const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ 
                y: -100, 
                opacity: 0, 
                rotateX: 30,
                scale: 0.8
            }}
            animate={{ 
                y: 0, 
                opacity: 1, 
                rotateX: 0,
                scale: 1
            }}
            transition={{ 
                duration: 0.8,
                delay: index * 0.1, // Staggered animation
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing similar to GSAP's power1.inOut
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
            whileHover={{
                y: -20,
                scale: 1.02,
                rotateY: 5,
                transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                }
            }}
            key={product.title}
            className="group/product no-draw bg-zinc-900 h-[29rem] w-[32rem] relative shrink-0"
            style={{ willChange: "transform, opacity" }}
        >
            <motion.img
                src={product.thumbnail}
                height="300"
                width="300"
                className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
                alt={product.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ 
                    duration: 1,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut"
                }}
            />
            
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
            
            {/* Enhanced title overlay with smooth animation */}
            <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 + 0.4,
                    ease: "easeOut"
                }}
            >
                <h2 className="text-2xl font-[font4] font-bold text-white p-3 rounded-lg bg-black/60 backdrop-blur-sm transform transition-all duration-300 group-hover/product:bg-black/80">
                    {product.title}
                </h2>
            </motion.div>
        </motion.div>
    );
};
