import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { Snapshot } from "@/components/home/snapshot";
import { Locations } from "@/components/home/locations";
import { Footer } from "@/components/home/footer";

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function Home() {
  return (
    <main
      className="relative min-w-[1040px] overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #d0e0df 0%, #4375cd 6%, #33466c 14%, #243b78 32%, #101f2e 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Nav />
        <Hero />
        <Snapshot />
        <Locations />
        <Footer />
      </div>
    </main>
  );
}
