"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
// import * as THREE from "three";
import { motion } from "framer-motion";
// import DataModel from "./data-model";

export default function DataVisualization() {
  return (
    <section className="py-32 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            {/* <DataModel data={} /> */}
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
        >
          Interactive Data Visualization
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl text-primary/10 max-w-3xl mx-auto mb-8"
        >
          Explore your data in three dimensions for deeper insights and
          understanding
        </motion.p>
      </div>
    </section>
  );
}
