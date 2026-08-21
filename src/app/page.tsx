import { Nav } from "@/components/home/nav";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Snapshot } from "@/components/home/snapshot";
import { Locations } from "@/components/home/locations";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-w-[1040px] overflow-x-hidden bg-bg-warm">
      <Nav />
      <Hero />
      <About />
      <Snapshot />
      <Locations />
      <Footer />
    </main>
  );
}
