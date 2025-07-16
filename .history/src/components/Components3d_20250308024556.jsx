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
          className="absolute bottom-0 left-0 w-full "
          style={{
            background: '#18181B',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 80%)',
            boxShadow: '0px -20px 50px rgba(0,0,0,0.15), 0px -10px 20px rgba(0,0,0,0.1), 0px -5px 10px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
        </div>
        <div className="absolute "> 
          <h1 className="text-[5.5vw] text-zinc-600  font-[font1] transition-all duration-300">Event Highlights</h1>
          <p className="px-20 text-[2.5vh] text-zinc-300 mb-16 font-[font2] transition-all duration-300">Experience the perfect blend of Culture, Technology, Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.</p>
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