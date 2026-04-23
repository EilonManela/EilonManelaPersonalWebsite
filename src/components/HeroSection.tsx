import { ArrowDown, User, Mail, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import QABackdrop from "@/components/QABackdrop";
import eilonPhoto from "@/assets/eilon-photo.jpg";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* QA-themed concept art background */}
      <QABackdrop variant="a" />

      <div ref={ref} className="container relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        {/* Profile Picture */}
        <div className="shrink-0 relative">
          <div className="absolute inset-[-4px] rounded-full border-4 border-primary/30 border-t-primary animate-[spin_8s_linear_infinite] blur-[2px] shadow-[0_0_15px_hsl(var(--primary)/0.4),0_0_30px_hsl(var(--primary)/0.2)]" />
          <Avatar className="w-48 h-48 md:w-72 md:h-72 shadow-xl shadow-primary/10">
            <AvatarImage src={eilonPhoto} alt="Eilon Manela" />
            <AvatarFallback className="text-4xl bg-muted text-muted-foreground">
              <User size={64} />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-5">
            <span className="text-primary">Eilon</span>{" "}
            <span className="gradient-text text-primary">Manela</span>
          </h1>
          <p className="font-mono text-accent tracking-wider uppercase mb-7 text-3xl md:text-4xl">QA Engineer</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10" style={{ textWrap: "balance" }}>
            Ensuring software quality through meticulous testing, automation, and a passion for delivering flawless user experiences.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200">
            Learn more <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* Social icons - inline on mobile, absolute bottom-right on desktop */}
      <div className="relative z-10 flex items-center justify-center gap-4 mt-6 pb-8 md:mt-0 md:absolute md:bottom-8 md:right-8 md:pb-0">
        {[
          { icon: Mail, href: "mailto:eilonman@gmail.com", label: "Email" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/eilon-manela/", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/EilonManela", label: "GitHub" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-2.5 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
          >
            <link.icon size={18} />
          </a>
        ))}
      </div>
    </section>);

};

export default HeroSection;