import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollContext } from '../../context/ScrollContext';

export const HeroScene: React.FC = () => {
  const { scrollPercentage } = useScrollContext();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="night" />
      
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <group position={[0, 0, 0]} scale={[1 - scrollPercentage, 1 - scrollPercentage, 1 - scrollPercentage]}>
            <GeometricObjects />
          </group>
        </Float>
      </PresentationControls>
      
      <ParticleField />
    </>
  );
};

const GeometricObjects: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh position={[-2, -0.5, 0]}>
        <torusKnotGeometry args={[0.7, 0.3, 100, 16]} />
        <meshStandardMaterial color="#9333EA" roughness={0.3} metalness={0.8} />
      </mesh>
      
      <mesh position={[2, 0.5, 1]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.2} metalness={0.5} />
      </mesh>
      
      <mesh position={[0, 0, -2]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#F59E0B" wireframe roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
};

const ParticleField: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  // Generate random particles
  const particlesPosition = new Float32Array(particleCount * 3);
  const particlesScale = new Float32Array(particleCount);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlesPosition[i3] = (Math.random() - 0.5) * 15;
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 15;
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 15;
    
    particlesScale[i] = Math.random();
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={particleCount}
          array={particlesScale}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
};