import { Shield, Bug, Gamepad2, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { icon: Shield, label: "Test Automation", desc: "Selenium, Playwright" },
  { icon: Bug, label: "Bug Tracking", desc: "Jira, GitHub Projects, ClickUp" },
  { icon: Gamepad2, label: "Game Tester", desc: "Age of Empires IV, Mental Omega" },
  { icon: Target, label: "API Testing", desc: "Postman" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-14 md:py-20">
      <div ref={ref} className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          I'm a detail-oriented QA Engineer dedicated to building robust testing strategies that catch issues before they reach users. With experience across manual and automated testing, I bridge the gap between development and delivery.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s, i) => {
            const ref2 = useScrollReveal(i * 80);
            return (
              <div
                key={s.label}
                ref={ref2}
                className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg gradient-soft-bg text-primary shrink-0">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{s.label}</h3>
                  <p className="text-[15px] text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
