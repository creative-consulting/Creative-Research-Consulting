"use client";

import { Button } from "@/components/ui/button";
import {
  FaUsers,
  FaChild,
  FaGraduationCap,
  FaGlobeAmericas,
  FaUserFriends,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DemographicsPage = () => {
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

  const demographicGroups = [
    {
      title: "Affluent Consumers",
      icon: <FaUsers className="w-5 h-5" />,
      description:
        "Understanding high-net-worth individuals and their purchasing behaviors.",
      items: [
        "Luxury brand preferences",
        "Investment decision-making",
        "Travel and leisure patterns",
        "Financial services usage",
        "Technology adoption",
      ],
    },
    {
      title: "Children & Youth",
      icon: <FaChild className="w-5 h-5" />,
      description:
        "Insights into the behaviors and preferences of younger demographics.",
      items: [
        "Media consumption habits",
        "Educational product preferences",
        "Parental influence on purchases",
        "Digital engagement patterns",
        "Brand awareness development",
      ],
    },
    {
      title: "College & University Students",
      icon: <FaGraduationCap className="w-5 h-5" />,
      description:
        "Research focused on the student population and their unique needs.",
      items: [
        "Campus lifestyle trends",
        "Technology usage patterns",
        "Budgeting and spending habits",
        "Brand loyalty formation",
        "Career aspirations and plans",
      ],
    },
    {
      title: "Ethnic & Multicultural Groups",
      icon: <FaGlobeAmericas className="w-5 h-5" />,
      description:
        "Understanding diverse cultural communities and their consumer behaviors.",
      items: [
        "Cultural values and traditions",
        "Language preferences in marketing",
        "Community engagement channels",
        "Cross-cultural brand perceptions",
        "Immigrant consumer journeys",
      ],
    },
    {
      title: "Mature & Senior Citizens",
      icon: <FaUserFriends className="w-5 h-5" />,
      description:
        "Insights into the needs and behaviors of older adult populations.",
      items: [
        "Retirement lifestyle trends",
        "Healthcare product usage",
        "Technology adoption barriers",
        "Financial security concerns",
        "Leisure activity preferences",
      ],
    },
    {
      title: "Parents & Families",
      icon: <FaUsers className="w-5 h-5" />,
      description:
        "Research focused on family dynamics and household decision-making.",
      items: [
        "Household purchasing roles",
        "Child-rearing product preferences",
        "Family entertainment choices",
        "Education-related decisions",
        "Work-life balance challenges",
      ],
    },
  ];

  const methodologies = [
    {
      title: "Segmentation Analysis",
      description:
        "Advanced techniques to identify and profile distinct demographic groups.",
      metrics: [
        "Cluster analysis",
        "Factor analysis",
        "Latent class analysis",
        "Behavioral segmentation",
        "Psychographic profiling",
      ],
    },
    {
      title: "Longitudinal Tracking",
      description:
        "Monitoring demographic shifts and trends over extended periods.",
      metrics: [
        "Cohort studies",
        "Panel surveys",
        "Life stage tracking",
        "Generational comparisons",
        "Trend analysis",
      ],
    },
    {
      title: "Cultural Context Research",
      description:
        "Understanding demographic groups within their cultural frameworks.",
      metrics: [
        "Ethnographic immersion",
        "Community-based research",
        "Cultural values mapping",
        "Cross-cultural comparisons",
        "Acculturation studies",
      ],
    },
    {
      title: "Predictive Modeling",
      description:
        "Forecasting demographic changes and their market implications.",
      metrics: [
        "Population projection modeling",
        "Consumer lifecycle analysis",
        "Migration pattern analysis",
        "Socioeconomic forecasting",
        "Policy impact simulations",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 md:py-28 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/grid-pattern.svg')] bg-center"></div>
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div ref={contentRef} className="max-w-4xl">
            <p className="text-purple-200 font-medium uppercase tracking-wider mb-4 opacity-0 leading-7 [&:not(:first-child)]:mt-6">
              Population Insights & Market Segmentation
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              Demographic Research Solutions
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed mb-8 opacity-0 [&:not(:first-child)]:mt-6">
              Deep understanding of population segments to tailor products,
              services, and communications for specific demographic groups.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Request Consultation
              </Button>
              <Button
                href="#groups"
                variant="primaryLink"
                className="text-white hover:text-purple-100"
              >
                Explore Demographics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="text-center text-gray-500 mb-8 leading-7 [&:not(:first-child)]:mt-6">
            Trusted by organizations targeting specific population segments
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

      {/* Demographic Groups Grid */}
      <section
        id="groups"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Specialized Demographic Research
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We provide deep insights into specific population segments to help
              you understand and engage your target audiences more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demographicGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-50 text-purple-600 mr-4">
                      {group.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 scroll-m-20 tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
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
              Advanced Demographic Research Methodologies
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Combining statistical rigor with cultural sensitivity to uncover
              meaningful insights about population groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-4">
                  <FaUsers className="w-5 h-5" />
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
                        className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Demographic research"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
                Comprehensive Demographic Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-7 [&:not(:first-child)]:mt-6">
                With extensive experience across diverse populations, we bring
                specialized knowledge to every demographic research challenge.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-50 p-2 rounded-lg text-purple-600 mr-4">
                    <FaUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Cross-Cultural Understanding
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Expertise in multicultural research across different
                      ethnic, religious, and linguistic communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-50 p-2 rounded-lg text-purple-600 mr-4">
                    <FaChild className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Life Stage Specialization
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Deep understanding of different life stages from childhood
                      through retirement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-50 p-2 rounded-lg text-purple-600 mr-4">
                    <FaGlobeAmericas className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Geographic Coverage
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Experience conducting demographic research across urban,
                      suburban, and rural areas.
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
              Demographic Research Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              How our demographic insights have helped organizations better
              understand and engage their target audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={imgSrc}
                    alt="Demographic case study"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <div className="inline-block bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {index === 0 ? "Financial Services" : "Education Sector"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "Millennial Wealth Management Preferences"
                      : "First-Generation College Student Needs"}
                  </h3>
                  <p className="text-purple-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Identified key financial concerns leading to 35% increase in engagement with younger clients"
                      : "Developed targeted support programs resulting in 22% higher retention rates"}
                  </p>
                  <Button
                    href={`/case-studies/${index + 9}`}
                    variant="secondaryLink"
                    className="mt-4 text-white hover:text-purple-200"
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
        className="py-20 md:py-28 bg-gradient-to-r from-purple-800 to-purple-600 text-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-in opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Ready to understand your target demographics?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our demographic research services provide the insights you need to
              effectively reach and engage specific population segments.
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

export default DemographicsPage;
