import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HoverBackground = () => (
  <motion.span
    className="absolute inset-0 h-full w-full rounded-lg"
    layoutId="hoverBackground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7, transition: { duration: 0.15 } }}
    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
    style={{ backgroundColor: "#4A9782" }} // PageTransition background color
  />
);

const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-20 w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      className
    )}
  >
    <div className="relative z-50 p-4">{children}</div>
  </div>
);

const CardTitle = ({ children, className }) => (
  <h4 className={cn("text-zinc-900 text-[2vh] font-bold tracking-wide mt-1 font-[font2]", className)}>{children}</h4>
);

const CardDescription = ({ children, className }) => (
  <p className={cn("mt-2 text-zinc-500 tracking- text-md font-[font2] leading-5", className)}>{children}</p>
);

function Features() {
  const features = [
    {
      title: "INTERVIEW EXPERIENCE",
      description:
        "Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.",
      icon: <IoIosPeople />,
      buttonLabel: "View page",
      link: "#",
    },
    {
      title: "TESA REPORT",
      description:
        "An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.",
      icon: <TbReportAnalytics />,
      buttonLabel: "View page",
      link: "#",
    },
    {
      title: "STARTUP PAGE",
      description:
        "A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.",
      icon: <BsRocketTakeoffFill />,
      buttonLabel: "View page",
      link: "#",
    },
  ];

  // Add any other PageTransition items here if desired, without icon/buttonLabel

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col h-[92vh] items-center pt-24">
      <h1 className="text-[7.5vh] font-[font4] tracking-wide font-semibold">
        Features of our website
      </h1>
      <h3 className="text-center text-[2.5vh] font-[font3] -mt-2 max-w-4xl">
        Our website is equipped with highly impactful features, thoughtfully designed to enhance student experience and usability.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 w-full max-w-6xl px-8">
        {features.map(({ title, description, icon, buttonLabel, link }, idx) => (
          <a
            href={link}
            key={link ?? idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {hoveredIndex === idx && <HoverBackground />}
            </AnimatePresence>

            <Card className="bg-white text-zinc-900 h-60">
              <div className="flex items-center gap-2 ">
                <CardTitle className="text-lg font-semibold  flex-1 -mt-2">{title}</CardTitle>
                {icon && <div className="text-2xl">{icon}</div>}
              </div>

              <CardDescription className="mt-3 leading-relaxed">{description}</CardDescription>

              {buttonLabel && (
                <button className="border border-zinc-700 rounded-full px-5 py-1 mt-4">
                  {buttonLabel}
                </button>
              )}
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Features;
