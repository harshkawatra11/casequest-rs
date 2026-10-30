"use client";
import { useMemo, useState } from "react";
import {
  ASSUMPTIONS,
  SIMULATOR_LEVERS,
  baseValues,
  scenarioValues,
  computeDirect,
  computeReformed,
  type Scenario,
  type LeverId,
  ACT,
  ORD_M,
  PILOT,
} from "@/data/model";
import { inr, pct, crore } from "@/lib/format";
import { SectionChip, Headline, Panel, Source } from "@/components/ui/primitives";
import { TornadoChart } from "@/components/charts/TornadoChart";
import { TORNADO } from "@/data/model";
import { Heatmap } from "@/components/charts/Heatmap";
import { cn } from "@/lib/utils";

const PCT_LEVERS = new Set(["A28", "A31", "A10"]);
const STEP: Record<LeverId, number> = { A28: 0.01, A07: 1, A09: 5, A27: 1, A31: 0.01, A05: 10, A04: 10, A10: 0.01, A02: 1 };

export function Simulator() {
  const [values, setValues] = useState<Record<string, number>>(baseValues());
  const [activeScenario, setActiveScenario] = useState<Scenario | "custom">("base");

  const direct = useMemo(() => computeDirect(values), [values]);
  const reformed = useMemo(() => computeReformed(values), [values]);
  const gain = reformed.expected - direct.expected;
  const gainPct = direct.expected !== 0 ? gain / Math.abs(direct.expected) : 0;

  // macro read: hold the pilot's base-case order volume fixed, vary only the per-order gain
  // your sliders produce, so the reader sees the micro-to-macro link the deck's pilot slide makes.
  const activeSellers = Math.round(PILOT.sellers * ACT.base);
  const orders = activeSellers * ORD_M.base * 6;
  const pilotGain = orders * gain;

  function setLever(id: LeverId, v: number) {
    setValues((prev) => ({ ...prev, [id]: v }));
    setActiveScenario("custom");
  }

  function applyScenario(s: Scenario) {
    setValues(scenarioValues(s));
    setActiveScenario(s);
  }

  return (
    <section id="simulator" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto">
      <SectionChip>Play the numbers</SectionChip>
      <div className="mt-3 mb-6">
        <Headline>
          Move any assumption and watch the ₹398 uplift move with it &mdash; this is the model behind
          every number on this page, not a mock-up of it.
        </Headline>
        <p className="font-body text-sm text-ink/70 max-w-3xl mt-2">
          Nine levers, ranked by how much each one swings the result in the model&rsquo;s own tornado test
          (right). Drag one, or jump to a scenario preset; everything else below holds at its base value.
        </p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {(["bear", "base", "bull"] as Scenario[]).map((s) => (
          <button
            key={s}
            onClick={() => applyScenario(s)}
            className={cn(
              "px-4 py-2 font-display font-bold text-xs uppercase ink-border-thick transition-colors",
              activeScenario === s ? "bg-primary text-white" : "bg-accent text-ink hover:bg-accent/80"
            )}
          >
            {s} case
          </button>
        ))}
        <span className={cn("px-4 py-2 font-display font-bold text-xs uppercase ink-border-thick", activeScenario === "custom" ? "bg-alert text-white" : "bg-surface-dim text-ink/40")}>
          custom
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <div className="flex flex-col gap-3">
          {SIMULATOR_LEVERS.map((id) => {
            const a = ASSUMPTIONS[id];
            const min = Math.min(a.bear, a.bull);
            const max = Math.max(a.bear, a.bull);
            const v = values[id];
            const display = PCT_LEVERS.has(id) ? pct(v, 0) : id === "A07" || id === "A27" ? `${v} min` : id === "A02" ? `$${v}` : inr(v);
            return (
              <div key={id} className="ink-border bg-surface-alt px-4 py-3">
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <span className="font-body font-semibold text-xs md:text-sm">
                    <span className="font-display font-bold text-primary mr-1.5">{id}</span>
                    {a.unit}
                  </span>
                  <span className="font-display font-extrabold text-primary text-sm md:text-base shrink-0">{display}</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={STEP[id]}
                  value={v}
                  onChange={(e) => setLever(id, parseFloat(e.target.value))}
                  className="w-full"
                  aria-label={a.unit}
                />
                <div className="flex justify-between text-[10px] text-ink/50 font-body mt-0.5">
                  <span>bear {PCT_LEVERS.has(id) ? pct(a.bear, 0) : a.bear}</span>
                  <span>bull {PCT_LEVERS.has(id) ? pct(a.bull, 0) : a.bull}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="ink-border bg-alert text-white px-4 py-4 flex flex-col gap-1">
              <span className="font-body text-[11px] uppercase font-semibold opacity-80">Today, direct parcel</span>
              <span className="font-display font-extrabold text-3xl">{inr(Math.round(direct.expected))}</span>
            </div>
            <div className="ink-border bg-primary text-white px-4 py-4 flex flex-col gap-1">
              <span className="font-body text-[11px] uppercase font-semibold opacity-80">Reformed parcel lane</span>
              <span className="font-display font-extrabold text-3xl">{inr(Math.round(reformed.expected))}</span>
            </div>
          </div>
          <div className="ink-border bg-accent px-4 py-4">
            <span className="font-body text-[11px] uppercase font-semibold">Gain from the reform, this order</span>
            <div className="font-display font-extrabold text-3xl text-ink">
              {gain >= 0 ? "+" : ""}
              {inr(Math.round(gain))} <span className="text-base font-bold">({gain >= 0 ? "+" : ""}{pct(gainPct, 0)})</span>
            </div>
          </div>
          <div className="ink-border bg-surface-alt px-4 py-4">
            <span className="font-body text-[11px] uppercase font-semibold text-ink/70">
              If every pilot order under these assumptions saw the same gain (960 active sellers, base-case order volume)
            </span>
            <div className={cn("font-display font-extrabold text-2xl mt-1", pilotGain >= 0 ? "text-primary" : "text-alert")}>
              {pilotGain >= 0 ? "+" : ""}
              {crore(pilotGain)}
            </div>
            <span className="font-body text-[11px] text-ink/50">against a ₹3.58 crore pilot budget</span>
          </div>

          <Panel title="What moves the uplift most (model tornado)">
            <TornadoChart rows={TORNADO} />
            <Source>Source: team model 8fe043dc97, T8 | bars show the reformed-minus-today uplift at each input&rsquo;s bear and bull value, others held at base</Source>
          </Panel>
        </div>
      </div>

      <div className="mt-6">
        <Panel title="Today's direct parcel is viable only above a return-rate and freight threshold">
          <Heatmap />
          <Source>Source: team model 8fe043dc97, T7 | expected contribution per order, today&rsquo;s direct parcel lane, base case elsewhere</Source>
        </Panel>
      </div>
    </section>
  );
}
