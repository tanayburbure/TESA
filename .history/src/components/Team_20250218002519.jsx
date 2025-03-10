import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "Principal",
  "Laptop",
  "IoT",
  "Mobile",
  "Automotive",
  "Audio",
  "Wifi Network",
  "XR/VR",
];

const teamImages = [
  { src: "./images/vaishnavi_ghatge.jpg", category: "Artificial Intelligence" },
  { src: "./images/team_member2.jpg", category: "Laptop" },
  { src: "./images/team_member3.jpg", category: "IoT" },
  { src: "./images/team_member4.jpg", category: "Mobile" },
  { src: "./images/team_member5.jpg", category: "Automotive" },
  { src: "./images/team_member6.jpg", category: "Audio" },
  { src: "./images/team_member7.jpg", category: "Wifi Network" },
  { src: "./images/team_member8.jpg", category: "XR/VR" },
];

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
          ease: "linear", // Linear animation
        });
      }
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-x-hidden">
      <div className="page5">
        <div ref={sectionRef} id="page5" className="relative h-screen w-full overflow-hidden">
          <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
            OUR CORE TEAM
          </h1>
          {/* Only images move */}
          <div
            id="Contain"
            ref={imageContainerRef}
            className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
          >
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41.5vh]"></div>
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58vh]"></div>
            <img className="h-[100vh] w-[159vw] z-[999999] absolute left-0 top-0" src="public/team.png" alt="Team Background" />
            
            {teamImages.map((image, index) => (
              <div key={index} className="elem w-[8%] mt-24 h-[45vh] relative rounded-[1vh] overflow-hidden">
                <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
                  {image.category}
                </h3>
                <img src={image.src} alt={image.category} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
