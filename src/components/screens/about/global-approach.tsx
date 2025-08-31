"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { GlobalApproachData } from "@/types/about";

const GlobalApproach = ({ data }: { data: GlobalApproachData }) => {
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
    <section ref={ref} className="sm:py-6 py-3.5 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-12 gap-6 items-center">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-6 mb-3.5">
              {data.heading}
            </h2>
            <p className="text-gray-600 sm:text-lg text-base leading-relaxed">
              {data.text}
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
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
              src={data.image || "/images/global-approach.jpg"}
              alt="Global Approach"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalApproach;
