"use client";

import SectionHeading from "@/components/ui/section-heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface PrinciplesSectionProps {
  data: {
    title: string;
    subtitle: string;
    principles: {
      title: string;
      description: string;
      icon: string;
      list?: string[];
    }[];
  };
}

export default function PrinciplesSection({ data }: PrinciplesSectionProps) {
  const sectionRef = useRef(null);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll animation with spring
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="sm:py-10 py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated line */}
      <motion.div
        className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-gradiant-one via-gradiant-two to-gradaint-three h-full -translate-x-1/2"
        style={{
          scaleY: springY,
          transformOrigin: "top",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center sm:mb-8 mb-6">
          <SectionHeading title={data?.title} description={data?.subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
          {data.principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white sm:p-8 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-2xl sm:mb-4 mb-3 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three bg-clip-text text-transparent">
                {principle.icon}
              </div>
              <h3 className="sm:text-xl text-lg font-bold text-gray-800 sm:mb-4 mb-2.5">
                {principle.title}
              </h3>
              <p className="text-gray-600 sm:text-base text-sm">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
