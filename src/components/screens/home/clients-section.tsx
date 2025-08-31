"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ClientsSectionProps } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";

const ClientsSection = ({ data }: { data: ClientsSectionProps }) => {
  const sectionRef = useRef(null);
  // const isInView = useInView(sectionRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const {
    title = "",
    subtitle = "",
    clients = [],
    cta,
    showTestimonials = false,
    testimonials = [],
  } = data || {};

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-7 sm:py-20 md:py-28 lg:py-10"
      aria-labelledby="clients-heading"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-gradient-to-tl from-indigo-50 to-transparent rounded-full opacity-40 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <motion.h2
            id="clients-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 scroll-m-20 text-3xl font-semibold tracking-tight"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              id="clients-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div> */}

        <SectionHeading
          title={title}
          description={subtitle}
          className="sm:mb-16 mb-8 md:mb-20 lg:mb-5"
        />

        {/* Marquee */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative sm:py-10 py-3 overflow-hidden select-none group"
        >
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>

          <motion.div
            animate={{ x: ["0%", "-33.33%", "-66.66%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 450,
              ease: "linear",
            }}
            className="flex items-center justify-around gap-16 w-max"
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center justify-center transition-all ${
                  isHovered ? "opacity-80" : "opacity-100"
                }`}
                style={{
                  width: client.width ? `${client.width}px` : "200px",
                  height: client.height ? `${client.height}px` : "100px",
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width || 200}
                  height={client.height || 100}
                  className="object-contain w-full h-full transition-all duration-500"
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={90}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Swiper Testimonials */}
        {showTestimonials && testimonials.length > 0 && (
          <div className="relative sm:py-8 py-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full opacity-20 blur-3xl" />
              <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-50 rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="container pb-4 px-4 mx-auto mb-8 flex justify-end gap-4">
              <button
                ref={prevRef}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: ".testimonial-pagination",
                type: "bullets",
              }}
              // autoplay={{
              //   delay: 7000,
              //   disableOnInteraction: false,
              // }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 1024: { slidesPerView: 2 } }}
              onInit={(swiper) => {
                // @ts-expect-error: Swiper types expect HTMLElement, but refs may be null at init
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error: Swiper types expect HTMLElement, but refs may be null at init
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="sm:!pb-12 pb-0"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white sm:p-8 p-4 rounded-3xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    {/* Rating and Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 sm:mb-6 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-amber-400"
                                : "text-gray-200"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {testimonial.date && (
                        <span className="text-sm text-gray-400">
                          {new Date(testimonial.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                            }
                          )}
                        </span>
                      )}

                      {testimonial.project && (
                        <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {testimonial.project}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <blockquote className="sm:mb-8 mb-2">
                      <p className="text-gray-700 sm:text-lg text-[16px] leading-relaxed font-medium">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </blockquote>

                    {/* Metrics */}
                    {testimonial.metrics && testimonial.metrics.length > 0 && (
                      <div className="flex  gap-4 sm:mb-8 mb-5">
                        {testimonial.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="px-4 py-3 bg-gray-50 rounded-lg w-1/2"
                          >
                            <p className=" sm:text-2xl text-lg font-bold text-gray-900">
                              {metric.value}
                            </p>
                            <p className=" text-xs text-gray-500">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0 sm:mr-4 mr-2">
                        {testimonial.avatar ? (
                          <div className="sm:w-14 w-12 sm:h-14 h-12  rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={56}
                              height={56}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="sm:w-14 w-12 sm:h-14 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-md">
                            <span className="sm:text-xl text-[16px] font-bold text-gray-600">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="sm:text-lg text-[16px] font-semibold text-gray-900 truncate">
                          {testimonial.author}
                        </p>
                        <div className="flex items-center gap-1">
                          <p className="text-sm text-gray-500 truncate">
                            {testimonial.position}
                          </p>
                          {testimonial.company && (
                            <>
                              <span className="text-gray-300">•</span>
                              <p className="text-sm font-medium text-gray-600 truncate">
                                {testimonial.company}
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      {testimonial.logo && (
                        <div className="ml-4 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.company} logo`}
                            width={60}
                            height={30}
                            className="h-6 w-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial-pagination flex justify-center gap-2 sm:mt-6 mt-3" />
          </div>
        )}

        {/* CTA */}
        {cta && (
          <div className="text-center sm:mt-10 mt-3">
            <Button href={cta.href} variant="primaryLink">
              {cta.text}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
