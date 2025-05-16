import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ExplorerModelProps {
  activeTab: number;
}

export const ExplorerModel: React.FC<ExplorerModelProps> = ({ activeTab }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Different models based on active tab
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  
  return (
    <group ref={groupRef}>
      {activeTab === 1 && <WebsiteModel />}
      {activeTab === 2 && <GameModel />}
      {activeTab === 3 && <TourModel />}
    </group>
  );
};

const WebsiteModel: React.FC = () => {
  const cubesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, i) => {
        cube.position.y = Math.sin(state.clock.elapsedTime * 0.8 + i * 0.5) * 0.2;
        cube.rotation.z = state.clock.elapsedTime * 0.2 + i * 0.1;
      });
    }
  });

  return (
    <group ref={cubesRef}>
      {/* Website visualization - floating cubes in a layout formation */}
      {Array.from({ length: 12 }).map((_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        return (
          <mesh 
            key={i} 
            position={[col * 1.2 - 1.8, row * 1.2 - 1.2, 0]}
            scale={0.4}
          >
            <boxGeometry />
            <meshStandardMaterial 
              color={i % 3 === 0 ? '#9333EA' : i % 3 === 1 ? '#3B82F6' : '#F59E0B'} 
              roughness={0.3} 
              metalness={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const GameModel: React.FC = () => {
  const tetrisRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (tetrisRef.current) {
      tetrisRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={tetrisRef}>
      {/* Game visualization - tetris-like blocks */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.3} metalness={0.5} />
      </mesh>
      
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#EC4899" roughness={0.3} metalness={0.5} />
      </mesh>
      
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#EC4899" roughness={0.3} metalness={0.5} />
      </mesh>
      
      <mesh position={[-0.5, -1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.3} metalness={0.5} />
      </mesh>
      
      <mesh position={[0.5, -1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#10B981" roughness={0.3} metalness={0.5} />
      </mesh>
      
      <mesh position={[1.5, -1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#10B981" roughness={0.3} metalness={0.5} />
      </mesh>
    </group>
  );
};

const TourModel: React.FC = () => {
  const tourRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (tourRef.current) {
      tourRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={tourRef}>
      {/* Virtual tour visualization - simple building */}
      {/* Base platform */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <boxGeometry args={[5, 0.5, 5]} />
        <meshStandardMaterial color="#64748B" roughness={0.7} />
      </mesh>
      
      {/* Building structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2.5, 3]} />
        <meshStandardMaterial color="#94A3B8" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.5, 1.5, 4]} />
        <meshStandardMaterial color="#F97316" roughness={0.4} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0, 0, 1.51]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial color="#0EA5E9" roughness={0.1} metalness={0.9} />
      </mesh>
      
      <mesh position={[1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial color="#0EA5E9" roughness={0.1} metalness={0.9} />
      </mesh>
      
      <mesh position={[0, 0, -1.51]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial color="#0EA5E9" roughness={0.1} metalness={0.9} />
      </mesh>
      
      <mesh position={[-1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial color="#0EA5E9" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
};