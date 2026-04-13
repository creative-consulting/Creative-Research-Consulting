"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
// eta import kora holo
import type { Variants } from "framer-motion";

interface ServicesGridProps {
  data: {
    title: string;
    subtitle: string;
    services: ServiceData[];
  };
}
// ekhane  : Variants add kora
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <section className="sm:py-10 py-3 px-4 max-w-7xl mx-auto">
      <div className="text-center sm:mb-4 mb-0">
        <SectionHeading
          title={data?.title}
          description={data?.subtitle}
          className="!mb-5"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
        {(data.services ?? []).slice(0, 9).map((service, index) => (
          <motion.div
            key={service.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gradiant-one via-gradiant-two to-gradaint-three opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 flex items-center justify-center"></div>

            <div
              className={`sm:h-64 h-48 ${service.color} flex items-center justify-center relative overflow-hidden`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
              <motion.span
                className="text-5xl bg-white/90 p-5 rounded-xl shadow-lg z-10"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {service.icon}
              </motion.span>
            </div>

            <div className="bg-white sm:p-4 p-3.5">
              <h3 className="sm:text-xl text-base font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 sm:text-base text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mx-auto sm:pt-10 pt-7 sm:pb-3.5 pb-3">
        <Button
          href="/services/all"
          variant="primaryLink"
          className="sm:px-20 px-9"
        >
          Show More Services
        </Button>
      </div>
    </section>
  );
}
