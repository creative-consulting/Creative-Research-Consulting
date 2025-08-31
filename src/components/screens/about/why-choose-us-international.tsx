"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, JSX } from "react";
import { List } from "@/components/ui/list";

// Define a local ListItem component as a wrapper for <li>
const ListItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  ...props
}) => <li {...props}>{children}</li>;
import {
  FaGlobe,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaClipboardCheck,
  FaSearch,
} from "react-icons/fa";
import { WhyChooseUsInternationalData } from "@/types/about";

const iconMap: Record<string, JSX.Element> = {
  FaGlobe: <FaGlobe className="w-6 h-6 text-primary" />,
  FaUsers: <FaUsers className="w-6 h-6 text-primary" />,
  FaShieldAlt: <FaShieldAlt className="w-6 h-6 text-primary" />,
  FaChartLine: <FaChartLine className="w-6 h-6 text-primary" />,
  FaClipboardCheck: <FaClipboardCheck className="w-6 h-6 text-primary" />,
  FaSearch: <FaSearch className="w-6 h-6 text-primary" />,
};

const WhyChooseUsInternational = ({
  data,
}: {
  data: WhyChooseUsInternationalData;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  return (
    <section ref={ref} className="sm:py-12 py-6 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center sm:mb-12 mb-5"
        >
          <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-6">
            {data.heading}
          </h2>
        </motion.div>

        <List className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4">
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              custom={index}
            >
              <ListItem className="bg-gray-50 p-6 rounded-lg sm:h-28 h-fit">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mr-4">
                    {iconMap[feature.icon] || (
                      <FaChartLine className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="sm:text-lg text-base font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 sm:text-base text-sm">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </div>
    </section>
  );
};

export default WhyChooseUsInternational;
