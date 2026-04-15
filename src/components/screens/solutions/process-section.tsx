"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import SectionHeading from "@/components/ui/section-heading";
import { ProcessSectionData } from "@/types/lang";
// import { cn } from "@/lib/utils/cn";
import { ChevronDown, ChevronUp } from "lucide-react";

// eta import kora holo
import type { Variants } from "framer-motion";
export default function ProcessSection({ data }: { data: ProcessSectionData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // add kora : Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="sm:py-7 py-4 px-4 sm:px-6 bg-gray-50"
    >
      <div className="sm:max-w-5xl max-w-full mx-auto">
        <h2 className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-2 mb-1.5 animate-glossy-gradient">
          {data.title}
        </h2>
        <p className="text-center text-gray-600 sm:text-lg text-base sm:mb-12 mb-8">
          {data.description}
        </p>

        <motion.div variants={containerVariants} className="space-y-4">
          {data.steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => toggleStep(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProcessStep({
  step,
  title,
  description,
  // icon,
  dittails,
  // index,
  isActive,
  onToggle,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
  dittails?: [
    {
      heading: string;
      description: string;
      image: string;
      content: string[];
    },
  ];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
    >
      <button
        className="w-full cursor-pointer text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white font-bold mr-4">
            {step}
          </div>
          <div className="text-left">
            <h3 className="sm:text-base text-sm font-semibold text-gray-800">
              {title}
            </h3>
            <p className="sm:text-sm text-xs text-gray-600 mt-1">
              {description}
            </p>
          </div>
        </div>
        {isActive ? (
          <ChevronUp className="h-5 w-5 text-black flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-black flex-shrink-0" />
        )}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">
          {dittails && dittails.length > 0 && (
            <div className="grid mt-4">
              {dittails.map((detail, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {detail.heading}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {detail.description}
                  </p>
                  {detail.content && detail.content.length > 0 && (
                    <ul className="list-disc list-inside space-y-1">
                      {detail.content.map((item, j) => (
                        <li key={j} className="text-gray-600 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
