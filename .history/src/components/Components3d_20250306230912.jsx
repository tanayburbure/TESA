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
      y: "-10vh", // Move it slightly upward
      boxShadow: "0px -20px 50px rgba(0,0,0,0.5)", // Adds depth
      ease: "power2.out",
      skewY: 2, // Slight uneven movement
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: 2, // Smooth transition
      },
    });
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="text-center text-white pt-[50vh] relative bg-white transition-colors duration-1000"
      style={{ height: "180vh" }} // Extra height for a smoother effect
    >
      <div className="relative">
        <div className="absolute text-zinc-400">
          <h1 className="text-[5vw] font-[font1]">Event Highlights</h1>
          <p className="px-12 text-[2.3vh] mb-12 font-[font2]">
            Experience the perfect blend of Culture, Technology, and Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.
          </p>
        </div>
        <Canvas flat camera={{ fov: 28 }} style={{ height: "100%" }}>
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
