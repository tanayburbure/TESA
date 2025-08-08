import React, { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "top-[28.7vh] left-[30vw]" },
  { src: "./images/hod.png", category: "Head of Department", position: "top-[1.2vh] left-[51vw]" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "top-[28.7vh] left-[71vw]" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "top-[1.2vh] left-[89.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "top-[28.7vh] left-[109vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President", position: "top-[1.2vh] left-[126vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "top-[28.7vh] left-[143.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "top-[1.2vh] left-[160.2vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "top-[28.7vh] left-[177vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        if (sectionRef.current && imageContainerRef.current && titleRef.current) {
          // Text animation - starts from top and slides to final position
          gsap.fromTo(titleRef.current, 
            {
              y: -200,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Existing horizontal scroll animation
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
            },
          });

          tl.to(imageContainerRef.current, {
            x: "-63%",
            duration: 2,
            ease: "power1.inOut",
            force3D: true,
            overwrite: "auto",
          });
        }
      });
    };

    const timer = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timer);
      ctx && ctx.revert();
    };
  }, []);

  const renderedTeamImages = useMemo(() => {
    return teamImages.map((image, index) => (
      <div
        key={index}
        className={`team-image absolute z-[9999999] bg-blend-multiply overflow-hidden ${image.position}`}
        style={{
          width: "17vw",
          height: "45vh",
          border: "4px solid white",
          marginTop: "6rem",
          willChange: "transform, opacity",
        }}
      >
        <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-zinc-200 font-bold font-[font2]">
          {image.category}
        </h3>
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    ));
  }, []);

  return (
    <div className="wrapper relative overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        <h1
          ref={titleRef}
          className="text-[#3B6654] text-[11vw] font-semibold tracking-[-1vh] absolute top-[37%] left-[14vw] font-[font1]"
          style={{ lineHeight: "1", willChange: "transform" }}
        >
          OUR CORE TEAM
        </h1>

        <div
          ref={imageContainerRef}
          className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
          style={{ willChange: "transform" }}
        >
          {/* These are the two black lines you want to keep */}
          <div className="border-t border-[#313131]  w-full absolute left-[8vw] top-[41vh]"></div>
          <div className="border-t border-[#313131]  w-full absolute left-[8vw] top-[58.5vh]"></div>

          <div className="w-full h-full relative">{renderedTeamImages}</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
