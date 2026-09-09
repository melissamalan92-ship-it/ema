import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export function About() {
  return (
    <section id="about" className="bg-bg-warm px-10 py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[0.6fr_1fr] items-center gap-12">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-sm text-ink-soft">
            Trusted expertise since 1983
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            More than{" "}
            <br />
            <em className="italic text-blue-accent">numbers</em>.
          </h2>
          <CtaLink href="#contact" variant="dark" className="mt-6">
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start gap-6 border-l border-ink/25 pl-12 text-left"
        >
          <p className="max-w-[440px] font-body text-base leading-[1.7] text-ink-soft">
            For over{" "}
            <em className="italic text-blue-accent">four decades</em>,
            we&rsquo;ve worked alongside businesses to navigate change, seize
            opportunities and build stronger futures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
