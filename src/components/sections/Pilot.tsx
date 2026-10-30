import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { CLUSTERS, PILOT_GATES } from "@/data/content";
import { BUDGET, BUDGET_TOTAL, PILOT_BY_SCENARIO, SCENARIOS } from "@/data/model";
import { crore, inr } from "@/lib/format";
import { BudgetDonut } from "@/components/charts/BudgetDonut";

export function Pilot() {
  return (
    <section id="pilot" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto">
      <SectionChip>The pilot</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          A 2,400-seller pilot in six clusters tests the reform for {crore(BUDGET_TOTAL)} and scales only if
          seller margin rises and integrity holds.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Panel title="Six clusters, six products, six regions">
          <ul className="grid grid-cols-2 gap-2">
            {CLUSTERS.map((c, i) => (
              <li key={c.name} className="ink-border bg-surface-dim px-2.5 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-[10px] shrink-0">{i + 1}</span>
                  <span className="font-display font-bold text-xs">{c.name}</span>
                </div>
                <div className="font-body text-[10px] text-ink/60 mt-1">{c.product} &middot; {c.region}</div>
              </li>
            ))}
          </ul>
          <Source>Source: research §5, §17 | candidate sites; DGFT district mapping, GI registry</Source>
        </Panel>

        <Panel title="12 months, two waves, four gates">
          <Table head={["Gate", "When", "Test"]} rows={PILOT_GATES} className="text-[11px]" />
          <p className="font-body text-xs text-ink/70 mt-1">Else: revise the design or stop at that gate.</p>
          <Source>Source: research §25-27 | gates and targets are proposals for the committee to set</Source>
        </Panel>

        <Panel title="Pilot budget">
          <BudgetDonut rows={BUDGET} />
          <Source>Source: team model 8fe043dc97, T10</Source>
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="Pilot outcomes across all three scenarios">
          <Table
            head={["Scenario", "Active sellers", "Orders, months 7-12", "Seller gain vs today", "Budget per active seller"]}
            rows={SCENARIOS.map((s) => {
              const p = PILOT_BY_SCENARIO[s];
              return [s.toUpperCase(), p.active.toLocaleString("en-IN"), p.orders.toLocaleString("en-IN"), crore(p.gain), inr(Math.round(p.cost_per_active))];
            })}
          />
          <Source>Source: team model 8fe043dc97, T11 | every pilot order in the model uses the reformed parcel lane</Source>
        </Panel>
      </div>
    </section>
  );
}
