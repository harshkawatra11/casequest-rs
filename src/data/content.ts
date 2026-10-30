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

export const CORRECTIONS = [
  "The pooled-return-point-abroad mechanism (the ₹83 step of the uplift) has no confirmed legal basis in current Indian customs law today. Existing re-import law is consignment-wise, one export invoice and one airway bill per re-import. This report presents it as a policy ask for the compact to take to CBIC and DGFT, never as a mechanism already available.",
  "MSME export share and exporting-MSME counts are cited as ranges (about 46%; about 1.73 lakh) because primary sources disagree and no single PIB release settles either figure.",
  "The CBIC-cited 20–25% e-commerce export return rate is the model's primary seed for A10; a 2025 Lok Sabha reply gives a lower, conflicting 15–20% range.",
  "US postal duty basis for an India-origin parcel is presented as a range, not a single rate, because ad valorem, flat $80–200, a 10% Section 122 surcharge, and a 50%-of-FOB figure are all cited by different sources for different dates.",
];
