// import Main from "@/components/screens/country/main";
// import getLangData from "@/lib/translator/getLangData";
// import { CCSLContent, CountryService } from "@/types/country";
// import { SupportedLang } from "@/types/lang";

// [
//   {
//     keyword: "market research company in ${country}",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/market-research/${country}",
//     "Suggested Title Tag":
//       "Market Research Company in Bangladesh | CCSL - APAC & GCC Fieldwork",
//     "Suggested Meta Description":
//       "Full service market & social research in ${country}: CATI, CAWI, CAPI, FGDs, IDIs, panels, biometrics. ESOMAR compliant across all 8 divisions.",
//     "Suggested H1": "Market Research Company in ${country}",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "market research agency ${country}",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/market-research/${country}",
//     "Suggested Title Tag": "Market Research Agency in Bangladesh | CCSL",
//     "Suggested Meta Description":
//       "Trusted agency for quantitative & qualitative studies: nationwide fieldwork, strict QC, actionable insights.",
//     "Suggested H1": "Market Research Agency in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "fieldwork company ${country}",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/fieldwork-bangladesh",
//     "Suggested Title Tag":
//       "Fieldwork Company in Bangladesh | CATI · CAWI · CAPI · PAPI",
//     "Suggested Meta Description":
//       "Fieldwork Company in Bangladesh | CATI · CAWI · CAPI · PAPI",
//     "Suggested H1": "Fieldwork Company in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "cati service bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/cati-bangladesh",
//     "Suggested Title Tag":
//       "CATI Services in Bangladesh | Nationwide Phone Surveys",
//     "Suggested Meta Description":
//       "High-quality CATI for consumers, B2B & HCP with live monitoring and recordings.",
//     "Suggested H1": "CATI Services in Bangladesh",
//     Notes: "Primary homepage target",
//   },
//   {
//     keyword: "cawi service bangladesh",
//     Language: "en",
//     "Search Intent": "Transactional",
//     Priority: "High",
//     "Suggested URL Slug": "/cawi-bangladesh",
//     "Suggested Title Tag": "CAWI / Online Surveys in Bangladesh | CCSL",
//     "Suggested Meta Description":
//       "Device tested online surveys, advanced logic and validations, fast turnaround.",
//     "Suggested H1": "CAWI / Online Surveys in Bangladesh",
//     Notes: "Primary homepage target",
//   },
// ];

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: Promise<{ lang: SupportedLang; country: string }>;
// // }) {
// //   const { lang } = await params;
// //   return metadata;
// // }

// const CCSLResearchPage = async ({
//   params,
// }: {
//   params: Promise<{ lang: SupportedLang; country: string }>;
// }) => {
//   const { lang, country } = await params;
//   // Fetch data on the server
//   const data: CCSLContent = await getLangData(lang, `screen/country/main`);
//   const countryData: CountryService = await getLangData(
//     lang,
//     `screen/country/name/${country}`
//   );

//   const replaceCountryName = (datas: object) => {
//     let textDAta = JSON.stringify(datas);
//     textDAta = textDAta.replace(/\(countryName\)/g, countryData.title);
//     console.log(`Replaced country name: ${countryData.title}`);

//     return JSON.parse(textDAta);
//   };

//   return (
//     <div className="bg-white">
//       <Main
//         data={replaceCountryName(data)}
//         countryData={replaceCountryName(countryData)}
//       />
//     </div>
//   );
// };

// export default CCSLResearchPage;

// app/[lang]/[country]/page.tsx
// app/[lang]/[country]/page.tsx
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
    `screen/country/name/${country}`
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
    `screen/country/name/${country}`
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
