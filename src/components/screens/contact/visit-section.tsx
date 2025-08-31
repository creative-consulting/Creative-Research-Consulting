"use client";

import { motion } from "framer-motion";
import { ParkingCircle, Accessibility, Users, Coffee } from "lucide-react";

interface VisitSectionProps {
  data: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
    }[];
  };
}

export default function VisitSection({ data }: VisitSectionProps) {
  const icons = [ParkingCircle, Accessibility, Users, Coffee];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
