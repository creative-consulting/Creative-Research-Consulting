import HeroSection from "@/components/screens/market-research/hero";
// import MarketResearchMain from "@/components/screens/market-research/main";
import SolutionsMain from "@/components/screens/solutions/solutions-main";
import getLangData from "@/lib/translator/getLangData";
import { HeroData, MarketResearchType, SupportedLang } from "@/types/lang";
import React from "react";

const DataAnalytics = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const main: MarketResearchType = await getLangData(
    lang ?? "en",
    "screen/solutions/data-analytics/main"
  );
  const hero: HeroData = await getLangData(
    lang ?? "en",
    "screen/solutions/data-analytics/hero"
  );
  console.log("dic", hero);
  return (
    <>
      <HeroSection data={hero} />;
      <SolutionsMain data={main} />
    </>
  );
};

export default DataAnalytics;
