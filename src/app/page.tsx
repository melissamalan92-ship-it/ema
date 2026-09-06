import { Hero } from "@/components/home/hero";
import { AppPreview } from "@/components/home/app-preview";
import { Locations } from "@/components/home/locations";
import { ShoeFoundation } from "@/components/home/shoe-foundation";
import { Footer } from "@/components/home/footer";

// Snapshot (decade-slider calculator) is shelved for now per the client's
// request -- keeping the component in place so it's easy to bring back
// later. tax-calculator.tsx is the working version of the app teased
// above -- not wired in yet, look first. Services.tsx's card grid isn't
// rendered here anymore -- Hero absorbed the six services into its
// video-strip layout -- but it's kept intact for the future dedicated
// /services page the "More about our services" links point to.

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function Home() {
  return (
    <main
      className="relative min-w-[1040px] overflow-x-hidden"
      style={{
        backgroundColor: "#042144",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Hero />
        <Locations />
        <AppPreview />
        <ShoeFoundation />
        <Footer />
      </div>
    </main>
  );
}
