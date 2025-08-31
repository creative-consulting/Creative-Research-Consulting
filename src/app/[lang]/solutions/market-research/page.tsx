import React from "react";
import HeroSection from "@/components/screens/market-research/hero";
import getLangData from "@/lib/translator/getLangData";
import type { HeroData, MarketResearchType, SupportedLang } from "@/types/lang";
import MarketResearchMain from "@/components/screens/market-research/main";

const MarketResearch = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const marketResearchMain: MarketResearchType = await getLangData(
    lang ?? "en",
    "screen/market-research/main"
  );
  const hero: HeroData = await getLangData(
    lang ?? "en",
    "screen/market-research/hero"
  );
  console.log("dic", hero);

  return (
    <>
      <HeroSection data={hero} />;
      <MarketResearchMain data={marketResearchMain} />
    </>
  );
};

export default MarketResearch;
