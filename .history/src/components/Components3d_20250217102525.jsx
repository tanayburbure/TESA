import React from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
function Components3d(){
  return (
    <div style={{ height: '100vh' }} className="text-center text-white relative ">
     <div className="absolute text-zinc-400"> 
      <h1 className=" text-[4.5vw] font-[font1]">Event Highlights</h1>
      <p className="px-4 font-[font2]">Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports.</p>
      </div>
      <Canvas flat camera={{fov: 27}} style={{ height: '100%' }} className="bg-[#FFFFFF]">
        <OrbitControls 
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI /1.5}
          minPolarAngle={Math.PI / 2.4} 
          maxAzimuthAngle={Math.PI / 1}
          minAzimuthAngle={-Math.PI / 1}
        />
        <ambientLight />
        <Component3d/>
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.5} // The bloom intensity.
            luminanceThreshold={0.8} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.9} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer> 
      </Canvas>
    </div>
  );
}

export default Components3d;