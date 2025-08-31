import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NavBar from "@/components/layouts/nav-bar";
import getLangData from "@/lib/translator/getLangData";
import type {
  // FooterData,
  HeaderData,
  NavData,
  SupportedLang,
} from "@/types/lang";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLang }>;
}) {
  const { lang } = await params;

  const headerData: HeaderData = await getLangData(lang, "header");
  const navData: NavData = await getLangData(lang, "nav");
  // const footerData: FooterData = await getLangData(lang, "footer");

  return (
    <html lang={lang || "en"}>
      <body className="bg-white text-black">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header data={headerData} />
          <NavBar data={navData} />
        </div>

        {/* Page Content */}
        <div className="sm:pt-[100px] pt-[70px]">{children}</div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
