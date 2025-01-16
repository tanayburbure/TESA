import React from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
function Components3d(){
  return (
    <div style={{ height: '100vh' }} className="text-center text-white relative p-12">
     <div className="absolute top-2 mt-12 mb-12"> 
      <h1 className=" text-[4.5vw] ">Our Event Highlights</h1>
      <p className="">Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports.</p>
      </div>
      <Canvas flat camera={{fov: 28}} style={{ height: '100%' }} className="bgbg-[#0C0C0C]">
        <OrbitControls 
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2} 
          maxAzimuthAngle={Math.PI / 8}
          minAzimuthAngle={-Math.PI / 8}
        />
        <ambientLight />
        <Component3d/>
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0} // The bloom intensity.
            luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer> 
      </Canvas>
    </div>
  );
}

export default Components3d;