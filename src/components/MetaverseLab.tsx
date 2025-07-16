import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Headset as VrHeadset, Gamepad2, Users, Zap, Globe, Brain } from 'lucide-react';
import * as THREE from 'three';

const MetaverseOrb = () => {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      innerSphereRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={innerSphereRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#8B5CF6"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
      
      {/* Orbiting elements */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <Box
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 3,
              Math.sin((i / 8) * Math.PI * 2) * 0.5,
              Math.sin((i / 8) * Math.PI * 2) * 3
            ]}
            args={[0.2, 0.2, 0.2]}
          >
            <meshStandardMaterial color={`hsl(${i * 45}, 70%, 60%)`} metalness={0.8} roughness={0.2} />
          </Box>
        </Float>
      ))}
    </group>
  );
};

const MetaverseLab = () => {
  const features = [
    {
      icon: VrHeadset,
      title: 'Virtual Reality Labs',
      description: 'Immersive VR environments for collaborative research and development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Digital Twins',
      description: 'Create virtual replicas of real-world systems for testing and optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Spatial Computing',
      description: 'Advanced spatial computing solutions for next-gen user experiences',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'AI Avatars',
      description: 'Intelligent virtual beings powered by advanced AI and machine learning',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%238B5CF6%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3 mb-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <VrHeadset className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-300 font-semibold tracking-wider">METAVERSE LAB</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Enter the
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Universe
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                Step into our cutting-edge Metaverse Lab where virtual and physical realities converge. 
                Experience the future of digital collaboration, immersive learning, and virtual innovation.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Experience VR Demo
                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-purple-500/50 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Join Virtual Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Right 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[600px]"
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#EC4899" />
              <pointLight position={[0, 10, -10]} intensity={0.6} color="#3B82F6" />
              
              <MetaverseOrb />
            </Canvas>

            {/* Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-10 right-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-4 border border-purple-500/30"
            >
              <div className="text-white text-sm">
                <div className="text-purple-300 font-semibold">Active Users</div>
                <div className="text-2xl font-bold">2,847</div>
                <div className="text-xs text-gray-300">In Metaverse</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-20 left-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-4 border border-blue-500/30"
            >
              <div className="text-white text-sm">
                <div className="text-blue-300 font-semibold">VR Sessions</div>
                <div className="text-2xl font-bold">156</div>
                <div className="text-xs text-gray-300">This Week</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute top-1/2 left-5 bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-4 border border-green-500/30"
            >
              <div className="text-white text-sm">
                <div className="text-green-300 font-semibold">Digital Twins</div>
                <div className="text-2xl font-bold">42</div>
                <div className="text-xs text-gray-300">Active Models</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetaverseLab;