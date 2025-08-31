import SectionHeading from "@/components/ui/section-heading";
import { HomeMethodology } from "@/types/lang";
import React from "react";
import { HiMicrophone, HiDocumentSearch, HiChartBar } from "react-icons/hi";

const iconMap = {
  MicrophoneIcon: HiMicrophone,
  DocumentMagnifyingGlassIcon: HiDocumentSearch,
  ChartBarSquareIcon: HiChartBar,
};

interface OurMethodologyProps {
  data: HomeMethodology[];
}

const OurMethodology: React.FC<OurMethodologyProps> = ({ data }) => {
  return (
    <section className="sm:py-6 py-0 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Research Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven approaches that deliver actionable insights
          </p>{" "}
        </div> */}
        <SectionHeading
          title="Our Research Methodology"
          description="Proven approaches that deliver actionable insights"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
          {data.map((method, index) => {
            const IconComponent = iconMap[method.icon as keyof typeof iconMap];
            if (!IconComponent) {
              console.warn(`Icon not found: ${method.icon}`);
              return null;
            }

            return (
              <div
                key={method.id}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:primary/30 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="sm:text-xl text-[16px] font-semibold text-black mb-2">
                      {method.title}
                    </h3>
                    <p className="sm:text-[16px] text-sm text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 mt-1 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMethodology;
