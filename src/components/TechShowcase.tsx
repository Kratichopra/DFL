import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, Sphere, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Zap, Database, Eye, Target } from 'lucide-react';
import * as THREE from 'three';

const FloatingTech = ({ position, color, geometry }: { position: [number, number, number], color: string, geometry: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box':
        return <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Box>;
      case 'sphere':
        return <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </Sphere>;
      case 'torus':
        return <Torus ref={meshRef} position={position} args={[0.5, 0.2, 16, 100]}>
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </Torus>;
      default:
        return null;
    }
  };

  return <GeometryComponent />;
};

const TechShowcase = () => {
  const technologies = [
    // {
    //   icon: Brain,
    //   title: 'Artificial Intelligence',
    //   description: 'Advanced AI models powering next-generation business solutions',
    //   // color: 'from-blue-500 to-cyan-500',
    //   delay: 0.1
    // },
    // {
    //   icon: Globe,
    //   title: 'Metaverse Integration',
    //   description: 'Immersive virtual environments for digital collaboration',
    //   // color: 'from-purple-500 to-pink-500',
    //   delay: 0.2
    // },
    // {
    //   icon: Cpu,
    //   title: 'Quantum Computing',
    //   description: 'Quantum-powered algorithms for complex problem solving',
    //   // color: 'from-green-500 to-teal-500',
    //   delay: 0.3
    // },
    {
      icon: Target,
      title: 'Impact',
      description: 'Pilot next-generation ideas through rapid prototyping',
      // color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Zap,
      title: 'Experiment',
      description: 'Pilot next-generation ideas through rapid prototyping',
      // color: 'from-yellow-500 to-orange-500',
      delay: 0.5
    },
    {
      icon: Eye,
      title: 'Insight',
      description: 'Decode emerging trends in digital business',
      // color: 'from-indigo-500 to-purple-500',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Our  Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Catallyst Digital Futures Lab (DFL) is a research and innovation hub dedicated to helping 
            organisations anticipate digital disruptions, foster a data-smart culture, and activate 
            scalable innovation. Our mission is to co-create actionable insights with industry and 
            academia that translate into measurable business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: tech.delay, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Glowing effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>

                {/* Particle effect */}
                {/* <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Tech Visualization */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-96 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-gray-700/50"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
            <pointLight position={[0, 10, -10]} intensity={0.6} color="#14B8A6" />
            
            <FloatingTech position={[-2, 1, 0]} color="#3B82F6" geometry="box" />
            <FloatingTech position={[2, -1, 0]} color="#8B5CF6" geometry="sphere" />
            <FloatingTech position={[0, 2, -2]} color="#14B8A6" geometry="torus" />
            <FloatingTech position={[-3, -2, -1]} color="#F59E0B" geometry="box" />
            <FloatingTech position={[3, 1, -3]} color="#EF4444" geometry="sphere" />
          </Canvas>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-8 left-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">Interactive 3D Visualization</h3>
            <p className="text-gray-300">Experience our technology stack in an immersive 3D environment</p>
          </motion.div>
        </motion.div>*/}
      </div> 
    </section>
  );
};

export default TechShowcase;