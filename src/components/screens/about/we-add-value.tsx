"use client";

import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { HowWeAddValueData } from "@/types/lang";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
// eta import kora holo
import type { Variants } from "framer-motion";
import {
  FaChartLine,
  FaGlobe,
  FaBullhorn,
  FaHandshake,
  FaShieldAlt,
  FaBoxOpen,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  chart: <FaChartLine className="w-6 h-6 text-primary" />,
  globe: <FaGlobe className="w-6 h-6 text-primary" />,
  branding: <FaBullhorn className="w-6 h-6 text-primary" />,
  sales: <FaHandshake className="w-6 h-6 text-primary" />,
  shield: <FaShieldAlt className="w-6 h-6 text-primary" />,
  product: <FaBoxOpen className="w-6 h-6 text-primary" />,
};

type Props = {
  data: HowWeAddValueData;
};

const WeAddValue = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  // ekhane  : Variants add kora
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  return (
    <section ref={sectionRef} className="sm:py-5 py-3 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center sm:max-w-[38rem] mx-auto sm:mb-8 mb-5"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold  text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three
  animate-glossy-gradient mb-4 scroll-m-20 tracking-tight transition-colors first:mt-0"
            variants={itemVariants}
          >
            {data.heading}
          </motion.h2>
          <motion.p
            className="sm:text-lg text-base text-gray-600 capitalize"
            dangerouslySetInnerHTML={{ __html: data.text }}
            variants={paragraphVariants}
          />
        </motion.div>

        <List className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5 mb-6">
          {data.valueItems.map((item, index) => (
            <motion.div
              key={index}
              className="value-item"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <ListItem className="bg-white p-5 sm:h-56 h-fit rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-3 icon-div">
                  {/* <FaChartLine className="w-6 h-6 text-primary" /> */}
                  {iconMap[item.icon]}
                </div>
                <h3 className="sm:text-lg text-base font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                  {item.title.split("—")[0]}
                </h3>
                <p className="sm:text-base text-sm text-gray-600">
                  {item.text}
                </p>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <motion.p
          className="sm:text-base text-sm text-gray-600 text-center capitalize font-bold"
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          variants={paragraphVariants}
        >
          {data.tex2}
        </motion.p>
      </div>
    </section>
  );
};

export default WeAddValue;
