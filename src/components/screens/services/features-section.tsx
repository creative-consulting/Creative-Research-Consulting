"use client";

import { motion } from "framer-motion";
import { ServiceFeature } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";

interface FeaturesSectionProps {
  data: {
    title: string;
    subtitle: string;
    items: ServiceFeature[];
  };
}

const featureVariants = {
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
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {data.title}
          </motion.h2> */}
          <SectionHeading
            title={data.title}
            description={data.subtitle}
            className="sm:mb-8 mb-4 capitalize"
          />

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {data.subtitle}
          </motion.p> */}
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
              <div className="text-5xl mb-6 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three bg-clip-text text-transparent">
                {item.icon}
              </div>
              <h3 className="sm:text-lg text-base font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 sm:text-base text-sm">
                {item.description}
              </p>

              {/* <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-sm font-medium text-primary/70 hover:text-primary flex items-center gap-2">
                  Read case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
