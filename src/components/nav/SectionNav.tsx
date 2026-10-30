"use client";
import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/data/content";
import { cn } from "@/lib/utils";

export function SectionNav() {
  const [active, setActive] = useState(NAV_SECTIONS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="hidden lg:flex sticky top-0 z-40 bg-surface/95 backdrop-blur border-b-2 border-ink overflow-x-auto">
        <div className="flex items-stretch mx-auto">
          {NAV_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "relative flex items-center px-4 py-3 font-display font-bold text-[11px] uppercase whitespace-nowrap border-r border-ink/20 transition-colors",
                active === s.id ? "bg-primary text-white" : "bg-accent/60 text-ink hover:bg-accent"
              )}
            >
              <span className="text-[9px] opacity-60 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </a>
          ))}
        </div>
      </nav>
      <nav className="lg:hidden sticky top-0 z-40 bg-primary text-white border-b-2 border-ink">
        <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-3 font-display font-bold text-xs uppercase">
          <span>{NAV_SECTIONS.find((s) => s.id === active)?.label ?? "Menu"}</span>
          <span>{open ? "−" : "≡"}</span>
        </button>
        {open && (
          <div className="bg-surface-alt">
            {NAV_SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className="block px-4 py-2.5 font-body font-semibold text-sm border-t border-ink/10 text-ink">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
