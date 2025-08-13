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
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (imagesRef.current.length > 0) {
        gsap.fromTo(
          imagesRef.current,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.4, // delay between each image
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const renderedTeamImages = useMemo(() => {
    return teamImages.map((image, index) => (
      <div
        key={index}
        ref={(el) => (imagesRef.current[index] = el)}
        className="relative rounded-md overflow-hidden bg-white shadow-lg"
        style={{
          width: "17vw",
          height: "45vh",
          border: "4px solid #EAEFEF",
          margin: "1rem 0",
        }}
      >
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <h3 className="absolute bottom-[2%] left-[3%] text-[1.2vw] text-white font-bold drop-shadow-lg">
          {image.category}
        </h3>
      </div>
    ));
  }, []);

  return (
    <div className="wrapper relative select-none flex flex-col items-center">
      <div
        ref={sectionRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center"
      >
        {renderedTeamImages}
      </div>
    </div>
  );
};

export default Team;
