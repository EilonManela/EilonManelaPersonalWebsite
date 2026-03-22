import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-muted/30">
      <div ref={ref} className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <div className="w-12 h-1 gradient-bg rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or want to discuss QA strategies? I'd love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "eilonman@gmail.com", href: "mailto:eilonman@gmail.com" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/eilon-manela/" },
                { icon: Github, label: "GitHub Profile", href: "https://github.com/EilonManela" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-[15px] text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <span className="p-2 rounded-lg gradient-soft-bg text-primary group-hover:shadow-md group-hover:shadow-primary/10 transition-shadow duration-200">
                    <link.icon size={16} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/60 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/60 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
            />
            <textarea
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border/60 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
