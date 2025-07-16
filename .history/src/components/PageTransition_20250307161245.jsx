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
      height: "100vh", // Full viewport height
      ease: "power2.In",
      scrollTrigger: {
        trigger: "body", // Trigger on entire body
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true, // Remove after testing
        pin: true, // Pin the animation while scrolling
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full flex items-center justify-center bg-[#EBEBEB]">
      {/* Black Overlay with shadow effect */}
      <div
        ref={overlayRef}
        className="fixed bottom-0 left-0 w-full h-0 bg-black"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
          boxShadow: "0px -20px 50px rgba(0,0,0,0.8)", // Shadow effect at the top
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
