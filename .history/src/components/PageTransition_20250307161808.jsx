"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollBgTransition = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(overlayRef.current, {
      height: "100%", // Moves the black overlay from bottom to top
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Starts when div enters viewport
        end: "top center", // Ends at the center of the viewport
        scrub: 1.5,
        markers: true, // Remove after testing
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] flex items-center justify-center bg-[#EBEBEB]">
      {/* Black Overlay with smooth gradient transition */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 w-full h-0 bg-black"
        style={{
          maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)", // Reversed gradient
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)",
          boxShadow: "0px -20px 50px rgba(0,0,0,0.8)", // Shadow effect
        }}
      ></div>

      {/* Content */}
      <h1 className="text-2xl font-bold text-white relative z-10">
        Scroll Up to See the Color Move
      </h1>
    </div>
  );
};

export default ScrollBgTransition;
