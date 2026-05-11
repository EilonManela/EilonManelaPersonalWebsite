import { useScrollReveal } from "@/hooks/useScrollReveal";
import QABackdrop from "@/components/QABackdrop";

const projects = [
  {
    title: "API Testing Suite",
    tech: "Postman · REST Assured · Java",
    points: [
      "Designed comprehensive API test suites covering 200+ endpoints",
      "Implemented data-driven testing with dynamic payload generation",
      "Achieved 95% API coverage across microservices architecture",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
      <QABackdrop variant="c" />
      <div ref={ref} className="container max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
