import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
{ label: "About", href: "#about" },
{ label: "Experience", href: "#experience" },
{ label: "CV", href: "#cv" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-lg font-semibold gradient-text">Eilon Manela </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
            
              {l.label}
            </a>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu">
          
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open &&
      <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          {links.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors">
          
              {l.label}
            </a>
        )}
        </div>
      }
    </nav>);

};

export default Navbar;