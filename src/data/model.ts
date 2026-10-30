// Direct TypeScript port of casequest-usme/model/cq_model.py (hash 8fe043dc97, build branch
// casequest-usme-build). Every formula below must match the Python source exactly — this file
// drives the live "number play" simulator, so silent drift here would quietly falsify the deck's
// own numbers. See casequest-usme/model/model_outputs.json for the frozen reference output this
// was checked against at build time.

export type Scenario = "bear" | "base" | "bull";
export const SCENARIOS: Scenario[] = ["bear", "base", "bull"];

export interface Assumption {
  id: string;
  bear: number;
  base: number;
  bull: number;
  unit: string;
  basis: string;
}

// id -> [bear, base, bull, unit, basis]. Bear is always the value least favourable to the
// recommendation; this is a modelling convention, not a claim that bear is more "likely".
export const ASSUMPTIONS: Record<string, Assumption> = {
  A01: { id: "A01", bear: 88, base: 88, bull: 88, unit: "INR per USD", basis: "RBI reference rate, verify at freeze" },
  A02: { id: "A02", bear: 40, base: 45, bull: 50, unit: "USD retail price abroad", basis: "representative handmade decor or textile item" },
  A03: { id: "A03", bear: 0.5, base: 0.5, bull: 0.5, unit: "kg packed weight", basis: "representative item" },
  A04: { id: "A04", bear: 900, base: 800, bull: 750, unit: "INR seller product cost", basis: "cluster ex-works cost" },
  A05: { id: "A05", bear: 1100, base: 1000, bull: 900, unit: "INR direct parcel freight, 0.5 kg", basis: "India Post ITPS and courier aggregator quotes" },
  A06: { id: "A06", bear: 0.15, base: 0.15, bull: 0.15, unit: "platform referral share of retail", basis: "Amazon and Etsy fee pages" },
  A07: { id: "A07", bear: 60, base: 45, bull: 35, unit: "minutes of seller paperwork per direct parcel", basis: "case: forms, portals, agents" },
  A08: { id: "A08", bear: 150, base: 150, bull: 150, unit: "INR value of one seller hour", basis: "team assumption" },
  A09: { id: "A09", bear: 150, base: 120, bull: 100, unit: "INR agent or CHA fee per direct parcel", basis: "research lane E" },
  A10: { id: "A10", bear: 0.22, base: 0.2, bull: 0.18, unit: "return rate, direct parcel", basis: "CBIC cites 20% to 25% for e-commerce exports" },
  A11: { id: "A11", bear: 0.85, base: 0.8, bull: 0.75, unit: "share of direct returns abandoned abroad", basis: "sellers absorb the loss" },
  A12: { id: "A12", bear: 1500, base: 1300, bull: 1200, unit: "INR to bring one parcel back and clear it", basis: "return freight plus clearance" },
  A13: { id: "A13", bear: 450, base: 380, bull: 320, unit: "INR bulk air freight per chargeable kg, 100 kg+", basis: "forwarder benchmarks" },
  A14: { id: "A14", bear: 1.3, base: 1.25, bull: 1.2, unit: "chargeable-over-packed-weight factor", basis: "volumetric factor" },
  A15: { id: "A15", bear: 6.0, base: 5.5, bull: 5.0, unit: "USD destination last-mile per order", basis: "international postal / last-mile tables" },
  A16: { id: "A16", bear: 5.0, base: 4.5, bull: 4.0, unit: "USD warehouse pick, pack and storage per order", basis: "3PL and FBA fee tables" },
  A17: { id: "A17", bear: 0.1, base: 0.08, bull: 0.07, unit: "EOR or consolidator margin on product cost", basis: "research lane B" },
  A18: { id: "A18", bear: 10, base: 6, bull: 4, unit: "minutes of seller work per order, consolidated", basis: "batch pickup" },
  A19: { id: "A19", bear: 0.18, base: 0.15, bull: 0.12, unit: "return rate, warehouse lane", basis: "faster delivery, local returns" },
  A20: { id: "A20", bear: 0.5, base: 0.6, bull: 0.7, unit: "share of warehouse returns resold locally", basis: "research lane E" },
  A21: { id: "A21", bear: 4.0, base: 3.5, bull: 3.0, unit: "USD to process one local return", basis: "3PL tables" },
  A22: { id: "A22", bear: 0.1, base: 0.07, bull: 0.05, unit: "unsold stock written off, share of units shipped", basis: "inventory risk" },
  A23: { id: "A23", bear: 0.12, base: 0.11, bull: 0.1, unit: "annual working capital cost", basis: "MSME lending rates" },
  A24: { id: "A24", bear: 5, base: 4, bull: 3, unit: "months stock is held", basis: "turn assumption" },
  A25: { id: "A25", bear: 0, base: 0, bull: 0, unit: "destination duty/VAT difference between lanes", basis: "held equal; shown separately" },
  A26: { id: "A26", bear: 2500, base: 2500, bull: 2500, unit: "INR a month fixed per SKU, warehouse lane", basis: "3PL minimums" },
  A27: { id: "A27", bear: 25, base: 15, bull: 10, unit: "minutes of seller paperwork per parcel, cluster desk", basis: "research lane E" },
  A28: { id: "A28", bear: 0.05, base: 0.12, bull: 0.18, unit: "pooled rate-card saving on direct parcel freight", basis: "cluster tender" },
  A29: { id: "A29", bear: 1200, base: 950, bull: 800, unit: "INR to bring a parcel back, matched duty-free re-import", basis: "policy ask, no confirmed legal basis yet" },
  A31: { id: "A31", bear: 0.5, base: 0.65, bull: 0.8, unit: "share of direct returns routed to a pooled return point abroad", basis: "3PL return networks" },
};

// The sliders exposed to the reader in the simulator, ranked by the model's own tornado
// (largest swing on the reformed-minus-today uplift first). This is a curated subset of
// ASSUMPTIONS, not all 27 — the rest stay fixed at base so the simulator stays legible.
export const SIMULATOR_LEVERS = ["A28", "A07", "A09", "A27", "A31", "A05", "A04", "A10", "A02"] as const;
export type LeverId = (typeof SIMULATOR_LEVERS)[number];

export function baseValues(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const k in ASSUMPTIONS) out[k] = ASSUMPTIONS[k].base;
  return out;
}

export function scenarioValues(s: Scenario): Record<string, number> {
  const out: Record<string, number> = {};
  for (const k in ASSUMPTIONS) out[k] = ASSUMPTIONS[k][s];
  return out;
}

export interface LaneResult {
  price: number;
  fee: number;
  freight: number;
  admin: number;
  product: number;
  delivered: number;
  ret_loss: number;
  expected: number;
  cts: number;
  // warehouse-only extras
  lastmile?: number;
  fulfil?: number;
  eor?: number;
  wc?: number;
  writeoff?: number;
}

/** Today's direct parcel lane. */
export function computeDirect(v: Record<string, number>): LaneResult {
  const fx = v.A01;
  const price = v.A02 * fx;
  const fee = v.A06 * price;
  const admin = (v.A07 / 60) * v.A08 + v.A09;
  const fr = v.A05;
  const prod = v.A04;
  const delivered = price - fee - fr - admin - prod;
  const r = v.A10;
  const ab = v.A11;
  const lossAband = prod + fr + admin;
  const lossBack = v.A12 + fr + admin;
  const ret = ab * lossAband + (1 - ab) * lossBack;
  const expected = (1 - r) * delivered - r * ret;
  const cts = fr + admin + r * (ab * (fr + admin) + (1 - ab) * (v.A12 + fr + admin));
  return { price, fee, freight: fr, admin, product: prod, delivered, ret_loss: ret, expected, cts };
}

/** Consolidated overseas-warehouse lane. */
export function computeWarehouse(v: Record<string, number>): LaneResult {
  const fx = v.A01;
  const price = v.A02 * fx;
  const fee = v.A06 * price;
  const prod = v.A04;
  const fr = v.A13 * v.A03 * v.A14;
  const lm = v.A15 * fx;
  const ful = v.A16 * fx;
  const eor = v.A17 * prod;
  const admin = (v.A18 / 60) * v.A08;
  const wc = (prod * v.A23 * v.A24) / 12;
  const wo = (v.A22 * (prod + fr)) / (1 - v.A22);
  const delivered = price - fee - fr - lm - ful - eor - admin - prod - wc - wo;
  const r = v.A19;
  const rs = v.A20;
  const proc = v.A21 * fx;
  const lossResold = proc + lm;
  const lossScrap = proc + lm + prod + fr;
  const ret = rs * lossResold + (1 - rs) * lossScrap;
  const expected = (1 - r) * delivered - r * ret;
  const cts = fr + lm + ful + eor + admin + wc + wo + r * (proc + lm);
  return { price, fee, freight: fr, admin, product: prod, delivered, ret_loss: ret, expected, cts, lastmile: lm, fulfil: ful, eor, wc, writeoff: wo };
}

/** Reformed direct-parcel lane: cluster desk paperwork, pooled rate card, returns pooled abroad. */
export function computeReformed(v: Record<string, number>): LaneResult {
  const fx = v.A01;
  const price = v.A02 * fx;
  const fee = v.A06 * price;
  const prod = v.A04;
  const fr = v.A05 * (1 - v.A28);
  const admin = (v.A27 / 60) * v.A08;
  const delivered = price - fee - fr - admin - prod;
  const r = v.A10;
  const hub = v.A31;
  const rs = v.A20;
  const proc = v.A21 * v.A01;
  const hubLoss = fr + admin + proc + (1 - rs) * (v.A29 / 40);
  const ret = hub * hubLoss + (1 - hub) * (prod + fr + admin);
  const expected = (1 - r) * delivered - r * ret;
  const cts = fr + admin + r * (hub * (proc + (1 - rs) * (v.A29 / 40)));
  return { price, fee, freight: fr, admin, product: prod, delivered, ret_loss: ret, expected, cts };
}

export interface PilotResult {
  active: number;
  orders: number;
  gain: number;
  gmv: number;
  cost_per_active: number;
}

export const PILOT = { clusters: 6, sellersPerCluster: 400, wave1Share: 0.5, months: 12, sellers: 2400 };

export const ACT: Record<Scenario, number> = { bear: 0.25, base: 0.4, bull: 0.55 };
export const ORD_M: Record<Scenario, number> = { bear: 6, base: 10, bull: 15 };

export function computePilot(s: Scenario, gainPerOrder: number, price: number): PilotResult {
  const active = Math.round(PILOT.sellers * ACT[s]);
  const orders = active * ORD_M[s] * 6;
  const gain = orders * gainPerOrder;
  const gmv = orders * price;
  return { active, orders, gain, gmv, cost_per_active: BUDGET_TOTAL / active };
}

export const BUDGET: [string, number][] = [
  ["Cluster export desks (6 x 4 staff x 12 months)", 11_520_000],
  ["Seller onboarding, cataloguing, photography", 7_200_000],
  ["Data link and dashboard (IEC, GSTIN, Udyam, eBRC)", 6_000_000],
  ["First-shipment freight bridge (capped per seller)", 4_800_000],
  ["Independent evaluation", 3_000_000],
  ["Contingency (10%)", 3_252_000],
];
export const BUDGET_TOTAL = BUDGET.reduce((s, [, v]) => s + v, 0); // 35,772,000 = Rs 3.5772 crore

// ---- Precomputed reference outputs, frozen from model_outputs.json (hash 8fe043dc97) ----
// These feed static exhibits (tornado, sensitivity grid, option filter, pilot-by-scenario)
// that are not meant to move with the live sliders — the simulator recomputes direct/reformed/
// warehouse live from computeDirect/computeReformed/computeWarehouse above instead.

export const TORNADO: { id: string; label: string; atBear: number; atBull: number }[] = [
  { id: "A28", label: "Pooled rate-card saving on direct parcel freight", atBear: -70, atBull: 60 },
  { id: "A07", label: "Minutes of seller paperwork per direct parcel", atBear: 37.5, atBull: -25 },
  { id: "A09", label: "Agent or CHA fee per direct parcel", atBear: 30, atBull: -20 },
  { id: "A27", label: "Minutes of seller paperwork, cluster desk", atBear: -25, atBull: 12.5 },
  { id: "A31", label: "Share of returns routed to a pooled point abroad", atBear: -14.5, atBull: 14.5 },
  { id: "A05", label: "Direct parcel freight, 0.5 kg", atBear: 12, atBull: -12 },
  { id: "A04", label: "Seller product cost", atBear: 9, atBull: -4.5 },
  { id: "A10", label: "Return rate, direct parcel", atBear: 8.3, atBull: -8.3 },
];

export const SENSITIVITY_GRID = {
  returnRates: [0.1, 0.15, 0.2, 0.25, 0.3],
  freights: [800, 1000, 1200, 1400],
  // rows = return rate, cols = freight; today's direct-parcel expected contribution, base scenario else
  values: [
    [1187, 987, 787, 587],
    [1014, 814, 614, 414],
    [840, 640, 440, 240],
    [667, 467, 267, 67],
    [494, 294, 94, -106],
  ],
};

export const WATERFALL_BASE: [string, number][] = [
  ["Today's direct parcel", 640],
  ["Paperwork moved to the cluster desk", 195],
  ["Pooled rate card on freight", 120],
  ["Returns pooled abroad (policy ask)", 83],
  ["Reformed parcel lane", 1038],
];

export interface OptionScore {
  name: string;
  scores: number[]; // against OPTION_WEIGHTS, 1-5
  weighted: number;
  equal: number;
}
export const OPTION_WEIGHTS: [string, number][] = [
  ["Seller cost per order", 0.3],
  ["Customs and tax integrity", 0.25],
  ["Fiscal cost (5 = cheapest)", 0.15],
  ["Time to deliver", 0.15],
  ["Builds on the 2026 reforms", 0.15],
];
export const OPTIONS: OptionScore[] = [
  { name: "New single-window export portal", scores: [3, 3, 2, 1, 2], weighted: 2.4, equal: 2.2 },
  { name: "Freight subsidy per parcel", scores: [4, 2, 1, 4, 1], weighted: 2.6, equal: 2.4 },
  { name: "Exempt low-value parcels from checks", scores: [4, 1, 4, 4, 1], weighted: 2.8, equal: 2.8 },
  { name: "Government export marketplace", scores: [2, 3, 2, 1, 2], weighted: 2.1, equal: 2.0 },
  { name: "Overseas warehouses for every cluster", scores: [3, 4, 2, 2, 3], weighted: 2.95, equal: 2.8 },
  { name: "Cluster desk, seller tiers, pooled rates and returns", scores: [5, 4, 4, 4, 5], weighted: 4.45, equal: 4.4 },
];

export const SCENARIO_TABLE: Record<Scenario, { direct: number; reformed: number; warehouse: number }> = {
  bear: { direct: 14, reformed: 385, warehouse: 176 },
  base: { direct: 640, reformed: 1038, warehouse: 892 },
  bull: { direct: 1209, reformed: 1623, warehouse: 1532 },
};

export const PILOT_BY_SCENARIO: Record<Scenario, PilotResult> = {
  bear: { active: 600, orders: 21_600, gain: 8_012_088, gmv: 76_032_000, cost_per_active: 59_620 },
  base: { active: 960, orders: 57_600, gain: 22_908_960, gmv: 228_096_000, cost_per_active: 37_262 }, // Python round() is round-half-to-even on 37262.5; matches research T11
  bull: { active: 1320, orders: 118_800, gain: 49_167_756, gmv: 522_720_000, cost_per_active: 27_100 },
};

export const DECLARATIONS = { direct: 10_000, warehouse: 50 };

export const BREAKEVEN_ORDERS_PER_SKU_MONTH: Record<Scenario, number> = {
  bear: 15.4,
  base: 9.9,
  bull: 7.7,
};
