// Formatters matching casequest-usme/model/cq_model.py exactly (Indian digit grouping, rupee sign).

export function inr(v: number, d = 0): string {
  const neg = v < 0;
  const s = Math.abs(v).toFixed(d);
  const [a0, b] = s.split(".");
  let a = a0;
  if (a.length > 3) {
    const head = a.slice(0, a.length - 3);
    const tail = a.slice(a.length - 3);
    const groups: string[] = [];
    let h = head;
    while (h.length > 2) {
      groups.unshift(h.slice(-2));
      h = h.slice(0, -2);
    }
    if (h) groups.unshift(h);
    a = groups.join(",") + "," + tail;
  }
  const r = a + (b ? "." + b : "");
  return (neg ? "−" : "") + "₹" + r;
}

export function pct(v: number, d = 0): string {
  return (v * 100).toFixed(d) + "%";
}

export function crore(v: number, d = 2): string {
  return "₹" + (v / 1e7).toFixed(d) + " crore";
}

export function lakh(v: number, d = 1): string {
  return "₹" + (v / 1e5).toFixed(d) + " lakh";
}

export function commas(v: number): string {
  // Indian grouping for plain integers (no currency sign), e.g. 1,73,350
  const neg = v < 0;
  let a = Math.round(Math.abs(v)).toString();
  if (a.length > 3) {
    const head = a.slice(0, a.length - 3);
    const tail = a.slice(a.length - 3);
    const groups: string[] = [];
    let h = head;
    while (h.length > 2) {
      groups.unshift(h.slice(-2));
      h = h.slice(0, -2);
    }
    if (h) groups.unshift(h);
    a = groups.join(",") + "," + tail;
  }
  return (neg ? "-" : "") + a;
}
