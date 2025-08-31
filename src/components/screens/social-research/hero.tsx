"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { VideoHeroData } from "@/types/lang";

const HeroSection: FC<{ data: VideoHeroData }> = ({ data }) => {
  const [typedText, setTypedText] = useState<string>("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!data?.slowgan) return;

    let textIndex = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      if (textIndex < data.slowgan.length) {
        setTypedText(data.slowgan.substring(0, textIndex + 1));
        textIndex++;

        if (textIndex === data.slowgan.length) {
          clearInterval(typingInterval);
          textIndex = 0;
        }
      }
    }, 100 + Math.random() * 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [data?.slowgan]);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1200px] overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        key={data.videoPath}
        src={data.videoPath}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        id="bg-row-video"
        playsInline
        muted
        autoPlay
        loop
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        onError={() => setIsVideoLoaded(false)}
        aria-label={data.videoAlt}
      />

      {/* Fallback Background Image */}
      {data.fallbackImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${data.fallbackImage})` }}
          aria-hidden={isVideoLoaded}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-3 sm:space-y-4 md:space-y-6">
          {/* Heading */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight">
            {data.heading}
          </h1>

          {/* Typing Text */}
          <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex justify-center">
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-primary inline-flex">
              {typedText}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={data.navigation.link}
            className="inline-block mt-4 sm:mt-6 md:mt-8 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold text-base sm:text-lg md:text-xl text-black bg-secondary hover:bg-primary hover:text-white hover:scale-105 transition duration-300"
            aria-label={data.navigation.title}
          >
            {data.navigation.title}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-1 sm:mt-2 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
