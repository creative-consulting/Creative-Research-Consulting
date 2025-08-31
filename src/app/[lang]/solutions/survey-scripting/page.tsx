import React from "react";
import getLangData from "@/lib/translator/getLangData";
import type {
  SocialResearchData,
  SupportedLang,
  VideoHeroData,
} from "@/types/lang";
import HeroSection from "@/components/screens/social-research/hero";
import MarketResearchMain from "@/components/screens/market-research/main";

const SurveyScripting = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const socialResearchMain: SocialResearchData = await getLangData(
    lang ?? "en",
    "screen/solutions/survey-scripting/main"
  );
  const hero: VideoHeroData = await getLangData(
    lang ?? "en",
    "screen/solutions/survey-scripting/hero"
  );

  return (
    <>
      <HeroSection data={hero} />
      <MarketResearchMain data={socialResearchMain} />
    </>
  );
};

export default SurveyScripting;
