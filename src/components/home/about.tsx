import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export function About() {
  return (
    <section id="about" className="bg-bg-warm px-10 py-28">
      <div className="mx-auto max-w-[1200px] border-t border-ink/10" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16 py-16">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ About EMA ]
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            More than{" "}
            <em className="italic text-blue-accent">numbers</em>.
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-start gap-6 text-left">
          <p className="max-w-[440px] font-body text-base leading-[1.7] text-ink-soft">
            For over four decades, we&rsquo;ve worked alongside businesses to
            navigate change, seize opportunities and build stronger futures.
          </p>
          <CtaLink href="#contact">Find out more</CtaLink>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-ink/10" />
    </section>
  );
}
