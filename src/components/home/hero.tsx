import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-[22px] px-10 pb-24 pt-20 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40px] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[90px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(253,255,248,0.35), rgba(143,176,255,0.18) 45%, transparent 75%)",
        }}
      />

      <div className="relative mb-6">
        <Logo size="sm" variant="light" />
      </div>

      <h1 className="relative mx-auto max-w-[700px] font-sans text-[46px] font-semibold leading-[1.25] tracking-[-0.01em] text-bg-warm">
        Accounting and Financial Guidance to Grow and Protect What
        You&rsquo;ve Built
      </h1>

      <p className="relative mx-auto max-w-[560px] text-base leading-[1.7] text-[#cddaf0]">
        We provide practical accounting and financial guidance for
        individuals and businesses seeking long-term clarity and control.
      </p>

      <Link
        href="#contact"
        className="relative mt-2 inline-block rounded-full bg-blue-accent px-[30px] py-[14px] text-[15px] font-semibold text-bg-warm transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>
    </section>
  );
}
