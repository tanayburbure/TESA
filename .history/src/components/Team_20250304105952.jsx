import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal", position: "top-[10vh] left-[10vw]" },
  { src: "./images/hod.png", category: "Head of Department", position: "top-[10vh] left-[30vw]" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson", position: "top-[10vh] left-[50vw]" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson", position: "top-[10vh] left-[70vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President", position: "top-[10vh] left-[90vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President", position: "top-[10vh] left-[110vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary", position: "top-[10vh] left-[130vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator", position: "top-[10vh] left-[150vw]" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer", position: "top-[10vh] left-[170vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
        // Horizontal scrolling animation
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
          className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center"
        >
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
          <img
            className="h-[100vh] w-[159.5vw] z-[999999] absolute left-0 top-0"
            src="./team.png"
            alt="Team Background"
            loading="lazy"
          />

          <motion.div
            className="w-full h-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {teamImages.map((image, index) => (
              <motion.div
                key={index}
                className={`team-image absolute border-[4px] mt-24 h-[45vh] z-[9999999] overflow-hidden ${image.position}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
                  {image.category}
                </h3>
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;