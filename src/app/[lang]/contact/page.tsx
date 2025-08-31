// import HeroBanner from "@/components/layouts/hero-banner";
import ContactPage from "@/components/screens/contact/main";
import getLangData from "@/lib/translator/getLangData";
import { SupportedLang } from "@/types/lang";

// This is the main page component that Next.js will render
const Contact = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  // const hero: HeroBannerData = await getLangData(lang, "screen/about/hero");
  // const hero: HeroBannerData = await getLangData(lang, "screen/about/hero");
  const contactData = await getLangData(lang, "screen/contact/main");
  return (
    <>
      {/* <HeroBanner data={hero} /> */}
      <ContactPage contactData={contactData} />
    </>
  );
};

export default Contact;

// import ContactHero from "@/components/screens/contact/contact-hero";
// import FormSection from "@/components/screens/contact/form-section";
// import InfoSection from "@/components/screens/contact/info-section";
// import MapSection from "@/components/screens/contact/map-section";
// import ScheduleSection from "@/components/screens/contact/schedule-section";
// import VisitSection from "@/components/screens/contact/visit-section";
// import getLangData from "@/lib/translator/getLangData";
// import { SupportedLang } from "@/types/lang";

// export default async function ContactPage({
//   params,
// }: {
//   params: Promise<{ lang: SupportedLang }>;
// }) {
//   const { lang } = await params;

//   const heroData = await getLangData(lang, "screen/contact/hero");
//   const infoData = await getLangData(lang, "screen/contact/info");
//   const visitData = await getLangData(lang, "screen/contact/visit");
//   const formData = await getLangData(lang, "screen/contact/form");

//   return (
//     <div className="bg-gray-50">
//       <ContactHero data={heroData} />
//       <MapSection />
//       <InfoSection data={infoData} />
//       <VisitSection data={visitData} />
//       <FormSection data={formData} />
//       <ScheduleSection />
//     </div>
//   );
// }
