import { inr, pct } from "@/lib/format";
import { SENSITIVITY_GRID } from "@/data/model";
import { cn } from "@/lib/utils";

/** CSS-grid heatmap for today's direct-parcel contribution by return rate x freight. */
export function Heatmap() {
  const { returnRates, freights, values } = SENSITIVITY_GRID;
  const flat = values.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const tone = (v: number) => {
    const t = (v - min) / (max - min || 1);
    // interpolate alert -> accent -> primary
    if (t < 0.5) {
      const k = t / 0.5;
      return `color-mix(in srgb, #e03a1e ${100 - k * 100}%, #ffc72c ${k * 100}%)`;
    }
    const k = (t - 0.5) / 0.5;
    return `color-mix(in srgb, #ffc72c ${100 - k * 100}%, #0e4d25 ${k * 100}%)`;
  };
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-[11px] md:text-xs w-full">
        <thead>
          <tr>
            <th className="ink-border bg-primary text-white px-2 py-1.5 font-display">Return rate \ Freight</th>
            {freights.map((f) => (
              <th key={f} className="ink-border bg-primary text-white px-2 py-1.5 font-display whitespace-nowrap">
                {inr(f)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {returnRates.map((r, ri) => (
            <tr key={r}>
              <td className="ink-border bg-surface-alt px-2 py-1.5 font-display font-bold">{pct(r)}</td>
              {values[ri].map((v, ci) => (
                <td key={ci} className={cn("ink-border px-2 py-1.5 text-center font-semibold")} style={{ background: tone(v), color: v < min + (max - min) * 0.25 || v > min + (max - min) * 0.75 ? "#fff" : "#0a0a0a" }}>
                  {inr(v)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
