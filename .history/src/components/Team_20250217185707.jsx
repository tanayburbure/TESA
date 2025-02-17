import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Domain";

gsap.registerPlugin(ScrollTrigger);
const Team = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Setup GSAP ScrollTrigger
    gsap.to(scrollContainerRef.current, {
      xPercent: -60, // Scroll through 200% width (for 3 pages)
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true, // Pin the container while scrolling
        scrub: 1,  // Smooth scrubbing
        end: () => `+=${scrollContainerRef.current.scrollWidth}`, // Set end after scrolling through all c// Snap to each page
      },
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const page5animation = () => {
    const allH1 = document.querySelectorAll("#page5 h2");
    allH1.forEach((elem) => {
      let clutter = "";
      const h2Text = elem.textContent;
      const splittedText = h2Text.split("");
      splittedText.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });

    gsap.to("#page5 h2 span", {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to("#page5 #Contain", {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  };

  const Boxanimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        scroller: "#main",
        start: "50% 220%",
        end: "80% 219%",
        scrub: 2,
      },
    });

    tl.from("#wrapper", {
      x: -800,
      opacity: 0,
      duration: 10,
      stagger: 0.3,
    });
    tl.from(".right-top-left", {
      y: 300,
      opacity: 0,
      duration: 1,
    });
    tl.from(".right-top-right", {
      y: 300,
      opacity: 0,
      duration: 1,
    });
    tl.from(".right-bottom-left", {
      y: 300,
      opacity: 0,
      duration: 1,
    });
    tl.from(".right-bottom-right", {
      y: 300,
      opacity: 0,
      duration: 1,
    });
  };

  useEffect(() => {
    page5animation();
    Boxanimation();
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div class="page5" data-scroll-speed="5">
        <div id="page5" className="relative h-screen w-full bg-white overflow-hidden">
          <h1 className="text-[#103289] text-3.7vw leading-[4vw] tracking-[-0.2vh] text-left font-normal font1 pt-8vh pl-5vw">WELCOME TO QUALCOMM</h1>
          <h2 id="fristh1" className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">Discover our diverse range of</h2>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">offerings and resources</h2>
          <div id="Contain" className="mt-5 w-[230%] h-[60%] mt-[-1.5vw] gap-10vw pl-15vw relative flex justify-evenly items-center">
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Artificial Intelligence</h3>
              <img src="..\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Laptop</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Iot</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Mobile</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Automotive</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Audio</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">Wifi Network</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div class="elem" className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
              <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">XR/VR</h3>
              <img src=".\images\vaishnavi_ghatge.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Team