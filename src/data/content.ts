// Static copy sourced from casequest-usme/research/casequest-research.md (hash 8fe043dc97,
// branch casequest-usme-build) and the Figma deck (GUWUkQ9gxWF1P9NeaBCgez). Numbers here must
// match src/data/model.ts; prose is adapted for a web reader, not copied verbatim from the PDF.

export const NAV_SECTIONS = [
  { id: "today", label: "Today" },
  { id: "verdict", label: "The verdict" },
  { id: "market", label: "The market" },
  { id: "simulator", label: "Play the numbers" },
  { id: "mechanism", label: "The mechanism" },
  { id: "filter", label: "Why not the obvious answer" },
  { id: "governance", label: "Coordination" },
  { id: "pilot", label: "The pilot" },
  { id: "risk", label: "Integrity" },
  { id: "sources", label: "Sources" },
];

export const TEAM = [
  { name: "Harsh Kawatra", institution: "Delhi Technological University", role: "Team Leader" },
  { name: "Dayita Arora", institution: "Delhi Technological University", role: "Member" },
];

export const CASE_REQUIREMENTS: [string, string, string][] = [
  ["R1", "Market and access dynamics", "Cluster export desk, pooled rate card, platform fee transparency, pooled return point abroad (a policy ask)"],
  ["R2", "Regulatory and process reform", "One pre-filled declaration, three seller tiers, incentives released only against matched payment"],
  ["R3", "Stakeholder and coordination strategy", "An Inter-Ministerial compact: one give-get matrix, one data link, a published monthly scorecard"],
  ["R4", "Pilot-driven innovation", "Six clusters, six products, 2,400 sellers, 12 months, two waves, four scale gates"],
];

export const REJECTED_OPTIONS: [string, string][] = [
  ["A new single-window export portal", "Duplicates ICEGATE, ECCS, DNK and DGFT systems already running; scores 2 on fiscal cost and 1 on time to deliver."],
  ["A freight subsidy per parcel", "Freight is only ₹1,000 of a ₹1,531 cost to serve; a subsidy is a standing exchequer cost that never improves with volume."],
  ["Exempting low-value parcels from checks", "Invites splitting and under-invoicing, the exact misuse the brief warns against; scores 1 on integrity, the lowest of any option."],
];

export const MSME_STATS: { label: string; value: string; note: string; source: string }[] = [
  { label: "MSME share of India's exports, FY25", value: "~46%", note: "45.79% (SBI) vs 48.55% (press); neither settled as official", source: "SBI research / press reporting" },
  { label: "Exporting MSMEs, FY25", value: "~1.73 lakh", note: "1,73,350 (Lok Sabha reply) vs 1,76,315 (SBI-sourced); up from 52,849 in FY21", source: "Lok Sabha unstarred reply" },
  { label: "India e-commerce exports, FY23", value: "$4–5 bn", note: "~0.9–1.1% of total merchandise exports", source: "EY-ASSOCHAM / Economic Survey" },
  { label: "Government e-commerce export target, FY30", value: "$200–300 bn", note: "Think-tank target runs higher, to $350bn, on a contested baseline", source: "GoI stated ambition" },
];

export const CHINA_COMPARISON: { label: string; china: string; india: string }[] = [
  { label: "Cross-border e-commerce exports, latest full year", china: "¥2.15 trillion (2024), +16.9% YoY", india: "$4–5 bn (FY23 estimate)" },
  { label: "Customs treatment", china: "Three supervision codes by shipment type (9610, 9710, 9810)", india: "One declaration process across routes, before this reform" },
  { label: "Overseas-warehouse export growth, latest half-year", china: "~3.3x YoY, H1 2026", india: "Warehousing beats today's parcel from ~10 orders/SKU/month; never beats the reformed parcel at unit level" },
];

export const REFORM_TIMELINE: [string, string, string][] = [
  ["12 Sep 2024", "Duty Drawback, RoDTEP, RoSCTL extended to courier exports", "Notification 60/2024-Customs (NT)"],
  ["15 Jan 2026", "Same benefits extended to postal e-commerce exports", "Postal Export Regulations amendment, form PBE III/IV"],
  ["1 Apr 2026", "₹10 lakh courier value cap removed; risk-based re-import route replaces manual verification", "Notification 33/2026 & 34/2026-Cus (NT)"],
  ["6 Apr 2026", "Upgraded Return-to-Origin functionality live in ECCS", "EICI advisory, 6 Apr 2026"],
  ["23 Jul 2026", "E-commerce exports exempted from inventory-model restrictions", "DPIIT Press Note 3 (2026 Series)"],
  ["5 Aug 2026", "Inventory-based export framework opens; Exporter-on-Record registration via ANF-9A", "DGFT Notification 27/2026-27"],
];

export const TIERS: [string, string, string, string][] = [
  ["Tier 1 — new seller", "Entry point, nothing known yet", "Full declaration, higher random examination", "Promotion needs 25 clean parcels or 3 clean months"],
  ["Tier 2 — established", "25+ clean parcels, 3 months matched payment", "Lower random examination, monthly consolidated incentive claim", "Demotion on any discrepancy"],
  ["Tier 3 — trusted exporter", "12 months clean, one physical verification", "Lowest examination rate, still inside a post-clearance audit sample", "Every parcel still declared, never exempted"],
];

export const GIVE_GET: [string, string, string, string][] = [
  ["DPIIT", "Convenes the compact, funds the pilot", "Export growth it can report to the committee", "Exporter count, scorecard adherence"],
  ["DGFT", "EOR rules, district-hub coordination", "New-firm formation data from the desks", "District export-hub activation rate"],
  ["CBIC", "Risk engine, seller-tier logic", "Item-level, seller-level declaration data", "Declaration error rate by tier"],
  ["Department of Posts", "Desks sited at DNKs, service reporting", "Parcel volume through its own network", "Ship-days, desk uptime"],
  ["RBI / AD banks", "Payment feed for matching", "Fewer open, unmatched bills", "Realisation rate"],
  ["GSTN", "Refund-match data", "Lower refund-fraud risk exposure", "Refund turnaround"],
  ["Platforms / EORs", "Published fee sheet, seller data access", "A larger, better-documented supply base", "Fee-sheet adherence"],
  ["Carriers", "Cluster rate card, tracked service", "Pooled, predictable volume", "Rate-card saving delivered"],
  ["Seller councils", "Recruitment, grievance representation", "A seat at the compact's table", "Grievances resolved in 2 weeks"],
];

export const CLUSTERS: { name: string; product: string; region: string }[] = [
  { name: "Jaipur", product: "Block print, handicrafts", region: "North" },
  { name: "Moradabad", product: "Brassware, metal craft", region: "North" },
  { name: "Varanasi", product: "Silk stoles, weaves", region: "East" },
  { name: "Kutch", product: "Embroidery (GI)", region: "West" },
  { name: "Channapatna", product: "Wooden toys (GI)", region: "South" },
  { name: "Agartala", product: "Cane and bamboo craft", region: "Northeast" },
];

export const PILOT_GATES: [string, string, string][] = [
  ["G1", "Month 2", "Rate card saves 5% or more"],
  ["G2", "Month 6", "Wave 1 seller margin up ₹200 or more"],
  ["G3", "Month 9", "Integrity discrepancy rate no worse than baseline"],
  ["G4", "Month 12", "3 of 4 KPI targets met"],
];

export const RISKS: [string, string, string][] = [
  ["Rate-card saving underperforms", "Pooled tender clears below the 12% base assumption", "Desk-only package still saves paperwork time; drop the freight claim for that lane"],
  ["Seller-tier misuse rises", "Discrepancy rate climbs after tier 2/3 promotion", "Tighten promotion thresholds at Gate 3; demotion is automatic on any flag"],
  ["Pooled-return legal basis is not granted", "CBIC/DGFT decline the policy ask", "Reformed lane still gains ₹315/order from paperwork + rate card alone (no returns pooling)"],
  ["Desk uptime slips", "Local staffing or DNK coordination lags", "Escalation clause: any blocker goes to the committee within two weeks"],
  ["Low uptake", "Sellers do not enrol at the modelled activation rate", "Bear-case pilot (25% activation) still returns positive seller gain"],
];

// Full risk register, research §28.1. Probability and impact are team judgement, 1 (low) to 3
// (high); score is their product. Ordered as in the source table.
export const RISK_REGISTER: { risk: string; probability: number; impact: number; mitigation: string; owner: string }[] = [
  { risk: "Rate card saves less than 5%, or carriers do not bid", probability: 2, impact: 3, mitigation: "Gate 1 in month 2; desk-only package if it fails; uplift falls to ₹278/order", owner: "Department of Posts, tender committee" },
  { risk: "Misuse rises among promoted sellers", probability: 2, impact: 3, mitigation: "Every parcel still declared; Gate 3 comparison; promotions paused on a fail; post-clearance audit even in tier 3", owner: "CBIC" },
  { risk: "No legal route for the pooled return point or monthly bill", probability: 3, impact: 2, mitigation: "Run returns under the existing risk-based re-import route; seek a pilot circular by month 2", owner: "CBIC" },
  { risk: "Low seller uptake; active share near the bear 25%", probability: 2, impact: 2, mitigation: "Local-language onboarding; desk does the first listing and filing; freight bridge for first parcels", owner: "District committees" },
  { risk: "Agency delays on the data link", probability: 2, impact: 2, mitigation: "Two-week escalation rule; manual match at the desk until the link is live", owner: "DPIIT, GSTN, DGFT" },
  { risk: "Platforms decline to publish a fee sheet or share seller data", probability: 2, impact: 1, mitigation: "Desk reconstructs fees from settlement reports; DGFT's existing platform MOU route", owner: "DGFT" },
  { risk: "Destination rules tighten further during the pilot", probability: 2, impact: 2, mitigation: "Desk keeps a destination rule sheet; duty treatment held equal across lanes in the model", owner: "DGFT" },
  { risk: "Desk capture: staff favour some sellers", probability: 1, impact: 2, mitigation: "Lottery for waves; published desk queue; evaluator audits a sample of desk files", owner: "Independent evaluator" },
  { risk: "Seller data misused or leaked", probability: 1, impact: 3, mitigation: "Data link holds identifiers only; scorecard publishes aggregates only", owner: "DPIIT" },
  { risk: "Model error: measured baseline far from ₹640", probability: 2, impact: 2, mitigation: "Gate tests run on measured baselines; model refitted after month 6", owner: "Independent evaluator" },
];

// RACI for the six core compact decisions, research §20.2. A = Accountable, R = Responsible,
// C = Consulted, I = Informed. CBIC keeps sole accountability for grading and clearance;
// DPIIT keeps it for the data link and the scorecard — deliberate, not an oversight.
export const RACI_ACTIVITIES = ["DPIIT", "DGFT", "CBIC", "DoP", "RBI / GSTN", "Platforms / carriers", "Sellers / councils"];
export const RACI_ROWS: [string, ...string[]][] = [
  ["Maintain the shared seller-ID data link", "A", "R", "C", "C", "R", "I", "I"],
  ["Grade a seller into tier 1, 2 or 3", "I", "C", "A/R", "I", "C", "I", "I"],
  ["Risk-score and clear a parcel", "I", "I", "A/R", "C", "I", "I", "I"],
  ["Run the pooled freight and returns tender", "A", "C", "I", "R", "I", "C", "I"],
  ["Release an incentive or refund", "I", "A/R", "C", "I", "R", "I", "I"],
  ["Publish the monthly scorecard", "A/R", "C", "C", "C", "C", "C", "I"],
];

// Seller-tier design checked against the existing AEO/Status Holder programme, research §15.4 —
// the honest finding is partial overlap in spirit, no overlap in mechanism.
export const AEO_COMPARISON: [string, string, string, string][] = [
  ["Liberalised MSME AEO Package (Circular 54/2020): relaxed AEO-T1/T2 eligibility, processing cut to 15 working days (T1) and 3 months (T2)", "A formal, named fast-track for MSMEs already exists nationally", "Our tier 2 and tier 3 share the same logic: lower scrutiny for a demonstrated clean record", "AEO is one national certification applied for once; our tiers are desk-level and automatic on the order record, no separate application"],
  ["MSME AEO documentary eligibility threshold is disputed across sources: 25 documents/year (EY) vs a relaxed 10-document MSME threshold", "Even the entry bar for the existing fast-track is unsettled in public sources", "None directly — a gap in the AEO literature, not in our design", "Our tier 1 entry needs no minimum document count; it is an onboarding check, not a volume-based eligibility test"],
  ["All AEO tiers are filed online through one national portal, aeoindia.gov.in", "AEO has its own system and application cycle", "We do not ask DGFT or CBIC to retire or replace it", "A seller moving a handful of parcels a month is unlikely to apply for national AEO on their own; our tiers sit below that threshold and feed into it"],
];

// Validation plan, research §29 — nothing below has been run; this is what we would gather
// before the committee meets, and the decision rule each piece of evidence triggers.
export const VALIDATION_PLAN: { respondent: string; count: string; tests: string }[] = [
  { respondent: "Sellers who export online today", count: "30 (5/cluster)", tests: "Minutes and money per parcel on forms, agents, booking; return rate (A07, A09, A10, A11)" },
  { respondent: "Sellers who sell in India but not abroad", count: "30 (5/cluster)", tests: "What stops them exporting; what a desk would need to do (uptake behind T11)" },
  { respondent: "Sellers who tried exporting and stopped", count: "12 (2/cluster)", tests: "Why they stopped; returns or paperwork decided it (A10, A11, A12)" },
  { respondent: "Women-owned and first-generation enterprises", count: "≥20, within the above", tests: "Barriers specific to them: travel, banking, documents (inclusion design)" },
  { respondent: "Courier and postal providers (5)", count: "5", tests: "Published and negotiated 0.5 kg rates; volume tiers (A05, A28)" },
  { respondent: "Return-handling 3PLs, US and UK", count: "3", tests: "Cost to receive, inspect, resell or hold a return (A21, A20, A31)" },
  { respondent: "Customs brokers and agents", count: "4", tests: "Fee per filing; time per filing (A09, A07)" },
  { respondent: "CBIC and DGFT officers (informational)", count: "4", tests: "Whether a pilot circular for pooled returns is feasible (A29, A31, the legal gap)" },
];
export const VALIDATION_TIME_STUDY = {
  summary: "A07 is the second-largest tornado bar (+₹38/−₹25); it rests on no primary measurement. The plan times 60 parcels: 30 filed by sellers today, 30 filed by a desk operator from order data, in two clusters.",
  rule: "Outside 30–75 minutes for A07, or above 25 minutes for A27: restate T6 and the pilot's desk staffing.",
};

export const CORRECTIONS = [
  "The pooled-return-point-abroad mechanism (the ₹83 step of the uplift) has no confirmed legal basis in current Indian customs law today. Existing re-import law is consignment-wise, one export invoice and one airway bill per re-import. This report presents it as a policy ask for the compact to take to CBIC and DGFT, never as a mechanism already available.",
  "MSME export share and exporting-MSME counts are cited as ranges (about 46%; about 1.73 lakh) because primary sources disagree and no single PIB release settles either figure.",
  "The CBIC-cited 20–25% e-commerce export return rate is the model's primary seed for A10; a 2025 Lok Sabha reply gives a lower, conflicting 15–20% range.",
  "US postal duty basis for an India-origin parcel is presented as a range, not a single rate, because ad valorem, flat $80–200, a 10% Section 122 surcharge, and a 50%-of-FOB figure are all cited by different sources for different dates.",
];
