import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { OPTIONS, OPTION_WEIGHTS } from "@/data/model";
import { REJECTED_OPTIONS } from "@/data/content";
import { pct } from "@/lib/format";

export function OptionFilter() {
  const sorted = [...OPTIONS].sort((a, b) => b.weighted - a.weighted);
  return (
    <section id="filter" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto">
      <SectionChip>Why not the obvious answer</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          A portal, a subsidy or an exemption each score lower on our own weighted filter &mdash; a cluster
          desk with seller tiers wins on cost, integrity and feasibility together, not on one axis alone.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-4">
        <Panel title={`Six options, our scores (1 to 5), weighted ${OPTION_WEIGHTS.map((w) => pct(w[1], 0)).join("/")}`}>
          <Table
            head={["Option", ...OPTION_WEIGHTS.map((w) => w[0]), "Weighted", "Equal weights"]}
            rows={sorted.map((o) => [o.name, ...o.scores, o.weighted.toFixed(2), o.equal.toFixed(2)])}
            className="text-[10px] md:text-[11px]"
          />
          <Source>Source: team model 8fe043dc97, T13 | option scores are team judgement, stated plainly, not an external audit</Source>
        </Panel>

        <Panel title="Three rejected, and why">
          <ul className="flex flex-col gap-3">
            {REJECTED_OPTIONS.map(([name, why]) => (
              <li key={name} className="ink-border bg-surface-dim px-3 py-2.5">
                <div className="font-display font-bold text-xs text-alert line-through decoration-alert/60">{name}</div>
                <div className="font-body text-xs text-ink/75 mt-1">{why}</div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  );
}
