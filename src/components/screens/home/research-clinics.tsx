"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaMotorcycle,
  FaCheckCircle,
  // FaClipboardList,
  // FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import { ResearchClinicItem, ResearchClinicsSection } from "@/types/home";

const iconMap: Record<string, React.ReactNode> = {
  FaCar: <FaCar className="w-6 h-6" />,
  FaMotorcycle: <FaMotorcycle className="w-6 h-6" />,
};

const ResearchClinics: React.FC<{ data: ResearchClinicsSection }> = ({
  data,
}) => {
  return (
    <section className="sm:py-8 py-4 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center sm:mb-8 mb-4">
          <SectionHeading title={data.heading} description={data.subheading} />
        </div>

        <div className="grid sm:gap-12 gap-3.5 sm:grid-cols-2 sm:mb-0 mb-4">
          {data.clinics.map((clinic, index) => (
            <ResearchClinicCard key={clinic.id} clinic={clinic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchClinicCard: React.FC<{
  clinic: ResearchClinicItem;
  index: number;
}> = ({ clinic, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative h-56">
        <Image
          src={clinic.image}
          alt={clinic.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg text-primary shadow-md">
            {iconMap[clinic.icon] || <FaCar className="w-6 h-6" />}
          </div>
        </div>
        <h3 className="absolute bottom-4 left-4 sm:text-xl text-lg font-bold text-white">
          {clinic.title}
        </h3>
      </div>

      <div className="sm:p-6 p-3.5 flex-grow">
        <p className="text-gray-600 sm:mb-6 mb-3.5">{clinic.description}</p>

        <div className="space-y-6">
          <FeatureList
            title="Key Features"
            items={clinic.features}
            icon={<FaCheckCircle className="text-green-500" />}
          />

          {/* <FeatureList
            title={clinic.methodology.title}
            items={clinic.methodology.items}
            icon={<FaClipboardList className="text-blue-500" />}
          />

          <FeatureList
            title={clinic.benefits.title}
            items={clinic.benefits.items}
            icon={<FaLightbulb className="text-yellow-500" />}
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureList: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
}> = ({ title, items, icon }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <ul className="space-y-2 sm:pl-8 pl-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="text-gray-600 relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-2 before:h-2 before:rounded-full before:bg-gray-400"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchClinics;
