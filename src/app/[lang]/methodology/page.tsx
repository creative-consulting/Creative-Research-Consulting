import MethodologyCTA from "@/components/screens/methodology/methodology-cta";
import MethodologyHero from "@/components/screens/methodology/methodology-hero";
import PrinciplesSection from "@/components/screens/methodology/principles-section";
import ProcessSection from "@/components/screens/methodology/process-section";
import getLangData from "@/lib/translator/getLangData";
import {
  MethodologyApproachData,
  MethodologyCTAData,
  MethodologyPageHero,
  MethodologyProcessData,
  SupportedLang,
} from "@/types/lang";

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;

  const heroData: MethodologyPageHero = await getLangData(
    lang,
    "screen/methodology/hero"
  );
  const processData: MethodologyProcessData = await getLangData(
    lang,
    "screen/methodology/process"
  );
  const approachData: MethodologyApproachData = await getLangData(
    lang,
    "screen/methodology/approach"
  );
  const ctaData: MethodologyCTAData = await getLangData(
    lang,
    "screen/methodology/cta"
  );
  return (
    <>
      <MethodologyHero data={heroData} />
      <ProcessSection data={processData} />
      <PrinciplesSection data={approachData} />
      <MethodologyCTA data={ctaData} />
    </>
  );
}
