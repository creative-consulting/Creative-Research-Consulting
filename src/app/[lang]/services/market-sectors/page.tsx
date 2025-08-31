"use client";

import { Button } from "@/components/ui/button";
import {
  FaChartBar,
  FaShoppingBag,
  FaCar,
  FaFlask,
  FaUniversity,
  FaHeartbeat,
  FaMobileAlt,
  FaPlane,
  FaUserTie,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MarketSectorsPage = () => {
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

  const featuredSectors = [
    {
      title: "Consumer Goods & Retail",
      icon: <FaShoppingBag className="w-5 h-5" />,
      description:
        "Insights into fast-moving consumer goods and retail trends.",
      industries: [
        "Food & Beverage",
        "Apparel & Fashion",
        "Electronics",
        "Home Goods",
        "E-commerce",
      ],
    },
    {
      title: "Automotive & Transportation",
      icon: <FaCar className="w-5 h-5" />,
      description: "Research for vehicle manufacturers and mobility services.",
      industries: [
        "Passenger Vehicles",
        "Commercial Vehicles",
        "Auto Parts",
        "Ride Sharing",
        "Electric Vehicles",
      ],
    },
    {
      title: "Healthcare & Pharmaceuticals",
      icon: <FaHeartbeat className="w-5 h-5" />,
      description: "Market intelligence for health and wellness sectors.",
      industries: [
        "Pharmaceuticals",
        "Medical Devices",
        "Healthcare Services",
        "Wellness Products",
        "Health Tech",
      ],
    },
    {
      title: "Technology & Telecommunications",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description: "Insights into digital transformation and connectivity.",
      industries: [
        "Software",
        "Hardware",
        "Mobile Services",
        "Cloud Computing",
        "IoT",
      ],
    },
  ];

  const allSectors = [
    {
      title: "Advertising / Public Relations",
      icon: <FaChartBar className="w-5 h-5" />,
      description: "Campaign effectiveness and audience measurement",
    },
    {
      title: "Agriculture",
      icon: <FaChartBar className="w-5 h-5" />,
      description: "Agribusiness markets and rural consumer insights",
    },
    {
      title: "Airlines",
      icon: <FaPlane className="w-5 h-5" />,
      description: "Customer experience and service quality research",
    },
    {
      title: "Apparel / Clothing",
      icon: <FaShoppingBag className="w-5 h-5" />,
      description: "Fashion trends and retail analysis",
    },
    {
      title: "Automotive",
      icon: <FaCar className="w-5 h-5" />,
      description: "Vehicle preferences and product testing",
    },
    {
      title: "Beverages",
      icon: <FaFlask className="w-5 h-5" />,
      description: "Alcoholic and non-alcoholic drink markets",
    },
    {
      title: "Education",
      icon: <FaUniversity className="w-5 h-5" />,
      description: "Learning institutions and educational products",
    },
    {
      title: "Financial Services",
      icon: <FaChartBar className="w-5 h-5" />,
      description: "Banking, insurance, and investment markets",
    },
    {
      title: "Healthcare / Pharmaceutical",
      icon: <FaHeartbeat className="w-5 h-5" />,
      description: "Medical products and healthcare services",
    },
    {
      title: "IT / Software / Hardware",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description: "Technology industry user experience research",
    },
    {
      title: "Retail / Wholesale",
      icon: <FaShoppingBag className="w-5 h-5" />,
      description: "Consumer insights and sales tracking",
    },
    {
      title: "Telecommunications",
      icon: <FaMobileAlt className="w-5 h-5" />,
      description: "Mobile, internet, and telecom services",
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
              Industry-Specific Research Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 scroll-m-20 tracking-tight lg:text-5xl">
              Market Sectors We Serve
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 opacity-0 [&:not(:first-child)]:mt-6">
              Deep industry expertise across diverse sectors, delivering
              tailored research solutions to address your unique business
              challenges.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="secondary">
                Request Sector Expertise
              </Button>
              <Button
                href="#sectors"
                variant="primaryLink"
                className="text-white hover:text-blue-100"
              >
                Explore Industries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="text-center text-gray-500 mb-8 leading-7 [&:not(:first-child)]:mt-6">
            Trusted by leading organizations across industries worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

      {/* Featured Sectors */}
      <section
        id="sectors"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Our Key Market Sectors
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We provide specialized research solutions tailored to the unique
              needs of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mr-4">
                      {sector.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 scroll-m-20 tracking-tight">
                      {sector.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-7 [&:not(:first-child)]:mt-6">
                    {sector.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Industries Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.industries.map((industry, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Sectors Grid */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-in opacity-0 translate-y-8 scroll-m-20 tracking-tight transition-colors first:mt-0">
              Comprehensive Industry Coverage
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              We support clients across all major sectors with specialized
              research methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-in opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 scroll-m-20 tracking-tight">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                  {sector.description}
                </p>
                <Button
                  href={`/sectors/${sector.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/\//g, "-")}`}
                  variant="primaryLink"
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Learn more →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
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
                alt="Industry expertise"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-in opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 scroll-m-20 tracking-tight transition-colors first:mt-0">
                Deep Industry Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-7 [&:not(:first-child)]:mt-6">
                Our sector specialists combine research expertise with industry
                experience to deliver actionable insights tailored to your
                specific market.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaChartBar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Industry-Specific Methodologies
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Custom research approaches designed for the unique
                      challenges of each sector.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Benchmarking Data
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Access to proprietary industry benchmarks and performance
                      metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <FaUserTie className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                      Specialist Consultants
                    </h3>
                    <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">
                      Teams with direct experience working in your industry.
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
              Sector Success Stories
            </h2>
            <p className="text-lg text-gray-600 animate-in opacity-0 translate-y-8 leading-7 [&:not(:first-child)]:mt-6">
              How our industry-specific research has driven growth and
              innovation for clients.
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
                    alt="Industry case study"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0">
                  <div className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {index === 0 ? "Financial Services" : "Healthcare"}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 scroll-m-20 tracking-tight">
                    {index === 0
                      ? "Digital Banking Adoption Study"
                      : "Patient Experience Improvement Program"}
                  </h3>
                  <p className="text-blue-100 leading-7 [&:not(:first-child)]:mt-6">
                    {index === 0
                      ? "Identified key barriers to digital adoption leading to 42% increase in mobile banking usage"
                      : "Reduced patient wait times by 35% through service redesign informed by our research"}
                  </p>
                  <Button
                    href={`/case-studies/${index + 9}`}
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
              Need industry-specific insights?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-7 [&:not(:first-child)]:mt-6">
              Our sector specialists are ready to help you understand your
              market and make data-driven decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary">
                Contact Our Experts
              </Button>
              <Button href="/services" variant="secondary">
                Explore Research Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketSectorsPage;
