import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { MediaPlaceholder } from "./media-placeholder";

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

const DECADES = ["1980s", "1990s", "2000s"];

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
            <MediaPlaceholder
              kind="video"
              label="Hero video placeholder"
              className="aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/55 to-transparent px-8 pb-5 pt-12">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/25" />
                {DECADES.map((label, i) => (
                  <div key={label} className="relative z-10 flex flex-col items-center gap-2">
                    <span
                      className={`size-2.5 rounded-full ${i === 0 ? "bg-cream" : "bg-cream/35"}`}
                    />
                    <span
                      className={`font-body text-xs tracking-[0.05em] ${i === 0 ? "text-cream" : "text-cream/50"}`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
