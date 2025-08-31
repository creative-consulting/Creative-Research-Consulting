"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function ScheduleSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Schedule a Meeting
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Book a time that works for you and we&apos;ll get back to you shortly.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg flex items-center mx-auto"
        >
          <Calendar className="mr-2" />
          Schedule Now
        </motion.button>
      </div>
    </section>
  );
}
