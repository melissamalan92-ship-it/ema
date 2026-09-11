import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";
import { MediaPlaceholder } from "./media-placeholder";

export function DecadesSection() {
  return (
    <section className="bg-navy-primary px-10 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-[16px] text-cream/60">
            Our story
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Decades of experience.
            <br />
            Built for <em className="italic text-blue-accent">today</em>.
          </h2>
          <CtaLink href="/contact" variant="cream" className="mt-2">
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal delay={120} className="text-left">
          <p className="max-w-[460px] font-body text-[19px] leading-[1.6] text-cream/70">
            Established in 1983, EMA has worked across South Africa
            providing accounting, tax and advisory services to businesses
            of every size. We are a member of the South African Institute
            of Professional Accountants (SAIPA), and our commitment to
            understanding each client&rsquo;s individual needs has kept
            many relationships strong for over twenty years.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 items-center gap-16">
        <Reveal className="-ml-10">
          <MediaPlaceholder
            kind="image"
            label="Team / office photo placeholder"
            tone="light"
            className="aspect-[4/5] w-full overflow-hidden rounded-2xl"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-[16px] text-ink-soft">
            More than just accounting
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            More expertise,{" "}
            <br />
            <em className="italic text-blue-accent">under one roof.</em>
          </h2>
          <p className="max-w-[440px] font-body text-[19px] leading-[1.5] text-ink-soft">
            As EMA has grown, so has the expertise behind it. Our group
            brings together specialised teams across multiple branches,
            working together to provide integrated financial and business
            support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
