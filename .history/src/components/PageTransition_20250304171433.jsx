import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PageTransition = () => {
  useEffect(() => {
    gsap.to("body", {
      backgroundColor: "black",
      color: "white",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-[200vh] flex items-center justify-center text-4xl">
      Scroll Down to Change Background Color
    </div>
  );
};

export default PageTransition;
