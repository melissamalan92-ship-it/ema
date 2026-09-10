import Link from "next/link";
import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";

const GROUP_ENTITIES = [
  "E Malan & Associates (Johannesburg)",
  "EMA Cape Town",
  "EMA Peninsula",
  "EMA Tygervalley",
  "EMA Paarl",
  "Loxton Consulting",
];

export function WhoWeAre() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[0.58fr_1fr] items-stretch gap-12">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-[16px] text-ink-soft">
            Professional services
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            More than{" "}
            <br />
            <em className="italic text-blue-accent">three decades</em> of
            expertise.
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start justify-center gap-4 border-l border-ink/20 pl-16 text-left"
        >
          <p className="max-w-[480px] font-body text-[19px] leading-[1.5] text-ink">
            We&rsquo;re a progressive firm of commercial and financial
            accountants, with branches across Johannesburg and the Western
            Cape.
          </p>
          <p className="max-w-[480px] font-body text-[19px] leading-[1.5] text-ink-soft">
            We&rsquo;re proud members of the South African Institute of
            Professional Accountants (SAIPA).
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function TheGroup() {
  return (
    <section className="bg-navy-primary px-10 py-24">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="flex max-w-[560px] flex-col items-start gap-4 text-left">
          <span className="font-body text-[16px] text-cream/60">
            The EMA Group
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            One team,{" "}
            <em className="italic text-blue-accent">six entities</em>.
          </h2>
          <p className="font-body text-[19px] leading-[1.5] text-cream/70">
            As we&rsquo;ve grown, we&rsquo;ve organised into focused entities
            under one group &mdash; each delivering the same integrated
            accounting and tax service, wherever you&rsquo;re based.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 grid grid-cols-3 gap-x-8 gap-y-5 border-t border-cream/15 pt-10"
        >
          {GROUP_ENTITIES.map((entity) => (
            <div key={entity} className="flex items-center gap-3">
              <span className="size-1.5 shrink-0 rounded-full bg-blue-accent" />
              <span className="font-body text-[16px] text-cream/85">
                {entity}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function TrainingAndIt() {
  return (
    <section className="border-t border-ink/10 bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-start gap-16">
        <Reveal className="flex flex-col items-start gap-3 text-left">
          <span className="font-body text-[16px] text-ink-soft">
            Training
          </span>
          <h3 className="font-serif text-[28px] font-normal leading-[1.2] text-ink">
            Growing our own{" "}
            <em className="italic text-blue-accent">accountants</em>.
          </h3>
          <p className="max-w-[420px] font-body text-[17px] leading-[1.5] text-ink-soft">
            As an accredited SAIPA training centre, we offer a three-year
            FASSET learnership, giving candidate accountants the practical
            experience they need to qualify.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-start gap-3 text-left">
          <span className="font-body text-[16px] text-ink-soft">
            IT services
          </span>
          <h3 className="font-serif text-[28px] font-normal leading-[1.2] text-ink">
            Support beyond the{" "}
            <em className="italic text-blue-accent">numbers</em>.
          </h3>
          <p className="max-w-[420px] font-body text-[17px] leading-[1.5] text-ink-soft">
            Our IT division, EMA Connect, handles support and infrastructure
            for clients who need more than accounting.
          </p>
          <Link
            href="https://www.emaconnectit.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link font-body text-[16px] font-semibold text-ink transition-colors hover:text-blue-accent"
          >
            Visit EMA Connect{" "}
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutContactCta() {
  return (
    <section className="bg-navy-primary px-10 py-24">
      <div className="mx-auto flex max-w-[1160px] flex-col items-start gap-6 text-left">
        <Reveal className="flex flex-col items-start gap-4">
          <h2 className="font-serif text-[36px] font-normal leading-[1.2] tracking-[-0.01em] text-cream">
            Let&rsquo;s talk about{" "}
            <em className="italic text-blue-accent">your business</em>.
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-6">
            <CtaLink href="#contact" variant="cream">
              Contact Us
            </CtaLink>
            <Link
              href="https://www.linkedin.com/company/emalan&associates/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[17px] text-cream/80 transition-colors hover:text-cream"
            >
              LinkedIn
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
