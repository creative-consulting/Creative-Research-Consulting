"use client";

import HeroBanner from "@/components/layouts/hero-banner";
import {  SupportedLang } from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import FeaturedPosts from "@/components/screens/blog/featured-posts";

import { BlogPageData } from "@/types/blog";
import LatestPosts from "@/components/screens/blog/latest-posts";
import BlogSidebar from "@/components/screens/blog/sidebar";
import Newsletter from "@/components/screens/blog/newsletter";

const BlogPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const pageData: BlogPageData = await getLangData(lang, "screen/blog");

  return (
    <div className="bg-white">
      <HeroBanner data={pageData.hero} />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            {/* Featured Posts */}
            <FeaturedPosts posts={pageData.featuredPosts} />
            
            {/* Latest Posts */}
            <LatestPosts posts={pageData.latestPosts} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar 
              categories={pageData.categories}
              popularTags={pageData.popularTags}
            />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter data={pageData.newsletter} />
    </div>
  );
};

export default BlogPage;