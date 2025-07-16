import React from 'react';
import { Canvas } from '@react-three/fiber';

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry args={[1, 1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

function Transition() {
  return (
    <Canvas style={{ height: '100vh', background: 'skyblue' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Plane />
    </Canvas>
  );
}

export default Transition;