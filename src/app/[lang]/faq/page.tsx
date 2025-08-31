import HeroBanner from "@/components/layouts/hero-banner";
import { SupportedLang } from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import { MarketResearchFAQData } from "@/types/faq";
import CTA from "@/components/screens/faq/faq-cta";
import FAQSection from "@/components/screens/faq/faq-section";

const MarketResearchFAQPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const pageData: MarketResearchFAQData = await getLangData(lang, "screen/faq");

  return (
    <div className="bg-white">
      <HeroBanner data={pageData.hero} />

      <FAQSection sections={pageData.sections} />

      {pageData.cta && <CTA data={pageData.cta} />}
    </div>
  );
};

export default MarketResearchFAQPage;
