"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

// Combined Startup component
export default function Startup() {
    return <HeroParallax products={products} />;
}

// Product data (keeping your existing data)
export const products = [
    {
        title: "Vectron XT Films",
        link: "https://gomoonbeam.com",
        thumbnail: "./images/aditya(vectron).jpg",
        description: "I am a Travel Cinematographer/Photographer and a self-taught video editor from Pune, Maharashtra. I am well-known for creating stunning transition videos even without professional gear. So far, I have explored 8 states/ 1 UT and over 25 cities in India with the intention to travel the world and capture every moment of it. Apart from that, I have successfully delivered 20+ video production projects for my clients across India.",
        profile: {
            name: "ADITYA NIMBALKAR",
            details: "BE 2025",
            imageUrl: "./images/aaditya nimbalkar.jpg",
        }
    },
    {
        title: "WEB AGENCY",
        link: "https://tanayburbure.com",
        thumbnail: "./images/tanayweb.png",
        description: "A personal portfolio site showcasing various web projects.",
        profile: {
            name: "TANAY BURBURE",
            details: "BE 2026",
            imageUrl: "./images/Tanayburbure.jpg",
        }
    },
    {
        title: "SEARCH-IN TECH",
        link: "",
        thumbnail: "./images/Search_In.png",
        description: "Search-In is an End-to-End provider of tech to digital service. People in the business community trust Search-in service due to clarity and work-ethic. Search-In is one of the prominent companies with remarkable expertise & execution.",
        profile: {
            name: "ANKIT SONAWANE",
            details: "BE 2022",
            imageUrl: "./images/Ankit_Photo.jpg",
        }
    },
    {
        title: "FULL STACK DEVELOPER",
        link: "https://editorially.org",
        thumbnail: "./images/Mayank start.png",
        description: "Myself Mayank, I am a B.tech undergrad with great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. I'm constantly imporveing my Full-stack developing skills. With my passion for tech , I am very egar to contribute to a bigger cause.",
        profile: {
            name: "Mayank Deshmukh",
            details: "BE 2026",
            imageUrl: "./images/Mayank.png",
        }
    },
    {
        title: "S2 ART AND CRAFTS",
        link: "https://editrix.ai",
        thumbnail: "./startup/S2 ART.png",
        description: "My art account serves as a creative hub showcasing a diverse range of artwork, including canvas paintings, customized calendars, and other innovative creations. With a focus on originality and personalization, my small-scale business offers unique pieces that resonate with my audience's tastes and preferences.",
        profile: {
            name: "SHRADDHA SIDHANKAR",
            details: "BE 2024",
            imageUrl: "./startup/Shraddha.png",
        }
    },
    {
        title: "SASSY DESIGNS",
        link: "https://app.pixelperfect.quest",
        thumbnail: "./startup/sassyDesigns.png",
        description: "Elevate your message with Tushar Patil's skilled touch. Whether it's dynamic video edits or compelling poster designs, capture attention and convey your story with finesse. From menus to political campaigns, every project shines with creativity and impact, making your vision a reality !!",
        profile: {
            name: "TUSHAR PATIL ",
            details: "BE 2024",
            imageUrl: "./startup/sassyDesigns.png",
        }
    },
    {
        title: "FILMMAKER",
        link: "https://algochurn.com",
        thumbnail: "./startup/adarshgaurav.jpg",
        description: "I am filmmaker , I do films and advertising for the company's. I do cinematography, Video Editing, Animation and vfx. I also do a marketing for the company's.",
        profile: {
            name: "ADARSH GAURAV",
            details: "BE 2024",
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
    const cardWidth = 512; // 32rem = 512px
    const cardSpacing = 80; // 5rem = 80px
    const totalWidth = products.length * (cardWidth + cardSpacing);

    // Horizontal scroll that moves through all cards
    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 0.7], [0, -totalWidth + window.innerWidth]),
        springConfig
    );

    // Vertical movement after horizontal scroll is complete
    const translateY = useSpring(
        useTransform(scrollYProgress, [0.7, 1], [0, -200]),
        springConfig
    );

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.2, 1, 1, 0.5]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[500vh] select-none py-40 overflow-hidden antialiased relative flex flex-col"
        >
            <Header />
            <motion.div
                style={{
                    opacity,
                }}
                className="flex items-center justify-center min-h-screen"
            >
                <motion.div 
                    className="flex space-x-20 px-10"
                    style={{
                        x: translateX,
                        y: translateY,
                    }}
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

// Header component (simplified)
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
        </div>
    );
};

// ProductCard component (simplified to show only title)
const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{
                y: -20,
                scale: 1.05,
            }}
            key={product.title}
            className="group/product bg-zinc-900 h-[29rem] w-[32rem] relative shrink-0 rounded-lg overflow-hidden"
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl"
            >
                <img
                    src={product.thumbnail}
                    height="464"
                    width="512"
                    className="object-cover object-center h-full w-full"
                    alt={product.title}
                />
            </a>
            
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none transition-opacity duration-300"></div>
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-2xl font-[font4] font-bold text-white">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};
