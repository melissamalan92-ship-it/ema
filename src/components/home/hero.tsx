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
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div
          className="reveal-group is-visible flex flex-col items-start justify-center gap-5 px-5 py-14 sm:px-8 lg:py-24 lg:pl-20 lg:pr-16 text-left"
          style={
            {
              "--reveal-duration": "900ms",
              "--reveal-delay": "100ms",
            } as React.CSSProperties
          }
        >
          <span className="font-body text-[18px] text-cream/70">E Malan &amp; Associates</span>
          <h1 className="max-w-[480px] font-serif text-[27px] sm:text-[32px] lg:text-[38px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Accounting services{" "}
            <em className="italic text-blue-accent">designed</em> for{" "}
            <em className="italic text-blue-accent">growth</em>.
          </h1>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 border-t border-cream/15 pt-4 sm:mt-20 sm:grid-cols-3 sm:gap-5 sm:pt-5">
            {FEATURES.map((feature) => (
              // On phones the icon sits inline with the title so each feature
              // is two tight rows instead of three stacked ones.
              <div
                key={feature.title}
                className="flex items-start gap-2.5 sm:flex-col sm:items-start sm:gap-2 sm:border-l sm:border-cream/15 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
              >
                <feature.icon
                  className="mt-[2px] size-4 shrink-0 text-blue-accent sm:mt-0 sm:size-5"
                  strokeWidth={1.75}
                />
                <div className="flex flex-col gap-0.5 sm:gap-2">
                  <h3 className="text-[13px] font-semibold leading-tight text-cream sm:text-[15px]">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[12px] leading-[1.4] text-cream/70 sm:w-[70%] sm:text-[13px]">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal-group is-visible relative h-[260px] sm:h-[380px] lg:h-auto"
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
