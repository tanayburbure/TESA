import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const PageTransition = ({ items = [], className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ", className)}>
      {safeItems.map((item, idx) => (
        <a
          href={item?.link ?? "#"}
          key={item?.link ?? idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl block"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-96 w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
      className
    )}
  >
    <div className="relative z-50 p-4">{children}</div>
  </div>
);

export const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>
);

export const CardDescription = ({ className, children }) => (
  <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>
);
