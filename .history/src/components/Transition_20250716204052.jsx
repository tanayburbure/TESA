import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimationComponent = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and slide text in from bottom
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Scale and fade in image
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={textRef}
          className="text-5xl font-bold tracking-tight mb-8"
        >
          Elevate Your Visual Storytelling
        </h1>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            ref={imageRef}
            src="/images/principale.png"
            alt="Animation Visual"
            className="w-full object-cover h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationComponent;
