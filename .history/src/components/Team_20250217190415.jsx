import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const scrollContainerRef = useRef(null);
  const page5Ref = useRef(null);
  const containRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isPage5Animated, setIsPage5Animated] = useState(false);
  const [isBoxAnimated, setIsBoxAnimated] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      let scrollTriggerInstance = ScrollTrigger.create({
        trigger: scrollContainerRef.current,
        pin: true,
        scrub: 1,
        end: `+=${scrollContainerRef.current.scrollWidth}`,
      });

      gsap.to(scrollContainerRef.current, {
        xPercent: -60,
        ease: "none",
        scrollTrigger: scrollTriggerInstance,
      });

      return () => {
        scrollTriggerInstance.kill();
      };
    }
  }, []);

  const page5animation = () => {
    if (!page5Ref.current || !containRef.current) return;

    const allH1 = page5Ref.current.querySelectorAll("h2");
    allH1.forEach((elem) => {
      let clutter = "";
      const h2Text = elem.textContent;
      h2Text.split("").forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });

    gsap.to(page5Ref.current.querySelectorAll("h2 span"), {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: page5Ref.current,
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(containRef.current, {
      x: "-100%",
      scrollTrigger: {
        trigger: page5Ref.current,
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });

    setIsPage5Animated(true);
  };

  const Boxanimation = () => {
    if (!wrapperRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "50% 220%",
        end: "80% 219%",
        scrub: 2,
      },
    })
      .from(wrapperRef.current, {
        x: -800,
        opacity: 0,
        duration: 10,
        stagger: 0.3,
      })
      .from(".right-top-left, .right-top-right, .right-bottom-left, .right-bottom-right", {
        y: 300,
        opacity: 0,
        duration: 1,
      });

    setIsBoxAnimated(true);
  };

  useEffect(() => {
    if (!isPage5Animated) page5animation();
    if (!isBoxAnimated) Boxanimation();
  }, [isPage5Animated, isBoxAnimated]);

  return (
    <div ref={scrollContainerRef} className="wrapper relative overflow-x-hidden">
      <div className="page5" data-scroll-speed="5">
        <div ref={page5Ref} className="relative h-screen w-full bg-white overflow-hidden">
          <h1 className="text-[#103289] text-[3.7vw] leading-[4vw] tracking-[-0.2vh] text-left font-normal font1 pt-[8vh] pl-[5vw]">
            WELCOME TO QUALCOMM
          </h1>
          <h2 className="text-[3.1vw] text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-[5vw]">
            Discover our diverse range of
          </h2>
          <h2 className="text-[3.1vw] text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-[5vw]">
            offerings and resources
          </h2>
          <div ref={containRef} className="mt-5 w-[230%] h-[60%] mt-[-1.5vw] gap-[10vw] pl-[15vw] relative flex justify-evenly items-center">
            {["Artificial Intelligence", "Laptop", "IoT", "Mobile", "Automotive", "Audio", "Wifi Network", "XR/VR"].map((category, index) => (
              <div key={index} className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
                <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold font2">{category}</h3>
                <img src={`/images/vaishnavi_ghatge.jpg`} alt={category} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
