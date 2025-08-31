"use client";

import { motion } from "framer-motion";
import { CCSLContent, CountryService } from "@/types/country";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Main({
  data,
  countryData,
}: {
  data: CCSLContent;
  countryData: CountryService;
}) {
  // Replace (countryName) with actual country name from countryData
  const replaceCountryName = (text: string) => {
    return text.replace(/\(countryName\)/g, countryData.title);
  };

  return (
    <>
      <div className=" bg-gradient-to-r from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto sm:py-7 py-0 sm:px-0 px-4">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className=" rounded-xl sm:py-8 py-10 "
          >
            {/* <h2 className="sm:text-3xl text-2xl font-bold text-gray-900 sm:mb-2 mb-1 sm:mt-0 mt-5">
              {replaceCountryName(data.hero.heading)}
            </h2> */}
            <h2
              className="sm:text-3xl text-2xl font-bold text-gray-900 sm:mb-2 mb-1 sm:mt-0 mt-5 "
              dangerouslySetInnerHTML={{
                __html: replaceCountryName(data.hero.heading),
              }}
            />
            <p
              className="sm:text-lg text-base text-gray-700 sm:mb-9 mb-4"
              dangerouslySetInnerHTML={{
                __html: replaceCountryName(data.hero.paragraph),
              }}
            />
            {/* <p
              className="text-black sm:text-lg text-base relative after:w-3.5 after:h-full after:absolute after:-left-6.5 after:-top-2 after:rounded-xl after:content-'' after:block after:mt-2 after:text-base after:bg-primary"
              dangerouslySetInnerHTML={{ __html: data.hero.focusText }}
            /> */}
            <p
              className="bg-[#f8c7d0] pl-6 py-2 rounded-sm text-black sm:text-lg text-base relative after:w-3.5 after:h-full after:absolute after:left-0 after:top-0  after:rounded-sm after:content-[''] after:block  after:bg-[#d91c5c] after:transform  after:translate-x-[1px] after:translate-y-[-1px]"
              dangerouslySetInnerHTML={{ __html: data.hero.focusText }}
            />
          </motion.section>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-0 sm:py-12 py-5">
        {/* Why Choose Us Section */}
        <SectionWithAnimation
          title={replaceCountryName(data.whyClientChoose.heading)}
          items={data.whyClientChoose.list}
          className="sm:mb-16 mb-5"
        />

        {/* What We Do Section */}
        <SectionWithAnimation
          title={data.whatWeDo.heading}
          items={data.whatWeDo.list}
          className="sm:mb-16 mb-5"
        />

        {/* How We Work Section */}
        <SectionWithAnimation
          title={data.howWeWork.heading}
          items={data.howWeWork.list}
          className="sm:mb-16 mb-5"
        />

        {/* Research Solutions Section */}
        {data.OurResearch.list && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="sm:mb-16 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="sm:text-2xl text-xl font-bold text-gray-900 sm:mb-6 mb-3"
            >
              {data.OurResearch.heading}
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 gap-3"
            >
              {data.OurResearch.list.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="sm:text-lg text-base font-semibold text-black">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Quantitative Research */}
        <SectionWithAnimation
          title={data.QuantitativeResearch.heading}
          items={data.QuantitativeResearch.list}
          className="sm:mb-16 mb-6"
        />

        {/* Qualitative Research */}
        <SectionWithAnimation
          title={data.QualitativeResearch.heading}
          items={data.QualitativeResearch.list}
          className="sm:mb-16 mb-6"
        />

        {/* Panels & Communities */}
        <SectionWithAnimation
          title={data.PanelsCommunities.heading}
          subTitle={data.PanelsCommunities.subHeading}
          items={data.PanelsCommunities.list}
          className="sm:mb-16 mb-6"
        />
        {/* MobileResearch */}
        <SectionWithAnimation
          title={data.MobileResearch.heading}
          subTitle={data.MobileResearch.subHeading}
          items={data.MobileResearch.list}
          className="sm:mb-16 mb-6"
        />
        {/* BiometricsNeuromarketing */}
        <SectionWithAnimation
          title={data.BiometricsNeuromarketing.heading}
          subTitle={data.BiometricsNeuromarketing.subHeading}
          items={data.BiometricsNeuromarketing.list}
          className="sm:mb-16 mb-6"
        />
        {/* AnalyticalServices */}
        <SectionWithAnimation
          title={data.AnalyticalServices.heading}
          subTitle={data.AnalyticalServices.subHeading}
          items={data.AnalyticalServices.list}
          className="sm:mb-16 mb-6"
        />
        {/* SocialDigitalAnalytics */}
        <SectionWithAnimation
          title={data.SocialDigitalAnalytics.heading}
          subTitle={data.SocialDigitalAnalytics.subHeading}
          items={data.SocialDigitalAnalytics.list}
          className="sm:mb-16 mb-6"
        />
        {/* ResearchPlatformScripting */}
        <SectionWithAnimation
          title={data.ResearchPlatformScripting.heading}
          subTitle={data.ResearchPlatformScripting.subHeading}
          items={data.ResearchPlatformScripting.list}
          className="sm:mb-16 mb-6"
        />
        {/* IndustryWeServe */}
        {/* <SectionWithAnimation
          title={data.IndustryWeServe.heading}
          subTitle={data.IndustryWeServe.subHeading}
          items={data.IndustryWeServe.list}
          className="sm:mb-16 mb-6"
        /> */}
        {/* Industry We Serve Section */}
        {data.IndustryWeServe.list && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="sm:mb-16 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="sm:text-2xl text-xl font-bold text-gray-900 sm:mb-6 mb-3"
            >
              {data.IndustryWeServe.heading}
            </motion.h2>

            {data.IndustryWeServe.subHeading && (
              <motion.p
                variants={itemVariants}
                className="text-base text-[#41464c] sm:mb-8 mb-5"
              >
                {data.IndustryWeServe.subHeading}
              </motion.p>
            )}

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 gap-3"
            >
              {data.IndustryWeServe.list.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="sm:text-lg text-base font-semibold text-[#41464c]">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* EngagementModelsClients */}
        <SectionWithAnimation
          title={data.EngagementModelsClients.heading}
          subTitle={data.EngagementModelsClients.subHeading}
          items={data.EngagementModelsClients.list}
          className="sm:mb-16 mb-6"
        />

        {/* Country Specific Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 hidden"
          >
            {countryData.title}
          </motion.h1>
          {/* <motion.h2
            variants={itemVariants}
            className="sm:text-2xl text-xl font-semibold text-black sm:mb-6 mb-3"
          >
            {countryData.heading}
          </motion.h2> */}
          <motion.h2
            variants={itemVariants}
            className="sm:text-2xl text-xl font-semibold text-black sm:mb-6 mb-3"
            dangerouslySetInnerHTML={{ __html: countryData.heading }}
          />
          <motion.ul
            variants={containerVariants}
            className="space-y-4 mb-8 list-disc pl-5"
          >
            {countryData.list.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </motion.ul>
        </motion.section>

        {/* Contact Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-5">
          <SectionWithAnimation
            title={data.GetTouchBangladesh.heading}
            items={data.GetTouchBangladesh.list}
            className="bg-blue-50 p-6 rounded-lg"
          />
          <SectionWithAnimation
            title={data.GetTouchOtherCountries.heading}
            items={data.GetTouchOtherCountries.list}
            className="bg-indigo-50 p-6 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
function SectionWithAnimation({
  title,
  subTitle,
  items,
  className = "",
}: {
  title: string;
  subTitle?: string;
  items?: string[]; // Made items optional
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      <motion.h2
        variants={itemVariants}
        className="sm:text-2xl text-xl font-bold text-gray-900 sm:mb-4 mb-2"
      >
        {title}
      </motion.h2>
      {subTitle && (
        <motion.p
          variants={itemVariants}
          className="text-gray-600 sm:mb-6 mb-3.5 sm:text-lg text-base"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
      {items &&
        items.length > 0 && ( // Added check for items existence
          <motion.ul
            variants={containerVariants}
            className="space-y-3 list-disc pl-6 sm:text-lg text-base"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </motion.ul>
        )}
    </motion.section>
  );
}
