import { Suspense } from "react";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NavBar from "@/components/layouts/nav-bar";
import getLangData from "@/lib/translator/getLangData";
import type { HeaderData, NavData, SupportedLang } from "@/types/lang";

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

  return (
    <html lang={lang || "en"}>
      <body className="bg-white text-black">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header data={headerData} />
          <NavBar data={navData} />
        </div>

        {/* Page Content with Suspense */}
        <div className="sm:pt-[100px] pt-[70px]">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div>Loading...</div>
              </div>
            }
          >
            {children}
          </Suspense>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
