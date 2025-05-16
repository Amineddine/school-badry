import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Interactive 3D scene with objects that respond to mouse proximity
export const Interactive3DScene: React.FC = () => {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  // Use mouse position to influence object movements
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      // Slightly tilt the group based on mouse position
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.2,
        0.1
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.x * 0.2,
        0.1
      );
    }
  });

  return (
    <>
      <color attach="background" args={["#050010"]} />
      <fog attach="fog" args={["#070020", 5, 20]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      
      <group ref={groupRef}>
        <InteractiveCubes count={30} />
      </group>
    </>
  );
};

interface InteractiveCubesProps {
  count: number;
}

const InteractiveCubes: React.FC<InteractiveCubesProps> = ({ count }) => {
  const { mouse, viewport } = useThree();
  const instances = useRef<THREE.InstancedMesh>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  
  // Calculate positions for each cube instance
  const dummy = new THREE.Object3D();
  const positions = useRef<{ position: THREE.Vector3; baseScale: number; }[]>([]);
  
  if (positions.current.length === 0) {
    for (let i = 0; i < count; i++) {
      positions.current.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ),
        baseScale: 0.3 + Math.random() * 0.3,
      });
    }
  }
  
  // Update cube instances on each frame
  useFrame((state) => {
    if (!instances.current) return;
    
    // Convert mouse position to world space
    const mousePosition = new THREE.Vector3(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );
    
    // Update each instance
    positions.current.forEach((cube, i) => {
      const distance = mousePosition.distanceTo(cube.position) / 5;
      const influence = Math.max(0, 1 - distance);
      
      // Calculate scale based on distance to mouse
      const targetScale = cube.baseScale * (1 + influence * 1.5);
      
      // Position drifting
      cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.005;
      
      // Update the matrix for this instance
      dummy.position.copy(cube.position);
      dummy.scale.set(targetScale, targetScale, targetScale);
      dummy.rotation.x = state.clock.elapsedTime * 0.2 + i;
      dummy.rotation.y = state.clock.elapsedTime * 0.1 + i * 0.2;
      dummy.updateMatrix();
      
      instances.current.setMatrixAt(i, dummy.matrix);
    });
    
    instances.current.instanceMatrix.needsUpdate = true;
  });
  
  return (
    <instancedMesh 
      ref={instances} 
      args={[undefined, undefined, count]}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHovered(e.instanceId);
      }}
      onPointerOut={() => setHovered(null)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#6d28d9" 
        roughness={0.3}
        metalness={0.7}
        emissive="#6d28d9"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
};