"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

interface ServicesGridProps {
  data: {
    title: string;
    subtitle: string;
    services: ServiceData[];
  };
}

const cardVariants = {
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
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {data.subtitle}
        </motion.p> */}
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
            <div className="absolute inset-0 bg-gradient-to-br from-gradiant-one via-gradiant-two to-gradaint-three opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex items-center justify-center">
              {/* <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Show More Service
              </button> */}
            </div>

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
              {/* <motion.button
                className="text-indigo-600 font-medium flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button> */}
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
