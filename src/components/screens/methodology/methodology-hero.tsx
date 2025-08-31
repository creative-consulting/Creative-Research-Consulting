// "use client";

// import { motion } from "framer-motion";

// interface MethodologyHeroProps {
//   data: {
//     title: string;
//     subtitle: string;
//     ctaText: string;
//   };
// }

// export default function MethodologyHero({ data }: MethodologyHeroProps) {
//   return (
//     <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg')] bg-cover bg-center opacity-20" />

//       {/* Floating dots */}
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-white/10 backdrop-blur-sm"
//           style={{
//             width: Math.random() * 10 + 5,
//             height: Math.random() * 10 + 5,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, (Math.random() - 0.5) * 100],
//             x: [0, (Math.random() - 0.5) * 50],
//             opacity: [0.3, 0.8, 0.3],
//           }}
//           transition={{
//             duration: Math.random() * 15 + 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-12"
//         >
//           <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               {data.title}
//             </span>
//           </motion.h1>
//           <motion.p
//             className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {data.subtitle}
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//             {data.ctaText}
//           </button>
//         </motion.div>
//       </div>

//       {/* Animated scroll indicator */}
//       <motion.div
//         className="absolute bottom-10 left-0 right-0 flex justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="flex flex-col items-center"
//         >
//           <span className="text-white/80 text-sm mb-2">
//             Explore Our Process
//           </span>
//           <svg
//             className="h-6 w-6 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   animate,
// } from "framer-motion";
// import { useEffect } from "react";

// interface MethodologyHeroProps {
//   data: {
//     title: string;
//     subtitle: string;
//     ctaText: string;
//   };
// }

// export default function MethodologyHero({ data }: MethodologyHeroProps) {
//   // Advanced motion values for interactive effects
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const radius = useMotionValue("0px");
//   const backgroundOpacity = useMotionValue(0.2);

//   // Gradient animation values
//   const gradientX = useMotionValue(0);
//   const gradientY = useMotionValue(0);

//   useEffect(() => {
//     // Animate gradient position continuously
//     const gradientAnimation = animate(gradientX, [0, 100], {
//       duration: 20,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "linear",
//     });

//     return () => gradientAnimation.stop();
//   }, [gradientX]);

//   useEffect(() => {
//     // Animate gradient position continuously (Y axis)
//     const gradientAnimationY = animate(gradientY, [0, 100], {
//       duration: 25,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "linear",
//     });

//     return () => gradientAnimationY.stop();
//   }, [gradientY]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     // Calculate distance from center
//     const centerX = width / 2;
//     const centerY = height / 2;
//     const distance = Math.sqrt(
//       Math.pow(clientX - left - centerX, 2) +
//         Math.pow(clientY - top - centerY, 2)
//     );

//     // Dynamic effects based on mouse position
//     radius.set(`${Math.min(distance / 4, 100)}px`);
//     backgroundOpacity.set(Math.min(distance / 1000, 0.3));
//   };

//   // Template for dynamic gradient
//   const backgroundImage = useMotionTemplate`radial-gradient(circle ${radius} at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1) 0%, transparent 80%)`;

//   // Animated gradient background
//   const gradientBackground = useMotionTemplate`linear-gradient(${gradientX}deg, rgba(30, 58, 138, 0.8) 0%, rgba(49, 46, 129, 0.9) ${gradientY}%, rgba(79, 70, 229, 0.95) 100%)`;

//   return (
//     <motion.section
//       className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
//       onMouseMove={handleMouseMove}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       style={{
//         background: gradientBackground,
//       }}
//     >
//       {/* Dynamic interactive background layer */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage,
//           opacity: backgroundOpacity,
//         }}
//       />

//       {/* Subtle grid overlay */}
//       <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />

//       {/* Floating particles with physics-based animation */}
//       {[...Array(40)].map((_, i) => {
//         const size = Math.random() * 6 + 2;
//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white/20 backdrop-blur-sm"
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               x: useMotionValue((Math.random() - 0.5) * 100),
//               y: useMotionValue((Math.random() - 0.5) * 100),
//             }}
//             animate={{
//               x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
//               y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
//               opacity: [0.3 + Math.random() * 0.3, 0.1 + Math.random() * 0.3],
//             }}
//             transition={{
//               duration: 20 + Math.random() * 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         );
//       })}

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1.2,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="mb-12"
//         >
//           {/* Animated title with character stagger */}
//           <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
//             {data.title.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: 0.1 + i * 0.03,
//                   duration: 0.6,
//                   ease: "backOut",
//                 }}
//                 className="inline-block"
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           {/* Subtle shimmer effect on subtitle */}
//           <motion.p
//             className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             <motion.span
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{
//                 backgroundSize: "200% auto",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 backgroundImage:
//                   "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(209,213,219,0.5), rgba(255,255,255,0.8))",
//               }}
//             >
//               {data.subtitle}
//             </motion.span>
//           </motion.p>
//         </motion.div>

//         {/* Advanced button animation with magnetic effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           style={{
//             x: useMotionValue(0),
//             y: useMotionValue(0),
//           }}
//         >
//           <motion.button
//             className="relative overflow-hidden bg-white text-blue-900 font-semibold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
//             whileHover={{
//               background: "linear-gradient(90deg, #ffffff, #f0f4ff, #ffffff)",
//             }}
//           >
//             <span className="relative z-10">{data.ctaText}</span>
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 1.2, ease: "linear" }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Sophisticated scroll indicator with motion path */}
//       <motion.div
//         className="absolute bottom-12 left-0 right-0 flex justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.8 }}
//       >
//         <motion.div
//           className="flex flex-col items-center"
//           animate={{
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <span className="text-white/80 text-sm mb-3 tracking-widest font-light uppercase">
//             Discover Our Approach
//           </span>
//           <motion.svg
//             className="h-8 w-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             animate={{
//               pathLength: [0, 1, 0],
//               pathOffset: [0, 0, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <motion.path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               initial={{ pathLength: 0 }}
//             />
//           </motion.svg>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }

// "use client";

// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   animate,
// } from "framer-motion";
// import { Suspense, useEffect, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Text3D, useTexture } from "@react-three/drei";
// import { suspend } from "suspend-react";

// interface MethodologyHeroProps {
//   data: {
//     title: string;
//     subtitle: string;
//     ctaText: string;
//   };
// }

// // 3D Floating Icons Component
// const FloatingIcons = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   const textures = useTexture([
//     "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg", // Analytics
//     "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // Tech
//     "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg", // Strategy
//   ]);

//   useFrame(({ clock }) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
//       groupRef.current.children.forEach((child, index) => {
//         child.position.y = Math.sin(clock.getElapsedTime() + index) * 0.5;
//       });
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {textures.map((texture, i) => {
//         const angle = (i / textures.length) * Math.PI * 2;
//         const x = Math.sin(angle) * 3;
//         const z = Math.cos(angle) * 3;

//         return (
//           <mesh key={i} position={[x, 0, z]} castShadow receiveShadow>
//             <boxGeometry args={[1.5, 1.5, 1.5]} />
//             <meshStandardMaterial map={texture} />
//           </mesh>
//         );
//       })}

//       {/* Central floating methodology text */}
//       <Text3D
//         font="/fonts/helvetiker_regular.typeface.json"
//         size={0.8}
//         height={0.2}
//         curveSegments={12}
//         bevelEnabled
//         bevelThickness={0.02}
//         bevelSize={0.02}
//         bevelOffset={0}
//         bevelSegments={5}
//         position={[0, 0, 0]}
//       >
//         METHOD
//         <meshStandardMaterial
//           color="#ffffff"
//           emissive="#3b82f6"
//           emissiveIntensity={0.5}
//         />
//       </Text3D>
//     </group>
//   );
// };

// // 3D Scene Component
// const ThreeScene = () => {
//   const { camera } = useThree();

//   useEffect(() => {
//     camera.position.set(0, 0, 10);
//     camera.lookAt(0, 0, 0);
//   }, [camera]);

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <spotLight
//         position={[0, 10, 0]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1}
//         castShadow
//       />
//       <FloatingIcons />
//       <OrbitControls
//         enableZoom={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         enablePan={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//     </>
//   );
// };

// export default function MethodologyHero({ data }: MethodologyHeroProps) {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const radius = useMotionValue("0px");
//   const gradientX = useMotionValue(0);
//   const gradientY = useMotionValue(0);

//   useEffect(() => {
//     const gradientAnimationX = animate(gradientX, [0, 100], {
//       duration: 20,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "linear",
//     });

//     const gradientAnimationY = animate(gradientY, [0, 100], {
//       duration: 25,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "linear",
//     });

//     return () => {
//       gradientAnimationX.stop();
//       gradientAnimationY.stop();
//     };
//   }, [gradientX, gradientY]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const { left, top } = e.currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     const distance = Math.sqrt(
//       Math.pow(clientX - left - window.innerWidth / 2, 2) +
//         Math.pow(clientY - top - window.innerHeight / 2, 2)
//     );

//     radius.set(`${Math.min(distance / 4, 100)}px`);
//   };

//   const backgroundImage = useMotionTemplate`radial-gradient(circle ${radius} at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1) 0%, transparent 80%)`;
//   const gradientBackground = useMotionTemplate`linear-gradient(${gradientX}deg, rgba(30, 58, 138, 0.8) 0%, rgba(49, 46, 129, 0.9) ${gradientY}%, rgba(79, 70, 229, 0.95) 100%)`;

//   return (
//     <motion.section
//       className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
//       onMouseMove={handleMouseMove}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       style={{
//         background: gradientBackground,
//       }}
//     >
//       {/* 3D Canvas Background */}
//       <div className="absolute inset-0 z-0">
//         <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
//           <Suspense fallback={null}>
//             <ThreeScene />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Interactive overlay */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage,
//           opacity: 0.3,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1.2,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="mb-12"
//         >
//           <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
//             {data.title.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: 0.1 + i * 0.03,
//                   duration: 0.6,
//                   ease: "backOut",
//                 }}
//                 className="inline-block"
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             <motion.span
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{
//                 backgroundSize: "200% auto",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 backgroundImage:
//                   "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(209,213,219,0.5), rgba(255,255,255,0.8))",
//               }}
//             >
//               {data.subtitle}
//             </motion.span>
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.button
//             className="relative overflow-hidden bg-white text-blue-900 font-semibold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
//             whileHover={{
//               background: "linear-gradient(90deg, #ffffff, #f0f4ff, #ffffff)",
//             }}
//           >
//             <span className="relative z-10">{data.ctaText}</span>
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 1.2, ease: "linear" }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-12 left-0 right-0 flex justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.8 }}
//       >
//         <motion.div
//           className="flex flex-col items-center"
//           animate={{
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <span className="text-white/80 text-sm mb-3 tracking-widest font-light uppercase">
//             Discover Our Approach
//           </span>
//           <motion.svg
//             className="h-8 w-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             animate={{
//               pathLength: [0, 1, 0],
//               pathOffset: [0, 0, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <motion.path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               initial={{ pathLength: 0 }}
//             />
//           </motion.svg>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }
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
    []
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
