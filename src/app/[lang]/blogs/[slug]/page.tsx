import Image from "next/image";
import { notFound } from "next/navigation";

import getLangData from "@/lib/translator/getLangData";
import { SupportedLang } from "@/types/lang";
import { BlogPageData } from "@/types/blog";

interface BlogDetailsPageProps {
  params: Promise<{
    lang: SupportedLang;
    slug: string;
  }>;
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const { lang, slug } = await params;

  const pageData: BlogPageData = await getLangData(lang, "screen/blog");

  const allPosts = [...pageData.featuredPosts, ...pageData.latestPosts];

  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* =========================
            Blog Header
        ========================= */}

        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight text-[#41464c] md:text-5xl">
            {post.fullDetails.title}
          </h1>

          {post.fullDetails.subtitle && (
            <p className="mb-6 text-lg leading-8 text-gray-600 md:text-xl">
              {post.fullDetails.subtitle}
            </p>
          )}

          <div className="mb-8 flex flex-wrap gap-5 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}

          <div className="relative mb-12 aspect-[16/8] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* =========================
            Blog Content
        ========================= */}

        <article className="mx-auto max-w-5xl">
          {post.fullDetails.content.map((item, index) => {
            /* =========================
               Heading
            ========================= */

            if (item.type === "heading") {
              const level = item.level ?? 2;

              if (level === 3) {
                return (
                  <h3
                    key={index}
                    className="mb-5 mt-10 text-2xl font-bold leading-tight text-[#41464c]"
                  >
                    {item.text}
                  </h3>
                );
              }

              if (level === 4) {
                return (
                  <h4
                    key={index}
                    className="mb-4 mt-8 text-xl font-bold leading-tight text-[#41464c]"
                  >
                    {item.text}
                  </h4>
                );
              }

              return (
                <h2
                  key={index}
                  className="mb-5 mt-12 text-3xl font-bold leading-tight text-[#41464c]"
                >
                  {item.text}
                </h2>
              );
            }

            /* =========================
               Paragraph
            ========================= */

            if (item.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mb-6 text-base leading-8 text-[#41464c] md:text-lg"
                >
                  {item.content.map((inlineItem, inlineIndex) => {
                    /* Normal Text */

                    if (inlineItem.type === "text") {
                      return <span key={inlineIndex}>{inlineItem.text}</span>;
                    }

                    /* Bold */

                    if (inlineItem.type === "bold") {
                      return (
                        <strong key={inlineIndex} className="font-bold">
                          {inlineItem.text}
                        </strong>
                      );
                    }

                    /* Italic */

                    if (inlineItem.type === "italic") {
                      return (
                        <em key={inlineIndex} className="italic">
                          {inlineItem.text}
                        </em>
                      );
                    }

                    /* Link */

                    if (inlineItem.type === "link") {
                      return (
                        <a
                          key={inlineIndex}
                          href={inlineItem.url}
                          target={
                            inlineItem.newTab === false ? undefined : "_blank"
                          }
                          rel={
                            inlineItem.newTab === false
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
                        >
                          {inlineItem.text}
                        </a>
                      );
                    }

                    /* Bold Link */

                    if (inlineItem.type === "boldLink") {
                      return (
                        <a
                          key={inlineIndex}
                          href={inlineItem.url}
                          target={
                            inlineItem.newTab === false ? undefined : "_blank"
                          }
                          rel={
                            inlineItem.newTab === false
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="font-bold text-primary underline underline-offset-2 hover:opacity-80"
                        >
                          {inlineItem.text}
                        </a>
                      );
                    }

                    /* Line Break */

                    if (inlineItem.type === "break") {
                      return <br key={inlineIndex} />;
                    }

                    return null;
                  })}
                </p>
              );
            }

            /* =========================
               UL / OL
            ========================= */

            if (item.type === "list") {
              if (item.ordered) {
                return (
                  <ol
                    key={index}
                    className="mb-8 list-decimal space-y-3 pl-7 text-base leading-8 text-[#41464c] md:text-lg"
                  >
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ol>
                );
              }

              return (
                <ul
                  key={index}
                  className="mb-8 list-disc space-y-3 pl-7 text-base leading-8 text-[#41464c] md:text-lg"
                >
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            }

            /* =========================
               Blockquote
            ========================= */

            if (item.type === "blockquote") {
              return (
                <blockquote
                  key={index}
                  className="my-10 border-l-4 border-primary bg-gray-50 px-6 py-5"
                >
                  <p className="text-lg font-medium italic leading-8 text-[#41464c]">
                    "{item.text}"
                  </p>

                  {item.author && (
                    <cite className="mt-3 block text-sm not-italic text-gray-500">
                      — {item.author}
                    </cite>
                  )}
                </blockquote>
              );
            }

            /* =========================
               Image
            ========================= */

            if (item.type === "image") {
              return (
                <figure key={index} className="my-10">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={700}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {item.caption && (
                    <figcaption className="mt-3 text-center text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            /* =========================
               Table
            ========================= */

            if (item.type === "table") {
              return (
                <div key={index} className="my-10 overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse border border-gray-200 text-left">
                    <thead>
                      <tr>
                        {item.table.headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className="border border-gray-200 bg-gray-50 px-4 py-3 font-bold text-[#41464c]"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {item.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-200 px-4 py-3 text-[#41464c]"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </article>
      </div>
    </main>
  );
};

export default BlogDetailsPage;
