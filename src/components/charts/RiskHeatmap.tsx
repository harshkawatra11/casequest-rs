import { RISK_REGISTER } from "@/data/content";

const LABELS = ["Low", "Medium", "High"];

/** 3x3 probability x impact grid, risks placed by cell. Research §28.2. */
export function RiskHeatmap() {
  const cells: string[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
  RISK_REGISTER.forEach((r, i) => {
    cells[r.impact - 1][r.probability - 1].push(`${i + 1}`);
  });

  const tone = (impact: number, prob: number) => {
    const score = impact * prob;
    if (score >= 6) return "bg-alert/25";
    if (score >= 4) return "bg-accent/40";
    if (score >= 2) return "bg-primary/15";
    return "bg-surface-dim";
  };

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-[11px] md:text-xs w-full">
        <thead>
          <tr>
            <th className="ink-border bg-primary text-white px-2 py-1.5 font-display">Impact \ Probability</th>
            {LABELS.map((l) => (
              <th key={l} className="ink-border bg-primary text-white px-2 py-1.5 font-display">{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[2, 1, 0].map((impactIdx) => (
            <tr key={impactIdx}>
              <td className="ink-border bg-surface-alt px-2 py-2 font-display font-bold">{LABELS[impactIdx]}</td>
              {[0, 1, 2].map((probIdx) => (
                <td key={probIdx} className={`ink-border px-2 py-2 text-center font-semibold ${tone(impactIdx + 1, probIdx + 1)}`}>
                  {cells[impactIdx][probIdx].join(", ") || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
