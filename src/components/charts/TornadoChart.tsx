"use client";
import "./chartSetup";
import { Bar } from "react-chartjs-2";
import { ALERT, INK, SECONDARY } from "./chartSetup";
import type { TORNADO } from "@/data/model";

export function TornadoChart({ rows }: { rows: typeof TORNADO }) {
  const labels = rows.map((r) => r.id);
  return (
    <div className="h-72 md:h-80">
      <Bar
        data={{
          labels,
          datasets: [
            { label: "At bear value", data: rows.map((r) => r.atBear), backgroundColor: ALERT, borderColor: INK, borderWidth: 2, barPercentage: 0.7 },
            { label: "At bull value", data: rows.map((r) => r.atBull), backgroundColor: SECONDARY, borderColor: INK, borderWidth: 2, barPercentage: 0.7 },
          ],
        }}
        options={{
          indexAxis: "y" as const,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top", labels: { color: INK, font: { size: 11, weight: 600 } } },
            tooltip: {
              callbacks: {
                afterLabel: (ctx) => rows[ctx.dataIndex].label,
              },
            },
          },
          scales: {
            x: { stacked: false, ticks: { color: INK, callback: (v) => `₹${v}` }, grid: { color: "#0a0a0a22" } },
            y: { ticks: { color: INK, font: { size: 11, weight: 700 } }, grid: { display: false } },
          },
        }}
      />
    </div>
  );
}
