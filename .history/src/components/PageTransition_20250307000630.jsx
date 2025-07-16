"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollBgTransition = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef.current, {
      backgroundColor: "#000000",
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom",
        end: "top top",
        markers: true, // Remove this after testing
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[90vh] flex justify-center items-center text-white">
      <h1 className="text-2xl font-bold">Scroll Up to See Background Change</h1>
    </div>
  );
};

export default ScrollBgTransition;
