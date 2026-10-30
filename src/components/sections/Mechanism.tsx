import { SectionChip, Headline, Panel, Table, Source } from "@/components/ui/primitives";
import { TIERS, CORRECTIONS } from "@/data/content";
import { DECLARATIONS } from "@/data/model";
import { commas } from "@/lib/format";

export function Mechanism() {
  return (
    <section id="mechanism" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto bg-surface-dim/40">
      <SectionChip>The mechanism</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          Grade the seller, not the parcel: one pre-filled declaration and three seller tiers keep every
          parcel declared, cut forms from 45 to 15 minutes, and release incentives only against matched
          payment.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Panel title="Three seller tiers">
          <Table head={["Tier", "Entry", "Checks", "Note"]} rows={TIERS} className="text-[11px]" />
          <Source>Source: research §15 | thresholds are a pilot hypothesis, not an existing customs category</Source>
        </Panel>

        <Panel title="One order: hand-offs today vs reformed">
          <ol className="flex flex-col gap-2 text-xs font-body">
            <li className="ink-border bg-alert/10 px-3 py-2"><span className="font-display font-bold text-alert">TODAY, 45 min &mdash;</span> IEC/GST/Udyam checks → invoice by hand → PBE-III/CSB-V filing → agent or CHA → return = import</li>
            <li className="ink-border bg-primary/10 px-3 py-2"><span className="font-display font-bold text-primary">AFTER, 15 min &mdash;</span> one seller ID at the desk → declaration pre-filled → risk engine scores it → return routed to a pooled point</li>
          </ol>
          <Source>Source: research §9, §12 | CSB-V, ICEGATE and DNK portals exist today; the desk layer is proposed</Source>
        </Panel>

        <Panel title="Declarations per 10,000 orders">
          <div className="grid grid-cols-2 gap-3">
            <div className="ink-border bg-alert/10 px-3 py-3 text-center">
              <div className="font-display font-extrabold text-2xl text-alert">{commas(DECLARATIONS.direct)}</div>
              <div className="font-body text-[11px] mt-1">Direct parcel, one each</div>
            </div>
            <div className="ink-border bg-primary/10 px-3 py-3 text-center">
              <div className="font-display font-extrabold text-2xl text-primary">{commas(DECLARATIONS.warehouse)}</div>
              <div className="font-body text-[11px] mt-1">Consolidated, 40/carton, 5/bill</div>
            </div>
          </div>
          <p className="font-body text-xs text-ink/70 mt-1">
            Customs sees fewer, better-targeted declarations on the graduation lane &mdash; it does not lose
            visibility on any parcel on the reformed direct lane, which stays declared one-for-one.
          </p>
          <Source>Source: team model 8fe043dc97, T9</Source>
        </Panel>
      </div>

      <div className="mt-4 ink-border bg-alert/10 p-4 md:p-5">
        <h4 className="font-display font-bold text-sm uppercase text-alert mb-2">Stated plainly, not buried in a footnote</h4>
        <ul className="flex flex-col gap-2 text-xs md:text-sm font-body text-ink/85">
          {CORRECTIONS.map((c) => (
            <li key={c.slice(0, 24)} className="flex gap-2">
              <span className="text-alert font-display font-bold shrink-0">&bull;</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
