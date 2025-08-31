"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`sm:mb-8 mb-6 text-center ${className}`}
    >
      <h2
        className="sm:text-4xl text-2xl font-bold text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-2 mb-1.5
  animate-glossy-gradient"
      >
        {title}
      </h2>

      <p className="sm:text-xl text-[16px] text-gray-600 sm:max-w-[66rem] max-w-fit mx-auto ">
        {description}
      </p>
    </motion.div>
  );
}
