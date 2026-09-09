import { Logo } from "./logo";

export function Hero() {
  return (
    <section id="hero" className="relative bg-navy-primary px-10 pb-32 pt-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <Logo size="lg" variant="light" />
          <h1 className="max-w-[480px] font-serif text-[44px] font-normal leading-[1.2] text-bg-warm">
            Accounting services{" "}
            <em className="italic text-blue-accent">designed</em> for{" "}
            <em className="italic text-blue-accent">growth</em>.
          </h1>
          <span className="h-px w-24 bg-bg-warm/30" />
          <p className="font-body text-base text-bg-warm/70">
            Trusted expertise since 1983
          </p>
        </div>

        <div className="relative z-10 mb-[-220px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
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
