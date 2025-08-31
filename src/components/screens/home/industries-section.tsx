"use client";

import React from "react";
import * as motion from "motion/react-client";
import { HomeIndustry } from "@/types/lang";
import {
  HiChip,
  HiHeart,
  HiCurrencyDollar,
  HiShoppingBag,
  HiLightningBolt, // ✅ correct Heroicon for a bolt
} from "react-icons/hi";
import SectionHeading from "@/components/ui/section-heading";

const iconMap = {
  ChipIcon: HiChip,
  HeartIcon: HiHeart,
  CurrencyDollarIcon: HiCurrencyDollar,
  ShoppingBagIcon: HiShoppingBag,
  BoltIcon: HiLightningBolt, // ✅ map the JSON key "BoltIcon" to HiLightningBolt
};

interface IndustriesSectionProps {
  data: {
    title: string;
    description: string;
    industries: HomeIndustry[];
  };
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ data }) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div> */}

        <SectionHeading title={data.title} description={data.description} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.industries.map((industry, index) => {
            const IconComponent =
              iconMap[industry.icon as keyof typeof iconMap];

            if (!IconComponent) {
              console.error(`Missing icon for industry: ${industry.icon}`);
              return null;
            }

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
