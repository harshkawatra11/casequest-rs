import { SectionNav } from "@/components/nav/SectionNav";
import { Hero } from "@/components/sections/Hero";
import { Moneyshot } from "@/components/sections/Moneyshot";
import { Market } from "@/components/sections/Market";
import { Simulator } from "@/components/sections/Simulator";
import { Mechanism } from "@/components/sections/Mechanism";
import { OptionFilter } from "@/components/sections/OptionFilter";
import { Governance } from "@/components/sections/Governance";
import { Pilot } from "@/components/sections/Pilot";
import { Risk } from "@/components/sections/Risk";
import { Sources } from "@/components/sections/Sources";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SectionNav />
      <main className="flex-1">
        <Hero />
        <Moneyshot />
        <Market />
        <Simulator />
        <Mechanism />
        <OptionFilter />
        <Governance />
        <Pilot />
        <Risk />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
