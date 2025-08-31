import IndustriesMain from "@/components/screens/industries/industries-main";
import HeroSection from "@/components/screens/market-research/hero";
import getLangData from "@/lib/translator/getLangData";
import { HeroData, IndustriesType, SupportedLang } from "@/types/lang";
import React from "react";

const PersonalCare = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const main: IndustriesType = await getLangData(
    lang ?? "en",
    "screen/industries/personal-care/main"
  );
  const hero: HeroData = await getLangData(
    lang ?? "en",
    "screen/fieldwork/hero"
  );
  console.log("dic", hero);
  return (
    <>
      <HeroSection data={hero} />;
      <IndustriesMain data={main} />
    </>
  );
};

export default PersonalCare;
