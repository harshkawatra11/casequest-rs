import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Small rail label pill — the EY-style band marker used on the deck's densest panels. */
export function Rail({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "secondary" | "alert" }) {
  const bg = tone === "primary" ? "bg-primary" : tone === "alert" ? "bg-alert" : "bg-secondary";
  return (
    <div className={cn("writing-mode-vertical flex items-center justify-center text-white font-display font-bold text-xs md:text-sm tracking-wide uppercase px-2 py-3 ink-border-thick", bg)}
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
      {children}
    </div>
  );
}

/** Ink-bordered white panel, the base unit of every dense band. */
export function Panel({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("ink-border bg-surface-alt p-4 md:p-5 flex flex-col gap-3", className)}>
      {title && <h4 className="font-display font-bold text-sm md:text-base uppercase text-primary leading-tight">{title}</h4>}
      {children}
    </div>
  );
}

/** Layered sticker card: accent back-rect offset behind a solid front panel. Signature deck motif. */
export function LayeredCard({ children, front = "primary", className }: { children: ReactNode; front?: "primary" | "alert"; className?: string }) {
  const frontBg = front === "primary" ? "bg-primary text-white" : "bg-alert text-white";
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-accent ink-border-thick" aria-hidden />
      <div className={cn("relative ink-border p-4 md:p-6", frontBg)}>{children}</div>
    </div>
  );
}

/** Ribbon / chevron tag — section nav or scoring tags. */
export function Tag({ children, active = false, tone = "primary" }: { children: ReactNode; active?: boolean; tone?: "primary" | "accent" }) {
  const bg = active ? (tone === "primary" ? "bg-primary text-white" : "bg-primary text-white") : "bg-accent text-ink";
  return (
    <span className={cn("inline-flex items-center gap-2 px-4 py-2 font-display font-bold text-xs md:text-sm uppercase ink-border-thick", bg)}>
      {children}
    </span>
  );
}

/** Giant KPI numeral tile. */
export function Kpi({ label, value, sub, tone = "primary" }: { label: string; value: string; sub?: string; tone?: "primary" | "alert" }) {
  return (
    <div className="ink-border bg-surface-alt px-4 py-3 flex flex-col gap-1">
      <span className={cn("font-display font-extrabold text-3xl md:text-4xl leading-none", tone === "alert" ? "text-alert" : "text-primary")}>{value}</span>
      <span className="font-body font-semibold text-[11px] md:text-xs uppercase tracking-wide text-ink/70">{label}</span>
      {sub && <span className="font-body text-[11px] text-ink/50">{sub}</span>}
    </div>
  );
}

export function SectionChip({ children }: { children: ReactNode }) {
  return (
    <div className="inline-block bg-primary text-white font-display font-bold text-sm md:text-base uppercase px-4 py-2 ink-border-thick">
      {children}
    </div>
  );
}

export function Headline({ children }: { children: ReactNode }) {
  return <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-5xl">{children}</h2>;
}

export function Source({ children }: { children: ReactNode }) {
  return <p className="text-[11px] md:text-xs text-primary/80 font-body font-medium mt-auto pt-2">{children}</p>;
}

export function Table({ head, rows, className }: { head: string[]; rows: (string | number)[][]; className?: string }) {
  return (
    <div className={cn("overflow-x-auto ink-border", className)}>
      <table className="w-full text-xs md:text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            {head.map((h, i) => (
              <th key={i} className="text-left font-display font-bold px-2.5 py-2 border-r border-white/20 last:border-r-0 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={ri % 2 ? "bg-surface-dim" : "bg-surface-alt"}>
              {r.map((c, ci) => (
                <td key={ci} className="px-2.5 py-1.5 border-t border-ink/15 font-body">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
