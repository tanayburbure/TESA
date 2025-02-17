import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Domain";


gsap.registerPlugin(ScrollTrigger);
const Team = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Setup GSAP ScrollTrigger
    gsap.to(scrollContainerRef.current, {
      xPercent: -67, // Scroll through 200% width (for 3 pages)
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true, // Pin the container while scrolling
        scrub: 1,  // Smooth scrubbing
        end: () => `+=${scrollContainerRef.current.scrollWidth}`, // Set end after scrolling through all c// Snap to each page
      },
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper overflow-x-hidden">
      <div
        className="flex w-[300vw] items-center justify-center h-[70vh]"
        ref={scrollContainerRef}
      >
        {/* Page 1 */}
        <div className="w-screen h-[80vh] bg-red-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Page 1</h1>
        </div>
        {/* Page 2 */}
        <div className="w-screen h-[80vh] bg-green-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Page 2</h1>
        </div>
        {/* Page 3 */}
        <div className="w-screen h-[80vh] bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-4xl">Page 3</h1>
        </div>
      </div>

    </div>
  );
};


export default Team