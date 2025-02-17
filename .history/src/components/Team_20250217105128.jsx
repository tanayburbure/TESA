import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    // Split text into spans for animation
    const headings = document.querySelectorAll("#page5 h2");
    headings.forEach((heading) => {
      let text = heading.textContent;
      heading.innerHTML = text.split("").map((char) => `<span>${char}</span>`).join("");
    });

    // Animate text color
    gsap.to("#page5 h2 span", {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page5",
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    // Animate container scroll
    gsap.to("#page5 #Contain", {
      x: "-100%",
      scrollTrigger: {
        trigger: "#page5",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div id="page5" className="relative h-[130vh] w-full bg-white overflow-hidden">
      <h1 className="text-[#103289] text-[3.7vw] tracking-tighter text-left font-medium leading-[4vw] pt-[8vh] pl-[5vw]">
        WELCOME TO QUALCOMM
      </h1>
      <h2 className="text-[3.1vw] text-right font-medium leading-[3.2vw] pr-[5vw] tracking-tighter text-[#e2e2e28b]">
        Discover our diverse range of
      </h2>
      <h2 className="text-[3.1vw] text-right font-medium leading-[3.2vw] pr-[5vw] tracking-tighter text-[#e2e2e28b]">
        offerings and resources
      </h2>
      <div id="Contain" className="mt-[5%] w-[230%] h-[60%] gap-[10vw] pl-[15vw] relative flex justify-evenly items-center">
        {[
          { title: "Artificial Intelligence", image: "./images/ai.png" },
          { title: "Laptop", image: "./images/laptop.jpg" },
          { title: "Iot", image: "./images/iot.avif" },
          { title: "Mobile", image: "./images/mobile.jpg" },
          { title: "Automotive", image: "./images/automotive.jpg" },
          { title: "Audio", image: "./images/audiodevice.jpg" },
          { title: "Wifi Network", image: "./images/wifi.jpg" },
          { title: "XR/VR", image: "./images/ar vr.jpg" },
        ].map((item, index) => (
          <div key={index} className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-bold">
              {item.title}
            </h3>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;