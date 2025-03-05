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

    return () => {
      changeColor.kill();
    };
  }, []);

  return <div className="page-transition" />; // This component now renders a div
};

export default PageTransition;
