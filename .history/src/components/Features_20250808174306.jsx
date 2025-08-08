import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { BsRocketTakeoffFill } from "react-icons/bs";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Example usage with data for both features / page transition items:

const items = [
  {
    title: "INTERVIEW EXPERIENCE",
    description:
      "Integrated a page showcasing interview experiences of senior students, enriching our platform with invaluable insights.",
    link: "#",
    icon: <IoIosPeople />,
    buttonLabel: "View page",
  },
  {
    title: "TESA REPORT",
    description:
      "An annual report meticulously prepared for our association, a comprehensive overview of all activities conducted.",
    link: "#",
    icon: <TbReportAnalytics />,
    buttonLabel: "View page",
  },
  {
    title: "STARTUP PAGE",
    description:
      "A page dedicated to promoting endeavors of our students, showcasing their innovative ventures and hustles.",
    link: "#",
    icon: <BsRocketTakeoffFill />,
    buttonLabel: "View page",
  },
  // Add pageTransition items here without icon/buttonLabel if needed
];

const hoverBgColor = "#3B6654"; // or "#4A9782"

const HoverBackground = () => (
  <motion.span
    className="absolute inset-0 h-full w-full rounded-lg"
    layoutId="hoverBackground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7, transition: { duration: 0.15 } }}
    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
    style={{ backgroundColor: hoverBgColor }}
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

const CardTitle = ({ children, icon }) => (
  <h4 className="text-zinc-100 font-bold tracking-wide mt-4 flex items-center gap-2">
    {children}
    {icon && <span className="text-xl">{icon}</span>}
  </h4>
);

const CardDescription = ({ children }) => (
  <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">{children}</p>
);

export const MergedComponent = ({ items = [], className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {safeItems.map(({ title, description, link, icon, buttonLabel }, idx) => (
        <a
          href={link ?? "#"}
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

          <Card>
            <CardTitle icon={icon}>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            {buttonLabel && (
              <button className="mt-4 border border-zinc-700 rounded-full px-5 py-1 text-center">
                {buttonLabel}
              </button>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

