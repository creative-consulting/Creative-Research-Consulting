"use client";

import { Button } from "@/components/ui/button";
import { FaFlask, FaHome, FaCar, FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const NewProductResearchPage = () => {
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
      title: "Car Clinics",
      icon: <FaCar className="w-5 h-5" />,
      description:
        "Automotive concept testing and feedback collection in controlled environments.",
      items: [
        "Vehicle design evaluation",
        "Feature preference testing",
        "Ergonomics assessment",
        "Purchase intent measurement",
        "Competitive benchmarking",
      ],
    },
    {
      title: "Home Use Tests (iHUT)",
      icon: <FaHome className="w-5 h-5" />,
      description:
        "In-home product trials to understand real-world usage and experience.",
      items: [
        "Product performance in natural setting",
        "Long-term usability assessment",
        "Household member interactions",
        "Storage and handling evaluation",
        "Repeat usage patterns",
      ],
    },
    {
      title: "New Product Development",
      icon: <FaFlask className="w-5 h-5" />,
      description:
        "End-to-end support throughout the product innovation cycle.",
      items: [
        "Idea generation and screening",
        "Concept development and testing",
        "Prototype evaluation",
        "Packaging and branding assessment",
        "Launch strategy development",
      ],
    },
    {
      title: "Product / Sensory Testing",
      icon: <FaCheckCircle className="w-5 h-5" />,
      description:
        "Evaluating product features and sensory appeal with target consumers.",
      items: [
        "Taste, smell, texture evaluation",
        "Visual appeal assessment",
        "Sensory preference mapping",
        "Blind comparison testing",
        "Sensory attribute optimization",
      ],
    },
  ];

  const processSteps = [
    {
      title: "Ideation & Concept Development",
      description:
        "Generate and refine new product ideas based on market needs and opportunities.",
      icon: "1",
    },
    {
      title: "Concept Screening",
      description:
        "Evaluate and prioritize concepts with target consumers to identify most promising ideas.",
      icon: "2",
    },
    {
      title: "Product Development",
      description:
        "Translate concepts into prototypes with iterative consumer feedback.",
      icon: "3",
    },
    {
      title: "Product Testing",
      description:
        "Rigorous testing of product features, usability, and appeal.",
      icon: "4",
    },
    {
      title: "Packaging & Branding",
      description:
        "Develop and test packaging solutions that enhance product appeal.",
      icon: "5",
    },
    {
      title: "Market Introduction",
      description:
        "Validate launch strategy and monitor early market performance.",
      icon: "6",
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
              Product Innovation Services
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              New Product Research
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 opacity-0 [&:not(:first-child)]:mt-6">
              Reduce risk and maximize success of your product launches with our
              comprehensive new product research services. From initial concept
              to market introduction, we help you develop products that
              consumers want.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Start Your Project
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
            Trusted by leading brands for product innovation
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
              Our New Product Research Services
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Comprehensive services to guide your product from concept to
              successful launch.
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

      {/* Methodology Section */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Our New Product Research Process
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              A proven methodology that reduces risk and maximizes product
              success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative animate-in opacity-0 translate-y-8`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    marginLeft: index % 2 !== 0 ? "auto" : "0",
                  }}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-start ${
                      index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`hidden lg:flex items-center justify-center absolute top-0 left-1/2 w-8 h-8 rounded-full bg-blue-600 text-white font-bold transform -translate-x-1/2 -translate-y-1/2 z-10`}
                    >
                      {step.icon}
                    </div>

                    <div
                      className={`lg:w-5/6 ${
                        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              New Product Research Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              See how our research has guided successful product launches across
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                    {index === 0 ? "Consumer Packaged Goods" : "Electronics"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "Innovative Food Product Development"
                      : "Tech Gadget Feature Optimization"}
                  </h3>
                  <p className="text-blue-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Identified winning product concept with 68% purchase intent among target consumers"
                      : "Optimized product features leading to 40% increase in perceived value"}
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
          sectionRefs.current[3] = el;
        }}
        className="py-20 md:py-28 bg-gradient-to-r from-blue-800 to-blue-600 text-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-in opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Ready to develop your next successful product?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our new product research services can help you create products
              that meet real consumer needs and stand out in the market.
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

export default NewProductResearchPage;
