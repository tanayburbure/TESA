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
      },
    });

    return () => {
      changeColor.kill();
    };
  }, []);

  return null; // This component does not render anything
};

export default PageTransition;
