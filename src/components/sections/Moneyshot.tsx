import { Kpi, Table } from "@/components/ui/primitives";
import { WaterfallChart } from "@/components/charts/WaterfallChart";
import { WATERFALL_BASE } from "@/data/model";

export function Moneyshot() {
  return (
    <section id="verdict" className="scroll-mt-16 bg-primary text-white px-4 md:px-10 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto">
        <span className="bg-accent text-ink font-display font-bold text-xs md:text-sm uppercase px-3 py-1.5 ink-border-thick inline-block mb-5">
          Conclusively
        </span>
        <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-4xl mb-8">
          A portal, a subsidy or an exemption each fail the brief&rsquo;s own test &mdash; moving control from
          the parcel to the seller does not.
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div className="grid grid-cols-2 gap-3">
            <Kpi label="Today, base case" value="₹640" sub="seller contribution per order" />
            <Kpi label="Reformed, base case" value="₹1,038" sub="+₹398, +62%, no subsidy" />
            <Kpi label="Bear case floor" value="₹14 → ₹385" sub="even a bad year still clears" />
            <Kpi label="Bull case ceiling" value="₹1,209 → ₹1,623" sub="+₹414 at the top of the range" />
          </div>
          <div className="bg-surface-alt text-ink ink-border p-4 md:p-5">
            <h4 className="font-display font-bold text-sm uppercase text-primary mb-2">How ₹640 becomes ₹1,038, base case</h4>
            <WaterfallChart steps={WATERFALL_BASE} />
            <div className="mt-3">
              <Table
                head={["Step", "Per order"]}
                rows={WATERFALL_BASE.map(([n, v], i) => [n, i === 0 || i === WATERFALL_BASE.length - 1 ? `₹${v.toLocaleString("en-IN")}` : `+₹${v}`])}
              />
            </div>
          </div>
        </div>
        <p className="text-[11px] md:text-xs text-accent font-body font-medium mt-6">
          Source: team model, hash 8fe043dc97 (T2, T3, T5, T6) | all values are model outputs on a representative illustrative order, never a measurement of an actual seller
        </p>
      </div>
    </section>
  );
}
