import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cardsData = [
  {
    title: "INTERVIEW EXPERIENCE",
    description:
      "Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.",
    Icon: IoIosPeople,
  },
  {
    title: "TESA REPORT",
    description:
      "An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.",
    Icon: TbReportAnalytics,
  },
  {
    title: "STARTUP PAGE",
    description:
      "A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.",
    Icon: BsRocketTakeoffFill,
  },
];

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col h-[92vh] items-center pt-24 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-[7.5vh] font-[font4] tracking-wide font-semibold text-gray-900 dark:text-white">
        Features of our website
      </h1>
      <h3 className="text-center text-[2.5vh] font-[font3] -mt-2 max-w-3xl text-gray-700 dark:text-gray-300 px-4">
        Our website is equipped with highly impactful features, thoughtfully designed to enhance
        student experience and usability.
      </h3>
      <div className="flex gap-8 mt-24">
        {cardsData.map(({ title, description, Icon }, idx) => (
          <div
            key={title}
            className="relative h-[13vw] w-[19vw] px-4 mx-4 bg-white dark:bg-gray-800 text-zinc-800 dark:text-zinc-100 rounded-lg text-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-neutral-200 dark:bg-slate-700/[0.8] z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-20 flex flex-col items-center justify-center h-full pt-3 px-2">
              <div className="text-[4vh] flex items-center gap-2 justify-center">
                <h2 className="text-[2.4vh] font-semibold">{title}</h2>
                <Icon />
              </div>
              <p className="text-[2.2vh] leading-[2.7vh] pt-3">{description}</p>
              <button className="border border-zinc-700 rounded-full px-5 py-1 mt-3 z-20 bg-white dark:bg-gray-900 hover:bg-zinc-100 dark:hover:bg-gray-700 transition-colors">
                View page
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
