"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { List } from "@/components/ui/list";

// Define a simple ListItem component if not provided by the UI library
const ListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={className}>{children}</li>;
import { TrustedPartnerData } from "@/types/about";

const TrustedPartner = ({ data }: { data: TrustedPartnerData }) => {
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
    <section ref={ref} className="py-12 bg-gray-50 hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4">
              {data.heading}
            </h2>
            <p className="text-gray-600 text-lg">{data.subheading}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2 }}
          >
            <List className="space-y-3">
              {data.features.map((feature, index) => (
                <ListItem
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <p className="text-gray-700">{feature}</p>
                </ListItem>
              ))}
            </List>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
