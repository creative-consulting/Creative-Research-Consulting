import React from "react";
import getLangData from "@/lib/translator/getLangData";
import type {
  SocialResearchData,
  SupportedLang,
  VideoHeroData,
} from "@/types/lang";
import SocialResearchMain from "@/components/screens/social-research/main";
import HeroSection from "@/components/screens/social-research/hero";

const SocialResearch = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const socialResearchMain: SocialResearchData = await getLangData(
    lang ?? "en",
    "screen/social-research/main"
  );
  const hero: VideoHeroData = await getLangData(
    lang ?? "en",
    "screen/social-research/hero"
  );

  return (
    <>
      <HeroSection data={hero} />
      <SocialResearchMain data={socialResearchMain} />
    </>
  );
};

export default SocialResearch;
