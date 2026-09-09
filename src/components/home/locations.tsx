import Image from "next/image";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export function Locations() {
  return (
    <section id="locations" className="bg-navy-primary px-10 py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Where To Find Us ]
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-bg-warm">
            Our Locations
          </h2>
          <p className="max-w-[380px] font-body text-base leading-[1.7] text-bg-warm/70">
            Contact your nearest branch for more information on how we can
            help you.
          </p>
          <CtaLink href="#contact" variant="light">
            Find out more
          </CtaLink>
        </Reveal>

        <Reveal
          delay={120}
          className="group relative aspect-[772/682] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
        >
          <Image
            src="/images/Locations- colour.png"
            alt="EMA locations across South Africa"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  );
}
