import { TEAM } from "@/data/content";
import { Table } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer className="bg-primary text-white px-4 md:px-10 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl">
          Keep every parcel declared. Grade the seller, not the parcel. Move the paperwork to the desk.
        </h2>
        <p className="font-body text-sm md:text-base text-white/80 max-w-2xl">
          Prepared for CaseQuest 2026, USME, Delhi Technological University, for DPIIT and the 2026
          Inter-Ministerial Committee on E-Commerce Exports.
        </p>
        <div className="max-w-xl">
          <div className="bg-surface-alt p-1 ink-border-thick">
            <Table head={["Team member", "Institution", "Role"]} rows={TEAM.map((t) => [t.name, t.institution, t.role])} />
          </div>
        </div>
        <p className="font-body text-xs text-white/50">
          Built from casequest-usme (branch casequest-usme-build, hash 8fe043dc97) and the Figma deck
          GUWUkQ9gxWF1P9NeaBCgez. Every figure on this site is reproducible from model/cq_model.py.
        </p>
      </div>
    </footer>
  );
}
