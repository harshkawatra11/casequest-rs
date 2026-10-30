import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { RISK_REGISTER, VALIDATION_PLAN, VALIDATION_TIME_STUDY } from "@/data/content";
import { ScenarioBars } from "@/components/charts/ScenarioBars";
import { RiskHeatmap } from "@/components/charts/RiskHeatmap";
import { SCENARIO_TABLE, SCENARIOS } from "@/data/model";

export function Risk() {
  return (
    <section id="risk" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto bg-surface-dim/40">
      <SectionChip>Integrity and risk</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          Even the bear case lifts a seller&rsquo;s order from ₹14 to ₹385 &mdash; ten risks are logged,
          each with one owner and one fix, and none of them involves relaxing a customs check.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-4">
        <div className="flex flex-col gap-4">
          <Panel title="Seller contribution per order, today vs reformed, all three scenarios">
            <ScenarioBars data={SCENARIOS.map((s) => ({ scenario: s, direct: SCENARIO_TABLE[s].direct, reformed: SCENARIO_TABLE[s].reformed }))} />
            <Source>Source: team model 8fe043dc97, T5</Source>
          </Panel>
          <Panel title="Risk heat map: impact × probability">
            <RiskHeatmap />
            <p className="font-body text-[11px] text-ink/60 mt-2">
              No risk sits in the high-probability, high-impact corner. The legal route for pooled
              returns (#3) is the only risk scored highly probable &mdash; its impact is medium
              because the existing re-import route still closes returns, only less cheaply.
            </p>
            <Source>Source: research §28.2</Source>
          </Panel>
        </div>

        <Panel title="The full risk register, one fix and one owner each">
          <Table
            head={["#", "Risk", "P×I", "Mitigation", "Owner"]}
            rows={RISK_REGISTER.map((r, i) => [i + 1, r.risk, `${r.probability}×${r.impact}=${r.probability * r.impact}`, r.mitigation, r.owner])}
            className="text-[10px] md:text-[11px]"
          />
          <Source>Source: research §28.1 | probability and impact are team judgement, 1 (low) to 3 (high); score is their product</Source>
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="Validation plan: nothing below has been run yet">
          <p className="font-body text-xs text-ink/75 mb-2">
            No interview, survey, provider quote or time study has been collected for this report.
            This is the plan for what we would gather before the committee meets, and what each
            result would change.
          </p>
          <Table
            head={["Respondent", "Count", "What it tests"]}
            rows={VALIDATION_PLAN.map((v) => [v.respondent, v.count, v.tests])}
            className="text-[10px] md:text-[11px]"
          />
          <div className="ink-border bg-accent/20 px-3 py-2.5 mt-3 text-xs font-body">
            <span className="font-display font-bold">Time study &mdash; </span>
            {VALIDATION_TIME_STUDY.summary} <span className="text-ink/60">{VALIDATION_TIME_STUDY.rule}</span>
          </div>
          <Source>Source: research §29 | 72 seller interviews bound the order of magnitude of each assumption, not a precise mean</Source>
        </Panel>
      </div>
    </section>
  );
}
