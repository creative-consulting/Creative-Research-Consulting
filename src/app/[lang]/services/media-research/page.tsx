"use client";

import { Button } from "@/components/ui/button";
import {
  FaChartLine,
  FaTv,
  FaMobileAlt,
  FaNewspaper,
  FaBroadcastTower,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MediaResearchPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Hero animation
    gsap.from(contentRef.current?.children || [], {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Section animations
    sectionRefs.current.forEach((section) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        onEnter: () => {
          gsap.to(section.querySelectorAll(".animate-in"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
      });
    });
  }, []);

  const services = [
    {
      title: "Audience Research",
      icon: <FaChartLine className="w-5 h-5" />,
      description:
        "Comprehensive analysis of media audiences to understand demographics, behaviors, and preferences.",
      items: [
        "Demographic profiling",
        "Viewing/listening habits",
        "Content preferences",
        "Cross-platform consumption",
        "Audience segmentation",
      ],
    },
    {
      title: "Internet / Online / Mobile Research",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description:
        "Measuring digital behavior and engagement across websites, apps, and mobile platforms.",
      items: [
        "Digital audience measurement",
        "User engagement metrics",
        "Cross-device tracking",
        "Social media consumption",
        "Mobile app usage",
      ],
    },
    {
      title: "Media Attribution / ROI",
      icon: <FaChartLine className="w-5 h-5" />,
      description: "Determining effectiveness of media spend across channels.",
      items: [
        "Multi-touch attribution",
        "Channel effectiveness",
        "Budget optimization",
        "Conversion tracking",
        "ROI measurement",
      ],
    },
    {
      title: "Print, Radio, TV Research",
      icon: <FaNewspaper className="w-5 h-5" />,
      description:
        "Platform-specific research to optimize traditional media messaging.",
      items: [
        "Print readership studies",
        "Radio listener tracking",
        "TV viewership analysis",
        "Ad effectiveness by medium",
        "Daypart performance",
      ],
    },
  ];

  const mediaTypes = [
    {
      title: "Television",
      icon: <FaTv className="w-5 h-5" />,
      description:
        "Comprehensive TV audience measurement and ad effectiveness research.",
      metrics: [
        "Ratings & share analysis",
        "Program affinity studies",
        "Commercial recall testing",
        "Time-shifted viewing",
        "OTT platform measurement",
      ],
    },
    {
      title: "Radio",
      icon: <FaBroadcastTower className="w-5 h-5" />,
      description:
        "In-depth radio listener research and station performance tracking.",
      metrics: [
        "Listener diaries",
        "PPM measurement",
        "Daypart analysis",
        "Format preferences",
        "Ad effectiveness",
      ],
    },
    {
      title: "Digital & Social Media",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description:
        "Measurement of digital platforms and social media engagement.",
      metrics: [
        "Website analytics",
        "Social listening",
        "Influencer impact",
        "Video streaming metrics",
        "Cross-platform integration",
      ],
    },
    {
      title: "Print & Out-of-Home",
      icon: <FaNewspaper className="w-5 h-5" />,
      description:
        "Research on print media readership and outdoor advertising effectiveness.",
      metrics: [
        "Circulation verification",
        "Readership surveys",
        "Place-based media",
        "Billboard visibility",
        "Transit ad impact",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-28 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/grid-pattern.svg')] bg-center"></div>
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div ref={contentRef} className="max-w-4xl">
            <p className="text-blue-200 font-medium uppercase tracking-wider mb-4 opacity-0 leading-7 [&:not(:first-child)]:mt-6">
              Media Measurement & Analytics
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              Media Research Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 opacity-0 [&:not(:first-child)]:mt-6">
              Comprehensive media research solutions to measure audience
              behavior, optimize media spend, and maximize the impact of your
              communications across all channels.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Request Media Audit
              </Button>
              <Button
                href="#services"
                variant="primaryLink"
                className="text-white hover:text-blue-100"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="text-center text-gray-500 mb-8 leading-7 [&:not(:first-child)]:mt-6">
            Trusted by leading media companies and advertisers worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((src, i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={src}
                  alt="Client logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Comprehensive Media Research Services
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We provide end-to-end media research solutions across all
              platforms and channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mr-4">
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 scroll-m-20 tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types Section */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Cross-Platform Media Measurement
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Our expertise covers all major media types with consistent
              methodologies for comparable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((media, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  {media.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                  {media.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                  {media.description}
                </p>
                <ul className="space-y-2">
                  {media.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <Image
                src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Media research methodology"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
                Our Media Research Methodology
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-7 [&:not(:first-child)]:mt-6">
                We combine cutting-edge technology with rigorous research
                methodologies to deliver accurate, actionable media insights.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaChartLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Data Collection
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Multi-mode data collection including surveys, meters,
                      passive measurement, and digital tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaMobileAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Cross-Platform Integration
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Unified measurement across TV, digital, mobile, and
                      traditional media for holistic insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaTv className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Advanced Analytics
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Sophisticated modeling and machine learning to derive
                      meaningful patterns from complex media data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Media Research Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              See how our media research has helped clients optimize their media
              strategies and maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={imgSrc}
                    alt="Case study"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <div className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {index === 0 ? "TV Measurement" : "Digital Attribution"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "National TV Audience Measurement System"
                      : "Multi-Touch Attribution for Global Brand"}
                  </h3>
                  <p className="text-blue-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Developed comprehensive ratings system covering 95% of national TV households"
                      : "Identified 22% media budget savings while maintaining campaign effectiveness"}
                  </p>
                  <Button
                    href={`/case-studies/${index + 3}`}
                    variant="secondaryLink"
                    className="mt-4 text-white hover:text-blue-200"
                  >
                    Read case study →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in opacity-0 translate-y-8">
            <Button href="/case-studies" variant="secondary">
              View all case studies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="py-20 md:py-28 bg-gradient-to-r from-blue-800 to-blue-600 text-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-in opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Ready to optimize your media strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our media research services provide the insights you need to make
              smarter media decisions and maximize your advertising ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary">
                Get Started
              </Button>
              <Button href="/services" variant="secondary">
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaResearchPage;
