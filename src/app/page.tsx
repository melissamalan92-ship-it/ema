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
        backgroundImage:
          "radial-gradient(ellipse 620px 480px at 8% 4%, rgba(244,240,232,0.14), transparent 48%), radial-gradient(ellipse 700px 560px at 12% 6%, rgba(133,182,219,0.28), transparent 58%), radial-gradient(ellipse 640px 520px at 14% 34%, rgba(133,182,219,0.18), transparent 55%), radial-gradient(ellipse 720px 600px at 82% 46%, rgba(89,114,134,0.35), transparent 55%), radial-gradient(ellipse 660px 540px at 18% 68%, rgba(244,240,232,0.08), transparent 55%), radial-gradient(ellipse 700px 560px at 78% 84%, rgba(89,114,134,0.3), transparent 58%), linear-gradient(180deg, #0a2d54 0%, #042144 100%)",
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
