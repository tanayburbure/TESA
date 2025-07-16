"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [bgColor, setBgColor] = useState("bg-white");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const nextBgColor = index % 2 === 0 ? "bg-gray-100" : "bg-white"; // Alternating effect

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => setBgColor(nextBgColor),
        onLeaveBack: () => setBgColor(index === 0 ? "bg-white" : "bg-gray-100"),
      });
    });
  }, []);

  return (
    <div className={`transition-colors duration-500 ${bgColor}`}>
      <div className="h-screen flex items-center justify-center section">Section 1</div>
      <div className="h-screen flex items-center justify-center section">Section 2</div>
      <div className="h-screen flex items-center justify-center section">Section 3</div>
    </div>
  );
}
