"use client";

import { ServicesSection } from "@/types/lang";
import React, { ReactNode } from "react";
import {
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaBullseye,
  FaGlobe,
  FaBrain,
  FaTv,
  FaFlask,
  FaPoll,
  FaShoppingCart,
  FaIndustry,
  FaUserFriends,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const iconsMap: Record<string, ReactNode> = {
  FaChartLine: <FaChartLine className="w-5 h-5" />,
  FaUsers: <FaUsers className="w-5 h-5" />,
  FaLightbulb: <FaLightbulb className="w-5 h-5" />,
  FaBullseye: <FaBullseye className="w-5 h-5" />,
  FaGlobe: <FaGlobe className="w-5 h-5" />,
  FaBrain: <FaBrain className="w-5 h-5" />,
  FaTv: <FaTv className="w-5 h-5" />,
  FaFlask: <FaFlask className="w-5 h-5" />,
  FaPoll: <FaPoll className="w-5 h-5" />,
  FaShoppingCart: <FaShoppingCart className="w-5 h-5" />,
  FaIndustry: <FaIndustry className="w-5 h-5" />,
  FaUserFriends: <FaUserFriends className="w-5 h-5" />,
};

type Props = {
  data: ServicesSection;
};

const Services = ({ data }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.16, 0.77, 0.47, 0.97],
  //     },
  //   },
  // };

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  const cardHoverVariants = {
    hover: {
      y: -4,
      boxShadow: "0 10px 20px -6px rgba(217, 28, 92, 0.0012)",
      backgroundColor: "#f9fafe",
    },
    tap: {
      scale: 0.97,
    },
  };

  const iconHoverVariants = {
    hover: {
      backgroundColor: "#d91c5c",
      color: "#fff",
      scale: 1.15,
    },
  };

  const titleHoverVariants = {
    hover: {
      color: "#d91c5c",
      y: -2,
    },
  };

  const descHoverVariants = {
    hover: {
      y: -1,
    },
  };

  return (
    <section
      ref={containerRef}
      className="global-bussiness relative sm:py-10 py-7 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#f8f8f8] opacity-20"></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative">
        {/* <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants}>
            <p className="text-[#5F5F5F] font-medium uppercase tracking-wider mb-3 leading-7 [&:not(:first-child)]:mt-6">
              {data.subHeading}
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1D] leading-tight mb-5 scroll-m-20 tracking-tight"
            >
              {data.heading}
            </h3>
          </motion.div>
        </motion.div> */}
        <SectionHeading title={data.heading} description={data.subHeading} />

        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.services.map((service, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={serviceItemVariants}
              className="group relative"
              whileHover="hover"
              whileTap="tap"
            >
              {/* <motion.a
                href={service.link}
                className="block relative sm:h-48 z-10 p-5 md:p-6 rounded-xl transition-all duration-150  border border-gray-100 global-card"
                variants={cardHoverVariants}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <motion.span
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-[#d91c5c] transition-all duration-200 group-hover:shadow-sm"
                    variants={iconHoverVariants}
                  >
                    {iconsMap[service.icon]}
                  </motion.span>
                  <div className="flex flex-col">
                    <motion.h4
                      className="sm:text-lg text-[16px] font-semibold text-[#1c1c1d] mb-2 transition-colors duration-200"
                      variants={titleHoverVariants}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.div variants={descHoverVariants}>
                      <p className="text-gray-600 leading-relaxed sm:text-[16px] text-sm md:text-base ">
                        {service.text}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.a> */}
              <motion.a
                href="#"
                className="block cursor-default relative sm:h-48 z-10 p-5 md:p-6 rounded-xl transition-all duration-150  border border-gray-100 global-card"
                variants={cardHoverVariants}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <motion.span
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-[#d91c5c] transition-all duration-200 group-hover:shadow-sm"
                    variants={iconHoverVariants}
                  >
                    {iconsMap[service.icon]}
                  </motion.span>
                  <div className="flex flex-col">
                    <motion.h4
                      className="sm:text-lg text-[16px] font-semibold text-[#1c1c1d] mb-2 transition-colors duration-200"
                      variants={titleHoverVariants}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.div variants={descHoverVariants}>
                      <p className="text-gray-600 leading-relaxed sm:text-[16px] text-sm md:text-base ">
                        {service.text}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
