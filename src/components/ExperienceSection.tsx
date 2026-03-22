import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Senior QA Engineer",
    company: "Tech Company",
    period: "2022 – Present",
    points: [
      "Led automation framework development using Playwright and TypeScript",
      "Reduced regression cycle time by 60% through strategic test automation",
      "Mentored junior QA engineers and established testing best practices",
    ],
  },
  {
    role: "QA Engineer",
    company: "Software Solutions Ltd.",
    period: "2019 – 2022",
    points: [
      "Designed and executed test plans for web and mobile applications",
      "Implemented API testing suites with Postman and REST Assured",
      "Collaborated with cross-functional teams in Agile/Scrum environment",
    ],
  },
  {
    role: "Junior QA Tester",
    company: "StartUp Inc.",
    period: "2017 – 2019",
    points: [
      "Performed manual functional and regression testing",
      "Created detailed bug reports and tracked issues through resolution",
      "Assisted in developing automated smoke test suites",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-14 md:py-20 bg-muted/30">
      <div ref={ref} className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />
          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const ref2 = useScrollReveal(i * 100);
              return (
                <div key={i} ref={ref2} className="relative md:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full gradient-bg hidden md:block" />
                  <div className="p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <span className="text-xs font-mono text-accent">{exp.period}</span>
                    </div>
                    <p className="text-[15px] text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
