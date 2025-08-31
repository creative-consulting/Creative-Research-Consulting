"use client";

import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
interface ProcessSectionProps {
  data: {
    title: string;
    subtitle: string;
    steps: {
      id: number;
      title: string;
      description: string;
      image: string;
      icon: string;
      color: string;
      list?: string[];
    }[];
  };
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className="sm:py-10 py-5 px-4 max-w-7xl mx-auto">
      <div className="text-center sm:mb-10 mb-6">
        <SectionHeading title={data?.title} description={data?.subtitle} />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-gradiant-one via-gradiant-two to-gradaint-three -translate-x-1/2" />

        {/* Process steps */}
        <div className="sm:space-y-16 space-y-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col lg:flex-row items-center sm:gap-8 gap-5 sm:mt-0 mt-12 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step number */}
              <div className="absolute lg:static -top-8 left-1/2 lg:left-auto lg:right-auto -translate-x-1/2 lg:translate-x-0 z-10">
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl shadow-lg border-4 border-white`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Step content */}
              <div
                className={`sm:lg:w-1/2 w-full ${
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-xl"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </div>

              <div
                className={`lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"
                }`}
              >
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  className="bg-white sm:p-4 p-3 rounded-xl shadow-lg"
                >
                  <h3 className="sm:text-xl text-lg font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  {/* pore lagle use hobe noyto delete */}
                  {/* <p className="text-gray-600 mb-4 hidden">
                    {step.description}
                  </p> */}
                  {step.list && step.list.length > 0 && (
                    <ul className="!list-decimal text-black sm:text-base text-sm space-y-1 ml-4">
                      {step.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* <button className="text-primary/70 font-medium hover:text-primary transition-colors flex items-center gap-2">
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
                  </button> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
