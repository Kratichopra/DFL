import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Zap, Brain, Globe } from 'lucide-react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 2, -2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#14B8A6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[3, -1, -1]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[2, 3, -3]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
    </>
  );
};

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add particle animation background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !containerRef.current) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    
    containerRef.current.appendChild(canvas);

    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      if (containerRef.current && canvas.parentNode) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-blue-300 font-medium tracking-wider">DIGITAL FUTURES LAB</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Future-Proofing
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Welcome to Catallyst Digital Futures Lab — a global knowledge hub advancing 
              enterprise transformation through <span className="text-blue-400 font-semibold">AI</span>, 
              <span className="text-purple-400 font-semibold"> Metaverse</span>, and 
              <span className="text-teal-400 font-semibold"> Future Tech</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2 text-blue-300">
                <Brain className="w-5 h-5" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <Globe className="w-5 h-5" />
                <span>Metaverse Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-300">
                <Zap className="w-5 h-5" />
                <span>Future Tech</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Download Digital Readiness Index 2025</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right 3D Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
              <pointLight position={[10, -10, 10]} intensity={0.5} color="#14B8A6" />
              
              <AnimatedSphere />
              <FloatingElements />
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
            
            {/* Floating UI Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-20 right-10 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
            >
              <div className="text-white text-sm">
                <div className="text-blue-300 font-semibold">AI Processing</div>
                <div className="text-2xl font-bold">98.7%</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-32 left-10 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
            >
              <div className="text-white text-sm">
                <div className="text-purple-300 font-semibold">Digital Readiness</div>
                <div className="text-2xl font-bold">120+ Firms</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-300">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero3D;