"use client";
import { useScroll, useTransform } from "motion/react";
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
    <div className={cn("items-start w-full select-none", className)}>
      <h1 className="text-center text-8xl text-[#3B6654] font-semibold font-[font1] mt-32">OUR EVENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{el.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{el.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={el.src}
                  className="h-72 w-full object-cover object-left-top !m-0 !p-0"
                  height="400"
                  width="400"
                  alt={el.alt}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{el.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data array for images and content
const images = [
  { src: "./images/Events/Athletics-sports.jpg", title: "Athletics", description: "Athletics is a comprehensive sports game that brings the exhilarating world of track and field to life on your gaming device." },
  { src: "./images/Events/Badminton-sports.jpg", title: "Badminton", description: "an exhilarating badminton tournament that promises fierce competition, thrilling rallies, and unforgettable moments on the court!." },
  { src: "./images/Events/BGAS-sports.jpg", title: "BGAS", description: "BGMI game with thrilling gameplay where players can choose between solo matches or teaming up with friends for squad battles." },
  { src: "./images/Events/Chess-sports.jpg", title: "Chess", description: "Dive into the timeless strategy of chess with this captivating digital rendition of the classic board game." },
  { src: "./images/Events/coffeealumini.jpg", title: "Coffee Alumni Meet", description: "Connect with old friends and make new memories." },
  { src: "./images/Events/Deadlift-sports.jpg", title: "Deadlift", description: "it is a challenging and intense fitness game that simulates the experience of weightlifting." },
  { src: "./images/Events/Incredible-cultural.jpg", title: "Incredible India", description: "merges pageantry and talent showcase, featuring diverse skills, interviews, and formalwear presentation for lively entertainment." },
  { src: "./images/Events/Innovator desk-technical.jpg", title: "Innovator Desk", description: "Here you come and pitch your Startup and innocation ideas for exciting prizes." },
  { src: "./images/Events/mission unblockable-tnpsc.jpg", title: "Mission Unblockable", description: "Remove block Every block has colour for which categories ques if you are ans is correct then you get 1point in some condition the zhenga is." },
  { src: "./images/Events/Mystery coders-technical.jpg", title: "Mystery Coders", description: "Blind coding event where u have to solve the problem statement with monitors switched off" },
  { src: "./images/Events/newsletter.jpeg", title: "Newsletter Workshop", description: "Learn to create and design engaging newsletters." },
  { src: "./images/Events/quizsocial.jpg", title: "Quiz Social", description: "A fun-filled evening of trivia and brain teasers." },
  { src: "./images/Events/Roborush-technical.jpg", title: "Roborush", description: "Roborush is and bot-obstacle racing event, the fastest one to complete Wins." },
  { src: "./images/Events/Scared games-cultural.jpg", title: "Scared Games", description: "A spooky night of horror stories and games." },
  { src: "./images/Events/Shiny colors-cultural.jpg", title: "Shiny Colors", description: "adorn faces and hands with imaginative designs using a palette of vibrant and shiny colors.lively and visually captivating atmosphere." },
  { src: "./images/Events/Table tennis-sports.jpg", title: "Table Tennis", description: "Hit it out with your best shots in this classic game." },
  { src: "./images/Events/telescan.png", title: "Telescan", description: "Explore the depths of technology and innovation." },
  { src: "./images/Events/Worthy words-cultural.jpg", title: "Worthy Words", description: "A poetry and storytelling event for all to enjoy." },
];

// Main exported component
export default function ParallaxScrollComponent({ className }) {
  return (
    <div className={className}>
      <ParallaxScroll images={images} />
    </div>
  );
}