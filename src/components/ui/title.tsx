"use client";

import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className = "" }: TitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      <motion.h2
        className="text-2xl md:text-4xl text-center font-bold bg-gradient-to-r 
        from-purple-600 via-blue-500 to-teal-400 
        bg-clip-text text-transparent
        tracking-tight"
        initial={{ backgroundPosition: "0% 50%" }}
        whileInView={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {title}
      </motion.h2>

      {/* Animated underline that matches gradient */}
      <motion.div
        className="h-1 mt-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
