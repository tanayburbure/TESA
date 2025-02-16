import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Component3d = () => {
  let tex= useTexture('/images/3d.png')
  let card= useRef(null)
  
  useFrame((state,delta)=>{
    card.current.rotation.y -= delta * 0.25; // Reduced rotation speed by multiplying delta by 0.25
  })
  return (
    <group rotation={[0, 0.7, 0.3]}>
        <mesh ref={card} > 
          <cylinderGeometry args={[1,1,0.9,50,50,true]}/>
          <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent={true} opacity={1} envMapIntensity={0.5} /> {/* Adjusted envMapIntensity for brightness */}
        </mesh>
    </group>
  )
}

export default Component3d;