import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const AnimatedCard = ({ imageSrc, heading, description, index }) => {
  const imageRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline for smooth reversible animation
    animationRef.current = gsap.timeline({ 
      paused: true,
      ease: "power2.inOut"
    });

    if (imageRef.current) {
      // Animation: shrink width and height with transform origin center
      animationRef.current.to(imageRef.current, {
        scaleX: 0.3,
        scaleY: 0.4,
        duration: 1.2,
        transformOrigin: "center center"
      });
    }

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handleToggleAnimation = () => {
    if (!animationRef.current) return;
    
    setIsAnimating(prev => !prev);
    
    if (animationRef.current.progress() === 0 || animationRef.current.reversed()) {
      animationRef.current.play();
    } else {
      animationRef.current.reverse();
    }
  };

  return (
    <motion.div 
      className="w-full h-[30vh] flex bg-white rounded-lg shadow-lg overflow-hidden mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Left side - Image container */}
      <div className="flex-1 relative bg-gray-100 flex items-center justify-center overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-300 hover:brightness-110"
          style={{ 
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover'
          }}
          onClick={handleToggleAnimation}
        />
        
        {/* Overlay for better interaction feedback */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer flex items-center justify-center"
          onClick={handleToggleAnimation}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.button
            className="bg-white bg-opacity-80 text-gray-800 px-4 py-2 rounded-full font-medium opacity-0 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAnimating ? 'Expand' : 'Shrink'}
          </motion.button>
        </motion.div>
      </div>

      {/* Right side - Content */}
      <motion.div 
        className="flex-1 p-6 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-4 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
        >
          {heading}
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 leading-relaxed text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="mt-4 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <div className="w-2 h-2 bg-blue-300 rounded-full" />
          <div className="w-2 h-2 bg-blue-200 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Card data array with 10 different cards
const cardData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Mountain Landscape",
    description: "Experience the serene beauty of mountain landscapes with our interactive animation. Click on the image to see the smooth shrinking effect powered by GSAP."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    heading: "Forest Adventure",
    description: "Discover the magic of forest adventures through our animated interface. The reversible animation creates an engaging user experience with fluid movements."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Ocean Waves",
    description: "Dive into the calming rhythm of ocean waves. This interactive card showcases the power of combining GSAP animations with Framer Motion smoothness."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Desert Dunes",
    description: "Journey through endless desert landscapes where golden sands meet infinite horizons. Experience the beauty of minimalist design with dynamic interactions."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "City Skyline",
    description: "Explore urban architecture and modern cityscapes through our interactive animation system. Each click reveals new perspectives on metropolitan beauty."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    heading: "Autumn Forest",
    description: "Witness the spectacular transformation of autumn leaves through our engaging animation. The seasonal beauty comes alive with every interaction."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Lake Reflection",
    description: "Capture the perfect mirror reflection of mountains on crystal-clear lake waters. This card demonstrates the harmony between nature and technology."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Snowy Peaks",
    description: "Scale the majestic snow-capped mountain peaks through our immersive animation experience. Feel the crisp mountain air with every click."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    heading: "Tropical Paradise",
    description: "Escape to tropical paradise with palm trees swaying in gentle ocean breezes. Our animation brings the vacation vibes directly to your screen."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heading: "Northern Lights",
    description: "Witness the magical dance of aurora borealis across starlit skies. This final card showcases the incredible beauty of natural light phenomena."
  }
];

// Main App Component with 10 cards
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Interactive Animation Gallery
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Click on any image to see the smooth shrinking animation in action
        </motion.p>
        
        {/* Render all 10 cards */}
        <div className="space-y-6">
          {cardData.map((card, index) => (
            <AnimatedCard
              key={index}
              imageSrc={card.imageSrc}
              heading={card.heading}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
