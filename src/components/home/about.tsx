import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export function About() {
  return (
    <section id="about" className="bg-bg-warm px-10 py-28">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[0.52fr_1fr] items-stretch gap-12">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-[21px] text-ink-soft">
            Trusted expertise since 1983
          </span>
          <h2 className="font-serif text-[73px] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
            More than
            <br />
            <em className="italic text-blue-accent">numbers</em>
          </h2>
          <CtaLink href="#contact" variant="dark" className="mt-10">
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start gap-6 border-l border-ink/20 pl-20 text-left"
        >
          <p className="mt-12 max-w-[665px] font-body text-[29px] leading-[1.35] text-ink">
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
