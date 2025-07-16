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
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] flex justify-center items-center text-white">
      <div className="fixed top-10 text-2xl font-bold">Scroll Down to See Background Change</div>
    </div>
  );
};

export default ScrollBgTransition;
