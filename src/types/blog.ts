import { HeroBannerData } from "./lang";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
    content: string;
  }
  
  export interface BlogPageData {
    hero: HeroBannerData;
    featuredPosts: BlogPost[];
    latestPosts: BlogPost[];
    categories: {
      name: string;
      count: number;
    }[];
    popularTags: string[];
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      buttonText: string;
    };
  }