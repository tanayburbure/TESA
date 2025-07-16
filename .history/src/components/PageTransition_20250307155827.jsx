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
      height: "100%", // Moves the overlay from bottom to top
      ease: "power2.In",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-100 center",
        end: "top top",
        scrub: 1.5,
        markers: true, // Remove after testing
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] flex items-center justify-center bg-[#EBEBEB]">
      {/* White to Black Transition Effect */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 w-full h-0 bg-black"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 60%)",
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
