import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let section = sectionRef.current;
    let scrollContainer = scrollContainerRef.current;
    let horizontal = horizontalRef.current;

    let scrollTween = gsap.to(horizontal, {
      x: "-63%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div className="wrapper relative bg-black overflow-hidden">
      <div ref={sectionRef} className="relative h-[300vh] w-full">
        <div ref={scrollContainerRef} className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <h1 className="text-[#103289] text-[11vw] font-medium tracking-[-1vh] absolute top-[31.50%] font-[font1] pl-[14vw]">
            OUR CORE TEAM
          </h1>

          <div ref={horizontalRef} className="w-[300%] h-[60%] pl-[90vw] relative flex justify-center items-center">
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[41vh]"></div>
            <div className="border-t border-[#313131] h-[0.5px] w-full absolute left-[8vw] top-[58.5vh]"></div>
            <img className="h-[100vh] w-[159.5vw] z-[999999] absolute left-0 top-0" src="./team.png" alt="Team Background" />

            {teamImages.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute border-[4px] mt-24 h-[45vh] z-[9999999] overflow-hidden ${image.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold text-[font2]">
                  {image.category}
                </h3>
                <img src={image.src} alt={image.category} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;