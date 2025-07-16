import React, { useRef, useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useTransform, useScroll } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "top-[28.7vh] left-[30vw]" },
  { src: "./images/hod.png", category: "Head of Department", position: "top-[1.2vh] left-[51vw]" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "top-[28.7vh] left-[71vw]" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "top-[1.2vh] left-[89.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "top-[28.7vh] left-[109vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President", position: "top-[1.2vh] left-[126vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "top-[28.7vh] left-[143.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "top-[1.2vh] left-[160.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "top-[28.7vh] left-[177vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const [isReady, setIsReady] = useState(false);

  // Memoize the transform function to prevent unnecessary recalculations
  const grayscale = useTransform(scrollY, [0, window.innerHeight], [100, 0], {
    clamp: true,
  });

  useEffect(() => {
    let ctx;
    
    // Ensure window is defined (prevents SSR issues)
    if (typeof window !== "undefined") {
      // Set ready state after a small delay to ensure DOM is fully loaded
      const readyTimer = setTimeout(() => setIsReady(true), 200);
      
      // Delay the GSAP initialization to ensure DOM is fully ready
      const initAnimation = () => {
        if (!sectionRef.current || !imageContainerRef.current) return;
        
        // Kill any existing ScrollTrigger instances to prevent duplicates
        ScrollTrigger.getAll().forEach(st => st.kill());
        
        ctx = gsap.context(() => {
          // Use transform: translate3d for better GPU acceleration
          gsap.set(imageContainerRef.current, {
            willChange: "transform",
            force3D: true,
            backfaceVisibility: "hidden"
          });
          
          // Horizontal scrolling animation with optimized performance settings
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 0.5, // Reduced for smoother scrolling
              pin: true,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
              onUpdate: self => {
                // Use requestAnimationFrame for smoother updates
                if (self.isDragging) {
                  requestAnimationFrame(() => {
                    gsap.set(imageContainerRef.current, { x: -63 * self.progress + "%" });
                  });
                  return true; // Skip default update
                }
                return false;
              }
            },
            onUpdate: () => {
              // Force GPU rendering during animation
              imageContainerRef.current.style.transform = imageContainerRef.current.style.transform.replace('matrix', 'translate3d');
            }
          });

          tl.to(imageContainerRef.current, {
            x: "-63%",
            duration: 2,
            ease: "none", // Linear easing for smoother scrolling
            force3D: true,
            overwrite: "auto",
          });
        });
      };

      // Initialize animation when component is ready
      if (isReady) {
        initAnimation();
      }

      return () => {
        clearTimeout(readyTimer);
        if (ctx) ctx.revert();
      };
    }
  }, [isReady]);

  // Optimize image loading with lazy loading and reduced quality for thumbnails
  const renderedTeamImages = useMemo(() => {
    return (
      <div className="team-images-container w-full h-full relative">
        {teamImages && teamImages.map((image, index) => (
          <div
            key={index}
            className={`team-image absolute border-[4px] mt-24 h-[45vh] z-[9999999] overflow-hidden ${image?.position || ''}`}
            style={{ 
              willChange: "transform, opacity",
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden"
            }}
          >
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
              {image?.category || ''}
            </h3>
            <img
              src={image?.src || ''}
              alt={image?.category || 'Team member'}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              style={{ transform: "translate3d(0,0,0)" }}
            />
          </div>
        ))}
      </div>
    );
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
          OUR CORE TEAM
        </h1>

        <div
          ref={imageContainerRef}
          className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
          style={{ 
            willChange: "transform", 
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden"
          }}
        >
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
          <img
            className="h-[100vh] w-[159.5vw] z-[999999] absolute left-0 top-0"
            src="./team.png"
            alt="Team Background"
            loading="lazy"
            decoding="async"
            style={{ transform: "translate3d(0,0,0)" }}
          />

          <div className="w-full h-full relative">
            {renderedTeamImages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;