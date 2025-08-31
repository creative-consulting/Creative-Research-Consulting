"use client";

import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
export interface IndustryIconData {
  position: [number, number, number];
  size: number;
  rotation: [number, number, number];
}

export default function IndustryIconsModel() {
  // Load industry icon textures (using placeholder images)
  const textures = useTexture([
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // Technology
    "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg", // Healthcare
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg", // Finance
    "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg", // Retail
    "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg", // Manufacturing
  ]);

  const groupRef = useRef<THREE.Group>(null);
  const iconsData: IndustryIconData[] = [
    { position: [0, 0, 0], size: 1, rotation: [0, 0, 0] }, // Center
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

  return (
    <group ref={groupRef}>
      {iconsData.map((icon, index) => (
        <IndustryIcon
          key={index}
          position={icon.position}
          size={icon.size}
          rotation={icon.rotation}
          texture={textures[index]}
          floatIntensity={0.5 + index * 0.1}
        />
      ))}
    </group>
  );
}

function IndustryIcon({
  position,
  size,
  rotation,
  texture,
  floatIntensity = 0.5,
}: {
  position: [number, number, number];
  size: number;
  rotation: [number, number, number];
  texture: THREE.Texture;
  floatIntensity?: number;
}) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={floatIntensity}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[size, size, size]} />

        <meshStandardMaterial attach="material" map={texture} />
        <meshStandardMaterial attach="material" map={texture} />
        <meshStandardMaterial attach="material" map={texture} />
        <meshStandardMaterial attach="material" map={texture} />
        <meshStandardMaterial attach="material" map={texture} />
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    </Float>
  );
}

// Preload textures (optional for performance)
useTexture.preload("/images/industries/tech.jpg");
useTexture.preload("/images/industries/healthcare.jpg");
useTexture.preload("/images/industries/finance.jpg");
useTexture.preload("/images/industries/retail.jpg");
useTexture.preload("/images/industries/manufacturing.jpg");
