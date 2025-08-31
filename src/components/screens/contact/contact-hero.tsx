"use client";

import { motion } from "framer-motion";

interface ContactHeroProps {
  data: {
    title: string;
    subtitle: string;
  };
}

export default function ContactHero({ data }: ContactHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto"
        >
          {data.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
