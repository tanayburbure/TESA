"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const cardData = [
  {
    title: "Stunning View",
    description: "Experience the beauty of nature in its purest form.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "City Nights",
    description: "Feel the vibrant energy of the urban landscape.",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ocean Breeze",
    description: "Let the calming waves take you to another world.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mountain Escape",
    description: "Breathe fresh air high above the valleys.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Desert Journey",
    description: "Wander through endless sands under the sun.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Forest Trails",
    description: "Lose yourself among towering green giants.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Snowy Peaks",
    description: "Touch the sky atop pristine mountains.",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golden Fields",
    description: "Feel the warmth of the setting sun.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lakeside Peace",
    description: "Find serenity by the still waters.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hidden Waterfalls",
    description: "Discover the magic of cascading waters.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

function ShrinkingImageCard({ title, description, img }) {
  const imageRef = useRef(null);
  const [shrunk, setShrunk] = useState(false);

  const toggleShrink = () => {
    setShrunk((prev) => !prev);
    gsap.to(imageRef.current, {
      scale: shrunk ? 1 : 0.7,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return (
    <motion.div
      className="w-full h-[30vh] flex items-center bg-gray-100 overflow-hidden p-4 cursor-pointer mb-4"
      layout
      onClick={toggleShrink}
    >
      {/* Left side - Image */}
      <div className="h-full flex-1 flex items-center justify-center">
        <motion.div
          ref={imageRef}
          className="w-[80%] h-[80%] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: `url('${img}')`,
          }}
          layout
        />
      </div>

      {/* Right side - Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center pl-6"
        layout
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function ShrinkingImageCardList() {
  return (
    <div className="w-full">
      {cardData.map((card, index) => (
        <ShrinkingImageCard
          key={index}
          title={card.title}
          description={card.description}
          img={card.img}
        />
      ))}
    </div>
  );
}
