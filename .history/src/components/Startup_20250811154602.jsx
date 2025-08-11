//     const img = ["./startup/VXT.jpg", "./startup/Searchin.png", "./startup/Mayankstart.png", "./startup/S2 ART.png", "./startup/sassyDesigns.png", "./startup/adarshgaurav.jpg"]
//     const field = ["Media", "Technology", "Technology", "Art and Craft", "Media", "Media"]
//     const brand = ["Vectron XT Films", "SEARCH-IN TECH", "MAYANK DESHMUKH", "S2 ART AND CRAFTS", "SASSY DESIGNS", "ADARSH GURAV"]
//     const Description = ["I am a Travel Cinematographer/Photographer and a self-taught video editor from Pune, Maharashtra. I am well-known for creating stunning transition videos even without professional gear. So far, I have explored 8 states/ 1 UT and over 25 cities in India with the intention to travel the world and capture every moment of it. Apart from that, I have successfully delivered 20+ video production projects for my clients across India.",

//         "Search-In is an End-to-End provider of tech to digital service. People in the business community trust Search-in service due to clarity and work-ethic. Search-In is one of the prominent companies with remarkable expertise & execution.",

//         "Myself Mayank, I am a B.tech undergrad with great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. I'm constantly imporveing my Full-stack developing skills. With my passion for tech , I am very egar to contribute to a bigger cause.",

//         "My art account serves as a creative hub showcasing a diverse range of artwork, including canvas paintings, customized calendars, and other innovative creations. With a focus on originality and personalization, my small-scale business offers unique pieces that resonate with my audience's tastes and preferences.",
//         "Elevate your message with Tushar Patil's skilled touch. Whether it's dynamic video edits or compelling poster designs, capture attention and convey your story with finesse. From menus to political campaigns, every project shines with creativity and impact, making your vision a reality !!",

//         "I am filmmaker , I do films and advertising for the company's. I do cinematography, Video Editing, Animation and vfx. I also do a marketing for the company's."]

//     const profile = ["./startup/aaditya.jpg", "./startup/Searchin.png", "./startup/Mayank.png", "./startup/Shraddha.png", "./startup/sassyDesigns.png", "./startup/adarshgaurav.jpg"]
//     const Name = ["Aditya Nimbalkar", "Ankit Sonawane", "Mayank Deshmukh", "Shraddha Sidhankar", "Tushar Patil", "Adarsh Gurav"]
//     const batch = ["BE 2025", "BE 2022", "BE 2026", "BE 2024", "BE 2024", "BE 2024"]
//     const Too = ["INSTAGRAM", "WEBSITE", "WEBSITE", "INSTAGRAM", "INSTAGRAM", "INSTAGRAM"]
"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

// Combined Startup component
export default function Startup() {
  return <HeroParallax products={products} />;
}

// Product data
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

// HeroParallax component
const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
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
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[350vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold ">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 ">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

// ProductCard component
const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
