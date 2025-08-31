"use client";

import { motion } from "framer-motion";
import { SolutionsGridData } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SolutionsGrid({ data }: { data: SolutionsGridData }) {
  return (
    <section className="sm:py-7 py-4 px-4 container solutions-section">
      <SectionHeading title={data.title} description={data.description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.solutions.slice(0, 9).map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
      <div className="flex justify-center mx-auto sm:pt-10 pt-7 sm:pb-3.5 pb-9">
        <Button
          href="/solutions/all"
          variant="primaryLink"
          className="sm:px-20 px-9"
        >
          Show More Solutions
        </Button>
      </div>
    </section>
  );
}

export function SolutionCard({
  icon,
  title,
  description,
  features,
  imageUrl,
}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full"
    >
      <div className="sm:h-70 h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-2 sm:py-3 px-3 sm:px-5">
        <div className="text-primary text-4xl mb-4 hidden">{icon}</div>
        <h3 className="sm:text-lg text-base font-bold text-gray-800 sm:mb-1">
          {title}
        </h3>
        <p className="text-gray-600 sm:mb-3 sm:text-base text-sm">
          {description}
        </p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 sm:text-base text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
