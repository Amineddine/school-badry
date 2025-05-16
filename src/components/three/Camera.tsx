import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated, config } from '@react-spring/three';

export const Camera: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/camera.glb') as any;

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: async (next) => {
      while (true) {
        await next({ rotation: [0, Math.PI * 2, 0] });
      }
    },
    config: config.gentle,
    loop: true,
  });

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <animated.group ref={groupRef} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camera.geometry}
        material={materials.CameraBody}
        position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      >
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lens.geometry}
        position={[0, 0, 0.5]}
        scale={[0.3, 0.3, 0.3]}
      >
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
    </animated.group>
  );
};