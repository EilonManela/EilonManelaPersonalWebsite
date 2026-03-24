import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Automated Testing Framework",
    tech: "Playwright · TypeScript · CI/CD",
    
    points: [
      "Built a scalable end-to-end testing framework from scratch",
      "Reduced regression cycle time by 60% through strategic automation",
      "Integrated with CI/CD pipelines for continuous quality assurance",
    ],
  },
  {
    title: "API Testing Suite",
    tech: "Postman · REST Assured · Java",
    
    points: [
      "Designed comprehensive API test suites covering 200+ endpoints",
      "Implemented data-driven testing with dynamic payload generation",
      "Achieved 95% API coverage across microservices architecture",
    ],
  },
  {
    title: "Mobile QA Platform",
    tech: "Appium · React Native · Jenkins",
    
    points: [
      "Developed cross-platform mobile testing automation solution",
      "Created reusable test components for iOS and Android",
      "Established mobile testing best practices and documentation",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30">
      <div ref={ref} className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const ref2 = useScrollReveal(i * 100);
            return (
              <div
                key={i}
                ref={ref2}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
