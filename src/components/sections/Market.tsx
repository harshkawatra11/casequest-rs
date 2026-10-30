import { SectionChip, Headline, Source, Panel, Table } from "@/components/ui/primitives";
import { MSME_STATS, CHINA_COMPARISON, REFORM_TIMELINE } from "@/data/content";

export function Market() {
  return (
    <section id="market" className="scroll-mt-16 px-4 md:px-10 py-12 md:py-16 max-w-[1600px] mx-auto">
      <SectionChip>The market</SectionChip>
      <div className="mt-3 mb-8">
        <Headline>
          India makes the goods the world buys online, but ships them one costly parcel at a time &mdash;
          the gap to China&rsquo;s scale is process, not demand.
        </Headline>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Panel title="MSME export base and the e-commerce slice" className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-3">
            {MSME_STATS.map((m) => (
              <div key={m.label} className="ink-border bg-surface-dim p-3">
                <div className="font-display font-extrabold text-2xl text-primary">{m.value}</div>
                <div className="font-body text-xs font-semibold mt-1">{m.label}</div>
                <div className="font-body text-[11px] text-ink/60 mt-1">{m.note}</div>
              </div>
            ))}
          </div>
          <Source>Source: {MSME_STATS.map((m) => m.source).filter((v, i, a) => a.indexOf(v) === i).join(" | ")}</Source>
        </Panel>

        <Panel title="The 2026 reform clock">
          <ul className="flex flex-col gap-2">
            {REFORM_TIMELINE.map(([date, what]) => (
              <li key={date} className="flex gap-2 text-xs">
                <span className="font-display font-bold text-primary shrink-0 w-20">{date}</span>
                <span className="font-body text-ink/80">{what}</span>
              </li>
            ))}
          </ul>
          <Source>Source: CBIC & DGFT notifications, 2024-26; see Sources for instrument numbers</Source>
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="India against China: the scale a reformed system can reach">
          <Table
            head={["Measure", "China", "India"]}
            rows={CHINA_COMPARISON.map((c) => [c.label, c.china, c.india])}
          />
          <Source>Source: China customs briefings (F19, F22, F24, F25); India figures from research §3, model T5, T12</Source>
        </Panel>
      </div>
    </section>
  );
}
