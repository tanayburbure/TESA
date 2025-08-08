import React, { useState, useEffect } from "react";

// Utility function to combine classNames (replacing cn from @/lib/utils)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// PageTransition component
function PageTransition({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");
  
  const rotateDirection = currentDirection => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };
  
  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };
  
  const highlight = "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";
  
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);
  
  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className)}
      >
        {children}
      </div>
      
      {/* Animated border gradient */}
      <div
        className={cn("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]")}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
          background: hovered ? highlight : movingMap[direction],
          transition: `background ${duration}s linear`,
        }}
      />
      
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

// Main component with preview
export default function PageTransitionPreview() {
  const [showDemo, setShowDemo] = useState(true);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">PageTransition Component</h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          A beautiful animated border gradient component that rotates around the button and highlights on hover.
        </p>
      </div>
      
      {showDemo && (
        <div className="space-y-12">
          {/* Demo Buttons */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <PageTransition duration={1.5}>
              Hover me!
            </PageTransition>
            
            <PageTransition 
              duration={2} 
              clockwise={false}
              className="px-6 py-3 font-semibold"
            >
              Counter-clockwise
            </PageTransition>
            
            <PageTransition 
              duration={0.8}
              className="px-8 py-4 text-lg font-bold"
              containerClassName="border-2"
            >
              Fast Animation
            </PageTransition>
          </div>
          
          {/* Custom styled examples */}
          <div className="flex flex-wrap gap-6 justify-center">
            <PageTransition 
              as="div"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium cursor-pointer"
            >
              Custom Background
            </PageTransition>
            
            <PageTransition 
              duration={3}
              className="px-8 py-2 bg-emerald-600 text-white font-semibold"
            >
              Slow & Steady
            </PageTransition>
            
            <PageTransition 
              className="px-5 py-2 bg-red-600 text-white font-medium"
              containerClassName="border-red-300"
            >
              Call to Action
            </PageTransition>
          </div>
        </div>
      )}
      
      {/* Control Panel */}
      <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {showDemo ? 'Hide Demo' : 'Show Demo'}
          </button>
          
          <div className="text-white/70 text-sm">
            {showDemo ? 'Demo is visible' : 'Demo is hidden'}
          </div>
        </div>
        
        <div className="mt-4 text-center text-white/60 text-sm max-w-md">
          The gradient border rotates automatically and highlights blue when hovered. 
          Try hovering over the buttons to see the effect!
        </div>
      </div>
      
      {/* Usage Instructions */}
      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10 max-w-2xl">
        <h3 className="text-xl font-semibold text-white mb-3">Usage</h3>
        <div className="text-gray-300 text-sm space-y-2">
          <p><strong>duration:</strong> Controls animation speed (in seconds)</p>
          <p><strong>clockwise:</strong> Direction of border rotation (true/false)</p>
          <p><strong>as:</strong> HTML tag to render (button, div, etc.)</p>
          <p><strong>className:</strong> Custom styles for inner content</p>
          <p><strong>containerClassName:</strong> Custom styles for outer container</p>
        </div>
      </div>
    </div>
  );
}