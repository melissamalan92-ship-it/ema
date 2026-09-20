import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Container } from "@/components/ui/container";

const STATS = [
  {
    icon: CalendarCheck,
    title: "Founded in 1983",
    body: "Four decades of continuous practice, through every change in South African tax and company law.",
  },
  {
    icon: MapPin,
    title: "Five offices across South Africa",
    body: "From the Cape through to Johannesburg, so there's a team within reach of the businesses we look after.",
  },
  {
    icon: ShieldCheck,
    title: "SAIPA registered practice",
    body: "A registered professional practice and accredited training centre, bringing through the next generation of accountants.",
  },
];

export function AboutHero() {
  return (
    <section className="relative z-10 bg-navy-primary px-5 sm:px-8 lg:px-20 pb-10 lg:pb-20 lg:pb-44 pt-10 lg:pt-20 lg:pt-44">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-center gap-10 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5 text-left">
          <span className="font-body text-[15px] lg:text-[18px] text-cream/70">
            E Malan &amp; Associates
          </span>
          <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[54px] font-normal leading-[1.1] tracking-[-0.01em] text-cream">
            Four decades
            <br />
            of <em className="italic text-blue-accent">trusted</em>
            <br />
            accounting.
          </h1>
        </Reveal>

        <Reveal
          delay={120}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-cream/15 pt-5"
        >
          {STATS.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-start gap-2 border-l border-cream/15 pl-4 first:border-l-0 first:pl-0"
            >
              <stat.icon className="size-5 text-blue-accent" strokeWidth={1.75} />
              <h3 className="text-[13px] lg:text-[15px] font-semibold leading-tight text-cream">
                {stat.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.5] text-cream/70">
                {stat.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
