import { SolutionCard } from "@/components/screens/solutions/solutions-grid";
import SectionHeading from "@/components/ui/section-heading";
import getLangData from "@/lib/translator/getLangData";
import { SolutionsGridData, SupportedLang } from "@/types/lang";

const SolutionsAllPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  // Fetch all data needed for the solutions page
  // const heroData:SolutionHero  = await getLangData(lang, "screen/solutions/hero");
  const solutionsData: SolutionsGridData = await getLangData(
    lang,
    "screen/solutions/solutions"
  );
  return (
    <section className="sm:py-7 py-12 px-4 container solutions-section">
      <SectionHeading
        title={solutionsData.title}
        description={solutionsData.description}
        className="sm:mt-8 mt-2"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
        {solutionsData.solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsAllPage;
