"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";

interface ContactInfoProps {
  data: {
    office: {
      title: string;
      address: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
    };
    hours: {
      title: string;
      schedule: string;
    };
  };
}

export default function InfoSection({ data }: ContactInfoProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-600 w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                {data.office.title}
              </h3>
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {data.office.address}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Mail className="text-blue-600 w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                {data.contact.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-2">
              <a
                href={`mailto:${data.contact.email}`}
                className="hover:text-blue-600 transition"
              >
                {data.contact.email}
              </a>
            </p>
            <p className="text-gray-600">
              <a
                href={`tel:${data.contact.phone}`}
                className="hover:text-blue-600 transition"
              >
                {data.contact.phone}
              </a>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Clock className="text-blue-600 w-8 h-8 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                {data.hours.title}
              </h3>
            </div>
            <p className="text-gray-600 whitespace-pre-line">
              {data.hours.schedule}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
