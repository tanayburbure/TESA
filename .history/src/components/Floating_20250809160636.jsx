import React, { useState, useEffect } from 'react';

// Main Floating component
const Floating = () => {
  // State to track the mouse position relative to the center of the window
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // State to hold the logo data with their initial fixed positions
  const [logos] = useState([
    { id: 1, text: 'TS', top: 20, left: 10, color: 'text-blue-500', animationDelay: '0s' },
    { id: 2, text: 'R', top: 30, left: 80, color: 'text-blue-700', animationDelay: '0.5s' },
    { id: 3, text: 'Rust', top: 75, left: 30, color: 'text-orange-500', animationDelay: '1s' },
    { id: 4, text: '₿', top: 60, left: 90, color: 'text-yellow-400', animationDelay: '1.5s' },
    { id: 5, text: 'VS', top: 85, left: 50, color: 'text-blue-500', animationDelay: '2s' },
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
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900 font-inter text-white">
      {/* CSS for the continuous up-and-down animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-1vh); }
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
        className="absolute inset-0 z-0 flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          // This transform moves all logos as a group in response to the mouse
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      >
        {/* Each logo has its own continuous up-and-down animation via a CSS class */}
        {logos.map(logo => (
          <div
            key={logo.id}
            className={`absolute flex h-16 w-16 items-center justify-center rounded-xl p-2 text-4xl font-bold floating-logo`}
            style={{
              // These positions are fixed relative to the parent container
              left: `${logo.left}%`,
              top: `${logo.top}%`,
              color: 'white',
              textShadow: `0 0 10px ${logo.color.replace('text-', '').replace('-500', '').replace('-700', '').replace('-400', '')}`,
              animationDelay: logo.animationDelay,
            }}
          >
            <span className={`${logo.color}`}>
              {logo.text === '₿' ? (
                <span role="img" aria-label="bitcoin">{logo.text}</span>
              ) : (
                logo.text
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Floating;
