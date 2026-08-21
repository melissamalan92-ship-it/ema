import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Snapshot } from "@/components/home/snapshot";
import { Locations } from "@/components/home/locations";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-w-[1040px] overflow-x-hidden bg-bg-warm">
      <div
        className="relative overflow-hidden pb-24"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 700px 550px at 12% 92%, rgba(67,117,205,0.55), transparent 60%), radial-gradient(ellipse 650px 500px at 92% 4%, rgba(51,70,108,0.65), transparent 60%), linear-gradient(165deg, #243b78 0%, #101f2e 100%)",
        }}
      >
        <Nav />
        <Hero />
      </div>
      <About />
      <Snapshot />
      <Locations />
      <Footer />
    </main>
  );
}
