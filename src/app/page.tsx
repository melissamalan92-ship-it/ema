import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { AppPreview } from "@/components/home/app-preview";
import { Footer } from "@/components/home/footer";

// Snapshot (decade-slider calculator) and Locations (SA map + bento grid)
// are shelved for now per the client's request -- keeping the components
// in place so they're easy to bring back later. tax-calculator.tsx is the
// working version of the app teased below -- not wired in yet, look first.

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
        <div className="p-4 sm:p-6">
          <div className="overflow-hidden rounded-[32px] border-2 border-blue-accent bg-bg-warm shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
            <Nav />
            <Hero />
          </div>
        </div>
        <Services />
        <AppPreview />
        <Footer />
      </div>
    </main>
  );
}
