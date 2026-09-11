import type { Metadata } from "next";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { ShoeFoundationHero } from "@/components/shoe-foundation/shoe-foundation-hero";
import { AboutSection } from "@/components/shoe-foundation/about-section";
import { DonationMeaningSection } from "@/components/shoe-foundation/donation-meaning-section";
import { DonateOptionsSection } from "@/components/shoe-foundation/donate-options-section";
import { ScholarMessageSection } from "@/components/shoe-foundation/scholar-message-section";
import { TestimonialsSection } from "@/components/shoe-foundation/testimonials-section";
import { ShoeContactSection } from "@/components/shoe-foundation/shoe-contact-section";

export const metadata: Metadata = {
  title: "The Shoe Foundation | EMA",
  description:
    "The Shoe Foundation helps learners complete their education, one pair of shoes at a time.",
};

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function ShoeFoundationPage() {
  return (
    <main
      className="relative min-w-[1040px] overflow-x-hidden"
      style={{ backgroundColor: "#496c74" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Nav />
        <ShoeFoundationHero />
        <AboutSection />
        <DonationMeaningSection />
        <DonateOptionsSection />
        <ScholarMessageSection />
        <TestimonialsSection />
        <ShoeContactSection />
        <Footer />
      </div>
    </main>
  );
}
