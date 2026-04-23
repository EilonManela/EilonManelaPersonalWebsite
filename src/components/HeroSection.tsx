import { ArrowDown, User, Mail, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import eilonPhoto from "@/assets/eilon-photo.jpg";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* QA-themed concept art background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Checkmark - top left */}
        <svg className="absolute top-[12%] left-[6%] w-16 h-16 text-primary/20 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>

        {/* Bug icon - top right */}
        <svg className="absolute top-[18%] right-[8%] w-14 h-14 text-accent/25 animate-float" style={{ animationDelay: "0.8s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6zM12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
        </svg>

        {/* Code brackets - middle left */}
        <svg className="absolute top-[55%] left-[4%] w-20 h-20 text-primary/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>

        {/* Magnifier / inspect - middle right */}
        <svg className="absolute top-[60%] right-[6%] w-16 h-16 text-accent/20 animate-float" style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
          <path d="M9 11h4M11 9v4" />
        </svg>

        {/* Checklist - bottom left */}
        <svg className="absolute bottom-[10%] left-[10%] w-14 h-14 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 9l2 2 4-4" />
          <path d="M7 15h4" />
          <path d="M15 15h2" />
        </svg>

        {/* Gear / automation - top center */}
        <svg className="absolute top-[8%] left-[48%] w-12 h-12 text-accent/15 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>

        {/* Shield / quality - bottom right */}
        <svg className="absolute bottom-[14%] right-[12%] w-16 h-16 text-primary/18 animate-float" style={{ animationDelay: "0.4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        {/* Mono QA text accents */}
        <span className="absolute top-[38%] right-[18%] font-mono text-xs tracking-widest text-accent/25 rotate-[-8deg]">expect(bugs).toBe(0)</span>
        <span className="absolute bottom-[30%] left-[22%] font-mono text-xs tracking-widest text-primary/25 rotate-[6deg]">{"// PASS ✓"}</span>
        <span className="absolute top-[72%] left-[45%] font-mono text-[10px] tracking-widest text-accent/20">assert.equal(quality, 100)</span>
      </div>

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