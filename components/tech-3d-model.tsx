'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function FloatingCube({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function FloatingRing({ position, speed }: { position: [number, number, number], speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.08, 16, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.5}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  )
}

function Laptop() {
  const laptopRef = useRef<THREE.Group>(null)
  const codeLineWidths = useRef([1.6, 1.8, 1.4, 1.7, 1.5, 1.9, 1.3, 1.6, 1.4, 1.5])
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={laptopRef} scale={0.7}>
        {/* Laptop Base */}
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.1, 1.8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.1} 
            roughness={0.9}
          />
        </mesh>
        
        {/* Keyboard */}
        <mesh position={[0, -0.4, 0]} castShadow>
          <boxGeometry args={[2.3, 0.05, 1.6]} />
          <meshStandardMaterial 
            color="#000000" 
            metalness={0.5}
            roughness={0.8}
          />
        </mesh>

        {/* Screen Frame */}
        <mesh position={[0, 0.5, -0.85]} rotation={[-0.2, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.4, 1.6, 0.1]} />
          <meshStandardMaterial 
            color="#d1d5db" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>

        {/* Screen Display - Dark Background */}
        <mesh position={[0, 0.5, -0.8]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshStandardMaterial 
            color="#000000" 
            emissive="#000000"
            emissiveIntensity={0.1}
            toneMapped={false}
          />
        </mesh>

        {/* Terminal Header Bar */}
        <mesh position={[0, 1.15, -0.79]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[2.2, 0.1, 0.01]} />
          <meshStandardMaterial 
            color="#000000" 
            emissive="#000000"
            emissiveIntensity={0.8}
            toneMapped={false}
          />
        </mesh>

        {/* Terminal Dots */}
        {[0, 1, 2].map((i) => (
          <mesh 
            key={`dot-${i}`}
            position={[-0.95 + i * 0.08, 1.15, -0.78]} 
            rotation={[-0.2, 0, 0]}
          >
            <circleGeometry args={[0.02, 16]} />
            <meshStandardMaterial 
              color={i === 0 ? "#ef4444" : i === 1 ? "#fbbf24" : "#22c55e"}
              emissive={i === 0 ? "#ef4444" : i === 1 ? "#fbbf24" : "#22c55e"}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* Code Lines on Screen - More realistic */}
        {codeLineWidths.current.map((width, i) => (
          <mesh 
            key={i}
            position={[-0.9, 0.95 - i * 0.12, -0.79]} 
            rotation={[-0.2, 0, 0]}
          >
            <boxGeometry args={[width, 0.06, 0.06]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#a78bfa" : "#ffffff"}
              emissive={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#a78bfa" : "#ffffff"}
              emissiveIntensity={1.6}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* Cursor Blink */}
        <mesh position={[0.8, -0.25, -0.79]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.02, 0.04, 0.01]} />
          <meshStandardMaterial 
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>

        {/* Glowing particles around laptop */}
        {[...Array(8)].map((_, i) => (
          <mesh 
            key={`particle-${i}`}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 2.8,
              Math.sin((i / 8) * Math.PI * 2) * 1,
              Math.sin((i / 8) * Math.PI * 2) * 2.2
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#ffffff"
              emissiveIntensity={2.5}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export function Tech3DModel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-[280px] sm:h-[350px] lg:h-[420px] bg-black rounded-lg animate-pulse" />
  }

  return (
    <div className="w-full h-[280px] sm:h-[350px] lg:h-[420px] relative flex items-center justify-center mx-auto bg-black rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        gl={{ 
          alpha: false, 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#000000']} />
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.9} />
        <spotLight position={[8, 8, 8]} angle={0.3} penumbra={1} intensity={2.5} castShadow />
        <spotLight position={[-8, -8, -8]} angle={0.3} penumbra={1} intensity={1.5} />
        <pointLight position={[0, 4, 4]} intensity={3} color="#ffffff" />
        <pointLight position={[-4, 0, -4]} intensity={2} color="#ffffff" />
        
        {/* Main Laptop */}
        <Laptop />
        
        {/* Floating Wireframe Cubes */}
        <group>
          <FloatingCube position={[-2.5, 1.2, -1.5]} scale={0.25} speed={0.5} />
          <FloatingCube position={[2.5, -0.8, -0.8]} scale={0.2} speed={0.7} />
          <FloatingCube position={[2, 1.5, 0.8]} scale={0.18} speed={0.6} />
        </group>
        
        {/* Floating Rings */}
        <FloatingRing position={[-2, -1.2, 0]} speed={0.4} />
        <FloatingRing position={[2.3, 1, -0.8]} speed={0.6} />
        
        {/* Additional Floating Spheres */}
        {[...Array(5)].map((_, i) => (
          <Float key={`float-${i}`} speed={3 + i * 0.5} rotationIntensity={2} floatIntensity={3}>
            <mesh position={[
              Math.cos((i / 5) * Math.PI * 2) * 3,
              Math.sin((i / 5) * Math.PI * 2) * 1.5,
              Math.cos((i / 5) * Math.PI * 2) * 1.2
            ]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial 
                color="#ffffff" 
                emissive="#ffffff"
                emissiveIntensity={2}
                toneMapped={false}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 3.5}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}
