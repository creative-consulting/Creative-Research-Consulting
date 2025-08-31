"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { HeroData } from "@/types/worldHero";

interface WorldMapHeroProps {
  heroData: HeroData;
}

const WorldMapHero = ({ heroData }: WorldMapHeroProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Extract sequences
  const titleSequences = heroData.titleSequences.filter(
    (_, i) => i % 2 === 0
  ) as string[];
  const titleDurations = heroData.titleSequences.filter(
    (_, i) => i % 2 !== 0
  ) as number[];

  const descSequences = heroData.descriptionSequences.filter(
    (_, i) => i % 2 === 0
  ) as string[];
  const descDurations = heroData.descriptionSequences.filter(
    (_, i) => i % 2 !== 0
  ) as number[];

  // Animation control for title
  useEffect(() => {
    if (!isPlaying) return;

    const titleTimer = setTimeout(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titleSequences.length);
    }, titleDurations[currentTitleIndex]);

    return () => clearTimeout(titleTimer);
  }, [currentTitleIndex, isPlaying, titleDurations, titleSequences.length]);

  // Animation control for description
  useEffect(() => {
    if (!isPlaying) return;

    const descTimer = setTimeout(() => {
      setCurrentDescIndex((prev) => (prev + 1) % descSequences.length);
    }, descDurations[currentDescIndex]);

    return () => clearTimeout(descTimer);
  }, [currentDescIndex, isPlaying, descDurations, descSequences.length]);

  const pauseAnimations = () => setIsPlaying(false);
  const resumeAnimations = () => setIsPlaying(true);

  return (
    <section className="relative h-[70vh] flex flex-col overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
      {/* Background World Map */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <EarthGlobe isMobile={isMobile} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full py-8">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Animated Title */}
          <div
            className="h-16 md:h-20 mb-4 md:mb-6 flex items-center justify-center"
            onMouseEnter={pauseAnimations}
            onMouseLeave={resumeAnimations}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-5xl font-bold px-2"
              >
                {titleSequences[currentTitleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Animated Description */}
          <div
            className="h-12 md:h-16 mb-16 sm:mb-10 flex items-center justify-center"
            onMouseEnter={pauseAnimations}
            onMouseLeave={resumeAnimations}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentDescIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto px-4"
              >
                {descSequences[currentDescIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-0 md:mb-12 px-2">
            {heroData.indicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">
                  {indicator.value}
                </div>
                <div className="text-xs sm:text-sm text-blue-100/80 mt-1">
                  {indicator.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 md:px-8 md:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-base md:text-lg shadow-lg"
            >
              {heroData.buttonTexts.primary}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 md:px-8 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-base md:text-lg backdrop-blur-md border border-white/10 mt-2 sm:mt-0"
            >
              {heroData.buttonTexts.secondary}
            </motion.button>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator - only show on larger screens */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// 3D Earth Component
const EarthGlobe = ({ isMobile }: { isMobile: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      // Subtle floating animation
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 1, 1]} intensity={1.5} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Sphere ref={meshRef} args={[isMobile ? 1.5 : 2, 32, 32]}>
        <meshPhongMaterial
          color="#1e40af"
          transparent
          opacity={0.2}
          wireframe
          wireframeLinewidth={1}
        />
        {/* Add dots for cities/countries */}
        <points>
          <sphereGeometry args={[isMobile ? 1.55 : 2.05, 32, 32]} />
          <pointsMaterial
            color="#60a5fa"
            size={isMobile ? 0.015 : 0.02}
            sizeAttenuation
          />
        </points>
      </Sphere>
      {/* Add connection lines */}
      <ConnectionLines isMobile={isMobile} />
    </>
  );
};

// Connection lines between points on the globe
const ConnectionLines = ({ isMobile }: { isMobile: boolean }) => {
  const linesRef = useRef<THREE.LineSegments>(null);

  useEffect(() => {
    if (!linesRef.current) return;

    // Generate random connection lines
    const points = [];
    const numLines = isMobile ? 20 : 30;
    const radius = isMobile ? 1.5 : 2;

    for (let i = 0; i < numLines; i++) {
      // Start point (random on sphere)
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.random() * Math.PI;
      const x1 = radius * Math.sin(phi1) * Math.cos(theta1);
      const y1 = radius * Math.cos(phi1);
      const z1 = radius * Math.sin(phi1) * Math.sin(theta1);

      // End point (random on sphere)
      const theta2 = Math.random() * Math.PI * 2;
      const phi2 = Math.random() * Math.PI;
      const x2 = radius * Math.sin(phi2) * Math.cos(theta2);
      const y2 = radius * Math.cos(phi2);
      const z2 = radius * Math.sin(phi2) * Math.sin(theta2);

      points.push(x1, y1, z1, x2, y2, z2);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3)
    );

    linesRef.current.geometry = geometry;
  }, [isMobile]);

  return (
    <lineSegments ref={linesRef}>
      <lineBasicMaterial color="#93c5fd" opacity={0.3} transparent />
    </lineSegments>
  );
};

export default WorldMapHero;
