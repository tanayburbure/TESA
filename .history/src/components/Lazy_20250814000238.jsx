import React, { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImages = [
  { src: "./images/principale.png", category: "Principal" },
  { src: "./images/hod.png", category: "Head of Department" },
  { src: "./images/itole-sir.jpg", category: "TESA Chairperson" },
  { src: "./images/Gajare-sir.jpg", category: "TESA Chairperson" },
  { src: "./images/Madhavi Shinde_.jpg", category: "President" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Vice-President" },
  { src: "./images/Madhavi Shinde_.jpg", category: "General Secretary" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Administrator" },
  { src: "./images/Madhavi Shinde_.jpg", category: "Treasurer" },
];

const Team = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const init = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;

      // Measure overflow distance to scroll horizontally exactly through content
      const sectionWidth = section.clientWidth;
      const trackWidth = track.scrollWidth;
      const maxX = Math.max(0, trackWidth - sectionWidth);

      ctx = gsap.context(() => {
        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: -maxX,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${Math.max(sectionWidth, 800)}`, // horizontal distance vs scroll length
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Refresh on resize for accurate measuring
        ScrollTrigger.addEventListener("refreshInit", () => {
          const w = section.clientWidth;
          const tw = track.scrollWidth;
          const max = Math.max(0, tw - w);
          gsap.set(track, { x: 0 });
          // Update the tween's end value on refresh
          const st = ScrollTrigger.getById("team-scroll");
          if (st) {
            // If you want to manage via id, assign id in the config below
          }
        });
      }, section);
    };

    // Delay slightly to ensure images compute correct sizes
    const t = setTimeout(init, 80);

    return () => {
      clearTimeout(t);
      ctx && ctx.revert();
    };
  }, []);

  const renderedTeamImages = useMemo(() => {
    return teamImages.map((image, index) => (
      <div
        key={index}
        className="shrink-0 overflow-hidden rounded-md bg-zinc-900/10"
        style={{
          width: "17vw",
          minWidth: "240px",
          height: "45vh",
          border: "4px solid #EAEFEF",
          willChange: "transform, opacity",
        }}
      >
        <img
          src={image.src}
          alt={image.category}
          className="w-full h-full object-cover rounded-sm"
          loading="lazy"
          decoding="async"
        />
      </div>
    ));
  }, []);

  return (
    <div className="wrapper relative select-none overflow-hidden">
      <div ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-white">
        <div
          ref={trackRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-[4vw] px-[10vw]"
          style={{ willChange: "transform" }}
        >
          {renderedTeamImages}
        </div>
      </div>
    </div>
  );
};

export default Team;
