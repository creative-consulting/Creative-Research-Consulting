"use client";

// components/sections/research-methodology.tsx
import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaLaptop,
  FaTabletAlt,
  FaUsersCog,
  FaBrain,
  FaUserTie,
  FaUserPlus,
} from "react-icons/fa";
import type { ResearchMethodologyData } from "@/types/home";

interface ResearchMethodologyProps {
  data: ResearchMethodologyData;
}

const iconComponents = {
  phone: FaPhone,
  tablet: FaTabletAlt,
  laptop: FaLaptop,
  group: FaUsersCog,
  cog: FaBrain,
  interview: FaUserTie,
  recruit: FaUserPlus,
};

const ResearchMethodology: React.FC<ResearchMethodologyProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {data.methods.map((method, index) => {
            const Icon =
              iconComponents[method.icon as keyof typeof iconComponents];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Icon className="text-primary-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {method.name}
                  </h3>
                </div>
                <p className="text-gray-600">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* Methodology Sections */}
        {data.sections.map((section, index) => (
          <div key={index} className="mb-20">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 mb-12`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={section.image || "/images/default-research.jpg"}
                  alt={section.title}
                  width={800}
                  height={500}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6">{section.content}</p>
                {section.subsections?.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {subsection.title}
                    </h4>
                    <p className="text-gray-600">{subsection.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Special Services */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {data.specialServices.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.specialServices.services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.name}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodology;
