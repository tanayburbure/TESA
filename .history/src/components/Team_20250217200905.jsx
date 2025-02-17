import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        // Pinning the section and animating the images
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%", // Section remains pinned
            scrub: 1, // This allows for reverse animation
            pin: true,
            anticipatePin: 1, // Helps smooth the pinning effect
          },
        });

        tl.to(imageContainerRef.current, {
          x: "-60%", // Move images while the section is pinned
          duration: 2, // Animation duration
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div className="page5">
        <div ref={sectionRef} id="page5" className="relative h-screen w-full overflow-hidden">
          <h1 className="text-[#103289] text-[6vw] leading-[4vw] tracking-[-0.2vh] absolute top-[32%] font-[font1] pt-[8vh] pl-[5vw]">
            OUR CORE TEAM
          </h1>
          {/* Only images move */}
          <div
            id="Contain"
            ref={imageContainerRef}
            className="mt-[9vh] w-[230%] h-[60%] gap-[2vw] pl-[50vw] relative flex justify-evenly items-center"
          >
            {[
              "Artificial Intelligence",
              "Laptop",
              "IoT",
              "Mobile",
              "Automotive",
              "Audio",
              "Wifi Network",
              "XR/VR",
            ].map((category, index) => (
              <div key={index} className="elem w-[8%] mt-24 h-[45vh] relative rounded-[1vh] overflow-hidden">
                <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
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
