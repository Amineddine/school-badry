import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, PresentationControls } from '@react-three/drei';
import { ExplorerModel } from './three/ExplorerModel';

export const InteractiveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Endless Possibilities</h2>
          <p className="max-w-xl mx-auto text-gray-300 text-lg">
            The future of web experiences is 3D. Explore what's possible with these interactive demos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6">
              <div className="flex space-x-2 mb-6">
                {[1, 2, 3].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-900/30 text-gray-300 hover:bg-purple-800/30'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    Tab {tab}
                  </button>
                ))}
              </div>
              
              <div>
                {activeTab === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-3">Immersive Websites</h3>
                    <p className="text-gray-300 mb-4">
                      Create stunning visual experiences that captivate users and keep them engaged with your content longer.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        3D product showcases
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Interactive data visualizations
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Animated storytelling
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-3">Web-Based Games</h3>
                    <p className="text-gray-300 mb-4">
                      Develop browser-based games with impressive 3D graphics and physics that run smoothly across devices.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Physics-based puzzles
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Virtual reality experiences
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Multiplayer adventures
                      </li>
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-3">Virtual Tours</h3>
                    <p className="text-gray-300 mb-4">
                      Take users on immersive journeys through virtual spaces with interactive navigation and rich detail.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                        Architectural walkthroughs
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                        Museum exhibits
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                        Travel destinations
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <ExplorerModel activeTab={activeTab} />
              </PresentationControls>
              
              <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} />
            </Canvas>
          </div>
        </div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 md:text-3xl">Ready to create stunning 3D experiences?</h2>
          
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium text-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};