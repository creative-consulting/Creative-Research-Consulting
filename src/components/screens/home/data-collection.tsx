// components/screens/data-collection/data-collection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import {
  FaPhone,
  FaUserCheck,
  FaLaptop,
  FaUsers,
  FaComments,
  FaUserTie,
  FaUserGraduate,
} from "react-icons/fa";
import Image from "next/image";
import type {
  DataCollectionCard,
  DataCollectionExpertTeam,
  DataCollectionSection,
} from "@/types/home";

const iconMap: Record<string, React.ReactNode> = {
  FaPhone: <FaPhone className="w-5 h-5" />,
  FaUserCheck: <FaUserCheck className="w-5 h-5" />,
  FaLaptop: <FaLaptop className="w-5 h-5" />,
  FaUsers: <FaUsers className="w-5 h-5" />,
  FaComments: <FaComments className="w-5 h-5" />,
  FaUserTie: <FaUserTie className="w-5 h-5" />,
  FaUserGraduate: <FaUserGraduate className="w-5 h-5" />,
};

const DataCollection: React.FC<{ data: DataCollectionSection }> = ({
  data,
}) => {
  return (
    <section className="sm:py-8 py-4 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center sm:mb-7 mb-4 ">
          <SectionHeading title={data.heading} description={data.description} />

          {/* Methods List */}
          <div className="sm:mt-0 mt-2">
            <div className="inline-flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {data.methods.map((method, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:gap-12 gap-2 grid-cols sm:grid-cols-2 sm:mb-4 mb-2">
          {data.cards.map((card, index) => (
            <DataCollectionCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Expert Team Section */}
        <ExpertTeamSection data={data.expertTeam} />
      </div>
    </section>
  );
};

// Card Component
const DataCollectionCard: React.FC<{
  card: DataCollectionCard;
  index: number;
}> = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative sm:h-72">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 hidden">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg text-primary">
            {iconMap[card.icon] || <FaPhone className="w-5 h-5" />}
          </div>
        </div>
      </div>

      <div className="sm:p-4 p-2.5 flex flex-col">
        <h3 className="sm:text-lg text-base font-bold text-gray-800 mb-3">
          {card.title}
        </h3>
        <p className="text-gray-600 mb-4 sm:text-base text-sm">
          {card.description}
        </p>

        <div className="space-y-4 mt-auto">
          {card.content.map((item, i) => (
            <div key={i} className="border-l-2 border-primary pl-3">
              <h4 className="sm:text-base text-sm font-bold text-gray-600">
                {item.heading}
              </h4>
              {item.description && (
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              )}
              {item.content && (
                <ul className="mt-2 space-y-2">
                  {item.content.map((subItem, j) => (
                    <li key={j} className="text-sm text-gray-600 items-start">
                      <span className="inline-block mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                      {subItem.heading}
                      {subItem.content && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {subItem.content.map((deepItem, k) => (
                            <li
                              key={k}
                              className="text-xs text-gray-500 flex items-start"
                            >
                              <span className="inline-block mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gray-400" />
                              {deepItem.heading}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {card.description2 && (
          <p className="text-gray-600 mt-4 text-sm italic">
            {card.description2}
          </p>
        )}
      </div>
    </motion.div>
  );
};

// Expert Team Component
const ExpertTeamSection: React.FC<{ data: DataCollectionExpertTeam }> = ({
  data,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hidden">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <Image
            src={data.image}
            alt={data.heading}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          />
        </div>

        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {data.heading}
          </h3>
          <ul className="space-y-3">
            {data.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="inline-block mr-3 mt-1 w-2 h-2 rounded-full bg-primary" />
                <span className="text-gray-600">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
