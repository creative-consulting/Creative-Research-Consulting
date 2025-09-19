import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface LazyLoadSectionProps {
  children: ReactNode;
  threshold?: number;
}

const LazyLoadSection = ({
  children,
  threshold = 0.1,
}: LazyLoadSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <div ref={ref}>
      {isInView ? children : <div className="min-h-[200px]" />}
    </div>
  );
};
export default LazyLoadSection;
