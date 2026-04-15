"use client";
import { motion } from "framer-motion";
import { MethodologyData } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface MethodologySectionProps {
  data: {
    title: string;
    subtitle: string;
    methods: MethodologyData[];
  };
}

export default function MethodologySection({ data }: MethodologySectionProps) {
  return (
    <motion.section
      className="sm:py-8 py-5 bg-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={data.title} description={data.subtitle} />

        <motion.div className="grid md:grid-cols-3 sm:gap-8 gap-5">
          {data.methods.map((method, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white sm:p-6 p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="text-blue-600 text-4xl sm:mb-2.5 mb-1.5"
                // whileHover={{ scale: 1.1 }}
              >
                {method.icon}
              </motion.div>
              <h3 className="sm:text-lg text-base font-bold text-gray-800 sm:mb-1.5 mb-1">
                {method.title}
              </h3>
              <p className="text-black sm:text-base text-sm">
                {method.description}
              </p>
              {method.list && (
                <ul className="list-disc  mt-3 text-gray-500 flex flex-col gap-2 ml-4">
                  {method.list.map((item, idx) => (
                    <li className="sm:text-base text-sm" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
