"use client";
import "./chartSetup";
import { Bar } from "react-chartjs-2";
import { ACCENT, ALERT, INK, PRIMARY } from "./chartSetup";
import { inr } from "@/lib/format";

/** Floating-bar waterfall: each step shows [base, base+delta] so bars appear to "step up". */
export function WaterfallChart({ steps }: { steps: [string, number][] }) {
  // steps[0] is the starting total, steps[last] is the ending total, middle entries are deltas.
  let running = steps[0][1];
  const labels = steps.map((s) => s[0]);
  const data: [number, number][] = [[0, running]];
  const colors: string[] = [PRIMARY];
  for (let i = 1; i < steps.length - 1; i++) {
    const delta = steps[i][1];
    const from = running;
    const to = running + delta;
    data.push(delta >= 0 ? [from, to] : [to, from]);
    colors.push(delta >= 0 ? "#1b7f3b" : ALERT);
    running = to;
  }
  data.push([0, running]);
  colors.push(ACCENT);

  return (
    <div className="h-56 md:h-64">
      <Bar
        data={{
          labels,
          datasets: [
            {
              data: data.map((d) => d[1] - d[0]),
              backgroundColor: colors,
              borderColor: INK,
              borderWidth: 2,
              base: data.map((d) => d[0]) as unknown as number,
              barPercentage: 0.6,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const idx = ctx.dataIndex;
                  const val = idx === 0 || idx === steps.length - 1 ? steps[idx][1] : steps[idx][1];
                  return inr(val);
                },
              },
            },
          },
          scales: {
            x: { ticks: { font: { size: 10, weight: 600 }, color: INK }, grid: { display: false } },
            y: { ticks: { color: INK, callback: (v) => inr(Number(v)) }, grid: { color: "#0a0a0a22" } },
          },
        }}
      />
    </div>
  );
}
