import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const imageContainerRef = useRef(null); // Ref for the image container
  const sectionRef = useRef(null); // Ref for the section

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        const images = imageContainerRef.current;
        const containerWidth = images.scrollWidth; // Full width of all images
        const viewportWidth = images.clientWidth; // Visible area

        // Total amount to move (ensuring all images pass through)
        const moveAmount = -(containerWidth - viewportWidth);

        // GSAP ScrollTrigger for the horizontal movement of images
        gsap.to(images, {
          x: moveAmount, // Move images to the left
          ease: "power2.inOut", // Smooth easing
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // Start when the section is at the top of the viewport
            end: "+=200%", // The scroll range before the pinning ends
            scrub: true, // Sync scroll with the animation
            pin: sectionRef.current, // Pin the section while the scroll happens
            anticipatePin: 1,
          },
        });
      }
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div className="page5">
        <div ref={sectionRef} id="page5" className="relative h-screen w-full bg-white overflow-hidden">
          {/* Text stays in the main section */}
          <h1 className="text-[#103289] text-3.7vw leading-[4vw] tracking-[-0.2vh] text-left font-normal font1 pt-8vh pl-5vw">
            WELCOME TO QUALCOMM
          </h1>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            Discover our diverse range of
          </h2>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            offerings and resources
          </h2>

          {/* Image container that moves */}
          <div
            ref={imageContainerRef} // Attach ref for scrollTrigger
            className="mt-5 w-[230%] h-[60%] mt-[-1.5vw] gap-10vw pl-15vw relative flex justify-evenly items-center"
            style={{ display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden" }}
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
