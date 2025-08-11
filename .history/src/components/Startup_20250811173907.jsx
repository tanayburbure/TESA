"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion"; // Note: changed 'motion/react' to 'framer-motion' for better compatibility



// Combined Startup component
export default function Startup() {
  return <HeroParallax products={products} />;
}



// Product data
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
    title: "Tanay Burbure",
    link: "https://tanayburbure.com",
    thumbnail: "./images/tanayweb.png",
    description: "A personal portfolio site showcasing various web projects.",
    profile: {
        name: "Tanay Burbure",
        details: "BE 2026",
        imageUrl: "./images/Tanayburbure.jpg",
    }
  },
  {
    title: "Mayank Deshmukh",
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
        name: "Shraddha Sidhankar",
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
    title: "Adarsh Gurav",
    link: "https://algochurn.com",
    thumbnail: "./startup/adarshgaurav.jpg",
    description: "I am filmmaker , I do films and advertising for the company's. I do cinematography, Video Editing, Animation and vfx. I also do a marketing for the company's.",
    profile: {
        name: "Adarsh Gurav",
        details: "BE 2024",
        imageUrl: "./startup/adarshgaurav.jpg",
    }
  },
];


// HeroParallax component
const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);
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
      className="h-[400vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] "
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
        {/* CHANGED: Added transform: translateX(-20vh) to move first row to the left */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" style={{ transform: 'translateX(-40vh)' }}>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* CHANGED: Added transform: translateX(20vh) to move second row to the right */}
        <motion.div className="flex flex-row mb-20 space-x-20" style={{ transform: 'translateX(40vh)' }}>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* CHANGED: Added transform: translateX(-20vh) to move third row to the left */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20" style={{ transform: 'translateX(-120vh)' }}>
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
      className="group/product bg-zinc-900 h-[26rem] w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="300"
          width="300"
          className="object-cover object-center absolute h-[58%] w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      
      {/* Title overlay on thumbnail */}
      <div className="absolute bottom-[35%] left-4 right-4">
        <h2 className="text-2xl font-bold text-white p-2 rounded">
            {product.title}
        </h2>
      </div>
      
      <div className="absolute bottom-14  p-4 rounded-xl group-hover/product:opacity-100 text-white w-full ">
        <div className="flex items-center mb-2">
            <img src={product.profile.imageUrl} alt={product.profile.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="text-lg font-bold">{product.profile.name}</p>
                <p className="text-sm text-gray-400">{product.profile.details}</p>
            </div>
        </div>
        <p className="text-sm mt-4">{product.description}</p>
      </div>
    </motion.div>
  );
};
