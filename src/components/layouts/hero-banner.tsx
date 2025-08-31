"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { HeroBannerData } from "@/types/lang";
import { useRef } from "react";

type Props = {
  data: HeroBannerData;
};

const HeroBanner = ({ data }: Props) => {
  const container = useRef(null);

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1 },
    },
  };

  const paragraphVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1,
        delay: 0.4 + i * 0.2,
      },
    }),
  };

  return (
    <section
      ref={container}
      className=" relative text-white sm:pt-15 pt-16 sm:pb-15 pb-11 overflow-hidden bg-gradient-to-r from-primary/80 to-primary/90"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container px-5 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="sm:max-w-3xl sm:text-start text-center">
          <motion.h1
            className="heading text-2xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight scroll-m-20"
            dangerouslySetInnerHTML={{ __html: data.heading }}
            initial="hidden"
            animate="visible"
            variants={variants}
          />

          <motion.p
            className="paragraph sm:text-lg text-base text-blue-100/90 mb-10 max-w-2xl [&:not(:first-child)]:mt-6"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            {data.text}
          </motion.p>

          {(data?.firstButton || data?.secondButton) && (
            <div className="flex sm:flex-row flex-col items-center sm:gap-7 gap-5">
              {data.firstButton && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={buttonVariants}
                >
                  <Button
                    href={data.firstButton.link}
                    className="button sm:px-7 px-14 sm:py-3 sm:text-base cursor-pointer"
                    variant="about"
                  >
                    {data.firstButton.name}
                  </Button>
                </motion.div>
              )}
              {data.secondButton && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={buttonVariants}
                >
                  <Button
                    href={data.secondButton.link}
                    className="button !sm:px-14 !px-12 sm:py-2 sm:text-base !text-white border-white/2 bg-white/10 cursor-pointer"
                    variant="secondaryLink"
                  >
                    {data.secondButton.name}
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-primary/50 to-transparent z-10" />
    </section>
  );
};

export default HeroBanner;
