import { useScrollReveal } from "@/hooks/useScrollReveal";
import QABackdrop from "@/components/QABackdrop";
import SectionTitle from "@/components/SectionTitle";

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
      <QABackdrop variant="c" />
      <div ref={ref} className="container max-w-4xl relative z-10">
        <SectionTitle title="My Projects" />
      </div>
    </section>
  );
};

export default ProjectsSection;
