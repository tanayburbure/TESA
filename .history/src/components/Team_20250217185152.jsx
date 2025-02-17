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

  return (
    <div className="wrapper relative overflow-x-hidden">
      <div class="page5" data-scroll-speed="5">
            <div id="page5">
                <h1>WELCOME TO QUALCOMM</h1>
                <h2 id="fristh1">Discover our diverse range of</h2>
                <h2>offerings and resources</h2>
                <div id="Contain">
                    <div class="elem">
                        <h3>Artificial Intelligence</h3>
                        <img src="./images/ai.png"
                            alt="" />
                    </div>
                        <div class="elem">
                        <h3>Laptop</h3>
                        <img src="./images/laptop.jpg"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>Iot</h3>
                        <img src="./images/iot.avif"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>Mobile</h3>
                        <img src="./images/mobile.jpg"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>Automotive</h3>
                        <img src="./images/automotive.jpg"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>Audio</h3>
                        <img src="./images/audiodevice.jpg"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>Wifi Network</h3>
                        <img src="./images/wifi.jpg"
                            alt="" />
                    </div>
                    <div class="elem">
                        <h3>XR/VR</h3>
                        <img src="./images/ar vr.jpg"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};


export default Team