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
    <section id="hero" className="relative z-10 bg-navy-primary pb-[104px]">
      <div className="relative grid grid-cols-2 items-stretch">
        <div
          className="reveal-group is-visible flex flex-col items-start justify-center gap-5 py-24 pl-20 pr-16 text-left"
          style={
            {
              "--reveal-duration": "900ms",
              "--reveal-delay": "100ms",
            } as React.CSSProperties
          }
        >
          <span className="font-body text-[18px] text-cream/70">E Malan &amp; Associates</span>
          <h1 className="max-w-[480px] font-serif text-[38px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Accounting services{" "}
            <em className="italic text-blue-accent">designed</em> for{" "}
            <em className="italic text-blue-accent">growth</em>.
          </h1>

          <div className="mt-20 grid w-full grid-cols-3 gap-5 border-t border-cream/15 pt-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-2 border-l border-cream/15 pl-4 first:border-l-0 first:pl-0"
              >
                <feature.icon className="size-5 text-blue-accent" strokeWidth={1.75} />
                <h3 className="text-[15px] font-semibold leading-tight text-cream">
                  {feature.title}
                </h3>
                <p className="w-[70%] font-body text-[13px] leading-[1.4] text-cream/70">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal-group is-visible relative"
          style={
            {
              "--reveal-duration": "1000ms",
              "--reveal-delay": "250ms",
            } as React.CSSProperties
          }
        >
          {/* Inset 5% top and bottom so the panel sits inside the banner
              rather than running flush to its edges. */}
          <HeroVideo className="absolute inset-x-0 top-[5%] h-[90%] w-full rounded-[24px]" />
        </div>
      </div>
    </section>
  );
}
