import React, { useEffect, useRef } from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Components3d() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundColor: "black",
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%", // Adjust for when the effect starts
        end: "top 10%", // Adjust for when the effect ends
        scrub: 1, // Creates a smooth transition
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="text-center text-white pt-[40vh] relative bg-white transition-colors duration-1000">
      <div style={{ height: '150vh' }} className="relative">
        <div className="absolute text-zinc-400">
          <h1 className="text-[5vw] font-[font1]">Event Highlights</h1>
          <p className="px-12 text-[2.3vh] mb-12 font-[font2]">
            Experience the perfect blend of Culture, Technology, and Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.
          </p>
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
              intensity={2.0}
              luminanceThreshold={2}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}

export default Components3d;
