import Main from "@/components/screens/country/main";
import getLangData from "@/lib/translator/getLangData";
import { CCSLContent, CountryService } from "@/types/country";
import { SupportedLang } from "@/types/lang";

type PageParams = {
  lang: SupportedLang;
  country: string;
};

// 🔑 Dynamic Keywords List
const generateKeywords = (countryName: string) => [
  `market research company in ${countryName}`,
  `market research agency ${countryName}`,
  `fieldwork company ${countryName}`,
  `CATI service ${countryName}`,
  `CAWI service ${countryName}`,
  `focus group ${countryName}`,
  `IDI research ${countryName}`,
  `online survey ${countryName}`,
  `social research in ${countryName}`,
  `consumer insights ${countryName}`,
];

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang, country } = await params;
  const countryData: CountryService = await getLangData(
    lang,
    `screen/country/name/${country}`,
  );

  const countryName = countryData?.title || country;

  const title = `Market Research Company in ${countryName} | CCSL - APAC & GCC Fieldwork`;
  const description = `Full-service market & social research in ${countryName}: CATI, CAWI, CAPI, FGDs, IDIs, panels, biometrics. ESOMAR compliant across all regions.`;

  return {
    title,
    description,
    keywords: generateKeywords(countryName),
    alternates: {
      canonical: `https://www.creativeresearch.com.bd/${lang}/market-research/${country}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.creativeresearch.com.bd/${lang}/market-research/${country}`,
      siteName: "Creative Consulting",
      type: "website",
      locale: lang,
      images: [
        {
          url: "https://pixels.com/photo/country-default-1200x630-market-research-123456",
          width: 1200,
          height: 630,
          alt: `Market Research in ${countryName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://pixels.com/photo/country-default-1200x630-market-research-123456",
      ],
    },
  };
}

const CCSLResearchPage = async ({
  params,
}: {
  params: Promise<PageParams>;
}) => {
  const { lang, country } = await params;
  const data: CCSLContent = await getLangData(lang, `screen/country/main`);
  const countryData: CountryService = await getLangData(
    lang,
    `screen/country/name/${country}`,
  );

  const replaceCountryName = (datas: object) => {
    let textData = JSON.stringify(datas);
    textData = textData.replace(/\(countryName\)/g, countryData.title);
    return JSON.parse(textData);
  };

  // ✅ JSON-LD Schema with keywords inside "knowsAbout"
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MarketResearchCompany",
    name: "Creative Consulting & Strategic Links",
    url: `https://www.creativeresearch.com.bd/${lang}/market-research/${country}`,
    logo: "https://www.creativeresearch.com.bd/logo.png",
    areaServed: countryData.title,
    knowsAbout: generateKeywords(countryData.title), // extra SEO juice
    sameAs: [
      // "https://www.linkedin.com/company/ccsl-research",
      // "https://twitter.com/ccsl_research",
    ],
  };

  return (
    <div className="bg-white">
      <article>
        <Main
          data={replaceCountryName(data)}
          countryData={replaceCountryName(countryData)}
        />
      </article>

      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
    </div>
  );
};

export default CCSLResearchPage;
