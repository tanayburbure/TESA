import React, { useRef } from "react";
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

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(overlayRef.current, {
      scale: 20,
      opacity: 1,
      ease: "power1.inOut", 
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-100 200",
        end: "200 top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: '150vh' }} className="text-center text-white pt-[40vh] relative overflow-hidden">
        <div ref={overlayRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#18181B] rounded-full opacity-0"
          style={{
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
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