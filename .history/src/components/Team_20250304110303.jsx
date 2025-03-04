import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

const teamImages = [
  { src: "/images/principale.png", category: "Principal", position: "left-[5vw]" },
  { src: "/images/hod.png", category: "Head of Department", position: "left-[20vw]" },
  { src: "/images/itole-sir.jpg", category: "TESA Chairperson", position: "left-[35vw]" },
  { src: "/images/Gajare-sir.jpg", category: "TESA Chairperson", position: "left-[50vw]" },
  { src: "/images/Madhavi_Shinde.jpg", category: "President", position: "left-[65vw]" },
  { src: "/images/Madhavi_Shinde.jpg", category: "Vice-President", position: "left-[80vw]" },
  { src: "/images/Madhavi_Shinde.jpg", category: "General Secretary", position: "left-[95vw]" },
  { src: "/images/Madhavi_Shinde.jpg", category: "Administrator", position: "left-[110vw]" },
  { src: "/images/Madhavi_Shinde.jpg", category: "Treasurer", position: "left-[125vw]" },
];

const Team = () => {
  const imageContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageContainerRef.current) {
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
          x: "-50%", // Adjusted for visibility
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
        <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[30%] font-[font1] pl-[10vw]">
          OUR CORE TEAM
        </h1>

        <div ref={imageContainerRef} className="w-[200%] h-[60%] flex items-center relative">
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute top-[40vh]"></div>
          <div className="border-t border-[#313131] h-[0.5px] w-full absolute top-[55vh]"></div>

          <motion.div
            className="w-full h-full flex gap-10 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            {teamImages.map((image, index) => (
              <motion.div
                key={index}
                className={`team-image absolute border-[4px] mt-24 h-[45vh] z-[10] overflow-hidden ${image.position}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="absolute bottom-2 left-3 text-[2vw] text-white font-bold">
                  {image.category}
                </h3>
                <img src={image.src} alt={image.category} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
