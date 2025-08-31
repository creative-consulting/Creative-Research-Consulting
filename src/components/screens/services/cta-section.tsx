"use client";

import { motion } from "framer-motion";

interface ServicesCTAProps {
  data: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export default function ServicesCTA({ data }: ServicesCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          {data.subtitle}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/30 transition-all duration-300 shadow-lg"
        >
          {data.ctaText}
        </motion.button>
      </div>
    </section>
  );
}
