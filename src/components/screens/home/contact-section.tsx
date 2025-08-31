"use client";
import React from "react";
import { motion } from "motion/react";
import { SupportedLang } from "@/types/lang";

interface ContactSectionProps {
  lang: SupportedLang;
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section className="sm:py-20 py-6 px-4 bg-gray-600 text-white sm:mb-0 mb-6 hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 sm:gap-12 gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="sm:text-3xl text-2xl font-bold sm:mb-6 mb-3">
              Ready to transform your market strategy?
            </h2>
            <p className="sm:text-lg text-[16px] text-gray-300 mb-8">
              Get in touch with our research experts to discuss how we can help
              your business make data-driven decisions.
            </p>
            {/* Contact info blocks... */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:p-6 p-3 shadow-lg"
          >
            <h3 className="sm:text-2xl text-[16px] font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            <form className="space-y-4">{/* Form fields here */}</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
