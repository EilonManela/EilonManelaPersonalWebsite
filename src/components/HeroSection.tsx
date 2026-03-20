import { ArrowDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div ref={ref} className="container text-center relative z-10">
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">QA Engineer</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-foreground">Eilon</span>{" "}
          <span className="gradient-text">Manela</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10" style={{ textWrap: "balance" }}>
          Ensuring software quality through meticulous testing, automation, and a passion for delivering flawless user experiences.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
        >
          Learn more <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
