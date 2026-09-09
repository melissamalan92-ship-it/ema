import { Logo } from "./logo";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy-primary px-10 pb-32 pt-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-[560px] w-[560px] rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "var(--blue-accent)" }}
      />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div
          className="flex flex-col items-start gap-6 text-left opacity-0"
          style={{ animation: "reveal-up 900ms cubic-bezier(0.16,1,0.3,1) 100ms both" }}
        >
          <Logo size="lg" variant="light" />
          <h1 className="max-w-[480px] font-serif text-[48px] font-normal leading-[1.12] tracking-[-0.01em] text-bg-warm">
            Accounting services{" "}
            <em className="italic text-blue-accent">designed</em> for{" "}
            <em className="italic text-blue-accent">growth</em>.
          </h1>
          <span className="h-px w-24 bg-bg-warm/30" />
          <p className="font-body text-base text-bg-warm/70">
            Trusted expertise since 1983
          </p>
        </div>

        <div
          className="relative z-10 mb-[-220px] opacity-0"
          style={{ animation: "reveal-up 1000ms cubic-bezier(0.16,1,0.3,1) 250ms both" }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
            <video
              src="/images/EMA video 2000's.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
