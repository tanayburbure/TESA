import React from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function Components3d() {
  return (
    <div className="relative bg-zinc-900 text-center text-white h-screen">
      <div className="absolute text-zinc-400">
        <h1 className="text-[4.5vw] font-[font1]">Event Highlights</h1>
        <p className="px-4 font-[font2]">
          Experience the perfect blend of culture, technology, and athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of culture, technology, and sports.
        </p>
      </div>
      <Canvas flat camera={{ fov: 27 }} className="h-full">
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.4}
          maxAzimuthAngle={Math.PI}
          minAzimuthAngle={-Math.PI}
        />
        <ambientLight intensity={0.5} />
        <Component3d />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.5}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Components3d;