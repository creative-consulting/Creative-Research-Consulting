"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterProps {
  data: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
}

const Newsletter = ({ data }: NewsletterProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary to-primary-dark py-16 md:py-20"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/90 mb-8"
        >
          {data.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl"
        >
          <Input
            type="email"
            placeholder={data.placeholder}
            className="py-6 flex-grow"
          />
          <Button className="py-6 px-8 bg-white text-primary hover:bg-gray-100">
            {data.buttonText}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;