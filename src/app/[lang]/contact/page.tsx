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

  const contactData = await getLangData(lang, "screen/contact/main");
  return (
    <>
      {/* <HeroBanner data={hero} /> */}
      <ContactPage contactData={contactData} />
    </>
  );
};

export default Contact;
