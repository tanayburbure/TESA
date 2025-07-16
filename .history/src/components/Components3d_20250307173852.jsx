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
      ease: "power2.inOut", // Changed to power2 for smoother easing
      scrollTrigger: {
        trigger: containerRef.current,
        start: "200 bottom",
        end: "top center",
        scrub: 2, // Reduced scrub value for smoother scrolling
        markers: true,
        smoothScroll: true // Added smooth scroll
      },
    });
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: '150vh' }} className="text-center text-white pt-[40vh] relative">
        <div 
          ref={overlayRef}
          className="absolute left-0 w-full h-0"
          style={{
            background: '#18181B',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,1) 50%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,1) 50%)',
            boxShadow: '0px -20px 50px rgba(0,0,0,0.15), 0px -10px 20px rgba(0,0,0,0.1), 0px -5px 10px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transition: 'all 0.3s ease-in-out' // Added smooth transition
          }}
        >
        </div>
        <div className="absolute text-zinc-400"> 
          <h1 className="text-[5vw] font-[font1] transition-all duration-300">Event Highlights</h1>
          <p className="px-12 text-[2.3vh] mb-12 font-[font2] transition-all duration-300">Experience the perfect blend of Culture, Technology, Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.</p>
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