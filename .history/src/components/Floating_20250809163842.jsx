import React, { useState, useEffect } from 'react';

// Main Floating component
const Floating = () => {
  // State to track the mouse position relative to the center of the window
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // State to hold the logo data with their initial fixed positions and image URLs
  const [logos] = useState([
    // Using placeholder images for demonstration
    { id: 1, alt: 'TypeScript', imageUrl: './vscode.png', top: 25, left: 25, filterColor: '#007ACC', animationDelay: '0s' },
    { id: 2, alt: 'R', imageUrl: './chip.png', top: 15, left: 67, filterColor: '#276DC3', animationDelay: '0.5s' },
    { id: 3, alt: 'Rust', imageUrl: './radio.png', top: 70, left: 20, filterColor: '#E4482B', animationDelay: '1s' },
    { id: 4, alt: 'Bitcoin', imageUrl: './python.png', top: 84, left: 80, filterColor: '#F7931A', animationDelay: '1.5s' },
    { id: 5, alt: 'VS Code', imageUrl: './study.png', top: 70, left: 60, filterColor: '#007ACC', animationDelay: '2s' },
  ]);

  // useEffect to set up and clean up the mousemove event listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      setMousePosition({
        x: e.clientX - windowWidth / 2,
        y: e.clientY - windowHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="absolute inset-0 z-0 h-screen w-screen overflow-hidden font-inter">
      {/* CSS for the continuous up-and-down animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-2vh); }
            100% { transform: translateY(0); }
          }
          .floating-logo {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Main container for the logos and their movement. The mousemove transform is applied here. */}
      <div
        id="background-container"
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          // This transform moves all logos as a group in response to the mouse
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      >
        {/* Each logo has its own continuous up-and-down animation via a CSS class */}
        {logos.map(logo => (
          <div
            key={logo.id}
            className={`absolute flex h-16 w-16 items-center justify-center rounded-xl p-2 floating-logo`}
            style={{
              // These positions are fixed relative to the parent container
              left: `${logo.left}%`,
              top: `${logo.top}%`,
              filter: `drop-shadow(0 0 0px ${logo.filterColor})`,
              animationDelay: logo.animationDelay,
            }}
          >
            <img src={logo.imageUrl} alt={logo.alt} className="w-full h-full object-contain rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Floating;
