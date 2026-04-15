"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const FloatingShapes = () => {
  const group = useRef<THREE.Group>(null);
  const shapes = useMemo(
    () => [
      {
        geometry: new THREE.TetrahedronGeometry(1, 0),
        color: "#00f0ff",
        position: [-3, 1, -3] as [number, number, number], // Explicit tuple type
      },
      {
        geometry: new THREE.TorusGeometry(0.8, 0.2, 16, 32),
        color: "#ff00e4",
        position: [0, -1, -4] as [number, number, number], // Explicit tuple type
      },
      {
        geometry: new THREE.DodecahedronGeometry(0.9, 0),
        color: "#00ff88",
        position: [3, 0.5, -5] as [number, number, number], // Explicit tuple type
      },
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
      shapes.forEach((_, i) => {
        const child = group.current?.children[i];
        if (child) {
          child.rotation.x = clock.getElapsedTime() * (0.2 + i * 0.1);
          child.rotation.y = clock.getElapsedTime() * (0.15 + i * 0.05);
        }
      });
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={1 + i * 0.5}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh
            geometry={shape.geometry}
            position={shape.position} // Now properly typed
          >
            <meshStandardMaterial
              color={shape.color}
              metalness={0.7}
              roughness={0.2}
              emissive={shape.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};
const ParticleField = ({ count = 500 }) => {
  const particles = useRef<THREE.Points>(null);

  // Generate random particle positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.x = clock.getElapsedTime() * 0.05;
      particles.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
};

interface MethodologyHeroProps {
  data: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}

export default function MethodologyHero({ data }: MethodologyHeroProps) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { title, subtitle, ctaText, ctaLink } = data;

  // Using a free stock video from Pexels
  const videoSrc =
    "https://assets.mixkit.co/videos/preview/mixkit-abstract-background-with-moving-lines-1764-large.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative w-full sm:h-[72vh] h-[65vh] gap-2.5 overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />

          <FloatingShapes />
          <ParticleField count={800} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mb-8"
      >
        <h1 className="sm:text-5xl text-2xl font-bold text-white mb-6">
          {title}
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 h-12 md:h-14">
          <Typewriter
            options={{
              strings: [subtitle],
              autoStart: true,
              loop: false,
              delay: 20,
              cursor: "",
              wrapperClassName: "typewriter-text",
              cursorClassName: "typewriter-cursor",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Link href={ctaLink} passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            {ctaText}
          </motion.button>
        </Link>

        <button
          onClick={() => setMuted(!muted)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          {muted ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Unmute</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Mute</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-300 mb-2">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
