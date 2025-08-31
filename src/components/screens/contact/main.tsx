"use client";

import { useRef, useState } from "react";
import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  // ChevronRight,
  BarChart2,
  Globe,
  Users,
  Database,
  Link,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import RainbowButton from "@/components/3d/rainbow-button";
import SectionHeading from "@/components/ui/section-heading";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ContactPageData, HeroButton } from "@/types/contact";

// Constants
const RESEARCH_SERVICES = [
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: "Market Analysis",
    description: "Comprehensive market sizing and segmentation",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Consumer Insights",
    description: "In-depth understanding of customer behavior",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
  },
  {
    icon: <Database className="w-6 h-6 text-amber-600" />,
    title: "Data Analytics",
    description: "Advanced statistical modeling and interpretation",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-600" />,
    title: "Global Research",
    description: "Cross-cultural and international market studies",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  },
] as const;

// const METHODOLOGY = [
//   {
//     number: "01",
//     color: "blue",
//     title: "Data Collection",
//     description:
//       "Multi-source data gathering including surveys, interviews, and big data analytics",
//   },
//   {
//     number: "02",
//     color: "purple",
//     title: "Analysis",
//     description:
//       "Advanced statistical modeling and machine learning techniques for deeper insights",
//   },
//   {
//     number: "03",
//     color: "amber",
//     title: "Strategic Insights",
//     description:
//       "Actionable recommendations tailored to your business objectives",
//   },
// ] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export default function ContactPage({
  contactData,
}: {
  contactData: ContactPageData;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  // const methodologyRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const formInView = useInView(formSectionRef, { once: true, amount: 0.1 });
  const servicesInView = useInView(servicesSectionRef, {
    once: true,
    amount: 0.1,
  });
  const statsInView = useInView(statsSectionRef, { once: true, amount: 0.1 });
  // const methodologyInView = useInView(methodologyRef, {
  //   once: true,
  //   amount: 0.1,
  // });

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const formFields: ContactFormField[] = [
  //   {
  //     name: "name",
  //     label: "Full Name",
  //     type: "text",
  //     placeholder: "John Doe",
  //     required: true,
  //   },
  //   {
  //     name: "company",
  //     label: "Company Name",
  //     type: "text",
  //     placeholder: "Your Organization",
  //     required: true,
  //   },
  //   {
  //     name: "email",
  //     label: "Email Address",
  //     type: "email",
  //     placeholder: "your@email.com",
  //     required: true,
  //   },
  //   {
  //     name: "phone",
  //     label: "Phone Number",
  //     type: "tel",
  //     placeholder: "+1 (555) 123-4567",
  //   },
  //   {
  //     name: "interest",
  //     label: "Solution area of interest",
  //     type: "select",
  //     required: true,
  //     options: [
  //       { value: "consumer", label: "Market Research" },
  //       { value: "competitive", label: "Social Research" },
  //       { value: "market", label: "Political Research & Public Opinion Polls" },
  //       { value: "trends", label: "Customized Research Solutions " },
  //       { value: "brand", label: "Data Analytics & Strategic Consulting " },
  //       { value: "other", label: "Survey Scripting & Programming " },
  //       { value: "other", label: "Retail & Distributor Audit" },
  //       { value: "other", label: "Call Center for Telephonic Survey " },
  //       { value: "other", label: "Fieldwork & Data Collection " },
  //     ],
  //   },
  //   {
  //     name: "market",
  //     label: "Market",
  //     type: "select",
  //     required: true,
  //     options: [
  //       { value: "consumer", label: "Bangladesh" },
  //       { value: "competitive", label: "India" },
  //       { value: "market", label: "Pakistan" },
  //       { value: "trends", label: "Nepal" },
  //       { value: "brand", label: " Sri Lanka " },
  //       { value: "other", label: "Myanmar" },
  //       { value: "other", label: "Malaysia" },
  //       { value: "other", label: "Indonesia" },
  //       { value: "other", label: "Thailand" },
  //       { value: "other", label: "Vietnam" },
  //       { value: "other", label: "Philippines" },
  //       { value: "other", label: "Singapore" },
  //       { value: "other", label: "Japan" },
  //       { value: "other", label: "South Korea" },
  //       { value: "other", label: "China" },
  //       { value: "other", label: "Australia" },
  //       { value: "other", label: "New Zealand" },
  //       { value: "other", label: "Saudi Arabia" },
  //       { value: "other", label: "United Arab Emirates (UAE)" },
  //       { value: "other", label: "Qatar" },
  //       { value: "other", label: "Kuwait" },
  //       { value: "other", label: "Oman" },
  //       { value: "other", label: "Bahrain" },
  //     ],
  //   },
  //   {
  //     name: "message",
  //     label: "Research Objectives",
  //     type: "textarea",
  //     placeholder:
  //       "Describe your research needs, target audience, and objectives...",
  //     required: true,
  //     maxLength: 1500,
  //   },
  // ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`/api/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.status === 200) {
        toast.success("Your request has been submitted successfully!");
        setFormData({});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error(
        "There was an error submitting your request. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Toaster for notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />

        {/* Hero Section */}
        <m.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative isolate overflow-hidden sm:mt-0 mt-8 py-8 sm:py-26 bg-[linear-gradient(to_right,var(--color-gradiant-one),var(--color-gradiant-two),var(--color-gradiant-three))]"
        >
          {/* Background image with elegant gradient overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/about/hero.jpeg"
              alt="Professional market data background"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
            <div className="absolute inset-0 backdrop-blur-md bg-[linear-gradient(to_right,var(--color-gradiant-one),var(--color-gradiant-two),var(--color-gradiant-three))] opacity-90 ring-1 ring-white/10 shadow-inner" />
          </div>

          {/* Foreground content */}
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <m.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="sm:mb-4 mb-1 bg-white text-primary hover:bg-white/90 transition"
              >
                Data-Driven Insights
              </Badge>
            </m.div>

            <m.h1
              variants={fadeInUp}
              className="mb-6 sm:text-4xl text-2xl font-extrabold tracking-tight text-white lg:text-5xl leading-tight"
            >
              {contactData.hero.title ||
                "Power Your Decisions With Market Intelligence"}
            </m.h1>

            <m.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl sm:text-xl text-[16px] leading-relaxed text-white/90"
            >
              {contactData.hero.subtitle ||
                "Connect with our research specialists to uncover actionable insights for your business growth"}
            </m.p>

            <m.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* <GooeyButton> */}
              {/* <span className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Schedule Consultation</span>
                </span> */}
              {/* Schedule Consultation */}
              {/* </GooeyButton> */}
              {/* <ColorfulButton textOne="Schedule Consultation" /> */}

              {/* <Button
                variant="secondary"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                Schedule Consultation
              </Button> */}
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white text-[15px] sm:px-6 px-3 sm:py-3 py-2 text-white hover:bg-white/10 hover:border-white/80 shadow-lg transition cursor-pointer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Request Proposal
              </Button> */}

              <div className="flex gap-3 justify-center items-center sm:flex-row flex-col mx-auto sm:pt-10 pt-7 sm:pb-3.5 pb-3">
                {contactData.hero.buttons.map(
                  (btn: HeroButton, btnIndex: number) => {
                    if (btnIndex === 1) {
                      return (
                        <Button
                          key={btnIndex}
                          href={btn.link}
                          variant="outline"
                          size="lg"
                          className="border-white text-[15px] sm:px-7 px-6 sm:py-3 py-2 text-white hover:bg-white/10 hover:border-white/80 shadow-lg transition cursor-pointer"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          {btn.name || " Request Proposal"}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        key={btnIndex}
                        href={btn.link}
                        //  href={"https://app.cal.com/auth/login"}
                        variant="primaryLink"
                        className="sm:px-10 px-7 cursor-pointer hover: !bg-black"
                      >
                        {btn.name || "Schedule For Demo"}
                      </Button>
                    );
                  }
                )}
                {/* <Button
                  href="/contact"
                  variant="primaryLink"
                  className="sm:px-20 px-9"
                >
                  Request for Quote
                </Button> */}
              </div>
            </m.div>
          </div>
        </m.section>
        <m.section
          ref={statsSectionRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-6 sm:py-10 bg-white"
        >
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            {/* <Title title="Get in touch with us for expert market research solutions tailored to your business needs. Whether you have a project inquiry or need insights, our team is ready to assist you. Contact us today!" /> */}
            <m.h1 className="capitalize sm:leading-[2.5rem] leading-7 text-lg sm:text-4xl text-black font-medium text-center sm:w-[80rem] w-full mx-auto sm:mb-4 mb-0">
              {
                contactData.importantText
                // "Get in touch with us for expert market research solutions tailored to your business needs. Whether you have a project inquiry or need insights, our team is ready to assist you. Contact us today!"
              }
            </m.h1>
          </div>
        </m.section>

        {/* Main Content */}
        <section className="relative sm:py-4 py-2">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14">
              {/* Contact Form */}
              <m.div
                ref={formSectionRef}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-10"
              >
                <m.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 sm:py-6 px-5 sm:px-7 relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-100 rounded-full opacity-10"></div>
                  <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-purple-100 rounded-full opacity-10"></div>
                  <div className="relative z-10">
                    <m.h2
                      variants={fadeIn}
                      className="sm:mb-5 mb-1 text-center text-gray-900 scroll-m-20 sm:text-2xl text-lg font-semibold tracking-tight transition-colors first:mt-0"
                    >
                      {contactData.form.title ||
                        "Request a Research Consultation"}
                    </m.h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {contactData.formFields.map((field, index) => (
                        <m.div
                          key={field.name}
                          variants={fadeInUp}
                          custom={index}
                          className="space-y-2"
                        >
                          <label
                            htmlFor={field.name}
                            className="block text-sm font-medium text-gray-700"
                          >
                            {field.label}
                            {field.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </label>

                          {field.type === "textarea" ? (
                            <Textarea
                              id={field.name}
                              name={field.name}
                              placeholder={field.placeholder}
                              required={field.required}
                              rows={6}
                              className="min-h-[150px] border-gray-300 focus:border-primary focus:ring-primary"
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                            />
                          ) : field.type === "select" ? (
                            <Select
                              onValueChange={(value) =>
                                handleSelectChange(field.name, value)
                              }
                              value={formData[field.name] || ""}
                            >
                              <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                                <SelectValue
                                  placeholder={`Select ${field.label.toLowerCase()}`}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options?.map((option, index) => (
                                  <SelectItem
                                    key={`${option.value}-${index}`}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Input
                              id={field.name}
                              name={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              required={field.required}
                              className="border-gray-300 focus:border-primary focus:ring-primary"
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                            />
                          )}
                        </m.div>
                      ))}

                      <m.div
                        variants={fadeInUp}
                        className="sm:pt-5 pt-2 flex justify-center"
                      >
                        <RainbowButton
                          className="sm:!w-[350] !w-[280] sm:!py-3 !py-[8px]"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </RainbowButton>
                      </m.div>
                    </form>
                  </div>
                </m.div>
              </m.div>

              {/* Research Services & Info */}
              <m.div
                ref={servicesSectionRef}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-6"
              >
                <div>
                  <SectionHeading title="Our Research Services" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {RESEARCH_SERVICES.map((service, index) => (
                      <m.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: index * 0.15,
                              duration: 0.6,
                              ease: [0.16, 1, 0.3, 1],
                            },
                          },
                        }}
                      >
                        <Card className="hover:shadow-md transition-shadow h-full">
                          <CardContent className="p-0 h-full">
                            <div className="relative h-32 w-full">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover rounded-t-lg"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="mt-1">{service.icon}</div>
                                <div>
                                  <h3 className="text-lg font-semibold scroll-m-20 tracking-tight">
                                    {service.title}
                                  </h3>
                                  <p className="text-gray-600 mt-1">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </m.div>
                    ))}
                  </div>
                </div>

                <m.div variants={fadeInUp}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mt-8">
                    <CardContent>
                      <div className="flex  gap-4">
                        <div className="bg-blue-50 sm:w-12 w-20 h-12 flex items-center justify-center rounded-full">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="sm:text-lg text-base font-semibold scroll-m-20 tracking-tight">
                            {contactData.contactMethods.heading ||
                              "Urgent Research Needs?"}
                          </h3>
                          <p className="text-gray-600 text-base">
                            {contactData.contactMethods.pragraph ||
                              "Call our 24/7 research hotline for immediate assistance"}
                          </p>
                          <Link
                            href={`tel:${contactData.contactMethods.phone.replace(
                              /\s+/g,
                              ""
                            )}`}
                            className="mt-2 inline-block sm:text-lg text-base font-semibold text-black transition-colors"
                          >
                            {contactData.contactMethods.phone}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                    <div className="space-y-6 mt-6">
                      {contactData.locations.offices.map((office) => (
                        <div key={office.id} className="flex items-start gap-4">
                          <div className="bg-blue-50 p-3 rounded-full mt-1">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="sm:text-lg text-base font-semibold text-gray-900 scroll-m-20 tracking-tight">
                              {office.name}
                            </h3>
                            <address className="not-italic text-gray-600 mt-1 text-base">
                              {office.address}
                            </address>
                            <div className="mt-3 flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-primary"
                                asChild
                              >
                                <a
                                  href={
                                    office.link ||
                                    `https://maps.google.com/?q=${encodeURIComponent(
                                      office.address
                                    )}`
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Map
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        {/* <m.section
          ref={methodologyRef}
          initial="hidden"
          animate={methodologyInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-16 md:py-24 bg-gray-50 hidden"
        >
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12">
              <m.div variants={fadeInUp}>
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary"
                >
                  Our Approach
                </Badge>
              </m.div>

              <m.h2
                variants={fadeInUp}
                className="mb-4 text-gray-900 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
              >
                Proven Market Research Methodology
              </m.h2>

              <m.p
                variants={fadeInUp}
                className="text-gray-600 max-w-3xl mx-auto"
              >
                We combine cutting-edge technology with rigorous methodologies
                to deliver reliable insights
              </m.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {METHODOLOGY.map((item, index) => (
                <m.div key={index} variants={fadeInUp} custom={index}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div
                        className={`text-${item.color}-600 text-4xl font-bold mb-4`}
                      >
                        {item.number}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 scroll-m-20 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>
          </div>
        </m.section> */}

        {/* Map Section */}
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full w-full relative bg-gray-100 mt-7"
        >
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.496699450262!2d90.37131749999999!3d23.800930400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d236171dd9%3A0xddc1ece1a335e89f!2s1286%20Begum%20Rokeya%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1749710615281!5m2!1sen!2sbd"
            referrerPolicy="no-referrer-when-downgrade"
            title="Creative Consulting Services (Market Research Agency Bangladesh), 1286 Begum Rokeya Avenue, Dhaka"
          /> */}
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            src="https://maps.google.com/maps?q=Creative%20Consulting%20Services%20%28Market%20Research%20Agency%20Bangladesh%29%2C%201286%20Begum%20Rokeya%20Avenue%2C%20Dhaka&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Creative Consulting Services (Market Research Agency Bangladesh), 1286 Begum Rokeya Avenue, Dhaka"
            aria-label="Creative Consulting Services (Market Research Agency Bangladesh), 1286 Begum Rokeya Avenue, Dhaka"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
        </m.section>
      </div>
    </LazyMotion>
  );
}
