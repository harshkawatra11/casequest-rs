"use client";
import { cn } from "@/lib/utils";

interface Node {
  title: string;
  sub: string;
  tone?: "primary" | "accent" | "secondary";
}

const NODES: Node[] = [
  { title: "CUSTOMS RULES", sub: "CBIC risk engine, incentives", tone: "accent" },
  { title: "POST & CARRIERS", sub: "1,013 Dak Ghar Niryat Kendras", tone: "accent" },
  { title: "PLATFORMS", sub: "fees, listings, buyer data", tone: "accent" },
  { title: "THE SELLER", sub: "women-led, first-generation", tone: "secondary" },
  { title: "CLUSTER", sub: "six pilot sites, six products", tone: "secondary" },
  { title: "DESTINATIONS", sub: "de minimis gone, EU duty live", tone: "accent" },
  { title: "SELLER BODIES", sub: "councils, clusters, credit", tone: "accent" },
  { title: "PAYMENTS & TAX", sub: "GST refund match, AD banks", tone: "accent" },
];

/** Radial mind map: MSME seller in a cluster, eight actors around it. Pure SVG + CSS, no imported art. */
export function MindMap() {
  const r = 42; // percent radius
  const cx = 50;
  const cy = 50;
  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {NODES.map((_, i) => {
          const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#0a0a0a" strokeWidth={0.6} />;
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-primary ink-border-thick flex flex-col items-center justify-center text-center text-white px-2">
          <span className="font-display font-bold text-[11px] md:text-xs leading-tight">MSME SELLER</span>
          <span className="font-display font-extrabold text-[11px] md:text-xs text-accent leading-tight">IN A CLUSTER</span>
        </div>
      </div>
      {NODES.map((n, i) => {
        const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        return (
          <div
            key={n.title}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-24 md:w-28"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className={cn("ink-border bg-surface-alt px-2 py-1.5 text-center")}>
              <div className={cn("font-display font-bold text-[10px] md:text-[11px] leading-tight", n.tone === "secondary" ? "text-secondary" : "text-primary")}>{n.title}</div>
              <div className="font-body text-[9px] md:text-[10px] text-ink/60 leading-tight mt-0.5">{n.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
