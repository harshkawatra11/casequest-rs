import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { GIVE_GET, CASE_REQUIREMENTS } from "@/data/content";

export function Governance() {
  return (
    <section id="governance" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto bg-surface-dim/40">
      <SectionChip>Coordination</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          One compact gives every agency a duty and a gain; the give-get matrix is published monthly so
          no actor can quietly stop holding up its end.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-4">
        <Panel title="Give and get: one duty, one gain, one scorecard line per actor">
          <Table head={["Actor", "Gives", "Gets", "Scorecard KPI"]} rows={GIVE_GET} className="text-[10px] md:text-[11px]" />
          <Source>Source: research §20 | compact design, gates and targets are proposals, not institutions already committed</Source>
        </Panel>

        <Panel title="The four case requirements, answered on their own terms">
          <ul className="flex flex-col gap-2.5">
            {CASE_REQUIREMENTS.map(([id, name, answer]) => (
              <li key={id} className="ink-border bg-surface-alt px-3 py-2.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-primary text-sm">{id}</span>
                  <span className="font-display font-bold text-xs uppercase">{name}</span>
                </div>
                <div className="font-body text-xs text-ink/75 mt-1">{answer}</div>
              </li>
            ))}
          </ul>
          <Source>Source: research §1, §2 | every case-brief line resolves to a section and a slide (research Table 1.1, 1.2)</Source>
        </Panel>
      </div>
    </section>
  );
}
