import HeroBanner from "@/components/layouts/hero-banner";
import {
  FieldworkExcellenceData,
  HeroBannerData,
  HowWeAddValueData,
  OurStoryData,
  SupportedLang,
  WhyChooseUsData,
} from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import Story from "@/components/screens/about/story";
import WeAddValue from "@/components/screens/about/we-add-value";
import FieldworkExcellence from "@/components/screens/about/fieldwork-excellence";
import WhyChooseUs from "@/components/screens/about/why-choose-us";
import GlobalApproach from "@/components/screens/about/global-approach";
import WhyChooseUsInternational from "@/components/screens/about/why-choose-us-international";
import ReliableInsights from "@/components/screens/about/reliable-insights";
import HistoryTimeline from "@/components/screens/about/history-timeline";
import Collaboration from "@/components/screens/about/collaboration";
import JoinUs from "@/components/screens/about/join-us";
import TrustedPartner from "@/components/screens/about/trusted-partner";
import {
  CollaborationData,
  GlobalApproachData,
  HistoryTimelineData,
  JoinUsData,
  ReliableInsightsData,
  TrustedPartnerData,
  WhyChooseUsInternationalData,
} from "@/types/about";

const AboutPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const hero: HeroBannerData = await getLangData(lang, "screen/about/hero");
  const story: OurStoryData = await getLangData(lang, "screen/about/story");
  const weAddValue: HowWeAddValueData = await getLangData(
    lang,
    "screen/about/we-add-value"
  );
  const fieldworkExcellence: FieldworkExcellenceData = await getLangData(
    lang,
    "screen/about/fieldwork-excellence"
  );
  const whyChooseUs: WhyChooseUsData = await getLangData(
    lang,
    "screen/about/why-choose-us"
  );
  const globalApproach: GlobalApproachData = await getLangData(
    lang,
    "screen/about/global-approach"
  );
  const whyChooseUsInternational: WhyChooseUsInternationalData =
    await getLangData(lang, "screen/about/why-choose-us-international");
  const reliableInsights: ReliableInsightsData = await getLangData(
    lang,
    "screen/about/reliable-insights"
  );
  const historyTimeline: HistoryTimelineData = await getLangData(
    lang,
    "screen/about/history-timeline"
  );
  const collaboration: CollaborationData = await getLangData(
    lang,
    "screen/about/collaboration"
  );
  const joinUs: JoinUsData = await getLangData(lang, "screen/about/join-us");
  const trustedPartner: TrustedPartnerData = await getLangData(
    lang,
    "screen/about/trusted-partner"
  );

  return (
    <div className="about-page bg-white">
      <HeroBanner data={hero} />

      {/* Our Story */}
      <Story data={story} />

      {/* Global Approach */}
      <GlobalApproach data={globalApproach} />

      {/* Why Choose Us (International) */}
      <WhyChooseUsInternational data={whyChooseUsInternational} />

      {/* Reliable Insights */}
      <ReliableInsights data={reliableInsights} />

      {/* How We Add Value */}
      <WeAddValue data={weAddValue} />

      {/* Fieldwork Excellence */}
      <FieldworkExcellence data={fieldworkExcellence} />

      {/* Why Choose Us */}
      <WhyChooseUs data={whyChooseUs} />

      {/* History Timeline */}
      <HistoryTimeline data={historyTimeline} />

      {/* Collaboration */}
      <Collaboration data={collaboration} />

      {/* Join Us */}
      <JoinUs data={joinUs} />

      {/* Trusted Partner */}
      <TrustedPartner data={trustedPartner} />
    </div>
  );
};

export default AboutPage;
