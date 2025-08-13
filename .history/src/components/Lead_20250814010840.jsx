"use client";
import React, { useRef, useEffect, useMemo } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import cn from "classnames";

// GSAP ScrollTrigger simulation using Intersection Observer and scroll events
const useGSAPScrollTrigger = (triggerRef, containerRef, options = {}) => {
    useEffect(() => {
        if (!triggerRef.current || !containerRef.current) return;

        const trigger = triggerRef.current;
        const container = containerRef.current;
        let animationId;

        const handleScroll = () => {
            const triggerRect = trigger.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate progress based on scroll position
            const start = triggerRect.top;
            const progress = Math.max(0, Math.min(1, (windowHeight - start) / (windowHeight + triggerRect.height)));
            
            // Apply horizontal scroll transform
            const translateX = progress * -70; // -70% as in original GSAP animation
            container.style.transform = `translateX(${translateX}%)`;
        };

        // Pin effect simulation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.addEventListener('scroll', handleScroll);
                    trigger.style.position = 'sticky';
                    trigger.style.top = '0';
                } else {
                    document.removeEventListener('scroll', handleScroll);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(trigger);

        return () => {
            observer.disconnect();
            document.removeEventListener('scroll', handleScroll);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);
};

// ---------------------------
// Product Data for Startup Section
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
// Events Data
// ---------------------------
const images = [
    { src: "./images/Events/Athletics-sports.jpg", title: "Athletics", description: "Athletics is a comprehensive sports game that brings the exhilarating world of track and field to life on your gaming device." },
    { src: "./images/Events/Badminton-sports.jpg", title: "Badminton", description: "an exhilarating badminton tournament that promises fierce competition, thrilling rallies, and unforgettable moments on the court!." },
    { src: "./images/Events/BGAS-sports.jpg", title: "BGAS", description: "BGMI game with thrilling gameplay where players can choose between solo matches or teaming up with friends for squad battles." },
    { src: "./images/Events/Chess-sports.jpg", title: "Chess", description: "Dive into the timeless strategy of chess with this captivating digital rendition of the classic board game." },
    { src: "./images/Events/coffeealumini.jpg", title: "Coffee Alumni Meet", description: "Connect with old friends and make new memories." },
    { src: "./images/Events/Deadlift-sports.jpg", title: "Deadlift", description: "it is a challenging and intense fitness game that simulates the experience of weightlifting." },
    { src: "./images/Events/Incredible-cultural.jpg", title: "Incredible India", description: "merges pageantry and talent showcase, featuring diverse skills, interviews, and formalwear presentation for lively entertainment." },
    { src: "./images/Events/Innovator desk-technical.jpg", title: "Innovator Desk", description: "Here you come and pitch your Startup and innocation ideas for exciting prizes." },
    { src: "./images/Events/mission unblockable-tnpsc.jpg", title: "Mission Unblockable", description: "Remove block Every block has colour for which categories ques if you are ans is correct then you get 1point in some condition the zhenga is." },
    { src: "./images/Events/Mystery coders-technical.jpg", title: "Mystery Coders", description: "Blind coding event where u have to solve the problem statement with monitors switched off" },
    { src: "./images/Events/newsletter.jpeg", title: "Newsletter Workshop", description: "Learn to create and design engaging newsletters." },
    { src: "./images/Events/quizsocial.jpg", title: "Quiz Social", description: "A fun-filled evening of trivia and brain teasers." },
    { src: "./images/Events/Roborush-technical.jpg", title: "Roborush", description: "Roborush is and bot-obstacle racing event, the fastest one to complete Wins." },
    { src: "./images/Events/Scared games-cultural.jpg", title: "Scared Games", description: "A spooky night of horror stories and games." },
    { src: "./images/Events/Shiny colors-cultural.jpg", title: "Shiny Colors", description: "adorn faces and hands with imaginative designs using a palette of vibrant and shiny colors.lively and visually captivating atmosphere." },
    { src: "./images/Events/Table tennis-sports.jpg", title: "Table Tennis", description: "Immerse yourself in the fast-paced excitement of table tennis with this thrilling game." },
    { src: "./images/Events/telescan.png", title: "Telescan", description: "Explore the depths of technology and innovation." },
    { src: "./images/Events/Worthy words-cultural.jpg", title: "Worthy Words", description: "where Hindi poets entwine language, emotions, and culture, celebrating the profound impact of poetry in an enchanting atmosphere of heartfelt verses." },
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
        useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-10, 100, 100, 5000]),
        springConfig
    );

    // GSAP horizontal scrolling effect
    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            if (sectionRef.current && cardsContainerRef.current) {
                const trigger = sectionRef.current;
                const container = cardsContainerRef.current;
                
                const handleScroll = () => {
                    const rect = trigger.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculate scroll progress
                    const progress = Math.max(0, Math.min(1, 
                        (windowHeight - rect.top) / (windowHeight + rect.height * 2)
                    ));
                    
                    // Apply horizontal transform
                    const translateX = progress * -70;
                    container.style.transform = `translateX(${translateX}%)`;
                };

                // Setup scroll listener
                const scrollListener = () => {
                    requestAnimationFrame(handleScroll);
                };

                window.addEventListener('scroll', scrollListener, { passive: true });
                
                // Initial call
                handleScroll();

                ctx = () => {
                    window.removeEventListener('scroll', scrollListener);
                };
            }
        };

        const timer = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timer);
            ctx && ctx();
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
            <div ref={sectionRef} className="relative h-[200vh] w-full overflow-hidden z-10">
                <div className="sticky top-0 h-screen flex justify-start items-center overflow-hidden">
                    <motion.div
                        style={{
                            rotateX,
                            rotateZ,
                            translateY,
                            opacity,
                        }}
                        className="flex justify-start h-full items-center"
                    >
                        <div
                            ref={cardsContainerRef}
                            className="flex space-x-20 pl-[35vw]"
                            style={{ 
                                width: "fit-content",
                                willChange: "transform",
                            }}
                        >
                            {renderedProducts}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="max-w-7xl bg-transparent relative mx-auto py-20 md:py-60 px-4 w-full">
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
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -20 }}
            className="group/product no-draw h-[29rem] w-[32rem] relative shrink-0"
            style={{
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

// ---------------------------
// ParallaxScroll Component
// ---------------------------
const ParallaxScroll = ({ images, className }) => {
  const { scrollYProgress } = useScroll(); // Use the default window scroll

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("items-start w-full select-none", className)}>
      <h1 className="text-center text-8xl text-[#3B6654] font-semibold font-[font1] mt-32">OUR EVENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-[font3] font-semibold">{el.title}</h3>
                  <p className="text-sm font-[font3] text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-[font3] font-semibold">{el.title}</h3>
                  <p className="text-sm font-[font3] text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-[font3] font-semibold">{el.title}</h3>
                  <p className="text-sm font-[font3] text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------------------------
// Lead Component (from second file)
// ---------------------------
function Lead() {
    return <HeroParallax products={products} />;
}

// ---------------------------
// ParallaxScrollComponent (from first file)
// ---------------------------
function ParallaxScrollComponent({ className }) {
  return (
    <div className={className}>
      <ParallaxScroll images={images} />
    </div>
  );
}

// ---------------------------
// Main Combined Component Export
// ---------------------------
export default function CombinedParallaxComponent({ className }) {
  return (
    <div className={className}>
      {/* Startup Section */}
      <Lead />
      
      {/* Events Section */}
      <ParallaxScrollComponent />
    </div>
  );
}