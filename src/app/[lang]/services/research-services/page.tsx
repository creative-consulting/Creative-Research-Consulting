"use client";

import { Button } from "@/components/ui/button";
import {
  FaChartLine,
  FaBrain,
  FaMobileAlt,
  FaUsers,
  FaLaptopCode,
  FaGlobeAmericas,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ResearchServicesPage = () => {
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

  const serviceCategories = [
    {
      title: "Analytical Services",
      icon: <FaChartLine className="w-5 h-5" />,
      description:
        "Transform complex data into actionable business intelligence with our advanced analytics capabilities.",
      services: [
        "Big Data Analysis",
        "Data Mining & Exploration",
        "Statistical Modeling",
        "Predictive Analytics",
        "Segmentation Analysis",
        "Data Visualization",
      ],
    },
    {
      title: "Biometrics Research",
      icon: <FaBrain className="w-5 h-5" />,
      description:
        "Uncover subconscious consumer responses through cutting-edge neuroscience techniques.",
      services: [
        "Eye Tracking Studies",
        "Facial Expression Analysis",
        "Neuromarketing",
        "EEG & Biometric Sensors",
        "Emotional Response Measurement",
        "Wearable Device Integration",
      ],
    },
    {
      title: "Data Collection",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description:
        "Comprehensive data gathering solutions across all methodologies and platforms.",
      services: [
        "CATI (Phone Surveys)",
        "CAWI (Online Surveys)",
        "CAPI (Face-to-Face)",
        "Focus Group Discussions",
        "In-Depth Interviews",
        "Omnibus Surveys",
      ],
    },
    {
      title: "Qualitative Research",
      icon: <FaUsers className="w-5 h-5" />,
      description:
        "Deep dive into consumer motivations, attitudes, and behaviors through interactive methods.",
      services: [
        "Focus Groups",
        "Ethnographic Studies",
        "In-Depth Interviews",
        "Online Communities",
        "Semiotic Analysis",
        "Co-Creation Workshops",
      ],
    },
    {
      title: "Quantitative Research",
      icon: <FaLaptopCode className="w-5 h-5" />,
      description:
        "Robust statistical research providing measurable insights across large populations.",
      services: [
        "Nationwide Surveys",
        "Longitudinal Tracking",
        "Concept Testing",
        "Product Validation",
        "Market Sizing",
        "Customer Segmentation",
      ],
    },
    {
      title: "International Research",
      icon: <FaGlobeAmericas className="w-5 h-5" />,
      description:
        "Global research solutions with local expertise across 30+ countries.",
      services: [
        "Cross-Cultural Studies",
        "Market Entry Research",
        "Global Brand Tracking",
        "Cultural Adaptation Testing",
        "Multilingual Surveys",
        "Local Market Insights",
      ],
    },
  ];

  const methodologies = [
    {
      title: "Traditional Approaches",
      description:
        "Time-tested methods that deliver reliable, actionable insights.",
      techniques: [
        "Face-to-Face Interviews",
        "Telephone Surveys",
        "Mail Surveys",
        "Mystery Shopping",
        "Hall Tests",
        "Central Location Tests",
      ],
    },
    {
      title: "Digital Innovations",
      description: "Cutting-edge technologies for modern research challenges.",
      techniques: [
        "Mobile Ethnography",
        "Social Media Listening",
        "AI-Powered Analytics",
        "Chatbot Surveys",
        "Virtual Focus Groups",
        "Gamified Research",
      ],
    },
    {
      title: "Hybrid Solutions",
      description:
        "Combining the best of traditional and digital for optimal results.",
      techniques: [
        "Online-Offline Integration",
        "Mixed-Method Studies",
        "Triangulation Approaches",
        "Omnichannel Data Collection",
        "Behavioral Data Fusion",
        "Cross-Platform Analysis",
      ],
    },
  ];

  const industrySolutions = [
    {
      title: "Consumer Goods",
      description: "Insights for FMCG, retail, and consumer product companies.",
      services: [
        "Brand Health Tracking",
        "Product Concept Testing",
        "Packaging Evaluation",
        "Pricing Strategy",
        "Shopper Behavior",
      ],
    },
    {
      title: "Financial Services",
      description: "Research solutions for banking, insurance, and fintech.",
      services: [
        "Customer Satisfaction",
        "Product Adoption",
        "Brand Perception",
        "Market Segmentation",
        "Digital Banking UX",
      ],
    },
    {
      title: "Healthcare & Pharma",
      description: "Specialized research for medical and wellness sectors.",
      services: [
        "Patient Journey Mapping",
        "Treatment Adherence",
        "HCP Engagement",
        "Market Access",
        "DTC Effectiveness",
      ],
    },
    {
      title: "Technology & Telecom",
      description: "Insights for tech companies and service providers.",
      services: [
        "Product Usability",
        "Feature Prioritization",
        "Customer Retention",
        "Competitive Benchmarking",
        "IoT Adoption",
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
              Comprehensive Market Research Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              Research Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 opacity-0 [&:not(:first-child)]:mt-6">
              Cutting-edge methodologies, advanced analytics, and global
              expertise to deliver insights that drive business growth across
              industries.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Request Proposal
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
            Trusted by leading brands across industries worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
              Our Research Service Capabilities
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Comprehensive solutions covering every stage of the research
              process, from data collection to advanced analytics and strategic
              consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mr-4">
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 scroll-m-20 tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.services.map((service, i) => (
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
                        <span className="text-gray-600">{service}</span>
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
              Research Methodologies
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We employ a diverse toolkit of research approaches tailored to
              your specific business objectives and target audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  {method.techniques.map((technique, i) => (
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
                      <span className="text-gray-600">{technique}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              Tailored research approaches designed to address the unique
              challenges and opportunities of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaChartLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.services.map((service, i) => (
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
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global research"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
                Global Research Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-7 [&:not(:first-child)]:mt-6">
                With operations in over 30 countries across Asia Pacific and the
                Middle East, we deliver consistent, high-quality research with
                local cultural understanding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                    Asia Pacific
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "China",
                      "India",
                      "Japan",
                      "Indonesia",
                      "Vietnam",
                      "Thailand",
                      "Philippines",
                      "Malaysia",
                      "Singapore",
                      "Hong Kong",
                      "Bangladesh",
                      "Pakistan",
                    ].map((country, i) => (
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
                        <span>{country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                    Middle East
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "Saudi Arabia",
                      "UAE",
                      "Qatar",
                      "Kuwait",
                      "Bahrain",
                      "Lebanon",
                      "Jordan",
                      "Iraq",
                    ].map((country, i) => (
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
                        <span>{country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Research Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              How our research services have helped clients make data-driven
              decisions and achieve measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={imgSrc}
                    alt="Research case study"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <div className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {index === 0 ? "Consumer Goods" : "Financial Services"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "Brand Positioning Optimization"
                      : "Customer Journey Mapping"}
                  </h3>
                  <p className="text-blue-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Increased brand preference by 27% through refined positioning strategy"
                      : "Identified key friction points leading to 35% improvement in conversion"}
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
          sectionRefs.current[5] = el;
        }}
        className="py-20 md:py-28 bg-gradient-to-r from-blue-800 to-blue-600 text-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-in opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Ready to uncover actionable insights?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our research services provide the data and analysis you need to
              make informed business decisions and stay ahead of the
              competition.
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

export default ResearchServicesPage;
