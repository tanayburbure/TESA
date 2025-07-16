"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollBgTransition = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const backgroundColor = useTransform(smoothProgress, [0, 1], ["#EBEBEB", "#000000"]);

  return (
    <motion.div
      className="h-[300vh] flex justify-center items-center text-white"
      style={{ backgroundColor }}
    >
      <div className="text-2xl font-bold">
        Scroll Down to See Background Change
      </div>
    </motion.div>
  );
};

export default ScrollBgTransition;
