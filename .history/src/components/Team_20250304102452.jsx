import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal" },
  { src: "./images/hod.png", category: "Head of Department" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(imageContainerRef.current, { x: "-63%", duration: 2 });

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
            end: "top 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
          OUR CORE TEAM
        </h1>
        
        <div ref={imageContainerRef} className="w-[300%] h-[60%] relative flex justify-center items-center">
          <img className="h-[100vh] w-[159.5vw] z-[999999] absolute left-0 top-0" src="./team.png" alt="Team Background" />
          
          {teamImages.map((image, index) => (
            <div key={index} className={`team-image absolute border-[4px] mt-24 h-[45vh] overflow-hidden ${image.position}`}>
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
