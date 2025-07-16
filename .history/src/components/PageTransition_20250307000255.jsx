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
        start: "top 200",
        end: "200 top",
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
