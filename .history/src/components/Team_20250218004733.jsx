import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "Principal",
  "Head of Department",
  "TESA Chairperson",
  "TESA Chairperson",
  "President",
  "Vice-President",
  "General Secretary",
  "Administrator",
  "Treasurer"
];

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "left", top: "10%" },
  { src: "./images/hod.png", category: "Head of Department", position: "right", top: "20%" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "left", top: "30%" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "right", top: "40%" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "left", top: "50%" },
  { src: "../images/Madhavi Shinde_.jpg", category: "Vice-President", position: "right", top: "60%" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "left", top: "70%" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "right", top: "80%" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "left", top: "90%" },
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

        teamImages.forEach((image, index) => {
          tl.to(`#Contain .elem:nth-child(${index + 1})`, {
            x: image.position === "left" ? "-63%" : "63%", // Move images while the section is pinned
            top: image.top, // Adjust top position based on image
            duration: 2, // Animation duration
            ease: "linear", // Linear animation
          });
        });
      }
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-x-hidden">
      <div >
        <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
          <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
            OUR CORE TEAM
          </h1>
          {/* Only images move */}
          <div
            id="Contain"
            ref={imageContainerRef}
            className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
          >
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
            <img className="h-[100vh] w-[159vw] z-[999999] absolute left-0 top-0" src="public/team.png" alt="Team Background" />
            
            {teamImages.map((image, index) => (
              <div key={index} className="elem border-[4px] mt-24 h-[45vh] relative rounded-[1vh] overflow-hidden" style={{ position: "absolute", left: image.position === "left" ? "0" : "auto", right: image.position === "right" ? "0" : "auto", top: image.top }}>
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
