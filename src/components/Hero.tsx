import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Camera } from './three/Camera';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-screen" ref={containerRef}>
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Camera />
        </Canvas>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          WeFrameMedia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl text-center px-4"
        >
          Crafting Visual Stories That Leave a Lasting Impression
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          Explore Our Work
        </motion.button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};