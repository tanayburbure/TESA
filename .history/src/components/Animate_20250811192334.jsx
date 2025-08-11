import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const AnimatedCard = ({ imageSrc, heading, description }) => {
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
      className="w-full h-[30vh] flex bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-4 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {heading}
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 leading-relaxed text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="mt-4 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <div className="w-2 h-2 bg-blue-300 rounded-full" />
          <div className="w-2 h-2 bg-blue-200 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Usage Example Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Shrinking Image Animation Demo
        </h1>
        
        <AnimatedCard
          imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Mountain Landscape"
          description="Experience the serene beauty of mountain landscapes with our interactive animation. Click on the image to see the smooth shrinking effect powered by GSAP and enhanced with Framer Motion for ultimate smoothness."
        />

        <AnimatedCard
          imageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          heading="Forest Adventure"
          description="Discover the magic of forest adventures through our animated interface. The reversible animation creates an engaging user experience that responds to your interactions with fluid, natural movements."
        />
      </div>
    </div>
  );
};

export default App;
