import { useScrollReveal } from "@/hooks/useScrollReveal";
import QABackdrop from "@/components/QABackdrop";
import SectionTitle from "@/components/SectionTitle";
import preview from "@/assets/eitzel-mi-preview.jpg.asset.json";

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
      <QABackdrop variant="c" />
      <div ref={ref} className="container max-w-4xl relative z-10">
        <SectionTitle title="My Projects" />
        <p className="text-center text-[15px] font-medium text-muted-foreground mb-3">Etzel Mi?</p>
        <div className="flex justify-center">
          <a
            href="https://claude.ai/artifact/AoraPnUzFrx95wAUtr7QQr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open project"
            className="block w-full max-w-md rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <img src={preview.url} alt="Project preview" className="w-full h-auto block" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
