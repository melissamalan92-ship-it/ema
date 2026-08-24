import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { AppPreview } from "@/components/home/app-preview";
import { Locations } from "@/components/home/locations";
import { Cta } from "@/components/home/cta";
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
        backgroundColor: "#182c47",
        backgroundImage:
          "radial-gradient(ellipse 620px 480px at 8% 4%, rgba(208,224,223,0.5), transparent 48%), radial-gradient(ellipse 700px 560px at 12% 6%, rgba(67,117,205,0.32), transparent 58%), radial-gradient(ellipse 640px 520px at 14% 34%, rgba(143,176,255,0.22), transparent 55%), radial-gradient(ellipse 720px 600px at 82% 46%, rgba(67,117,205,0.24), transparent 55%), radial-gradient(ellipse 660px 540px at 18% 68%, rgba(208,224,223,0.16), transparent 55%), radial-gradient(ellipse 700px 560px at 78% 84%, rgba(51,70,108,0.3), transparent 58%), linear-gradient(180deg, #1c3252 0%, #101f2e 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative">
        <Nav />
        <Hero />
        <AppPreview />
        <Locations />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
