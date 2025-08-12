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
            className="h-[300vh] select-none py-40 overflow-hidden antialiased relative flex flex-col self
