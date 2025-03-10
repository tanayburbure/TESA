import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "top-[10vh] left-[150vw]" },
  { src: "./images/hod.png", category: "Head of Department", position: "top-[20vh] left-[160vw]" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "top-[30vh] left-[45vw]" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "top-[15vh] left-[65vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "top-[35vh] left-[85vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President", position: "top-[25vh] left-[105vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "top-[40vh] left-[125vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "top-[20vh] left-[145vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "top-[30vh] left-[165vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        // Pinning and moving images horizontally
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(imageContainerRef.current, {
          x: "-63%",
          duration: 2,
          ease: "linear",
        });

        // Stagger image animations (scale-in effect)
        gsap.fromTo(
          ".team-image",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-x-hidden">
      <div>
        <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
          <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
            OUR CORE TEAM
          </h1>
          
          <div
            id="Contain"
            ref={imageContainerRef}
            className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
          >
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
            <img className="h-[100vh] w-[159vw] z-[999999] absolute left-0 top-0" src="public/team.png" alt="Team Background" />
            
            {teamImages.map((image, index) => (
              <div
                key={index}
                className={`team-image absolute border-[4px] mt-24 h-[45vh] rounded-[1vh] overflow-hidden ${image.position}`}
              >
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
