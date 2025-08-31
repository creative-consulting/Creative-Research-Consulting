"use client";

import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { WhyChooseUsData } from "@/types/lang";
import { JSX, useEffect, useRef } from "react";
import {
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaClipboardCheck,
  FaSearch,
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const iconMap: Record<string, JSX.Element> = {
  FaChartLine: <FaChartLine className="w-6 h-6 text-primary" />,
  FaUsers: <FaUsers className="w-6 h-6 text-primary" />,
  FaGlobe: <FaGlobe className="w-6 h-6 text-primary" />,
  FaShieldAlt: <FaShieldAlt className="w-6 h-6 text-primary" />,
  FaClipboardCheck: <FaClipboardCheck className="w-6 h-6 text-primary" />,
  FaSearch: <FaSearch className="w-6 h-6 text-primary" />,
};

type Props = {
  data: WhyChooseUsData;
};

const WhyChooseUs = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const headingVariants = {
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

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  const footerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  return (
    <section ref={sectionRef} className="sm:py-7 py-2 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center sm:max-w-[46rem] mx-auto sm:mb-7 mb-4">
          <motion.h2
            className="choose-heading text-2xl sm:text-3xl font-bold  text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three
  animate-glossy-gradient mb-4 scroll-m-20 tracking-tight transition-colors first:mt-0"
            initial="hidden"
            animate={controls}
            variants={headingVariants}
          >
            {data.heading}
          </motion.h2>
        </div>

        <List className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
          {data.features.map((item, index) => (
            <motion.div
              key={index}
              className="choose-feature"
              initial="hidden"
              animate={controls}
              variants={featureVariants}
              custom={index}
            >
              <ListItem className="bg-white p-5 sm:h-[9.5rem] h-fit rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
                  {iconMap[item.icon]}
                </div>
                <h3 className="sm:text-lg text-base font-semibold text-gray-900 scroll-m-20 tracking-tight">
                  {item.title}
                </h3>
              </ListItem>
            </motion.div>
          ))}
        </List>

        <div className="text-center mt-5 capitalize">
          <motion.p
            className="choose-footer sm:text-lg text-base text-gray-700 font-medium"
            initial="hidden"
            animate={controls}
            variants={footerVariants}
          >
            {data.text}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
