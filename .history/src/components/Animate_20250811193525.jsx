import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShrinkingImageAnimation = () => {
  const rectangleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Set initial state
    gsap.set(rectangleRef.current, {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "left center"
    });

    // Create scroll-triggered animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      animation: gsap.to(rectangleRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power2.inOut"
      })
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20"
             style={{ height: '30vh', minHeight: '300px' }}>
          <div className="flex h-full">
            {/* Left side - Animation area */}
            <div className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
              <div
                ref={rectangleRef}
                className="w-48 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={handleAnimation}
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffd93d)'
                }}
              />
              
              {/* Floating particles for extra visual appeal */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800/30 to-gray-900/30">
              <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Shrinking Animation
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Click on the colorful rectangle to trigger a smooth shrinking animation. 
                The shape will smoothly scale down while rotating 360 degrees, then you can 
                click again to reverse the animation back to its original size.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">GSAP powered animations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-400">Smooth reversible transitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-400">Interactive click controls</span>
                </div>
              </div>

              <button
                onClick={handleAnimation}
                disabled={isAnimating}
                className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isAnimating 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isAnimating ? 'Animating...' : isReversed ? 'Expand' : 'Shrink'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShrinkingImageAnimation;