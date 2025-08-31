"use client";
import React from "react";
import { motion } from "motion/react";
import { HomeBlogPost } from "@/types/lang";
import Image from "next/image";
import Link from "next/link";

interface InsightsSectionProps {
  posts: HomeBlogPost[];
}

const InsightsSection: React.FC<InsightsSectionProps> = ({ posts }) => {
  return (
    <section className="sm:py-9 py-5 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:mb-8 mb-5">
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:text-3xl text-2xl font-bold text-black sm:mb-4 mb-1"
          >
            Market Insights
          </motion.h2> */}
          <h2
            className="sm:text-4xl text-2xl font-bold text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-2 mb-1.5
  animate-glossy-gradient"
          >
            Market Insights
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto capitalize"
          >
            Latest research and industry trends
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400} // example width in pixels
                  height={192} // example height in pixels (matching h-48 = 12rem = 192px)
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="sm:p-6 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="sm:text-xl text-[16px] font-semibold text-gray-800 sm:mb-3 mb-1.5">
                  {post.title}
                </h3>
                <p className="text-gray-600 sm:mb-4 mb-1.5">{post.excerpt}</p>
                <Link
                  href={`/insights/${post.id}`}
                  className="sm:text-[16px] text-sm inline-flex items-center text-primary font-medium hover:text-destructive transition-colors"
                >
                  Read More
                  <svg
                    className="sm:w-4 w-3 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center sm:mt-12 mt-6"
        >
          <Link
            href="/insights"
            className="inline-flex sm:px-18 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-destructive transition-colors"
          >
            View All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;
