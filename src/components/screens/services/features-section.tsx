"use client";

import { motion } from "framer-motion";
import { ServiceFeature } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";
// eta import kora holo
import type { Variants } from "framer-motion";
interface FeaturesSectionProps {
  data: {
    title: string;
    subtitle: string;
    items: ServiceFeature[];
  };
}
// ekhane : Variants add kora
const featureVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section className="sm:pt-6 pt-3 sm:pb-9 pb-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <SectionHeading
            title={data.title}
            description={data.subtitle}
            className="sm:mb-8 mb-4 capitalize"
          />
        </div>

        <div className="grid md:grid-cols-3 sm:gap-8 gap-5">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three bg-clip-text">
                {item.icon}
              </div>
              <h3 className="sm:text-lg text-base font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 sm:text-base text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
