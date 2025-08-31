"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItem } from "@/types/faq";

interface FAQSectionProps {
  sections: {
    heading?: string;
    faqs: FAQItem[];
  }[];
}

const FAQSection = ({ sections }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="sm:py-7 py-4 px-4 sm:px-6 bg-gray-50"
    >
      <div className="sm:max-w-5xl max-w-full mx-auto">
        {/* <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h2> */}
        <h2 className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-2 mb-1.5 animate-glossy-gradient">
          Frequently Asked Questions
        </h2>

        <motion.div
          variants={containerVariants}
          className="space-y-4 sm:mt-8 mt-3"
        >
          {sections.map(
            (
              section: {
                heading?: string;
                faqs: FAQItem[];
              },
              i
            ) => (
              <div key={i} className="bg-white rounded-lg shadow-md sm:p-6 p-3">
                {section.heading && (
                  <motion.h3
                    variants={itemVariants}
                    className="sm:text-xl text-lg  font-bold text-gray-800 sm:mb-4 mb-2"
                  >
                    {section?.heading}
                  </motion.h3>
                )}

                {section.faqs.map(
                  (
                    faq: {
                      question: string;
                      answer: string;
                      answerList?: string[];
                    },
                    index
                  ) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 sm:mb-4 mb-3 last:mb-0"
                    >
                      <button
                        className="w-full cursor-pointer text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h3 className="sm:text-base text-sm font-semibold text-gray-800">
                          {faq.question}
                        </h3>
                        {activeIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-black" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-black" />
                        )}
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeIndex === index ? "auto" : 0,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="sm:text-base text-sm px-4 pb-4 text-gray-600">
                          {faq.answer}
                          {faq.answerList && faq.answerList.length > 0 && (
                            <ul className="list-disc list-inside mt-2 space-y-1">
                              {faq.answerList.map((item, i) => (
                                <li key={i} className="text-gray-600">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                )}
              </div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
