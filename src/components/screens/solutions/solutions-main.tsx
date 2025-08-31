"use client";

import { FC, useEffect, useRef } from "react";
import type { MarketResearchType } from "@/types/lang";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsMain: FC<{ data: MarketResearchType }> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const textBlocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Section animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Feature items animation
    featureItemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          delay: i * 0.05,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    // Text blocks animation
    textBlocksRef.current.forEach((block, i) => {
      if (block) {
        gsap.from(block, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToFeatureRefs = (el: HTMLLIElement | null) => {
    if (el && !featureItemsRef.current.includes(el)) {
      featureItemsRef.current.push(el);
    }
  };

  const addToTextBlockRefs = (el: HTMLDivElement | null) => {
    if (el && !textBlocksRef.current.includes(el)) {
      textBlocksRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background text-foreground py-16 sm:py-20 lg:py-24"
    >
      <div className="container">
        {/* Description */}
        <div ref={addToTextBlockRefs}>
          <p
            className="prose prose-base sm:prose-lg lg:prose-xl max-w-none mb-10 sm:mb-12 lg:mb-14 leading-7 [&:not(:first-child)]:mt-6"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        {/* Upper Text */}
        {data?.upperText &&
          data?.upperText.length > 0 &&
          data.upperText.map((item, index) => (
            <div key={index} ref={addToTextBlockRefs}>
              <p
                className="prose prose-base sm:prose-lg lg:prose-xl max-w-none mb-10 sm:mb-12 lg:mb-14 leading-7 [&:not(:first-child)]:mt-6"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}

        {/* Features */}
        <div ref={addToTextBlockRefs}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight">
            {data.features.heading}
          </h3>
          <ul className="space-y-4 sm:space-y-5 lg:space-y-6 mb-10 sm:mb-12 lg:mb-14">
            {data.features.allFeatures.map((feature, index) => (
              <li
                key={index}
                ref={addToFeatureRefs}
                className="flex items-start gap-4 relative pl-6"
              >
                <span className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full flex-shrink-0"></span>
                <span
                  className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose"
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Under Text */}
        {data?.underText &&
          data?.underText.length > 0 &&
          data.underText.map((item, index) => (
            <div key={index} ref={addToTextBlockRefs}>
              <p
                className="prose prose-base sm:prose-lg lg:prose-xl max-w-none mb-10 sm:mb-12 lg:mb-14 leading-7 [&:not(:first-child)]:mt-6"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default SolutionsMain;
