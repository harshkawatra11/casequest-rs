import { MindMap } from "@/components/charts/MindMap";
import { TEAM } from "@/data/content";
import { Table } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section id="today" className="scroll-mt-16 px-4 md:px-10 py-10 md:py-14 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-8">
        <span className="bg-primary text-white font-display font-bold text-xs md:text-sm uppercase px-3 py-1.5 ink-border-thick">CaseQuest 2026 | USME DTU</span>
        <span className="bg-accent text-ink font-display font-bold text-xs md:text-sm uppercase px-3 py-1.5 ink-border-thick">Team IdeaForge</span>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <div className="flex flex-col gap-5">
          <h1 className="font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
            <span className="block text-ink">SMALL PARCELS,</span>
            <span className="block text-primary">FULL CHECKS</span>
          </h1>
          <p className="font-body text-base md:text-lg text-ink/80 max-w-xl">
            A reform strategy for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports:
            keep every parcel declared, grade the seller instead of the parcel, and move the paperwork
            from the seller to a cluster export desk.
          </p>

          <div className="relative mt-2 max-w-xl">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-accent ink-border-thick" aria-hidden />
            <div className="relative ink-border bg-primary text-white p-5 md:p-6">
              <p className="font-display font-bold text-sm md:text-base uppercase leading-snug">
                Our answer: keep every parcel declared, grade the seller instead of inspecting the parcel,
                and move the paperwork from the seller to a cluster export desk.
              </p>
              <p className="font-body text-sm md:text-base mt-3 text-white/90">
                In our model: a ₹3,960 order earns the seller ₹1,038 instead of ₹640 (62% more),
                with no freight subsidy. Pilot: 6 clusters, 2,400 sellers, ₹3.58 crore.
              </p>
            </div>
          </div>

          <div className="mt-2 max-w-xl">
            <Table
              head={["Team member", "Institution", "Role"]}
              rows={TEAM.map((t) => [t.name, t.institution, t.role])}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-display font-bold text-primary uppercase text-sm md:text-base">
            Who decides whether a small parcel leaves India
          </p>
          <p className="font-body text-xs md:text-sm text-ink/70 max-w-md">
            MSMEs make about 46% of India&rsquo;s exports; e-commerce carries a small slice. Eight actors
            shape every parcel &mdash; this is the coordination problem section 20 solves.
          </p>
          <MindMap />
        </div>
      </div>
    </section>
  );
}
