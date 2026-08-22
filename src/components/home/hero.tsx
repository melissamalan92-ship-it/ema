import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid max-w-[1180px] grid-cols-[1.3fr_1fr] items-center gap-16 px-10 pb-24 pt-16"
    >
      <div className="relative flex flex-col items-start gap-6 pl-10 text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-navy-secondary/25 px-4 py-[7px] text-xs font-semibold tracking-[0.08em] text-navy-secondary">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 L14.2 9.5 L22 12 L14.2 14.5 L12 22 L9.8 14.5 L2 12 L9.8 9.5 Z"
              fill="currentColor"
            />
          </svg>
          AVAILABLE FOR NEW CLIENTS
        </span>

        <h1 className="max-w-[560px] text-[38px] font-bold leading-[1.25] text-ink">
          Straightforward accounting,{" "}
          <span className="font-normal text-ink-soft">
            built for growth and long-term impact.
          </span>
        </h1>

        <p className="max-w-[480px] text-base leading-[1.7] text-ink-soft">
          For over four decades we&rsquo;ve paired old-fashioned diligence
          with modern financial thinking, so you always know exactly where
          you stand and where you&rsquo;re headed.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-navy-primary px-6 py-3 text-[15px] font-semibold text-bg-warm transition-opacity hover:opacity-90"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#services"
            className="flex items-center gap-2 rounded-full border border-navy-primary/30 px-6 py-3 text-[15px] font-semibold text-navy-primary transition-colors hover:bg-navy-primary/5"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-2">
        <Logo size="lg" variant="dark" />
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-soft">
          ESTABLISHED IN 1983
        </span>
      </div>
    </section>
  );
}
