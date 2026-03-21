import { Download, GraduationCap, Award, Languages } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CVSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="cv" className="py-14 md:py-20">
      <div ref={ref} className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My CV</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              items: ["B.Sc. Computer Science", "ISTQB Certified Tester"],
            },
            {
              icon: Award,
              title: "Certifications",
              items: ["AWS Cloud Practitioner", "Selenium WebDriver Cert.", "Agile Testing (ICP-TST)"],
            },
            {
              icon: Languages,
              title: "Languages",
              items: ["Hebrew — Native", "English — Fluent"],
            },
          ].map((block, i) => {
            const ref2 = useScrollReveal(i * 80);
            return (
              <div
                key={block.title}
                ref={ref2}
                className="p-6 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg gradient-soft-bg text-primary inline-flex mb-4">
                  <block.icon size={20} />
                </div>
                <h3 className="font-semibold mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            <Download size={16} /> Download Full CV
          </a>
          <p className="text-xs text-muted-foreground mt-3">PDF format • Updated March 2026</p>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
