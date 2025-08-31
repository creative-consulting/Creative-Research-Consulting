"use client";

import { motion } from "framer-motion";
import { Link, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BlogSidebarProps {
  categories: {
    name: string;
    count: number;
  }[];
  popularTags: string[];
}

const BlogSidebar = ({ categories, popularTags }: BlogSidebarProps) => {
  return (
    <aside className="space-y-10">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Input
          type="text"
          placeholder="Search articles..."
          className="pl-10 pr-4 py-6 rounded-lg"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href="#"
                className="flex justify-between items-center py-2 hover:text-primary transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <Link
              key={index}
              href="#"
              className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>
    </aside>
  );
};

export default BlogSidebar;
