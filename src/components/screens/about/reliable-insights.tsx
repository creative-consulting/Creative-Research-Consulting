"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { List } from "@/components/ui/list";
import Image from "next/image";
import { ReliableInsightsData } from "@/types/about";

const ReliableInsights = ({ data }: { data: ReliableInsightsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section ref={ref} className="sm:py-6 py-3 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-12 gap-6 items-center">
          {/* <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-6">
              {data.heading}
            </h2>
            <p className="text-gray-600 text-lg mb-8">{data.text}</p>

            {data.services.map((service, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <List className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </List>
              </div>
            ))}
          </motion.div> */}
          <motion.div
            className="sm:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, duration: 0.8 },
              },
            }}
          >
            <Image
              src={data.image || "/images/reliable-insights.jpg"}
              alt="Reliable Insights"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="sm:w-1/2 w-full"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-6 mb-2">
              {data.heading}
            </h2>
            <p className="text-gray-600 sm:text-lg text-base sm:mb-4 mb-2.5">
              {data.text}
            </p>

            {data.services.map((service, index) => (
              <div key={index} className="sm:mb-3 mb-2">
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-3 mb-1.5">
                  {service.title}
                </h3>
                <List className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600 sm:text-base text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </List>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReliableInsights;
