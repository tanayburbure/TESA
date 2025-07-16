import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

function Transition() {
  const shape = new THREE.Shape();
  shape.moveTo(10, 20);
  shape.lineTo(-1, -1);
  shape.lineTo(1, -1);
  shape.closePath();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color="black" flatShading />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Transition />
    </Canvas>
  );
}
