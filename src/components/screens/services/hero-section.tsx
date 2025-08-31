// ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Services3DIcons from "./services-3d-icons";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ServicesHeroProps {
  data: {
    titleSequences: string[];
    subtitle: string;
    ctaText: string;
  };
}

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ServicesHero({ data }: ServicesHeroProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative sm:h-[80vh] h-[82vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background with inline style to avoid hydration mismatch */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg)",
        }}
      />

      {/* Floating particles */}
      {isClient &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

      {/* 3D Icons */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          <Services3DIcons />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-2xl sm:text-5xl font-bold text-white mb-6 bg-clip-text bg-gradient-to-r from-white to-primary/50"
            variants={floatingVariants}
            animate="animate"
          >
            {isClient ? (
              <TypeAnimation
                sequence={data.titleSequences.flatMap((text) => [text, 1500])}
                wrapper="span"
                speed={40}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            ) : (
              data.titleSequences[0] // Show first title during SSR
            )}
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="flex sm:flex-row flex-col justify-center sm:gap-4 gap-8 sm:p-0 p-18"
        >
          <Link href="/services/all">
            <button className="bg-white/10 backdrop-blur-xs cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {data.ctaText}
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {isClient && (
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <svg
              className="h-6 w-6 text-white"
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
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
