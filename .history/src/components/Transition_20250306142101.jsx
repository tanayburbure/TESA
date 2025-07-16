import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Transition() {
  const transitionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      transitionRef.current,
      { y: "50%" }, // Start from bottom
      {
        y: "0%", // Move up to cover the screen
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: transitionRef.current,
          markers:true,
          start: "100 00", // Start animation when element enters viewport
          end: "200", // End animation when it reaches the top
          scrub: true, // Smooth effect while scrolling
        },
      }
    );
  }, []);

  return (
    <div ref={transitionRef} className="fixed inset-0 bg-zinc-900"></div>
  );
}
