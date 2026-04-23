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
    a: { check: "top-[12%] left-[6%]", bug: "top-[18%] right-[8%]", code: "top-[55%] left-[4%]", mag: "top-[60%] right-[6%]", list: "bottom-[10%] left-[10%]", gear: "top-[8%] left-[48%]", shield: "bottom-[14%] right-[12%]", t1: "top-[38%] right-[18%]", t2: "bottom-[30%] left-[22%]", t3: "top-[72%] left-[45%]" },
    b: { check: "top-[70%] left-[8%]", bug: "top-[10%] right-[14%]", code: "top-[20%] left-[10%]", mag: "bottom-[18%] right-[8%]", list: "top-[50%] right-[22%]", gear: "bottom-[8%] left-[46%]", shield: "top-[60%] left-[38%]", t1: "top-[14%] left-[30%]", t2: "bottom-[40%] right-[28%]", t3: "top-[82%] right-[40%]" },
    c: { check: "top-[25%] right-[10%]", bug: "bottom-[12%] left-[14%]", code: "top-[8%] left-[20%]", mag: "top-[48%] left-[6%]", list: "bottom-[22%] right-[18%]", gear: "top-[68%] right-[40%]", shield: "top-[14%] right-[38%]", t1: "bottom-[8%] left-[40%]", t2: "top-[42%] right-[30%]", t3: "top-[78%] left-[12%]" },
    d: { check: "bottom-[18%] right-[8%]", bug: "top-[22%] left-[12%]", code: "bottom-[10%] left-[42%]", mag: "top-[12%] right-[22%]", list: "top-[55%] right-[10%]", gear: "top-[40%] left-[46%]", shield: "bottom-[30%] left-[8%]", t1: "top-[30%] left-[32%]", t2: "top-[70%] right-[24%]", t3: "bottom-[6%] right-[36%]" },
  }[variant];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Checkmark */}
      <svg className={`absolute ${v.check} w-16 h-16 text-primary/20 animate-float`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>

      {/* Bug */}
      <svg className={`absolute ${v.bug} w-14 h-14 text-accent/25 animate-float`} style={{ animationDelay: "0.8s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6zM12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </svg>

      {/* Code brackets */}
      <svg className={`absolute ${v.code} w-20 h-20 text-primary/15`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>

      {/* Magnifier */}
      <svg className={`absolute ${v.mag} w-16 h-16 text-accent/20 animate-float`} style={{ animationDelay: "1.2s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M9 11h4M11 9v4" />
      </svg>

      {/* Checklist */}
      <svg className={`absolute ${v.list} w-14 h-14 text-primary/20`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l2 2 4-4" />
        <path d="M7 15h4" />
        <path d="M15 15h2" />
      </svg>

      {/* Gear */}
      <svg className={`absolute ${v.gear} w-12 h-12 text-accent/15 animate-[spin_20s_linear_infinite]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>

      {/* Shield */}
      <svg className={`absolute ${v.shield} w-16 h-16 text-primary/18 animate-float`} style={{ animationDelay: "0.4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>

    </div>
  );
};

export default QABackdrop;
