import React, { useRef, useEffect, useMemo } from "react";
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
    let ctx;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        if (sectionRef.current && imageContainerRef.current) {
          // Horizontal scroll animation
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
            x: "-70%", // Adjusted for better scrolling
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
        className="team-image flex-shrink-0 rounded-md overflow-hidden"
        style={{
          width: "17vw",
          height: "45vh",
          border: "4px solid #EAEFEF",
          marginRight: "2rem", // Gap between images
          willChange: "transform, opacity",
        }}
      >
        <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-zinc-200 font-bold font-[font2] z-10">
          {image.category}
        </h3>
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full rounded-sm no-draw object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    ));
  }, []);

  return (
    <div className="wrapper relative select-none overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={imageContainerRef}
          className="flex items-center h-full pl-[10vw]"
          style={{ 
            width: "fit-content",
            willChange: "transform" 
          }}
        >
          {renderedTeamImages}
        </div>
      </div>
    </div>
  );
};

export default Team;