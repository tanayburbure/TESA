import React from 'react'
import { Canvas } from '@react-three/fiber'
import Component3d from './Component3d'

const Scene = () => {
  return (
    <div className="no-draw" style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight />
        <Component3d />
      </Canvas>
    </div>
  )
}

export default Scene
