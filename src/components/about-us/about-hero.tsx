import Link from "next/link";
import { CtaLink } from "@/components/home/cta-link";

export function AboutHero() {
  return (
    <section className="relative z-10 bg-navy-primary px-10 pb-20 pt-24">
      <div className="mx-auto flex max-w-[1160px] flex-col items-start gap-6 text-left">
        <span
          className="opacity-0 font-body text-[16px] text-cream/60"
          style={{ animation: "reveal-up 800ms cubic-bezier(0.16,1,0.3,1) 0ms both" }}
        >
          About Us
        </span>
        <h1
          className="opacity-0 max-w-[640px] font-serif text-[48px] font-normal leading-[1.15] tracking-[-0.01em] text-cream"
          style={{ animation: "reveal-up 900ms cubic-bezier(0.16,1,0.3,1) 100ms both" }}
        >
          Working for{" "}
          <em className="italic text-blue-accent">your company&rsquo;s</em>{" "}
          future.
        </h1>
        <div
          className="opacity-0 mt-2 flex flex-wrap items-center gap-6"
          style={{ animation: "reveal-up 900ms cubic-bezier(0.16,1,0.3,1) 200ms both" }}
        >
          <CtaLink href="#contact" variant="cream">
            Contact Us
          </CtaLink>
          <Link
            href="#services"
            className="group/link font-body text-[17px] text-cream/80 transition-colors hover:text-cream"
          >
            Our Services{" "}
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
