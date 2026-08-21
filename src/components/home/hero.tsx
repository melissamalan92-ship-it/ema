import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid max-w-[1180px] grid-cols-[1.3fr_1fr] items-center gap-16 px-10 pb-24 pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[30%] top-[40px] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[90px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(253,255,248,0.35), rgba(143,176,255,0.18) 45%, transparent 75%)",
        }}
      />

      <div className="relative flex flex-col items-start gap-6 text-left">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
          [ From Complexity to Clarity ]
        </span>

        <h1 className="max-w-[560px] text-[38px] font-bold leading-[1.25] text-bg-warm">
          <span className="font-normal opacity-70">
            Straightforward accounting,
          </span>{" "}
          built for growth and long-term impact.
        </h1>

        <p className="max-w-[480px] text-base leading-[1.7] text-[#cddaf0]">
          For over four decades we&rsquo;ve paired old-fashioned diligence
          with modern financial thinking, so you always know exactly where
          you stand and where you&rsquo;re headed.
        </p>

        <Link
          href="#contact"
          className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-bg-warm hover:text-blue-accent"
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
      </div>

      <div className="relative flex justify-center">
        <Logo size="lg" variant="light" />
      </div>
    </section>
  );
}
