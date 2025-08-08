import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FeatureCard({ children, index, hoveredIndex, setHoveredIndex }) {
  return (
    <a
      href="#"
      className="relative group block h-full w-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 h-full w-full rounded-lg"
style={{ backgroundColor: "#4A9782", opacity: 0.7 }}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </a>
  );
}

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col h-[92vh] items-center pt-24">
      <h1 className="text-[7.5vh] font-[font4] tracking-wide font-semibold">
        Features of our website
      </h1>
      <h3 className="text-center text-[2.5vh] font-[font3] -mt-2">
        Our website is equipped with highly impactful features, thoughtfully designed to enhance student experience and usability.
      </h3>
      <div className="Card flex mt-24">
        <FeatureCard index={0} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}>
          <div className="h-[13vw] w-[19vw] px-4 mx-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
            <div className="text-[4vh] flex items-center gap-1 justify-center pt-3">
              <h2 className="text-[2.4vh] font-semibold">INTERVIEW EXPERIENCE</h2>
              <IoIosPeople />
            </div>
            <p className="text-[2.2vh] leading-[2.7vh] pt-3">
              Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.
            </p>
            <button className="border border-zinc-700 rounded-full px-5 text-center pb-2 pt-1 mt-3">View page</button>
          </div>
        </FeatureCard>
        <FeatureCard index={1} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}>
          <div className="h-[13vw] w-[19vw] px-4 mx-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
            <div className="text-[3.5vh] flex items-center gap-1 justify-center pt-3">
              <h2 className="text-[2.4vh] font-semibold">TESA REPORT</h2>
              <TbReportAnalytics />
            </div>
            <p className="text-[2.2vh] leading-[2.7vh] pt-3">
              An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.
            </p>
            <button className="border border-zinc-700 rounded-full px-5 text-center pb-2 pt-1 mt-3">View page</button>
          </div>
        </FeatureCard>
        <FeatureCard index={2} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex}>
          <div className="h-[13vw] w-[19vw] mx-4 px-4 bg-[#FFFFFF] text-zinc-800 rounded-lg text-center">
            <div className="text-[3.2vh] flex items-center gap-[0.8vh] justify-center pt-3">
              <h2 className="text-[2.4vh] font-semibold">STARTUP PAGE</h2>
              <BsRocketTakeoffFill />
            </div>
            <p className="text-[2.2vh] leading-[2.7vh] pt-3">
              A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.
            </p>
            <button className="border border-zinc-700 rounded-full px-5 text-center pb-2 pt-1 mt-3">View page</button>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}

export default Features;
