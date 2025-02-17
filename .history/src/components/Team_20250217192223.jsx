import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const images = imagesRef.current;

    if (section && images.length > 0) {
      // Pin the section to stop scrolling until animation is complete
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=300%", // Adjust end position
        pin: true, // Keep the section fixed during animation
        scrub: 1, // Smooth effect
      });

      // Animate images to slide left one by one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%", // Adjust to match content length
          scrub: 1,
        },
      });

      tl.to(images, {
        x: "-100%", // Move all images left
        duration: 3,
        stagger: 0.3,
        ease: "power2.out",
      });

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden h-screen w-full bg-white flex justify-center items-center">
      <div id="Contain" className="flex gap-10 overflow-hidden">
        {[
          "Artificial Intelligence",
          "Laptop",
          "IoT",
          "Mobile",
          "Automotive",
          "Audio",
          "WiFi Network",
          "XR/VR",
        ].map((title, index) => (
          <div
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden"
          >
            <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">
              {title}
            </h3>
            <img
              src="/images/vaishnavi_ghatge.jpg"
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
