"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Data for the 10 cards
const cardData = [
  {
    id: 1,
    title: "Mountain Majesty",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Coastal Serenity",
    imageUrl: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Forest Path",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Desert Dunes",
    imageUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "City Lights",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Winter Wonderland",
    imageUrl: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Tropical Paradise",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723a996f6ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Golden Gate",
    imageUrl: "https://images.unsplash.com/photo-1541697529387-9d6f6e18f34d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Aurora Borealis",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Rural Landscape",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d42e2?auto=format&fit=crop&w=800&q=80",
  },
];


/**
 * ShrinkingImageCard Component
 * A reusable card with an image that shrinks on click.
 * @param {string} title - The title to display on the card.
 * @param {string} imageUrl - The URL for the background image.
 */
function ShrinkingImageCard({ title, imageUrl }) {
  const imageRef = useRef(null);
  const [shrunk, setShrunk] = useState(false);

  // Toggles the shrink state and animates the image scale using GSAP
  const toggleShrink = () => {
    setShrunk((prev) => !prev);
    gsap.to(imageRef.current, {
      scale: shrunk ? 1 : 0.7, // Animate to 70% scale, then back to 100%
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 overflow-hidden p-4 cursor-pointer rounded-xl shadow-md"
      layout // Framer Motion handles the layout animation
      onClick={toggleShrink}
    >
      {/* Left side - Image */}
      <div className="h-48 md:h-full w-full md:flex-1 flex items-center justify-center">
        <motion.div
          ref={imageRef}
          className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          layout // Ensures the image itself animates layout changes
        />
      </div>

      {/* Right side - Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center pt-4 md:pt-0 md:pl-6 text-center md:text-left"
        layout // Ensures the text block animates its position
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
          Click me to see the image shrink and expand with a smooth animation.
        </p>
      </motion.div>
    </motion.div>
  );
}

/**
 * Main App Component
 * Renders a grid of ShrinkingImageCard components.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Interactive Card Gallery
        </h1>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cardData.map((card) => (
            <ShrinkingImageCard
              key={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
