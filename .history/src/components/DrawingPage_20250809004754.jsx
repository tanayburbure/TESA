import React, { useState, useEffect, useRef, useCallback } from 'react';

const MouseTrailDrawing = ({ 
  children, 
  trailLength = 20, 
  fadeOutDuration = 1500,
  lineColor = "#333",
  lineWidth = 2 
}) => {
  const containerRef = useRef(null);
  const [trails, setTrails] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Generate unique ID for each trail point
  const generateId = () => Date.now() + Math.random();

  // Get mouse position relative to container
  const getMousePosition = useCallback((e) => {
    if (!containerRef.current) return null;
    
    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  // Handle mouse move event
  const handleMouseMove = useCallback((e) => {
    const position = getMousePosition(e);
    if (!position) return;

    const newPoint = {
      id: generateId(),
      x: position.x,
      y: position.y,
      timestamp: Date.now()
    };

    setTrails(prevTrails => {
      const updatedTrails = [...prevTrails, newPoint];
      
      // Remove old points that exceed trail length
      if (updatedTrails.length > trailLength) {
        return updatedTrails.slice(-trailLength);
      }
      
      return updatedTrails;
    });
  }, [getMousePosition, trailLength]);

  // Handle mouse enter/leave for drawing state
  const handleMouseEnter = () => setIsDrawing(true);
  const handleMouseLeave = () => {
    setIsDrawing(false);
    setTrails([]);
  };

  // Clean up old trails based on time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails(prevTrails => 
        prevTrails.filter(point => now - point.timestamp < fadeOutDuration)
      );
    }, 100);

    return () => clearInterval(interval);
  }, [fadeOutDuration]);

  // SVG path generator for smooth curves
  const generatePath = (points) => {
    if (points.length < 2) return '';

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      
      if (i === 1) {
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        // Create smooth curves using quadratic Bezier curves
        const cp = {
          x: (prev.x + curr.x) / 2,
          y: (prev.y + curr.y) / 2
        };
        path += ` Q ${prev.x} ${prev.y} ${cp.x} ${cp.y}`;
      }
    }
    
    return path;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text content */}
      <div className="relative z-10 p-8">
        {children}
      </div>

      {/* Drawing trail overlay */}
      {isDrawing && trails.length > 1 && (
        <svg
          className="absolute inset-0 pointer-events-none z-20"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {trails.map((_, index) => {
                const opacity = (index + 1) / trails.length;
                const position = (index / (trails.length - 1)) * 100;
                return (
                  <stop
                    key={index}
                    offset={`${position}%`}
                    stopColor={lineColor}
                    stopOpacity={opacity * 0.8}
                  />
                );
              })}
            </linearGradient>
          </defs>
          
          <path
            d={generatePath(trails)}
            stroke="url(#trailGradient)"
            strokeWidth={lineWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-100 ease-out"
          />
          
          {/* Individual points for enhanced effect */}
          {trails.map((point, index) => {
            const age = Date.now() - point.timestamp;
            const opacity = Math.max(0, 1 - (age / fadeOutDuration));
            const size = Math.max(1, lineWidth * opacity);
            
            return (
              <circle
                key={point.id}
                cx={point.x}
                cy={point.y}
                r={size / 2}
                fill={lineColor}
                opacity={opacity * 0.6}
                className="transition-opacity duration-100"
              />
            );
          })}
        </svg>
      )}
    </div>
  );
};

// Usage example component
const DrawingPage = () => {
  return (
    <MouseTrailDrawing
      trailLength={25}
      fadeOutDuration={2000}
      lineColor="#2563eb"
      lineWidth={3}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Interactive Drawing Experience
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Move your mouse around this area to create beautiful drawing trails! 
          The lines will follow your cursor and gradually fade away, creating 
          a pencil-like drawing effect.
        </p>
        <p className="text-md text-gray-500">
          This component demonstrates smooth mouse tracking with SVG paths, 
          gradient effects, and automatic cleanup of old trail segments.
        </p>
        
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Features:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Smooth mouse trail following</li>
            <li>Gradual fade-out effect</li>
            <li>Customizable colors and dimensions</li>
            <li>Performance optimized</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </MouseTrailDrawing>
  );
};

export default DrawingPage;
