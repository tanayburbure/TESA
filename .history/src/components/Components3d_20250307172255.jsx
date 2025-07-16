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
        start: "top bottom",
        end: "top center", 
        scrub: 5,
        markers:true,
      },
    });
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: '150vh' }} className="text-center text-white pt-[40vh] relative">
        <div 
          ref={overlayRef}
          className="absolute bottom-48 left-0 w-full h-0"
          style={{
            background: '#18181B',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,1) 40%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,1) 45%)',
            boxShadow: '0px -20px 50px rgba(0,0,0,0.1), 0px -10px 20px rgba(0,0,0,0.08), 0px -5px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.5s ease-in-out',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)'
          }}
        >
        </div>
        <div className="absolute text-zinc-400"> 
          <h1 className="text-[5vw] font-[font1]">Event Highlights</h1>
          <p className="px-12 text-[2.3vh] mb-12 font-[font2]">Experience the perfect blend of Culture, Technology, Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.</p>
        </div>
        <Canvas flat camera={{ fov: 28 }} style={{ height: '100%' }}>
          <OrbitControls 
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.4} 
            maxAzimuthAngle={Math.PI / 1}
            minAzimuthAngle={-Math.PI / 1}
          />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Component3d />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={2.0} // Increased bloom intensity for a more pronounced effect.
              luminanceThreshold={2} // Adjusted luminance threshold for better visibility.
              luminanceSmoothing={0.9} // Adjusted smoothness for a softer bloom effect.
            />
          </EffectComposer> 
        </Canvas>
      </div>
    </div>
  );
}

export default Components3d;