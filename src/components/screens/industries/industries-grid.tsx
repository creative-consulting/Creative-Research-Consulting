"use client";
import SectionHeading from "@/components/ui/section-heading";
import { IndustryData } from "@/types/lang";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// eta import kora holo
import type { Variants } from "framer-motion";
interface IndustriesGridProps {
  data: {
    title: string;
    subtitle: string;
    industries: IndustryData[];
  };
}
// ekhane  : Variants add kora
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

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

export default function IndustriesGrid({ data }: IndustriesGridProps) {
  return (
    <motion.section
      className="sm:py-10 py-7 px-4 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <SectionHeading title={data.title} description={data.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
        {(data.industries ?? []).slice(0, 9).map((industry) => (
          <motion.div
            key={industry.id}
            variants={itemVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className={`h-48 ${industry.color} flex items-center justify-center`}
              style={{
                backgroundImage: `url(${industry.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.span
                className="text-4xl bg-white bg-opacity-80 p-4 rounded-full"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {industry.icon}
              </motion.span>
            </div>
            <div className="sm:p-4 p-2.5">
              <h3 className="sm:text-xl text-base font-bold text-gray-800 mb-2">
                {industry.name}
              </h3>
              <p className="sm:text-base text-sm text-gray-600 mb-4">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mx-auto sm:pt-10 pt-7 sm:pb-3.5 pb-9">
        <Button
          href="/industries/all"
          variant="primaryLink"
          className="sm:px-20 px-9"
        >
          Show More Industries
        </Button>
      </div>
    </motion.section>
  );
}
