import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Component3d = () => {
  let tex= useTexture('./Untitled design.png')
  let card= useRef(null)
  
  useFrame((state,delta)=>{
    card.current.rotation.y -= delta;
  })
  return (
    <group rotation={[0, 1, 0.3]}>
        <mesh ref={card} > 
          <cylinderGeometry args={[1,1,1,20,20,true]}/>
          <meshStandardMaterial map={tex}  side={THREE.DoubleSide}/>
        </mesh>
    </group>
  )
}

export default Component3d;