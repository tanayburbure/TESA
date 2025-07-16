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
      height: "200vh", // Overlay grows to twice the page height
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
    <div ref={containerRef} className="relative h-[100vh] flex items-center justify-center bg-[#EBEBEB] overflow-hidden">
      {/* Black Overlay with Sphere-like Effect */}
      <div
        ref={overlayRef}
        className="absolute top-[-50vh] left-1/2 transform -translate-x-1/2 w-[300vw] h-0 bg-black"
        style={{
          maskImage: "radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 70%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 70%)",
          boxShadow: "0px -50px 100px rgba(0,0,0,0.8)", // Bigger shadow effect
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
