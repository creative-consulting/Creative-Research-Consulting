"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

type Props = {
  heading: string;
  subheading: string;
  stats: StatItem[];
};

export default function StatsCounter({ heading, subheading, stats }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll(".stat-item");

      // text animation
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      // number counter animation
      items.forEach((el: any) => {
        const valueEl = el.querySelector(".count");

        const obj = { val: 0 };
        const target = Number(valueEl.dataset.value);

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            valueEl.innerText = new Intl.NumberFormat("en-US").format(
              Math.floor(obj.val),
            );
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="sm:text-3xl text-xl font-bold mb-4">{heading}</h2>
          <p className="sm:max-w-[32rem] max-w-full mx-auto sm:text-lg text-xl opacity-80">
            {subheading}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-4 gap-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-item text-center sm:p-2 p-3 hover:shadow-md transition bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <h3 className="sm:text-3xl text-xl font-bold mb-2">
                <span className="count" data-value={item.value}>
                  0
                </span>
                <span>{item.suffix}</span>
              </h3>

              <p className="text-sm md:text-base opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
