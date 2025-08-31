"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface LatestPostsProps {
  posts: BlogPost[];
}

const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        Latest Articles
      </motion.h2>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 group"
          >
            <Link 
              href={`/blog/${post.id}`}
              className="md:w-1/3 relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </Link>
            <div className="md:w-2/3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span>By {post.author}</span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.id}`}
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;