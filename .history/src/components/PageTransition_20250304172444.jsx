import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PageTransition = () => {
  useEffect(() => {
    const changeColor = gsap.to(document.body, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none none", // Prevent reverse
      },
    });

    // Change the initial background color to white
    document.body.style.backgroundColor = "white";

    return () => {
      changeColor.kill();
    };
  }, []);

  return <div className="page-transition h-[100vh]" />; // This component now renders a div
};

export default PageTransition;
