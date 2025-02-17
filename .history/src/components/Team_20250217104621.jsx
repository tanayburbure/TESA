import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    const allH1 = document.querySelectorAll("#team h2");
    allH1.forEach((elem) => {
      let clutter = "";
      let h2Text = elem.textContent;
      let splittedText = h2Text.split("");
      splittedText.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });

    gsap.to("#team h2 span", {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#team",
        scroller: "#main",
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to("#Contain", {
      x: "-100%",
      scrollTrigger: {
        trigger: "#team",
        scroller: "#main",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="relative h-[130vh] w-full bg-white overflow-hidden" id="team">
      <h1 className="text-[#103289] text-[3.7vw] tracking-tight text-left font-medium leading-[4vw] pt-[8vh] pl-[5vw] font-custom1">
        WELCOME TO OUR TEAM
      </h1>
      <h2 className="text-[3.1vw] text-right font-medium font-custom2 leading-[3.2vw] pr-[5vw] tracking-tight text-[#e2e2e28b]">
        Meet our talented team
      </h2>
      <h2 className="text-[3.1vw] text-right font-medium font-custom2 leading-[3.2vw] pr-[5vw] tracking-tight text-[#e2e2e28b]">
        of professionals
      </h2>
      <div
        id="Contain"
        className="mt-[5%] w-[230%] h-[60%] -mt-[1.5vw] gap-[10vw] pl-[15vw] relative flex justify-evenly items-center"
      >
        {[
          { title: "John Doe", img: "./images/johndoe.jpg" },
          { title: "Jane Doe", img: "./images/janedoe.jpg" },
          { title: "Alex Smith", img: "./images/alexsmith.jpg" },
          { title: "Emma Johnson", img: "./images/emmajohnson.jpg" },
          { title: "Michael Brown", img: "./images/michaelbrown.jpg" },
          { title: "Olivia Davis", img: "./images/oliviadavis.jpg" },
          { title: "William Wilson", img: "./images/williamwilson.jpg" },
          { title: "Sophia Martinez", img: "./images/sophiamartinez.jpg" },
        ].map((item, index) => (
          <div key={index} className="w-[11.2%] h-[70%] relative rounded-[3vh] overflow-hidden">
            <h3 className="absolute bottom-[2%] left-[3%] text-[2vw] text-white font-custom2 font-bold">
              {item.title}
            </h3>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
