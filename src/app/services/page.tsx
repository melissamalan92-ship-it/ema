import type { Metadata } from "next";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { TrainingSection } from "@/components/services/training-section";

export const metadata: Metadata = {
  title: "Services | EMA",
  description:
    "A full range of professional services to support your business at every stage.",
};

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function ServicesPage() {
  return (
    <main
      className="relative min-w-[1040px] overflow-x-hidden"
      style={{ backgroundColor: "#243f4a" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Nav />
        <ServicesHero />
        <ServicesGrid />
        <TrainingSection />
        <Footer />
      </div>
    </main>
  );
}
