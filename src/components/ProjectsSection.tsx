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

const ProjectCard = ({ project, delay }: { project: typeof projects[number]; delay: number }) => {
  const ref = useScrollReveal(delay);
  return (
    <div
      ref={ref}
      className="p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
    >
      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
      <p className="text-[15px] text-primary font-medium mb-3">{project.tech}</p>
      <ul className="space-y-2 mt-auto">
        {project.points.map((p, j) => (
          <li key={j} className="text-[15px] text-muted-foreground flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
      <QABackdrop variant="c" />
      <div ref={ref} className="container max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />
        <div className="flex justify-center">
          <div
            ref={useScrollReveal(100)}
            className="w-full max-w-2xl min-h-[420px] p-12 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
