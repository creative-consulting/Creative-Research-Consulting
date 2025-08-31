"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HomeAbout } from "@/types/lang";
import ButtonComponent from "@/components/3d/fancy-button";
import { useRouter } from "next/navigation";

type Props = {
  data: HomeAbout;
};

const About = ({ data }: Props) => {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(shapesRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.6,
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!shapesRef.current) return;

        const bounds = shapesRef.current.getBoundingClientRect();
        const xRatio = (e.clientX - bounds.left) / bounds.width;
        const yRatio = (e.clientY - bounds.top) / bounds.height;

        const xOffset = (0.9 - xRatio) * 30;
        const yOffset = (0.9 - yRatio) * 30;

        gsap.to(shapesRef.current, {
          x: xOffset,
          y: yOffset,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative overflow-hidden bg-[#f6f4f0] sm:pb-0 pb-8.5 pt-7 sm:pt-0 lg:py-10"
      aria-labelledby="hero-heading"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap md:flex-nowrap items-center lg:justify-between sm:gap-2 gap-0 w-full">
          {/* Content Section */}
          <div
            ref={contentRef}
            className="relative z-10 w-full order-1 md:order-none"
          >
            <h2
              id="hero-heading"
              // className="text-[#1c1c1d] font-bold leading-[1.1] md:leading-[75px] tracking-tight text-4xl sm:text-3xl md:text-5xl xxl:text-[72px] mb-5 lg:mb-[20px] origin-[50%_50%]"
              className="scroll-m-20 sm:text-4xl text-2xl sm:w-[44rem] w-full sm:mb-5 mb-3 font-semibold tracking-tight transition-colors first:mt-0"
              style={{ letterSpacing: "-1px" }}
            >
              {data.heading}
            </h2>

            <p
              dangerouslySetInnerHTML={{ __html: data.text }}
              className="text-[#0f0f0f] font-normal leading-relaxed md:leading-[30px] text-base sm:text-xl mb-8 sm:mb-10 lg:mb-[70px] w-full lg:w-[647px]"
            />

            <div className="sm:block! hidden!">
              <ButtonComponent
                onClick={() => router.push("/about")}
                textOne={data.btnText}
                textTwo="click here"
              />
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="w-full md:w-[calc(50%-32px)] lg:w-[90%] relative order-2 md:order-none sm:mt-6 mt-0 md:mt-0"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] xl:aspect-[3/2] z-10">
              <Image
                src="/about/hero.jpeg"
                alt="Business consultant"
                fill
                priority
                quality={90}
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>

            <div
              ref={shapesRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden"
            >
              <div className="absolute top-[20%] left-[10%] w-[30%] max-w-[239px] aspect-[239/204] hidden lg:block">
                <Image
                  src="/home/hero-shape1.svg"
                  alt="Decorative shape"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute top-[50%] right-[10%] w-[50%] max-w-[244px] aspect-[244/261] hidden lg:block">
                <Image
                  src="/home/hero-shape2.png"
                  alt="Decorative triangle"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[80%] max-w-[620px] aspect-[620/336] hidden lg:block">
                <Image
                  src="/home/hero-shape3.svg"
                  alt="Decorative dotted shape"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden! block!">
          <div className="flex justify-center mt-8">
            <ButtonComponent
              onClick={() => router.push("/about")}
              textOne={data.btnText}
              textTwo="click here"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
