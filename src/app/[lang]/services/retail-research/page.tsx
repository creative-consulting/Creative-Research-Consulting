"use client";

import { Button } from "@/components/ui/button";
import {
  FaShoppingCart,
  FaStore,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const RetailResearchPage = () => {
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
      title: "Shopper Insights & Behavior Analysis",
      icon: <FaShoppingCart className="w-5 h-5" />,
      description:
        "Deep understanding of shopper motivations, decision-making processes, and in-store behavior.",
      items: [
        "Path-to-purchase analysis",
        "Dwell time measurement",
        "Category navigation patterns",
        "Impulse purchase triggers",
        "Omnichannel shopping behavior",
      ],
    },
    {
      title: "Store Performance & Audits",
      icon: <FaStore className="w-5 h-5" />,
      description:
        "Comprehensive evaluation of store operations, compliance, and execution standards.",
      items: [
        "Planogram compliance audits",
        "Store condition assessments",
        "Staff performance evaluation",
        "Inventory availability checks",
        "Promotional execution tracking",
      ],
    },
    {
      title: "Pricing & Promotion Effectiveness",
      icon: <FaChartLine className="w-5 h-5" />,
      description:
        "Measuring the impact of pricing strategies and promotional activities on sales and margins.",
      items: [
        "Price elasticity modeling",
        "Promotional lift analysis",
        "Competitive price benchmarking",
        "Private label vs. national brand comparisons",
        "Markdown optimization",
      ],
    },
    {
      title: "Mystery Shopping & Customer Experience",
      icon: <FaUserTie className="w-5 h-5" />,
      description:
        "Objective assessment of service quality and customer experience across channels.",
      items: [
        "Service quality benchmarks",
        "Staff training effectiveness",
        "Customer journey mapping",
        "Complaint resolution evaluation",
        "Digital-to-physical experience integration",
      ],
    },
  ];

  const methodologies = [
    {
      title: "In-Store Observation",
      description:
        "Advanced techniques to capture real shopper behavior without interference.",
      metrics: [
        "Video ethnography",
        "Heat mapping",
        "Eye tracking",
        "RFID tracking",
        "Mobile location analytics",
      ],
    },
    {
      title: "Quantitative Surveys",
      description:
        "Large-scale data collection to measure attitudes and preferences.",
      metrics: [
        "Exit interviews",
        "Post-visit online surveys",
        "Mobile intercepts",
        "Loyalty program data analysis",
        "Transactional data integration",
      ],
    },
    {
      title: "Controlled Experiments",
      description:
        "Scientific testing of retail variables in real-world settings.",
      metrics: [
        "A/B testing of displays",
        "Test vs. control store analysis",
        "Virtual store simulations",
        "Shelf layout experiments",
        "Packaging variants testing",
      ],
    },
    {
      title: "Advanced Analytics",
      description:
        "Sophisticated modeling to predict outcomes and optimize performance.",
      metrics: [
        "Basket analysis",
        "Market basket affinity modeling",
        "Customer segmentation",
        "Predictive inventory modeling",
        "Geospatial performance analysis",
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
              Shopper Insights & Retail Performance
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              Retail Research Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 opacity-0 leading-7 [&:not(:first-child)]:mt-6">
              Data-driven insights to optimize store performance, enhance
              shopper experience, and maximize retail revenue across all
              channels.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Request Consultation
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
            Trusted by leading retailers, brands, and shopping centers worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3965558/pexels-photo-3965558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((src, i) => (
              <div
                key={i}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={src}
                  alt="Retail client logo"
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
              Comprehensive Retail Research Services
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We provide actionable insights across the entire retail ecosystem
              to drive sales, improve operations, and enhance customer
              experiences.
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

      {/* Methodologies Section */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Advanced Retail Research Methodologies
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Combining cutting-edge technologies with proven techniques to
              capture authentic shopper behavior and store performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <FaChartLine className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.metrics.map((metric, i) => (
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

      {/* Expertise Section */}
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
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Retail research"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
                Deep Retail Sector Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-7 [&:not(:first-child)]:mt-6">
                With decades of experience across all retail formats and
                categories, we bring specialized knowledge to every research
                challenge.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaStore className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Format Specialization
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Expertise across grocery, apparel, electronics, DIY,
                      specialty retail, and e-commerce.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Global Retail Coverage
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Experience conducting research in over 30 countries across
                      diverse retail environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaUserTie className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Shopper Segmentation
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Advanced shopper typologies based on behavior, attitudes,
                      and demographics.
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
              Retail Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              How our retail research has driven measurable improvements in
              sales, operations, and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={imgSrc}
                    alt="Retail case study"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <div className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {index === 0 ? "Supermarket Chain" : "Apparel Retailer"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "Category Layout Optimization"
                      : "Omnichannel Customer Journey Mapping"}
                  </h3>
                  <p className="text-blue-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Increased category sales by 18% through optimized shelf layouts and product placement"
                      : "Identified key friction points leading to 32% improvement in online-to-store conversion"}
                  </p>
                  <Button
                    href={`/case-studies/${index + 7}`}
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
              Ready to optimize your retail performance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our retail research services provide the insights you need to
              enhance shopper experience, improve operations, and drive sales
              growth.
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

export default RetailResearchPage;
