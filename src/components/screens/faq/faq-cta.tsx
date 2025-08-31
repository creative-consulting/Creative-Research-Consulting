"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FAQCTAProps {
  data: {
    title: string;
    description: string;
    button: {
      name: string;
      link: string;
    };
  };
}

const CTA = ({ data }: FAQCTAProps) => {
  // console.log(CTA);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="sm:py-8 py-4 px-4 sm:px-6 bg-gradient-to-r from-primary to-primary-dark"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="sm:text-3xl text-lg font-bold text-black mb-4 capitalize"
        >
          {data.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="sm:text-lg text-base text-black mb-8 max-w-2xl mx-auto"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button href={data.button.link} variant="faq">
            {data.button.name}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
