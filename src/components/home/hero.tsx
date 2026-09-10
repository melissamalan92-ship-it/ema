import { ShieldCheck, Users, TrendingUp } from "lucide-react";
import { HeroVideo } from "./hero-video";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Established experience",
    body: "Trusted expertise built over more than 40 years.",
  },
  {
    icon: Users,
    title: "Personal relationships",
    body: "A personal approach for every client, never a template.",
  },
  {
    icon: TrendingUp,
    title: "Built for today",
    body: "Modern tools and practical support that move with you.",
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative z-10 bg-navy-primary px-10 pb-16 pt-24">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-[1fr_1.15fr] items-center gap-16">
        <div
          className="flex flex-col items-start gap-5 text-left opacity-0"
          style={{ animation: "reveal-up 900ms cubic-bezier(0.16,1,0.3,1) 100ms both" }}
        >
          <span className="font-body text-[18px] text-cream/70">E Malan &amp; Associates</span>
          <h1 className="max-w-[480px] font-serif text-[46px] font-normal leading-[1.12] tracking-[-0.01em] text-cream">
            Accounting services{" "}
            <em className="italic text-blue-accent">designed</em> for{" "}
            <em className="italic text-blue-accent">growth</em>.
          </h1>

          <div className="mt-3 grid w-full grid-cols-3 gap-5 border-t border-cream/15 pt-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-2 border-l border-cream/15 pl-4 first:border-l-0 first:pl-0"
              >
                <feature.icon className="size-5 text-blue-accent" strokeWidth={1.75} />
                <h3 className="text-[15px] font-semibold leading-tight text-cream">
                  {feature.title}
                </h3>
                <p className="font-body text-[13px] leading-[1.4] text-cream/70">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative -mr-16 -mb-[160px] opacity-0"
          style={{ animation: "reveal-up 1000ms cubic-bezier(0.16,1,0.3,1) 250ms both" }}
        >
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
