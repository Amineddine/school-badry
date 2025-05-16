import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Image, Video } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for events, products, and portraits"
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production for commercials and corporate content"
  },
  {
    icon: Film,
    title: "Post Production",
    description: "Expert editing, color grading, and visual effects"
  },
  {
    icon: Image,
    title: "Creative Direction",
    description: "Strategic visual storytelling and brand development"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0d0938] to-[#030014] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We bring your vision to life through cutting-edge visual storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-900/20 backdrop-blur-sm hover:border-purple-500/50 transition-all"
            >
              <service.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};