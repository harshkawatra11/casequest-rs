import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { RISKS } from "@/data/content";
import { ScenarioBars } from "@/components/charts/ScenarioBars";
import { SCENARIO_TABLE, SCENARIOS } from "@/data/model";

export function Risk() {
  return (
    <section id="risk" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto bg-surface-dim/40">
      <SectionChip>Integrity and risk</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          Even the bear case lifts a seller&rsquo;s order from ₹14 to ₹385 &mdash; one fix is named for every
          top risk, and none of them involves relaxing a customs check.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-4">
        <Panel title="Seller contribution per order, today vs reformed, all three scenarios">
          <ScenarioBars data={SCENARIOS.map((s) => ({ scenario: s, direct: SCENARIO_TABLE[s].direct, reformed: SCENARIO_TABLE[s].reformed }))} />
          <Source>Source: team model 8fe043dc97, T5</Source>
        </Panel>

        <Panel title="Top risks, one fix each">
          <Table head={["Risk", "Trigger", "Response"]} rows={RISKS} className="text-[11px]" />
          <Source>Source: research §21, §24 | the pilot remains reversible at every gate</Source>
        </Panel>
      </div>
    </section>
  );
}
