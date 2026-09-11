import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { HeroVideo } from "@/components/home/hero-video";

const STATS = [
  {
    icon: CalendarCheck,
    content: (
      <>Founded in <strong className="font-semibold text-ink">1983</strong></>
    ),
  },
  {
    icon: MapPin,
    content: (
      <><strong className="font-semibold text-ink">Five</strong> offices across South Africa</>
    ),
  },
  {
    icon: ShieldCheck,
    content: (
      <><strong className="font-semibold text-ink">Saipa</strong> registered professional practice</>
    ),
  },
];

export function AboutHero() {
  return (
    <>
      <section className="relative z-10 bg-navy-primary px-10 pb-16 pt-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.15fr] items-center gap-16">
          <Reveal className="flex flex-col items-start gap-5 text-left">
            <span className="font-body text-[18px] text-cream/70">
              E Malan &amp; Associates
            </span>
            <h1 className="font-serif text-[54px] font-normal leading-[1.1] tracking-[-0.01em] text-cream">
              Four decades
              <br />
              of <em className="italic text-blue-accent">trusted</em>
              <br />
              accounting.
            </h1>
          </Reveal>

          <Reveal delay={120} className="relative -mb-24">
            <HeroVideo />
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-warm px-10 pb-16 pt-24">
        <Reveal className="mx-auto grid max-w-[1160px] grid-cols-3 gap-10">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-3 pl-10 text-left first:pl-0 ${
                i > 0 ? "border-l border-ink/15" : ""
              }`}
            >
              <stat.icon className="size-8 text-blue-accent" strokeWidth={1.5} />
              <p className="font-body text-[22px] leading-[1.4] text-ink-soft">
                {stat.content}
              </p>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
