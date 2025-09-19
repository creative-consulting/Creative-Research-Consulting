import ServicesCTA from "@/components/screens/services/cta-section";
import FeaturesSection from "@/components/screens/services/features-section";
import ServicesHero from "@/components/screens/services/hero-section";
import ServicesGrid from "@/components/screens/services/services-grid";
import { generatePageMetadata } from "@/lib/metadata";
import getLangData from "@/lib/translator/getLangData";
import { SupportedLang } from "@/types/lang";
import {
  ServicesCtaData,
  ServicesFeaturesData,
  ServicesGridData,
  ServicesHeroData,
} from "@/types/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;
  return generatePageMetadata(lang, "services");
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;

  // const [heroData, servicesData, featuresData, ctaData] = await Promise.all([
  //   getLangData(lang, "screen/services/hero"),
  //   getLangData(lang, "screen/services/services"),
  //   getLangData(lang, "screen/services/features"),
  //   getLangData(lang, "screen/services/cta"),
  // ]);

  const heroData: ServicesHeroData = await getLangData(
    lang,
    "screen/services/hero"
  );
  const servicesData: ServicesGridData = await getLangData(
    lang,
    "screen/services/services"
  );
  const featuresData: ServicesFeaturesData = await getLangData(
    lang,
    "screen/services/features"
  );
  const ctaData: ServicesCtaData = await getLangData(
    lang,
    "screen/services/cta"
  );

  return (
    <>
      <ServicesHero data={heroData} />
      <ServicesGrid data={servicesData} />
      <FeaturesSection data={featuresData} />
      <ServicesCTA data={ctaData} />
    </>
  );
}
