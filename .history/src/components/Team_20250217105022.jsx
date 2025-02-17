import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  useEffect(() => {
    document.querySelectorAll("#page5 h2").forEach((elem) => {
      elem.innerHTML = elem.textContent.split("").map(e => `<span>${e}</span>`).join("");
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

    gsap.to("#Contain", {
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
    <div className="relative h-screen w-full bg-white overflow-hidden" id="page5">
      <h1 className="text-blue-900 text-4xl font-medium pt-8 pl-5">WELCOME TO QUALCOMM</h1>
      <h2 className="text-3xl text-gray-400 text-right pr-5">Discover our diverse range of</h2>
      <h2 className="text-3xl text-gray-400 text-right pr-5">offerings and resources</h2>
      <div id="Contain" className="flex gap-10 pl-15 w-max">
        {["AI", "Laptop", "IoT", "Mobile", "Automotive", "Audio", "Wifi", "XR/VR"].map((title, index) => (
          <div key={index} className="w-32 h-40 relative rounded overflow-hidden">
            <h3 className="absolute bottom-2 left-3 text-lg text-white font-bold">{title}</h3>
            <img src={`./images/${title.toLowerCase()}.jpg`} alt={title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
