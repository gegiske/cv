'use client'

import { Canvas } from '@react-three/fiber'
import { Model } from '@/components/Model'
import { Suspense } from 'react'
import { Center, Environment, OrbitControls } from '@react-three/drei'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Center>
            <Model scale={15}
              position={[0.0039, -0.0447, -0.026]} />
          </Center>
          <OrbitControls />
          <Environment preset="studio" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

