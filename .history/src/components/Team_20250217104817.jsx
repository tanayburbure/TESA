import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    const allH2 = document.querySelectorAll("#page5 h2");
    allH2.forEach((elem) => {
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
      x: "-100%",
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="page5" data-scroll-speed="5">
      <div id="page5" className="relative h-[130vh] w-full bg-white overflow-hidden">
        <h1 className="text-[#103289] text-[3.7vw] tracking-[-0.2vh] text-left font-medium leading-[4vw] pt-[8vh] pl-[5vw] font-font1">
          WELCOME TO QUALCOMM
        </h1>
        <h2 id="fristh1" className="text-[3.1vw] text-right font-medium font-font2 leading-[3.2vw] pr-[5vw] tracking-[-1px] text-[#e2e2e28b]">
          Discover our diverse range of
        </h2>
        <h2 className="text-[3.1vw] text-right font-medium font-font2 leading-[3.2vw] pr-[5vw] tracking-[-1px] text-[#e2e2e28b]">
          offerings and resources
        </h2>
        <div id="Contain" className="mt-[5%] w-[230%] h-[60%] mt-[-1.5vw] gap-[10vw] pl-[15vw] relative flex justify-evenly items-center">
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Artificial Intelligence
            </h3>
            <img src="./images/ai.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Laptop
            </h3>
            <img src="./images/laptop.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Iot
            </h3>
            <img src="./images/iot.avif" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Mobile
            </h3>
            <img src="./images/mobile.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Automotive
            </h3>
            <img src="./images/automotive.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Audio
            </h3>
            <img src="./images/audiodevice.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              Wifi Network
            </h3>
            <img src="./images/wifi.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="elem w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-font2 font-bold">
              XR/VR
            </h3>
            <img src="./images/ar vr.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;