import { useState } from 'react';

// This is the same component logic, but without using framer-motion.
// The animations are handled with CSS transitions.
export default function HamburgerMenuWithoutFramer() {
  const [isHovered, setIsHovered] = useState(false);

  // Control the expanded size here.
  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "50vh";

  // Base styles for the lines
  const lineBaseStyle = "absolute bg-gray-800 rounded-full transition-all duration-400 ease-in-out";
  const lineWidth = "24px";
  const lineHeight = "2px";
  const expandedWidth = "2px";
  const expandedHeight = "24px";
  
  // Style for the container and the lines within it.
  const containerStyle = {
    width: isHovered ? EXPANDED_WIDTH : "64px",
    height: isHovered ? EXPANDED_HEIGHT : "64px",
    transformOrigin: "top right",
    transition: "width 0.15s ease-in-out, height 0.15s ease-in-out",
  };

  // Styles for the horizontal lines (hamburger state)
  const getHorizontalLineStyle = (position) => {
    let transform;
    if (position === 'top') {
      transform = `translateY(-6px)`;
    } else if (position === 'bottom') {
      transform = `translateY(6px)`;
    } else {
      transform = `translateY(0)`;
    }

    return {
      width: isHovered ? expandedWidth : lineWidth,
      height: isHovered ? expandedHeight : lineHeight,
      opacity: isHovered ? 0 : 1,
      transform: isHovered ? `${transform} scale(0.5)` : `${transform} scale(1)`,
      filter: isHovered ? 'blur(3px)' : 'blur(0px)',
      transitionDelay: isHovered ? '0s' : '0.15s',
    };
  };

  // Styles for the vertical lines (hover state)
  const getVerticalLineStyle = (position) => {
    let transform;
    if (position === 'left') {
      transform = `translateX(-6px)`;
    } else if (position === 'right') {
      transform = `translateX(6px)`;
    } else {
      transform = `translateX(0)`;
    }

    return {
      width: isHovered ? expandedWidth : expandedHeight,
      height: isHovered ? expandedHeight : lineHeight,
      opacity: isHovered ? 1 : 0,
      transform: isHovered ? `${transform} scale(1)` : `${transform} scale(0.5)`,
      filter: isHovered ? 'blur(0px)' : 'blur(3px)',
      transitionDelay: isHovered ? '0.15s' : '0s',
    };
  };

  return (
    <div className='fixed top-6 right-6 z-[99999]'>
      <div
        className="w-16 h-16 cursor-pointer bg-[#4A9782] rounded-lg relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={containerStyle}
      >
        {/* Fixed container for lines to be positioned correctly */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          {/* Horizontal Lines */}
          <div
            className={lineBaseStyle}
            style={getHorizontalLineStyle('top')}
          />
          <div
            className={lineBaseStyle}
            style={getHorizontalLineStyle('middle')}
          />
          <div
            className={lineBaseStyle}
            style={getHorizontalLineStyle('bottom')}
          />

          {/* Vertical Lines */}
          <div
            className={lineBaseStyle}
            style={getVerticalLineStyle('left')}
          />
          <div
            className={lineBaseStyle}
            style={getVerticalLineStyle('center')}
          />
          <div
            className={lineBaseStyle}
            style={getVerticalLineStyle('right')}
          />
        </div>
      </div>
    </div>
  );
}

// Main App component to display the menu
// This is not part of the requested component but is needed to run the example
function App() {
  return (
    <div className="relative w-screen h-screen bg-gray-100 font-sans">
      <HamburgerMenuWithoutFramer />
      <div className="flex items-center justify-center h-full text-2xl text-gray-700">
        <h1 className="p-4 bg-white rounded-lg shadow-lg">Hover over the menu!</h1>
      </div>
    </div>
  );
}

export default App;
