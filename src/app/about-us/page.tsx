import type { Metadata } from "next";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { AboutHero } from "@/components/about-us/about-hero";
import {
  WhoWeAre,
  TheGroup,
  TrainingAndIt,
  AboutContactCta,
} from "@/components/about-us/sections";

export const metadata: Metadata = {
  title: "About Us | EMA",
  description:
    "E Malan & Associates is a progressive firm of commercial and financial accountants, working for your company's future.",
};

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function AboutUsPage() {
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
        <AboutHero />
        <WhoWeAre />
        <TheGroup />
        <TrainingAndIt />
        <AboutContactCta />
        <Footer />
      </div>
    </main>
  );
}
