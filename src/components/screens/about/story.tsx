"use client";

import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { OurStoryData, StoryItem } from "@/types/lang";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaLink, FaSearch } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  data: OurStoryData;
};

const Story = ({ data }: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const itemVariants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="sm:py-10 py-7 bg-white" ref={containerRef}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-12 gap-6 items-center">
          <motion.div
            className="lg:w-1/2 story-image"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <Image
              src={data.image}
              alt="Our team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <div className="lg:w-1/2">
            <motion.h2
              className="story-heading text-2xl sm:text-3xl font-bold  text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three 
  animate-glossy-gradient mb-0 scroll-m-20 tracking-tight transition-colors first:mt-0"
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={0.4}
            >
              {data.heading}
            </motion.h2>
            <motion.p
              className="story-text1 text-base text-gray-600 mb-2 leading-7 [&:not(:first-child)]:mt-2.5"
              dangerouslySetInnerHTML={{ __html: data.text1 }}
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={0.4}
            />
            <motion.p
              className="story-text2 text-base text-gray-600 leading-7 [&:not(:first-child)]:mt-2.5"
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={0.4}
            >
              {data.text2}
            </motion.p>
            <List className="mt-3 space-y-3">
              {data.stroyItems.map((item: StoryItem, index) => (
                <motion.div
                  key={index}
                  className="story-item"
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={itemVariants}
                >
                  <ListItem className="flex items-center">
                    <FaSearch className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item.title}</span>
                    {item.link && (
                      <Link
                        href={item.link}
                        rel="noopener noreferrer"
                        className="ml-2 text-primary hover:text-blue-800"
                        title={item.alt || ""}
                      >
                        <FaLink className="h-4 w-4" />
                      </Link>
                    )}
                  </ListItem>
                </motion.div>
              ))}
            </List>
            <motion.p
              className="story-text3 text-base text-gray-600 mt-3 leading-7 [&:not(:first-child)]:mt-3"
              dangerouslySetInnerHTML={{ __html: data.text3 }}
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
