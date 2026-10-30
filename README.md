# CaseQuest 2026 — Small Parcels, Full Checks

Interactive companion site for Team IdeaForge's CaseQuest 2026 (USME, Delhi Technological University)
submission to DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports.

Keep every parcel declared, grade the seller instead of the parcel, and move the paperwork from the
seller to a cluster export desk. In the team's model, a ₹3,960 order earns the seller ₹1,038 instead of
₹640 (+62%), with no freight subsidy.

## What this is

A single-page, data-driven site built on top of the same unit-economics model that drives the research
document and the Figma deck:

- **Live number-play simulator** — nine assumption sliders, ranked by the model's own tornado test,
  recompute the seller's contribution per order live (today vs. the reformed parcel lane), and roll that
  gain up to a pilot-scale rupee-crore read.
- Market sizing, the 2026 reform timeline, the option filter against five alternatives, the
  cluster-desk / seller-tier mechanism, the Inter-Ministerial give-get matrix, the six-cluster pilot
  design, and the risk register — all sourced from the team's research and model, not restated by hand.
- Full research PDF and Figma deck linked from the Sources section.

## Source of truth

- Model: a direct TypeScript port of `casequest-usme/model/cq_model.py` (hash `8fe043dc97`,
  branch `casequest-usme-build` of `harshkawatra11/ppts-case-study`) — see `src/data/model.ts`,
  checked against `model_outputs.json` before this site was built.
- Copy and tables: `src/data/content.ts`, adapted from `casequest-usme/research/casequest-research.md`.
- Visual system: palette, type and layout pulled from the Figma deck at
  `https://www.figma.com/slides/GUWUkQ9gxWF1P9NeaBCgez`.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4, Radix UI primitives, Chart.js, Framer Motion.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Deployed on Vercel as `casequest-rs`.
