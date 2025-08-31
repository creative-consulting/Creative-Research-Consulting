"use client";

import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { FieldworkExcellenceData } from "@/types/lang";
import Image from "next/image";
import React, { useRef } from "react";
import { FaClipboardCheck } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  data: FieldworkExcellenceData;
};

const FieldworkExcellence = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  return (
    <section ref={sectionRef} className="sm:py-7 py-3 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-12 gap-7 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.h2
              className="field-heading sm:text-3xl text-2xl font-bold  text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-2
  animate-glossy-gradient scroll-m-20 tracking-tight transition-colors first:mt-0"
              initial="hidden"
              animate={controls}
              variants={headingVariants}
            >
              {data.heading}
            </motion.h2>

            <motion.p
              className="field-text sm:text-base text-sm text-gray-600 mb-3 capitalize"
              dangerouslySetInnerHTML={{ __html: data.text1 }}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              custom={0}
            />

            <motion.p
              className="field-text sm:text-base text-sm text-gray-600 mb-3"
              initial="hidden"
              animate={controls}
              variants={textVariants}
              custom={1}
            >
              {data.listHeading}
            </motion.p>

            <List className="space-y-3 mb-3.5">
              {data.listItems.map((item: string, index) => (
                <motion.div
                  key={index}
                  className="field-list-item"
                  initial="hidden"
                  animate={controls}
                  variants={listItemVariants}
                  custom={index}
                >
                  <ListItem className="flex items-start ">
                    <FaClipboardCheck className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </ListItem>
                </motion.div>
              ))}
            </List>

            <motion.p
              className="field-text text-base capitalize text-gray-600"
              dangerouslySetInnerHTML={{ __html: data.text2 }}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              custom={2}
            />
          </div>

          <motion.div
            className="field-image lg:w-1/2 order-1 lg:order-2"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <Image
              src={
                data.image ||
                "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
              }
              alt="Fieldwork"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FieldworkExcellence;
