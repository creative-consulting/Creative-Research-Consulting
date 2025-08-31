"use client";

import { HistoryTimelineData } from "@/types/about";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const HistoryTimeline = ({ data }: { data: HistoryTimelineData }) => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  return (
    <section ref={ref} className="sm:py-12 py-6 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="sm:text-3xl text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-12 mb-6"
        >
          {data.heading}
        </motion.h2>

        <motion.div
          className="relative"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {data.events.map((event, index) => (
            <motion.div
              key={index}
              className={`sm:mb-0 w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              variants={itemVariants}
              custom={index}
            >
              <div
                className={`w-full md:w-1/2 !sm:p-6 sm:py-0 sm:px-0 py-6 px-2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
                  <div className="absolute w-6 h-6 bg-primary rounded-full -top-3 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0"></div>
                  <div className="text-primary font-bold mb-2">
                    {event.year}
                  </div>
                  <h3 className="sm:text-xl text-lg font-semibold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 sm:text-base text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
