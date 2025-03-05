import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PageTransition = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("body", {
        backgroundColor: "black",
        color: "white",
        scrollTrigger: {
          trigger: "body",
          start: "center top",
          end: "bottom top",
          scrub: 1, // Adjust scrub value for smoother transition
          markers: true, // Add markers for debugging
        },
      });
    });

    return () => ctx.revert(); // Cleanup function to revert changes
  }, []);

  return (
    <div className="min-h-[200vh] flex items-center justify-center text-4xl">
      Scroll Down to Change Background Color
    </div>
  );
};

export default PageTransition;
