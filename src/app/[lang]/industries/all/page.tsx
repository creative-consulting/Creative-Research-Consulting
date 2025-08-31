"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import data from "@/data/lang/en/screen/industries/industries.json";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Industry {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
  color?: string;
}

const AllIndustriesPage: FC = () => {
  const industries: Industry[] = data?.industries ?? [];

  return (
    <div className="container mx-auto px-4 sm:py-15 py-5 sm:mt-4">
      <SectionHeading title={data.title} description={data.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
        {industries.map((industry) => (
          <motion.div
            key={industry.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className={`h-48 ${
                industry.color ?? ""
              } flex items-center justify-center`}
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
    </div>
  );
};

export default AllIndustriesPage;
