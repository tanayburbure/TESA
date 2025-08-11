"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import cn from "classnames";

const ParallaxScroll = ({ images, className }) => {
  const { scrollYProgress } = useScroll(); // Use the default window scroll

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("items-start w-full", className)} // Removed overflow-y-auto and h-full
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-84 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-84 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-84 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ... (images array and ParallaxScrollComponent remain the same)
// Images array
const images = [
  "./images/Events/Athletics-sports.jpg",
  "./images/Events/Badminton-sports.jpg",
  "./images/Events/BGAS-sports.jpg",
  "./images/Events/Chess-sports.jpg",
  "./images/Events/coffeealumini.jpg",
  "./images/Events/Deadlift-sports.jpg",
  "./images/Events/Incredible-cultural.jpg",
  "./images/Events/Innovator desk-technical.jpg",
  "./images/Events/mission unblockable-tnpsc.jpg",
  "./images/Events/Mystery coders-technical.jpg",
  "./images/Events/newsletter.jpeg",
  "./images/Events/quizsocial.jpg",
  "./images/Events/Roborush-technical.jpg",
  "./images/Events/Scared games-cultural.jpg",
  "./images/Events/Shiny colors-cultural.jpg",
  "./images/Events/Table tennis-sports.jpg",
  "./images/Events/telescan.png",
  "./images/Events/Worthy words-cultural.jpg",
];

// Main exported component
export default function ParallaxScrollComponent({ className }) {
  return (
    <div className={className}>
      <ParallaxScroll images={images} />
    </div>
  );
}
