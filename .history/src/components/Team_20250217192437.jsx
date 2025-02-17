import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const imageContainerRef = useRef(null); // Refs for image container and section
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        const images = imageContainerRef.current;
        const containerWidth = images.scrollWidth; // Full width of all images
        const viewportWidth = images.clientWidth; // Visible area

        // Total amount to move (ensuring all images pass through)
        const moveAmount = -(containerWidth - viewportWidth);

        // GSAP Timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%", // Extended pinning duration for smooth scrolling
            scrub: true, // Smooth animation based on scroll
            pin: true,  // Pinning the image container only, not the whole section
            anticipatePin: 1, // Anticipate the pinning process
          },
        });

        // Move images left to reveal all
        tl.to(images, {
          x: moveAmount, // Moves left until last image is visible
          duration: 2,  // Smooth animation duration
          ease: "power2.inOut", // Easing for smoothness
        });

        // Reverse animation on upward scroll (when scrolling back up)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true, // Reverses animation on upward scroll
          pin: false,  // Don't pin on reverse scroll
        });
      }
    });

    return () => ctx.revert(); // Cleanup when component unmounts
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div className="page5">
        <div ref={sectionRef} id="page5" className="relative h-screen w-full bg-white overflow-hidden">
          <h1 className="text-[#103289] text-3.7vw leading-[4vw] tracking-[-0.2vh] text-left font-normal font1 pt-8vh pl-5vw">
            WELCOME TO QUALCOMM
          </h1>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            Discover our diverse range of
          </h2>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            offerings and resources
          </h2>

          {/* Images move smoothly */}
          <div
            id="Contain"
            ref={imageContainerRef}
            className="mt-5 w-[230%] h-[60%] mt-[-1.5vw] gap-10vw pl-15vw relative flex justify-evenly items-center"
          >
            {[ 
              "Artificial Intelligence",
              "Laptop",
              "IoT",
              "Mobile",
              "Automotive",
              "Audio",
              "Wifi Network",
              "XR/VR"
            ].map((category, index) => (
              <div key={index} className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
                <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">
                  {category}
                </h3>
                <img src="./images/vaishnavi_ghatge.jpg" alt={category} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
