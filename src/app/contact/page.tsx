import type { Metadata } from "next";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { ContactHero } from "@/components/contact/contact-hero";
import { BranchList } from "@/components/contact/branch-list";
import { ContactFormSection } from "@/components/contact/contact-form-section";

export const metadata: Metadata = {
  title: "Contact | EMA",
  description:
    "Find your nearest EMA branch, or get in touch for general enquiries.",
};

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function ContactPage() {
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
        <ContactHero />
        <BranchList />
        <ContactFormSection />
        <Footer />
      </div>
    </main>
  );
}
