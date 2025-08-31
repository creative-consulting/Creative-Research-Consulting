"use client";

import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
export interface ModelData {
  url: string;
  name: string;
  type: "data" | "product" | "abstract";
  scale: number;
  defaultPosition: [number, number, number];
  rotationAxis: "x" | "y" | "z";
  animation: {
    rotationSpeed: number;
    floatIntensity: number;
  };
}

// Example model configuration
export const modelConfigs: Record<string, ModelData> = {
  dataVisualization: {
    url: "/models/data-visualization.glb",
    name: "Data Visualization",
    type: "data",
    scale: 1.5,
    defaultPosition: [0, -1, 0],
    rotationAxis: "y",
    animation: {
      rotationSpeed: 0.2,
      floatIntensity: 1,
    },
  },
  analyticsDashboard: {
    url: "/models/analytics-dashboard.glb",
    name: "Analytics Dashboard",
    type: "product",
    scale: 1.2,
    defaultPosition: [0, -0.5, 0],
    rotationAxis: "y",
    animation: {
      rotationSpeed: 0.15,
      floatIntensity: 0.8,
    },
  },
};

interface DataModelProps {
  modelUrl: string;
  scale?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  floatIntensity?: number;
}

export default function DataModel({
  modelUrl = "/models/data-visualization.glb",
  scale = 1.5,
  position = [0, -1, 0],
  rotationSpeed = 0.2,
  floatIntensity = 1,
}: DataModelProps) {
  const model = useGLTF(modelUrl);
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={floatIntensity}>
      <primitive
        ref={meshRef}
        object={model.scene}
        scale={scale}
        position={position}
      />
    </Float>
  );
}

// Preload model (optional for performance)
useGLTF.preload("/models/data-visualization.glb");
