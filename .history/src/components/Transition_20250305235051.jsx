import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Airplane = () => {
  const propellerRef = useRef();

  // Rotate the propeller
  useFrame(() => {
    if (propellerRef.current) {
      propellerRef.current.rotation.z += 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Fuselage */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[0.8, 0.05, 0.2]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.2, -0.4]}>
        <boxGeometry args={[0.2, 0.2, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Horizontal stabilizers */}
      <mesh position={[0, -0.05, -0.4]}>
        <boxGeometry args={[0.4, 0.05, 0.1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Propeller */}
      <mesh ref={propellerRef} position={[0, 0, 0.52]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

const Transition = () => {
  return (
    <Canvas style={{ height: "100vh", background: "skyblue" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Airplane />
      <OrbitControls />
    </Canvas>
  );
};

export default Transition;
