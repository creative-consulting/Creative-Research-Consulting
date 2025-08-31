// Services3DIcons.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  // useTexture,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense, useState, useEffect } from "react";

const ServiceIcons = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use placeholder images to avoid CORS issues
  // const images = [
  //   "/api/placeholder/600/400", // Local placeholder
  //   "/api/placeholder/600/400",
  //   "/api/placeholder/600/400",
  //   "/api/placeholder/600/400",
  //   "/api/placeholder/600/400",
  // ];

  // const textures = useTexture(images);
  const icons = [
    { position: [0, 0, 0], size: 1, rotation: [0, 0, 0] },
    { position: [3, 1, -2], size: 0.8, rotation: [0.2, 0.4, 0] },
    { position: [-2, 2, 1], size: 0.7, rotation: [0.1, -0.3, 0.1] },
    { position: [2, -1, -1], size: 0.6, rotation: [-0.2, 0.1, 0.3] },
    { position: [-3, 0, 2], size: 0.9, rotation: [0.3, -0.2, -0.1] },
  ];

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  if (!isClient) return null;

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <Float
          key={index}
          speed={2 + index * 0.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={icon.position as [number, number, number]}
            rotation={icon.rotation as [number, number, number]}
          >
            <boxGeometry args={[icon.size, icon.size, icon.size]} />
            <meshStandardMaterial color={`hsl(${index * 72}, 70%, 60%)`} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default function Services3DIcons() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <ServiceIcons />
        <Environment preset="apartment" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  );
}
