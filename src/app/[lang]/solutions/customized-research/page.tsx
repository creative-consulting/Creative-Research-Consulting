import HeroSection from "@/components/screens/market-research/hero";
import MarketResearchMain from "@/components/screens/market-research/main";
import getLangData from "@/lib/translator/getLangData";
import { HeroData, MarketResearchType, SupportedLang } from "@/types/lang";
import React from "react";

const CustomizedResearch = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const marketResearchMain: MarketResearchType = await getLangData(
    lang ?? "en",
    "screen/fieldwork/main"
  );
  const hero: HeroData = await getLangData(
    lang ?? "en",
    "screen/fieldwork/hero"
  );
  console.log("dic", hero);
  return (
    <>
      <HeroSection data={hero} />;
      <MarketResearchMain data={marketResearchMain} />
    </>
  );
};

export default CustomizedResearch;
