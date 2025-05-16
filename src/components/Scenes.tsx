import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Interactive3DScene } from './three/Interactive3DScene';

export const Scenes: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Interactive Experiences</h2>
          <p className="max-w-xl mx-auto text-gray-300 text-lg">
            Explore interactive 3D scenes that respond to your input and create memorable experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SceneCard 
            title="Geometric Playground"
            description="Interact with 3D geometric shapes that respond to your mouse movements and clicks."
            delay={0.2}
          />
          
          <SceneCard 
            title="Particle Simulation"
            description="Explore a dynamic particle system that creates beautiful patterns as you interact with it."
            delay={0.4}
          />
          
          <SceneCard 
            title="Virtual Gallery"
            description="Walk through a virtual art gallery showcasing 3D models and animations."
            delay={0.6}
          />
          
          <SceneCard 
            title="Physics Sandbox"
            description="Play with a physics-based environment where objects react realistically to forces."
            delay={0.8}
          />
        </div>
      </div>
      
      <div className="mt-24 h-[500px] relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Interactive3DScene />
        </Canvas>
        
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            className="bg-black/50 backdrop-blur-sm rounded-lg p-6 max-w-md text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
            <p className="text-gray-300">Move your mouse to interact with the 3D objects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SceneCardProps {
  title: string;
  description: string;
  delay: number;
}

const SceneCard: React.FC<SceneCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div 
      className="border border-purple-800/30 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        
        <motion.button
          className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          whileHover={{ x: 5 }}
        >
          Explore 
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};