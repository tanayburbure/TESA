import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const scrollContainerRef = useRef(null);
  const page5Ref = useRef(null);
  const containRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Ensure elements exist before applying animations
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        xPercent: -60, // Adjust for proper scrolling
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 1,
          start: "top top", // Ensures it starts when entering viewport
          end: () => `+=${scrollContainerRef.current.scrollWidth * 0.5}`, // Adjust end position
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (page5Ref.current) {
      const allH2 = page5Ref.current.querySelectorAll("h2");
      allH2.forEach((elem) => {
        let clutter = "";
        elem.textContent.split("").forEach((char) => {
          clutter += `<span>${char}</span>`;
        });
        elem.innerHTML = clutter;
      });

      gsap.to("#page5 h2 span", {
        color: "black",
        stagger: 0.1,
        scrollTrigger: {
          trigger: page5Ref.current,
          start: "top 80%", // Delays animation to be visible
          end: "top 40%",
          scrub: 1,
          pin: false, // Remove unnecessary pinning
        },
      });

      gsap.to(containRef.current, {
        x: "-50%", // Adjust to avoid content disappearing
        scrollTrigger: {
          trigger: page5Ref.current,
          start: "top 85%", // Ensures animation starts at the right time
          end: "top 30%",
          scrub: 1,
          pin: false,
        },
      });
    }

    // Box Animations (Page 4)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "top 85%", // Delays animation start
        end: "top 50%",
        scrub: 2,
      },
    })
      .from(wrapperRef.current, { x: -500, opacity: 0, duration: 1.5, stagger: 0.3 })
      .from(".right-top-left", { y: 200, opacity: 0, duration: 1 })
      .from(".right-top-right", { y: 200, opacity: 0, duration: 1 })
      .from(".right-bottom-left", { y: 200, opacity: 0, duration: 1 })
      .from(".right-bottom-right", { y: 200, opacity: 0, duration: 1 });
  }, []);

  return (
    <div className="wrapper relative overflow-x-hidden" ref={scrollContainerRef}>
      <div className="page5" data-scroll-speed="5">
        <div id="page5" ref={page5Ref} className="relative h-screen w-full bg-white overflow-hidden">
          <h1 className="text-[#103289] text-3.7vw leading-[4vw] tracking-[-0.2vh] text-left font-normal font1 pt-8vh pl-5vw">
            WELCOME TO QUALCOMM
          </h1>
          <h2 id="fristh1" className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            Discover our diverse range of
          </h2>
          <h2 className="text-3.1vw text-right font-normal font2 leading-[3.2vw] tracking-[-1px] text-[#e2e2e28b] pr-5vw">
            offerings and resources
          </h2>
          <div
            id="Contain"
            ref={containRef}
            className="mt-5 w-[230%] h-[60%] mt-[-1.5vw] gap-10vw pl-15vw relative flex justify-evenly items-center"
          >
            {[
              "Artificial Intelligence",
              "Laptop",
              "IoT",
              "Mobile",
              "Automotive",
              "Audio",
              "Wifi Network",
              "XR/VR",
            ].map((category, index) => (
              <div key={index} className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
                <h3 className="absolute bottom-[2%] left-[3%] text-2vw text-white font-bold font2">
                  {category}
                </h3>
                <img src="./images/vaishnavi_ghatge.jpg" alt={category} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
