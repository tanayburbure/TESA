import React, { useRef, useEffect } from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Components3d() {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(overlayRef.current, {
      height: "100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "00 400", // Changed start position for more reliable triggering
        end: "200 bottom", // Adjusted end position
        scrub: 1, // Reduced scrub for more responsive animation
        anticipatePin: 1, // Added to prevent jank
        fastScrollEnd: true, // Better handling of fast scrolling
        invalidateOnRefresh: true // Recalculate on resize/refresh
      },
    });

    // Cleanup function to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: '140vh' }} className="text-center text-white pt-[30vh] bg-[#EBEBEB] relative">
        <div 
          ref={overlayRef}
          className="absolute bottom-0 left-0 w-full"
          style={{
            background: '#18181B',
            maskImage: 'linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,1) 85%), linear-gradient(-45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,1) 90%)',
            WebkitMaskImage: 'linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,1) 85%), linear-gradient(-45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,1) 90%)',
            boxShadow: '0px -20px 50px rgba(0,0,0,0.15), 0px -10px 20px rgba(0,0,0,0.1), 0px -5px 10px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            clipPath: 'polygon(0 15%, 20% 25%, 40% 15%, 60% 25%, 80% 15%, 100% 25%, 100% 100%, 0 100%)'
          }}
        >
        </div>
        <div className="absolute "> 
          <h1 className="text-[5.5vw] text-zinc-800 font-bold font-[font4] transition-all duration-300">Event Highlights</h1>
          <p className="px-20 text-[2.6vh] text-zinc-700 mb-20 -mt-4 font-[font3] transition-all duration-300">Experience the perfect blend of Culture, Technology, Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.</p>
        </div>
        <Canvas flat camera={{ fov: 28 }} style={{ height: '100%' }}>
          <OrbitControls 
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.4} 
            maxAzimuthAngle={Math.PI / 1}
            minAzimuthAngle={-Math.PI / 1}
            enableDamping={true} // Added damping for smoother camera movement
            dampingFactor={0.05} // Added damping factor
          />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Component3d />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={1.8} // Slightly reduced for smoother bloom
              luminanceThreshold={1.8} // Adjusted threshold
              luminanceSmoothing={1} // Increased smoothing
            />
          </EffectComposer> 
        </Canvas>
      </div>
    </div>
  );
}

export default Components3d;