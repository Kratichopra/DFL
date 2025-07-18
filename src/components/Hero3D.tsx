import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Float, Line, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Zap, Brain, Globe } from 'lucide-react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  // Custom shader material for a gradient effect
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const fragmentShader = `
    varying vec2 vUv;
    void main() {
      vec3 color1 = vec3(0.95, 0.65, 0.95); // pastel purple
      vec3 color2 = vec3(0.65, 0.85, 0.95); // pastel blue
      vec3 color3 = vec3(0.85, 0.95, 0.80); // pastel green
      float pct = smoothstep(0.0, 1.0, vUv.y);
      vec3 color = mix(color1, color2, pct);
      color = mix(color, color3, sin(vUv.x * 3.14) * 0.5 + 0.5);
      gl_FragColor = vec4(color, 0.95);
    }
  `;
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <shaderMaterial attach="material" args={[{ vertexShader, fragmentShader }]} />
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

// Stylized Robotic Hand (simplified)
const RoboticHand = () => {
  // Palm
  const palm = <mesh position={[0, -1.2, 0]}>
    <boxGeometry args={[1.2, 0.4, 0.7]} />
    <meshStandardMaterial color="#e5e7eb" metalness={0.7} roughness={0.3} />
  </mesh>;
  // Fingers (4)
  const fingers = [
    [-0.4, -0.7, 0.2],
    [-0.15, -0.7, 0.35],
    [0.15, -0.7, 0.35],
    [0.4, -0.7, 0.2],
  ].map((pos, i) => (
    <mesh key={i} position={pos as [number, number, number]} rotation={[-0.3, 0, 0]}>
      <cylinderGeometry args={[0.08, 0.09, 0.7, 16]} />
      <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
    </mesh>
  ));
  // Thumb
  const thumb = <mesh position={[-0.6, -0.8, -0.1]} rotation={[-0.5, 0.5, 0]}>
    <cylinderGeometry args={[0.09, 0.1, 0.5, 16]} />
    <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
  </mesh>;
  return <group>{palm}{fingers}{thumb}</group>;
};

// AI Globe with nodes and lines
const AIGlobe = () => {
  // Node positions (randomized for demo, could be geo-based)
  const nodes: [number, number, number][] = [
    [0.7, 0.5, 0.9], [-0.8, 0.6, -0.7], [0.5, -0.7, 0.8], [-0.6, -0.5, -0.9],
    [0.9, -0.2, -0.6], [-0.9, 0.1, 0.7], [0.2, 0.9, -0.5], [-0.3, -0.9, 0.4]
  ];
  // Lines between nodes
  const lines: [ [number, number, number], [number, number, number] ][] = [
    [nodes[0], nodes[1]], [nodes[2], nodes[3]], [nodes[4], nodes[5]], [nodes[6], nodes[7]],
    [nodes[0], nodes[2]], [nodes[1], nodes[3]], [nodes[4], nodes[6]], [nodes[5], nodes[7]]
  ];
  return (
    <group>
      {/* Globe */}
      <mesh position={nodes[0] as [number, number, number]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial color="#1e293b" metalness={0.7} roughness={0.2} clearcoat={0.5} clearcoatRoughness={0.1} />
      </mesh>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.7} />
        </mesh>
      ))}
      {/* Lines */}
      {lines.map((pts, i) => (
        <Line key={i} points={pts as [ [number, number, number], [number, number, number] ]} color="#38bdf8" lineWidth={2} dashed={false} />
      ))}
    </group>
  );
};

// Animated background text
const AnimatedBackgroundText = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 0.15, y: 0 }}
    transition={{ duration: 1.5 }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
    style={{ fontSize: '8vw', fontWeight: 900, letterSpacing: '-0.05em', color: '#bdbdbd', whiteSpace: 'nowrap', userSelect: 'none' }}
  >
    NO-LIMITS
  </motion.div>
);

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Remove any 3D or canvas background logic
  }, []);
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2563eb] via-[#38bdf8] to-[#60a5fa]">
      {/* Optional animated gradient overlay for extra depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2563eb]/30 via-[#38bdf8]/20 to-[#60a5fa]/10 opacity-80 animate-pulse z-0"></div>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="https://www.w3schools.com/howto/rain.mp4" // Placeholder, replace with your own
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Solid Overlay for readability */}
      <div className="absolute inset-0 bg-[#1e293b] bg-opacity-70 z-10"></div>
      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#ffffff] drop-shadow-lg">
          Future-Proofing Businesses Through Digital Innovation
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#dbeafe] drop-shadow">
          Welcome to Catallyst Digital Futures Lab — a global knowledge hub advancing enterprise transformation through AI, data, and digital culture.
        </p>
        <a
          href="#"
          className="inline-block bg-[#38bdf8] hover:bg-[#2563eb] text-[#1e293b] hover:text-[#dbeafe] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
        >
          Download the Digital Readiness Index 2025
        </a>
      </div>
    </section>
  );
};

export default Hero3D;