"use client";

import { motion } from "framer-motion";

interface MethodologyCTAProps {
  data: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export default function MethodologyCTA({ data }: MethodologyCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three hidden">
      {/* Animated elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-primary/30 max-w-3xl mx-auto mb-8"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
            {data.ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
