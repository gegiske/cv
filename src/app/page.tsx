'use client'

import { Canvas } from '@react-three/fiber'
import { Model } from '@/components/Model'
import { Suspense } from 'react'
import { Center, Environment, OrbitControls } from '@react-three/drei'

export default function Home() {
  return (
    <div id='canvas-container'>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Center>
            <Model scale={15}
              position={[0.0039, -0.0447, -0.026]} />
          </Center>
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

