import React from "react";
import Component3d from "./Component3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
function Components3d(){
  return (
    <div style={{ height: '80vh' }} className="text-center mt-20 text-white p-12">
      <h1 className=" text-[5vw]">Our Event Highlights</h1>
      <p>Expeirence the perfect blend of Culture,Technology,Athleticism at our captivating events , where innovation meets tradition in a spectacular showcase of talent and passsion join us on exhilarating journey through the reamls of Culture, Techonology and Sports.</p>
      <Canvas flat camera={{fov: 28}} style={{ height: '100%' }} className="bgbg-[#0C0C0C]">
        <OrbitControls enableZoom={false} />
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