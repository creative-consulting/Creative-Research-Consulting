"use client";

import React, { useRef, useEffect } from "react";
import { HomeCaseStudy } from "@/types/lang";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface CaseStudiesProps {
  data: HomeCaseStudy[];
}

// ✅ Subcomponent declared inside same file (allowed)
const AnimatedCard: React.FC<{ caseStudy: HomeCaseStudy; index: number }> = ({
  caseStudy,
  index,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow will-change-transform"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="h-48 bg-gray-200 overflow-hidden case-study-image"
      >
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
          width={400}
          height={192}
          loading="lazy"
        />
      </motion.div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {caseStudy.industry}
          </span>
        </div>
        <h3 className="sm:text-xl text-[16px] font-semibold text-black mb-3">
          {caseStudy.title}
        </h3>
        <p className="sm:text-[16px] text-sm text-black mb-4">
          {caseStudy.description}
        </p>
        <div className="space-y-2">
          {caseStudy.results.map((result, i) => (
            <div key={i} className="flex items-start gap-2">
              <svg
                className="w-4 h-4 mt-1 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-700">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC<CaseStudiesProps> = ({ data }) => {
  return (
    <section className="sm:py-8 py-5 px-4 mt-5 sm:mt-0 bg-gray-50 overflow-hidden success-stories">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Success Stories"
          description="Explore how we've helped clients make data-driven decisions"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((caseStudy, index) => (
            <AnimatedCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
