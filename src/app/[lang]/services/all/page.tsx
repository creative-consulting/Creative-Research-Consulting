"use client";

import { motion } from "framer-motion";
import data from "@/data/lang/en/screen/services/services.json";
import SectionHeading from "@/components/ui/section-heading";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

export default function AllServicesPage() {
  const services = (data.services ?? []) as {
    id: number;
    name: string;
    description: string;
    icon: string;
    image: string;
    color?: string;
  }[];

  return (
    <section className="sm:py-12 py-8">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={data?.title}
          description={data?.subtitle}
          className="!mb-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gradiant-one via-gradiant-two to-gradaint-three opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex items-center justify-center" />

              <div
                className={`sm:h-64 h-48 ${
                  service.color || ""
                } flex items-center justify-center relative overflow-hidden`}
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
      </div>
    </section>
  );
}
