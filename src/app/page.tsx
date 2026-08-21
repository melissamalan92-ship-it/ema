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
        backgroundColor: "#101f2e",
        backgroundImage:
          "radial-gradient(ellipse 480px 380px at 9% 5%, rgba(208,224,223,0.55), transparent 45%), radial-gradient(ellipse 560px 460px at 13% 7%, rgba(67,117,205,0.4), transparent 55%), radial-gradient(ellipse 640px 540px at 17% 6%, rgba(51,70,108,0.35), transparent 65%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
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
