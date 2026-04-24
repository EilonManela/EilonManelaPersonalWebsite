type Variant = "a" | "b" | "c" | "d";

interface QABackdropProps {
  variant?: Variant;
}

/**
 * Decorative QA-themed concept art backdrop.
 * Uses semantic primary/accent tokens at low opacity.
 * Variants slightly reposition icons so repeat sections don't look identical.
 */
const QABackdrop = ({ variant = "a" }: QABackdropProps) => {
  const v = {
    a: { check: "top-[6%] left-[2%]", bug: "top-[14%] right-[2%]", code: "top-[55%] left-[1%]", mag: "top-[60%] right-[1%]", list: "bottom-[6%] left-[3%]", gear: "top-[4%] right-[40%]", shield: "bottom-[10%] right-[3%]" },
    b: { check: "top-[72%] left-[2%]", bug: "top-[6%] right-[3%]", code: "top-[18%] left-[2%]", mag: "bottom-[14%] right-[2%]", list: "top-[48%] right-[2%]", gear: "bottom-[4%] left-[42%]", shield: "top-[40%] left-[2%]" },
    c: { check: "top-[20%] right-[2%]", bug: "bottom-[8%] left-[3%]", code: "top-[4%] left-[3%]", mag: "top-[48%] left-[2%]", list: "bottom-[18%] right-[3%]", gear: "top-[68%] right-[42%]", shield: "top-[10%] right-[40%]" },
    d: { check: "bottom-[14%] right-[2%]", bug: "top-[18%] left-[2%]", code: "bottom-[6%] left-[44%]", mag: "top-[8%] right-[3%]", list: "top-[55%] right-[2%]", gear: "top-[40%] right-[42%]", shield: "bottom-[28%] left-[2%]" },
  }[variant];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Checkmark */}
      <svg className={`absolute ${v.check} w-10 h-10 md:w-16 md:h-16 text-primary/30 md:text-primary/20 animate-float`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>

      {/* Bug */}
      <svg className={`absolute ${v.bug} w-9 h-9 md:w-14 md:h-14 text-accent/35 md:text-accent/25 animate-float`} style={{ animationDelay: "0.8s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6zM12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </svg>

      {/* Code brackets */}
      <svg className={`absolute ${v.code} w-12 h-12 md:w-20 md:h-20 text-primary/25 md:text-primary/15`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>

      {/* Magnifier */}
      <svg className={`absolute ${v.mag} w-10 h-10 md:w-16 md:h-16 text-accent/30 md:text-accent/20 animate-float`} style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M9 11h4M11 9v4" />
      </svg>

      {/* Checklist */}
      <svg className={`absolute ${v.list} w-9 h-9 md:w-14 md:h-14 text-primary/30 md:text-primary/20`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l2 2 4-4" />
        <path d="M7 15h4" />
        <path d="M15 15h2" />
      </svg>

      {/* Gear */}
      <svg className={`absolute ${v.gear} w-8 h-8 md:w-12 md:h-12 text-accent/25 md:text-accent/15 animate-[spin_20s_linear_infinite]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>

      {/* Shield */}
      <svg className={`absolute ${v.shield} w-10 h-10 md:w-16 md:h-16 text-primary/28 md:text-primary/18 animate-float`} style={{ animationDelay: "0.4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>

    </div>
  );
};

export default QABackdrop;
