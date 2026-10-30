"use client";
import "./chartSetup";
import { Bar } from "react-chartjs-2";
import { ALERT, INK, PRIMARY } from "./chartSetup";
import { inr } from "@/lib/format";

export function ScenarioBars({
  data,
}: {
  data: { scenario: string; direct: number; reformed: number }[];
}) {
  return (
    <div className="h-64 md:h-72">
      <Bar
        data={{
          labels: data.map((d) => d.scenario.toUpperCase()),
          datasets: [
            { label: "Today's direct parcel", data: data.map((d) => d.direct), backgroundColor: ALERT, borderColor: INK, borderWidth: 2, barPercentage: 0.55 },
            { label: "Reformed parcel lane", data: data.map((d) => d.reformed), backgroundColor: PRIMARY, borderColor: INK, borderWidth: 2, barPercentage: 0.55 },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top", labels: { color: INK, font: { size: 11, weight: 600 } } },
            tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${inr(Number(ctx.raw))}` } },
          },
          scales: {
            x: { ticks: { color: INK, font: { size: 12, weight: 700 } }, grid: { display: false } },
            y: { ticks: { color: INK, callback: (v) => inr(Number(v)) }, grid: { color: "#0a0a0a22" } },
          },
        }}
      />
    </div>
  );
}
