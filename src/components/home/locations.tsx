import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { LocationsBento } from "./locations-bento";

export function Locations() {
  return (
    <section id="locations" className="bg-navy-primary px-10 py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-body text-[16px] text-cream/60">
            Where to find us
          </span>
          <h2 className="font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            Our <em className="italic text-blue-accent">locations</em>.
          </h2>
          <p className="max-w-[400px] font-body text-[19px] leading-[1.5] text-cream/70">
            Contact your nearest branch for more information on how we can
            help you.
          </p>
          <CtaLink href="#contact" variant="cream">
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal delay={120} className="h-[420px] w-full">
          <LocationsBento />
        </Reveal>
      </div>
    </section>
  );
}
