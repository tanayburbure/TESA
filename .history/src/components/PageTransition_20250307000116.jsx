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
        start: "200 top",
        end: "bottom top",
        markers: true,
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-[100vh] flex justify-center items-center text-white">
    </div>
  );
};

export default ScrollBgTransition;
