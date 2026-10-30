"use client";
import "./chartSetup";
import { Doughnut } from "react-chartjs-2";
import { INK } from "./chartSetup";
import { inr } from "@/lib/format";

const PALETTE = ["#0e4d25", "#1b7f3b", "#ffc72c", "#e03a1e", "#c4b5fd", "#7c5cff"];

export function BudgetDonut({ rows }: { rows: [string, number][] }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="h-48 w-48 shrink-0">
        <Doughnut
          data={{
            labels: rows.map((r) => r[0]),
            datasets: [{ data: rows.map((r) => r[1]), backgroundColor: PALETTE, borderColor: INK, borderWidth: 2 }],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => inr(Number(ctx.raw)) } } },
          }}
        />
      </div>
      <ul className="flex-1 w-full text-xs md:text-sm space-y-1.5">
        {rows.map((r, i) => (
          <li key={r[0]} className="flex items-center justify-between gap-3 border-b border-ink/10 pb-1">
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 ink-border shrink-0" style={{ background: PALETTE[i % PALETTE.length] }} />
              {r[0]}
            </span>
            <span className="font-display font-bold whitespace-nowrap">{inr(r[1])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
