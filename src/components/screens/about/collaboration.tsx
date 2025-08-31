"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { List } from "@/components/ui/list";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { CollaborationData } from "@/types/about";

const Collaboration = ({ data }: { data: CollaborationData }) => {
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
    <section ref={ref} className="sm:py-12 py-7 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" animate={controls} variants={variants}>
            <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-6 mb-3.5">
              {data.heading}
            </h2>
            <p className="text-gray-600 sm:text-lg text-base sm:mb-8 mb-5">
              {data.text}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <List className="flex flex-col items-center space-y-4">
              {data.contactMethods.map((method, index) => (
                <li key={index} className="flex items-center">
                  {method.type === "email" ? (
                    <FaEnvelope className="text-primary mr-3" />
                  ) : (
                    <FaPhone className="text-primary mr-3" />
                  )}
                  <span className="text-gray-700">{method.value}</span>
                </li>
              ))}
            </List>
          </motion.div>

          {data.cta && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={data.cta.link}
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary transition"
              >
                {data.cta.text}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
