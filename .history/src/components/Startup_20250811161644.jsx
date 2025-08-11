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
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    description: "A collaborative platform for creative professionals.",
    profile: {
        name: "Jane Doe",
        details: "UI/UX Designer",
        imageUrl: "https://placehold.co/100x100/A0C49D/213D2F?text=JD",
    }
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    description: "An AI-powered code editor to help you write code faster.",
    profile: {
        name: "John Smith",
        details: "Software Engineer",
        imageUrl: "https://placehold.co/100x100/F4EAD6/5E5E5E?text=JS",
    }
  },
  {
    title: "Tanay Burbure",
    link: "https://tanayburbure.com",
    thumbnail: "./images/tanayweb.png",
    description: "A personal portfolio site showcasing various web projects.",
    profile: {
        name: "Tanay Burbure",
        details: "BE 2024",
        imageUrl: "https://aceternity.com/images/products/thumbnails/new/tanay.png",
    }
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    description: "A minimalist writing and publishing tool for bloggers.",
    profile: {
        name: "Alice Johnson",
        details: "Technical Writer",
        imageUrl: "https://placehold.co/100x100/CBF1F5/203A43?text=AJ",
    }
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    description: "AI-driven editing and proofreading for academic papers.",
    profile: {
        name: "Bob Williams",
        details: "AI Researcher",
        imageUrl: "https://placehold.co/100x100/FFD1BA/5F3B40?text=BW",
    }
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    description: "Test and improve your design skills with daily challenges.",
    profile: {
        name: "Charlie Brown",
        details: "Graphic Designer",
        imageUrl: "https://placehold.co/100x100/C8A2C8/191970?text=CB",
    }
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    description: "A platform to practice data structures and algorithms.",
    profile: {
        name: "David Wilson",
        details: "Competitive Programmer",
        imageUrl: "https://placehold.co/100x100/F3CFCB/4B0082?text=DW",
    }
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    description: "A collection of beautiful and modern UI components.",
    profile: {
        name: "Eve Davis",
        details: "Frontend Developer",
        imageUrl: "https://placehold.co/100x100/F08080/FFFFFF?text=ED",
    }
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    description: "Everything you need to build stunning websites with Tailwind CSS.",
    profile: {
        name: "Frank Miller",
        details: "Fullstack Developer",
        imageUrl: "https://placehold.co/100x100/ADD8E6/000080?text=FM",
    }
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    description: "A platform for connecting students with internships.",
    profile: {
        name: "Grace Taylor",
        details: "Talent Acquisition",
        imageUrl: "https://placehold.co/100x100/90EE90/006400?text=GT",
    }
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    description: "3D rendering and animation services for architectural visualization.",
    profile: {
        name: "Henry Moore",
        details: "3D Artist",
        imageUrl: "https://placehold.co/100x100/FFB6C1/800000?text=HM",
    }
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    description: "Digital marketing and branding agency for small businesses.",
    profile: {
        name: "Ivy Clark",
        details: "Marketing Strategist",
        imageUrl: "https://placehold.co/100x100/FFDAB9/A52A2A?text=IC",
    }
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    description: "An online learning platform for early childhood education.",
    profile: {
        name: "Jack Robinson",
        details: "Educator",
        imageUrl: "https://placehold.co/100x100/F0E68C/556B2F?text=JR",
    }
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    description: "A web3 development studio focused on blockchain applications.",
    profile: {
        name: "Karen White",
        details: "Blockchain Developer",
        imageUrl: "https://placehold.co/100x100/DDA0DD/4B0082?text=KW",
    }
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    description: "Free and easy-to-use invoice generator for freelancers.",
    profile: {
        name: "Leo Garcia",
        details: "Financial Consultant",
        imageUrl: "https://placehold.co/100x100/B0E0E6/000080?text=LG",
    }
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
      className="h-[350vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] "
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

// ProductCard component - MODIFIED
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
      className="group/product h-[30rem] w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="300"
          width="300"
          className="object-cover object-center absolute h-[65%] w-full inset-0"
          alt={product.title}
        />
        {/* Title added on thumbnail at bottom */}
        <div className="absolute top-15 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 h-[65%] flex items-end group-hover/product:from-black/90">
          <h2 className="text-2xl font-bold text-white">
            {product.title}
          </h2>
        </div>
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      
      {/* Modified bottom section with profile info at top and description below */}
      <div className="absolute bottom-4 left-4 p-4 rounded-xl group-hover/product:opacity-100 text-white w-full">
        {/* Profile section moved to where title was */}
        <div className="flex items-center mb-2">
          <img src={product.profile.imageUrl} alt={product.profile.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-md font-bold">{product.profile.name}</p>
            <p className="text-sm text-gray-400">{product.profile.details}</p>
          </div>
        </div>
        {/* Description below profile */}
        <p className="text-sm mt-1">{product.description}</p>
      </div>
    </motion.div>
  );
};
