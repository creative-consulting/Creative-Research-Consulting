import IndustriesHero from "@/components/screens/industries/hero";
import IndustriesGrid from "@/components/screens/industries/industries-grid";
import MethodologySection from "@/components/screens/industries/methodology";
import getLangData from "@/lib/translator/getLangData";
import { IndustryData, MethodologyData, SupportedLang } from "@/types/lang";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;
  return generatePageMetadata(lang, "industries");
}

const IndustriesPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;
  interface IndustriesGridProps {
    title: string;
    subtitle: string;
    industries: IndustryData[];
  }

  interface MethodologySectionProps {
    title: string;
    subtitle: string;
    methods: MethodologyData[];
  }
  const heroData = await getLangData(lang, "screen/industries/hero");

  const industriesData: IndustriesGridProps = await getLangData(
    lang,
    "screen/industries/industries",
  );
  const methodologyData: MethodologySectionProps = await getLangData(
    lang,
    "screen/industries/methodology",
  );
  // const ctaData = await getLangData(lang, "screen/industries/cta");

  return (
    <>
      <IndustriesHero data={heroData} />
      <IndustriesGrid data={industriesData} />
      <MethodologySection data={methodologyData} />
      {/* <IndustriesCTA data={ctaData} /> */}
    </>
  );
};

export default IndustriesPage;
