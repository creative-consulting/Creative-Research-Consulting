"use client";

import { FC, useEffect, useRef } from "react";
import type { IndustriesType } from "@/types/lang";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustriesMain: FC<{ data: IndustriesType }> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Animation for the entire section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animation for list items
    listItemsRef.current.forEach((item) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    // Animation for the table
    if (tableRef.current) {
      gsap.from(tableRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate table rows
      const rows = tableRef.current.querySelectorAll("tbody tr");
      rows.forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToListRefs = (el: HTMLLIElement | null) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  // Extract column keys
  const columns =
    data.tableArea.table.length > 0 ? Object.keys(data.tableArea.table[0]) : [];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background text-foreground py-12 sm:py-16 lg:py-20"
    >
      <div className="container">
        {/* Description */}
        <p
          className="prose prose-base sm:prose-lg lg:prose-xl max-w-none mb-8 sm:mb-10 lg:mb-12 leading-7 [&:not(:first-child)]:mt-6"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* List Area */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">
            {data.listArea.heading}
          </h3>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {data.listArea.list.map((item, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold">
                  {item.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3 pl-5">
                  {item.items.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      ref={addToListRefs}
                      className="flex items-start gap-3"
                    >
                      <span className="inline-block w-1 h-1 mt-3 bg-foreground rounded-full flex-shrink-0"></span>
                      <span
                        className="text-sm sm:text-base lg:text-lg leading-normal sm:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Table Area */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">
            {data.tableArea.heading}
          </h3>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
            <table
              ref={tableRef}
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
            >
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {columns.map((key) => (
                    <th
                      key={key}
                      scope="col"
                      className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider
                        ${
                          key === "type-of-study"
                            ? "text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                    >
                      {key.split("-").join(" ")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.tableArea.table.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150"
                  >
                    {columns.map((key, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 whitespace-normal text-sm
                          ${
                            key === "type-of-study"
                              ? "font-semibold text-primary dark:text-primary-light"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
                        dangerouslySetInnerHTML={{
                          __html: row[key as keyof typeof row],
                        }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesMain;
