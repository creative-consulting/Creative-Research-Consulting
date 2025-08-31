"use client";

import { motion } from "framer-motion";
import { CtaSectionData } from "@/types/lang";

export default function CtaSection({
  data,
}: // lang,
{
  data: CtaSectionData;
  lang: string;
}) {
  return (
    <section className="py-20 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          {data.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {data.ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
