import { HeroBannerData } from "./lang";

/* =========================
   Inline Content
========================= */

export type BlogInlineContent =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "bold";
      text: string;
    }
  | {
      type: "italic";
      text: string;
    }
  | {
      type: "link";
      text: string;
      url: string;
      newTab?: boolean;
    }
  | {
      type: "boldLink";
      text: string;
      url: string;
      newTab?: boolean;
    }
  | {
      type: "break";
    };

/* =========================
   Table
========================= */

export interface BlogTable {
  headers: string[];
  rows: string[][];
}

/* =========================
   Article Content
========================= */

export type BlogContent =
  | {
      type: "heading";
      level?: 2 | 3 | 4;
      text: string;
    }
  | {
      type: "paragraph";
      content: BlogInlineContent[];
    }
  | {
      type: "list";
      ordered?: false;
      items: string[];
    }
  | {
      type: "list";
      ordered: true;
      items: string[];
    }
  | {
      type: "blockquote";
      text: string;
      author?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "table";
      table: BlogTable;
    };

/* =========================
   Full Blog Details
========================= */

export interface BlogFullDetails {
  title: string;
  subtitle?: string;
  content: BlogContent[];
}

/* =========================
   Blog Post
========================= */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  fullDetails: BlogFullDetails;
}

/* =========================
   Blog Page
========================= */

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
