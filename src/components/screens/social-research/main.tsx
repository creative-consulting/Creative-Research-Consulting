import { FC } from "react";
import type { SocialResearchData } from "@/types/lang";

const SocialResearchMain: FC<{ data: SocialResearchData }> = ({ data }) => {
  return (
    <section className="w-full bg-background text-foreground py-12 sm:py-16 lg:py-20">
      <div className="container">
        {/* Description */}
        <div
          className="prose prose-base sm:prose-lg lg:prose-xl max-w-none mb-8 sm:mb-10 lg:mb-12"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Features */}
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">
            {data.features.heading}
          </h3>
          <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
            {data.features.allFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-block w-5 h-5 sm:w-3 sm:h-3 mt-1 bg-primary rounded-full flex-shrink-0"></span>
                <span
                  className="text-sm sm:text-base lg:text-lg leading-normal sm:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialResearchMain;
