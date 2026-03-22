import { ArrowDown, User, Mail, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import eilonPhoto from "@/assets/eilon-photo.jpg";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div ref={ref} className="container relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Picture */}
        <div className="shrink-0">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-xl shadow-primary/10">
            {/* Replace the src below with your actual photo */}
            <AvatarImage src={eilonPhoto} alt="Eilon Manela" />
            <AvatarFallback className="text-4xl bg-muted text-muted-foreground">
              <User size={64} />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
            <span className="text-primary">Eilon</span>{" "}
            <span className="gradient-text text-primary">Manela</span>
          </h1>
          <p className="font-mono text-accent tracking-wider uppercase mb-6 text-3xl">QA Engineer</p>
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

      {/* Social icons bottom-right */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 flex items-center gap-4 z-10">
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