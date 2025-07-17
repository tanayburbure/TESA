import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Transition = () => {
  const sectionRef = useRef(null);
  const mainScrollerRef = useRef(null); // in case you're using custom scroll container

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "page3",
          start: "30% 30%",
          end: "150% 0%",
          scrub: 2,
          pin: true,
        },
      });

      tl.to("#center", { height: "110vh" }, "a")
        .to("#top", { top: "-50%" }, "a")
        .to("#bottom", { bottom: "-55%", opacity: 0 }, "a")
        .to("#top-h1", { top: "60%" }, "a")
        .to("#bottom-h1", { bottom: "-40%" }, "a")
        .to("#center-h1", { top: "-30%" }, "a") // in your HTML there is no `#center-h1`, optional
        .to(".content", { delay: -0.2, marginTop: "0%" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} data-scroll-speed="4" className="page3">
      <div className="relative" id="top">
        <h3 className="absolute left-16 top-20 bg-black text-zinc-200 px-4 py-2 rounded-full font-medium text-xl">
          Featured By
        </h3>
        <img className="absolute h-80 w-auto top-16 left-12" src="./images/lobo.webp" alt="logo" />
        <h1 id="top-h1" className="absolute text-[8vw] font-bold top-[20%] left-[10%]">SNAPDRAGON</h1>
      </div>

      <div id="center" className="relative">
        <div className="content mt-[20%]">
          <div className="container grid grid-cols-2 gap-8 px-12">
            <div className="image-container text-center">
              <h3 className="text-lg font-semibold mb-2">Qualcomm Razer</h3>
              <img src="./images/game.png" alt="Image 1" className="w-full object-contain" />
            </div>
            <div className="image-container text-center">
              <h3 className="text-lg font-semibold mb-2">Qualcomm X Elite</h3>
              <img src="./images/oryon.jpeg" alt="Image 2" className="w-full object-contain" />
            </div>
            <div className="image-container text-center">
              <h3 className="text-lg font-semibold mb-2">Robotics RB3 gen 2</h3>
              <img src="./images/rb2.webp" alt="Image 3" className="w-full object-contain" />
            </div>
            <div className="image-container text-center">
              <h3 className="text-lg font-semibold mb-2">Qualcomm Cortex cpu</h3>
              <img src="./images/cpu.jpg" alt="Image 4" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div id="bottom" className="relative">
        <h1 id="bottom-h1" className="absolute bottom-10 left-[10%] text-[8vw] font-bold">SNAPDRAGON</h1>
      </div>
    </div>
  );
};

export default Transition;
