import Link from "next/link";
import { KeywordLinks } from "./internal-links";

interface ContextualLinkProps {
  keyword: keyof typeof KeywordLinks;
  className?: string;
}

const ContextualLink = ({
  keyword,
  className = "text-primary hover:underline",
}: ContextualLinkProps) => {
  const linkData = KeywordLinks[keyword];

  return (
    <Link href={linkData.href} title={linkData.title} className={className}>
      {linkData.text}
    </Link>
  );
};

export default ContextualLink;
