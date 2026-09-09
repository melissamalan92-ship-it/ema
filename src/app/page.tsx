import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Locations } from "@/components/home/locations";
import { Services } from "@/components/home/services";
import { AppPreview } from "@/components/home/app-preview";
import { ShoeFoundation } from "@/components/home/shoe-foundation";
import { Footer } from "@/components/home/footer";

// Snapshot (decade-slider calculator) and why-ema.tsx are shelved for now
// per the client's request -- keeping the components in place so they're
// easy to bring back later. tax-calculator.tsx is the working version of
// the app teased below -- not wired in yet, look first.

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function Home() {
  return (
    <main
      className="relative min-w-[1040px] overflow-x-hidden"
      style={{
        backgroundColor: "#243f4a",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Nav />
        <Hero />
        <About />
        <Locations />
        <Services />
        <AppPreview />
        <ShoeFoundation />
        <Footer />
      </div>
    </main>
  );
}
