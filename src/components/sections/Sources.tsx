import { SectionChip, Headline, Panel, Table } from "@/components/ui/primitives";
import { CORRECTIONS } from "@/data/content";

const TAGS: [string, string, string][] = [
  ["[C-xx]", "Case fact", "Taken exactly as printed in the case document"],
  ["[S..]", "External fact, confirmed", "A named publisher, date and quote back the figure; conflicts shown, not resolved by guessing"],
  ["[A..]", "Model assumption, source-tested", "A bear-to-bull range, checked against a cited source where one exists"],
  ["[M] / [T..]", "Model output", "Arithmetic on the assumptions above, reproducible from the model source, never a survey finding"],
  ["team judgement", "Team scoring", "Disclosed plainly as our own weighting, e.g. the option filter in T13"],
];

export function Sources() {
  return (
    <section id="sources" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto">
      <SectionChip>Appendix &mdash; sources and method</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>Every number on this page traces to the case brief, a named source, or one model with 27 stated assumptions.</Headline>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-4">
        <Panel title="How a number is tagged">
          <Table head={["Tag", "Category", "What it means for the reader"]} rows={TAGS} className="text-[11px]" />
        </Panel>

        <Panel title="Corrections and honest limits, stated once, not buried">
          <ul className="flex flex-col gap-2.5">
            {CORRECTIONS.map((c) => (
              <li key={c.slice(0, 20)} className="ink-border bg-surface-dim px-3 py-2.5 text-xs font-body text-ink/80">
                {c}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/casequest-research.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-display font-bold text-xs md:text-sm uppercase px-4 py-2.5 ink-border-thick hover:bg-primary/90 transition-colors">
          Read the full research document →
        </a>
        <a href="/casequest-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-ink font-display font-bold text-xs md:text-sm uppercase px-4 py-2.5 ink-border-thick hover:bg-accent/80 transition-colors">
          Download the six-slide deck →
        </a>
        <a href="https://www.figma.com/slides/GUWUkQ9gxWF1P9NeaBCgez" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-surface-alt text-ink font-display font-bold text-xs md:text-sm uppercase px-4 py-2.5 ink-border hover:bg-surface-dim transition-colors">
          Open the Figma deck →
        </a>
      </div>
    </section>
  );
}
