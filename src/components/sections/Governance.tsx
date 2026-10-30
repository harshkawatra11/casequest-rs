import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { GIVE_GET, CASE_REQUIREMENTS, RACI_ACTIVITIES, RACI_ROWS } from "@/data/content";

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

      <div className="mt-4">
        <Panel title="Who decides what: RACI across the six core compact activities">
          <Table
            head={["Activity", ...RACI_ACTIVITIES]}
            rows={RACI_ROWS}
            className="text-[10px] md:text-[11px]"
          />
          <p className="font-body text-xs text-ink/70 mt-2">
            A = Accountable, R = Responsible, C = Consulted, I = Informed. CBIC keeps sole
            accountability for grading and clearance on every row &mdash; the compact never asks
            customs to delegate the check itself, only to receive better-structured data. DPIIT
            keeps accountability for the data link and the scorecard, the only actor with no
            single agency&rsquo;s turf to protect.
          </p>
          <Source>Source: research §20.2 | six activities only &mdash; a row is added only when two actors in the power-interest grid would give a different answer on who is accountable</Source>
        </Panel>
      </div>
    </section>
  );
}
