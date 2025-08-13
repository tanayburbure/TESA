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
    const ref = React.useRef(null);
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

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

    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-100, 100, 100, 5000]),
        springConfig
    );

    // GSAP horizontal scrolling effect
    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
                if (sectionRef.current && cardsContainerRef.current) {
                    // Horizontal scroll animation
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: "+=200%",
                            scrub: 1,
                            pin: true,
                            anticipatePin: 1,
                            fastScrollEnd: true,
                            invalidateOnRefresh: true,
                        },
                    });

                    tl.to(cardsContainerRef.current, {
                        x: "-70%", // Adjusted for better scrolling
                        duration: 2,
                        ease: "power1.inOut",
                        force3D: true,
                        overwrite: "auto",
                    });
                }
            });
        };

        const timer = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timer);
            ctx && ctx.revert();
        };
    }, []);

    const renderedProducts = useMemo(() => {
        return products.map((product, index) => (
            <ProductCard
                product={product}
                index={index}
                key={product.title}
            />
        ));
    }, [products]);

    return (
        <div
            ref={ref}
            className="wrapper relative select-none overflow-hidden"
        >
            {/* Header with absolute positioning and high z-index */}
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-auto">
                <Header />
            </div>
            
            {/* Cards section with lower z-index */}
            <div ref={sectionRef} className="relative h-screen w-full overflow-hidden z-10">
                <motion.div
                    style={{
                        rotateX,
                        rotateZ,
                        translateY,
                        opacity,
                    }}
                    // POSITIONING METHOD 1: Change justify alignment
                    // justify-start = align to left
                    // justify-center = align to center 
                    // justify-end = align to right
                    className="flex justify-start h-full items-center"
                >
                    <div
                        ref={cardsContainerRef}
                        // POSITIONING METHOD 2: Use reasonable padding/margin values
                        // Current: pl-10 (padding-left: 2.5rem = 40px) - moves cards RIGHT
                        // Options:
                        // pl-4 = 16px, pl-8 = 32px, pl-12 = 48px, pl-16 = 64px, pl-20 = 80px
                        // OR use pl-[5vw] for 5% viewport width, pl-[10vw] for 10%, etc.
                        // OR use transform in style for pixel-perfect positioning
                        className="flex space-x-20 pl-10"
                        style={{ 
                            width: "fit-content",
                            willChange: "transform",
                            // POSITIONING METHOD 3: Use transform for precise positioning
                            // Uncomment and adjust the translateX value as needed:
                            // transform: "translateX(200px)",  // Move 200px RIGHT
                            transform: "translateX(-100px)", // Move 100px LEFT
                        }}
                    >
                        {renderedProducts}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// ---------------------------
// Header
// ---------------------------
const Header = () => {
    return (
        <div className="max-w-7xl bg-transparent relative mx-auto py-20 md:py-28 px-4 w-full">
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
                className="rounded-full mt-4 ml-28 font-semibold text-md font-[font3] px-4 pb-2 pt-2 bg-[#4c8069] hover:bg-[#3b6654] transition-colors pointer-events-auto"
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

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -20 }}
            className="group/product no-draw h-[29rem] w-[32rem] relative shrink-0"
            style={{
                // CARD SPACING: Adjust marginRight to change space between cards
                // Increase value (e.g., "3rem") for more space
                // Decrease value (e.g., "1rem") for less space
                marginRight: "2rem",
                willChange: "transform, opacity",
            }}
        >
            <img
                src={product.thumbnail}
                className="object-cover object-center absolute h-full w-full inset-0"
                alt={product.title}
                loading="lazy"
                decoding="async"
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