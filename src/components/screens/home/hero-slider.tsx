"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SlideData } from "@/types/lang";

type HeroSliderProps = {
  slides: SlideData[];
  autoSlideInterval?: number;
  typingSpeed?: number;
};

const HeroSlider = ({
  slides,
  autoSlideInterval = 8000,
  typingSpeed = 50,
}: HeroSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Typing animation effect
  useEffect(() => {
    if (!slides[activeIndex]?.heading) return;

    // Use a ref to track if the effect is still relevant
    const animationRef = { active: true };

    // Reset states
    setIsTyping(true);
    setDisplayText("");

    // Start animation in next tick
    setTimeout(() => {
      if (!animationRef.active) return;

      const fullText = slides[activeIndex].heading;
      let currentText = "";

      const typeNextCharacter = () => {
        if (!animationRef.active) return;

        if (currentText.length < fullText.length) {
          currentText = fullText.substring(0, currentText.length + 1);
          setDisplayText(currentText);
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };

      typeNextCharacter();
    }, 0);

    return () => {
      animationRef.active = false;
    };
  }, [activeIndex, slides, typingSpeed]);

  // Auto slide effect
  useEffect(() => {
    if (isTyping) return;

    intervalRef.current = setInterval(() => {
      goToNext();
    }, autoSlideInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isTyping, autoSlideInterval]);

  // GSAP animations
  useEffect(() => {
    if (!sliderRef.current || !contentRef.current || !dotsRef.current) return;

    const ctx = gsap.context(() => {
      // Slide transition animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // Dots animation
      gsap.from(dotsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [activeIndex]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    // Reset typing animation when manually changing slides
    setIsTyping(true);
    setDisplayText("");
  };

  const currentSlide = slides[activeIndex];

  return (
    <div
      ref={sliderRef}
      className="relative w-full sm:h-[78vh] h-[60vh] sm:max-h-[900px] max-h-[600px] sm:min-h-[550px] min-h-[400px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      aria-roledescription="carousel"
      aria-label="Hero slider"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-70">
        {currentSlide.image && (
          <Image
            src={currentSlide.image}
            alt="image"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 sm:h-[78%] h-full flex flex-col justify-center sm:pt-0 pt-5.5 items-center text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <h1
            className="font-bold text-white sm:mb-6 mb-3 leading-tight scroll-m-20 text-2xl tracking-tight sm:text-5xl"
            aria-live="polite"
          >
            {displayText}
            <span
              className={`inline-block w-2 h-12 sm:h-16 bg-white ml-2 align-middle ${
                isTyping ? "animate-blink" : "opacity-0"
              }`}
            ></span>
          </h1>

          {currentSlide.text && (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              {currentSlide.text}
            </p>
          )}

          {currentSlide.btnText && currentSlide.link && (
            <div className="px-14 sm:px-0 hidden">
              <Button
                href={currentSlide.link}
                variant="primaryLink"
                className="mt-6 sm:px-8 px-2 sm:py-4 py-2.5 sm:text-lg text-sm font-semibold"
              >
                {currentSlide.btnText}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        ref={dotsRef}
        className="absolute  sm:bottom-12 bottom-6 left-1/2 transform -translate-x-1/2  z-10 flex space-x-3"
        role="group"
        aria-label="Slide navigation dots"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "bg-white w-6 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows (optional) */}
      <button
        onClick={goToPrev}
        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 hidden md:block"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Progress Bar (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-10">
        <div
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{
            width: isTyping ? "0%" : "100%",
            transitionDuration: isTyping ? "0ms" : `${autoSlideInterval}ms`,
          }}
        ></div>
      </div>

      {/* Custom CSS for blink animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
