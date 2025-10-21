"use client";

import HeroBanner from "@/components/layouts/hero-banner";
import { SupportedLang } from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import FeaturedPosts from "@/components/screens/blog/featured-posts";

import { BlogPageData } from "@/types/blog";
import LatestPosts from "@/components/screens/blog/latest-posts";
import BlogSidebar from "@/components/screens/blog/sidebar";
import Newsletter from "@/components/screens/blog/newsletter";

// [
//   {
//     keyword: "market research company in bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/market-research/bangladesh",
//     "Suggested Title Tag":
//       "Market Research Company in Bangladesh | CCSL - APAC & GCC Fieldwork",
//     "Suggested Meta Description":
//       "Full service market & social research in Bangladesh: CATI, CAWI, CAPI, FGDs, IDIs, panels, biometrics. ESOMAR compliant across all 8 divisions.",
//     "Suggested H1": "Market Research Company in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "market research agency bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/market-research-bangladesh",
//     "Suggested Title Tag":
//       "Market Research Agency in Bangladesh | CCSL",
//     "Suggested Meta Description":
//       "Trusted agency for quantitative & qualitative studies: nationwide fieldwork, strict QC, actionable insights.",
//     "Suggested H1": "Market Research Agency in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "fieldwork company bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/fieldwork-bangladesh",
//     "Suggested Title Tag":
//       "Fieldwork Company in Bangladesh | CATI · CAWI · CAPI · PAPI",
//     "Suggested Meta Description":
//       "Fieldwork Company in Bangladesh | CATI · CAWI · CAPI · PAPI",
//     "Suggested H1": "Fieldwork Company in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "cati service bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/cati-bangladesh",
//     "Suggested Title Tag":
//       "CATI Services in Bangladesh | Nationwide Phone Surveys",
//     "Suggested Meta Description":
//       "High-quality CATI for consumers, B2B & HCP with live monitoring and recordings.",
//     "Suggested H1": "CATI Services in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "cawi service bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/cawi-bangladesh",
//     "Suggested Title Tag":
//       "CAWI / Online Surveys in Bangladesh | CCSL",
//     "Suggested Meta Description":
//       "Device tested online surveys, advanced logic and validations, fast turnaround.",
//     "Suggested H1": "CAWI / Online Surveys in Bangladesh",
//     Notes: "Primary homepage target",
//   },
// ];

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ lang: SupportedLang }>;
// }) {

// }

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

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto sm:py-12 py-7">
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
