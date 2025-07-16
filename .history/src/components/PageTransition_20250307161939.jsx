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
      scale: 2, // Scale up to ensure full coverage
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", 
        end: "top center",
        scrub: 1.5,
        markers: true, // Remove after testing
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] flex items-center justify-center bg-[#EBEBEB] overflow-hidden">
      {/* Black Overlay with radial gradient mask */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50vw] h-[50vw] bg-black rounded-full"
        style={{
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
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
