import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "top-[28.7vh] left-[100vw]" },
  { src: "./images/hod.png", category: "Head of Department", position: "top-[1.2vh] left-[121vw]" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "top-[28.7vh] left-[140.9vw]" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "top-[1.2vh] left-[159.3vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "top-[28.7vh] left-[179.4vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President", position: "top-[1.2vh] left-[196.5vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "top-[28.7vh] left-[213.6vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "top-[1.2vh] left-[230.7vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "top-[28.7vh] left-[247.8vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        // ScrollTrigger optimized for smooth performance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        tl.to(imageContainerRef.current, {
          x: "-63%",
          duration: 2,
          ease: "none",
        });

        // Batched animation for performance
        ScrollTrigger.batch(".team-image", {
          start: "top 80%",
          end: "top 10%",
          interval: 0.1,
          batchMax: 3,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.3,
            }),
          onLeaveBack: (batch) =>
            gsap.to(batch, {
              opacity: 0,
              scale: 0.8,
              duration: 1,
            }),
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
          OUR CORE TEAM
        </h1>

        <div
          ref={imageContainerRef}
          className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center will-change-transform"
        >
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
          <img className="h-[100vh] w-[159.5vw] z-[999999] absolute left-0 top-0" src="./team.png" alt="Team Background" />

          {teamImages.map((image, index) => (
            <div
              key={index}
              className={`team-image opacity-0 scale-80 absolute border-[4px] mt-24 h-[45vh] z-[9999999] overflow-hidden ${image.position}`}
            >
              <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
                {image.category}
              </h3>
              <img src={image.src} alt={image.category} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
