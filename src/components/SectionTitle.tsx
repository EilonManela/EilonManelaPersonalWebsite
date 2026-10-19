type SectionTitleProps = {
  title: string;
  /** Spacing below the underline, e.g. "mb-8" or "mb-12". */
  className?: string;
};

/**
 * Section heading with an underline that stretches to the width of the title
 * text instead of a fixed short stub.
 */
const SectionTitle = ({ title, className = "mb-12" }: SectionTitleProps) => (
  <div className="w-fit">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    <div className={`w-full h-1 gradient-bg rounded-full ${className}`} />
  </div>
);

export default SectionTitle;
