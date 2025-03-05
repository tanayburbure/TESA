import React from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";

function Components3d() {
  return (
    <div style={{ height: '100vh' }} className="text-center text-white relative bg-zinc-900">
      <div className="absolute text-zinc-400"> 
        <h1 className="text-[4.5vw] font-[font1]">Event Highlights</h1>
        <p className="px-4 font-[font2]">Experience the perfect blend of Culture, Technology, Athleticism at our captivating events, where innovation meets tradition in a spectacular showcase of talent and passion. Join us on an exhilarating journey through the realms of Culture, Technology, and Sports.</p>
      </div>
      <Canvas flat camera={{ fov: 27 }} style={{ height: '100%' }}>
        <OrbitControls 
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.4} 
          maxAzimuthAngle={Math.PI / 1}
          minAzimuthAngle={-Math.PI / 1}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Component3d />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.0} // Increased bloom intensity for a more pronounced effect.
            luminanceThreshold={1} // Adjusted luminance threshold for better visibility.
            luminanceSmoothing={0.5} // Adjusted smoothness for a softer bloom effect.
          />
        </EffectComposer> 
      </Canvas>
    </div>
  );
}

export default Components3d;