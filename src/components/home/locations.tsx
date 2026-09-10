"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { LocationsBento } from "./locations-bento";
import { LocationCard } from "./location-card";
import { LOCATIONS } from "./locations-data";

export function Locations() {
  const [active, setActive] = useState<string | null>(null);
  const activeLocation = LOCATIONS.find((l) => l.id === active) ?? null;

  return (
    <section id="locations" className="bg-bg-warm py-20">
      <div className="relative mr-24 rounded-r-[32px] bg-navy-primary p-14 pl-10">
        <div className="grid grid-cols-2 items-start gap-16">
          <Reveal className="flex flex-col items-start gap-4 text-left">
            <span className="font-body text-[16px] text-cream/60">
              Where to find us
            </span>
            <h2 className="font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-cream">
              Our <em className="italic text-blue-accent">locations</em>.
            </h2>
            <p className="max-w-[400px] font-body text-[19px] leading-[1.5] text-cream/70">
              Contact your nearest branch for more information on how we can
              help you, or hover a photo to find out more.
            </p>
            <CtaLink href="#contact" variant="cream">
              Contact Us
            </CtaLink>
          </Reveal>

          <Reveal
            delay={120}
            onMouseLeave={() => setActive(null)}
            className="relative -mb-24 -mr-20 h-[540px] w-[calc(100%+5rem)]"
          >
            <LocationsBento onHover={setActive} />
            {activeLocation && (
              <LocationCard
                location={activeLocation}
                onClose={() => setActive(null)}
              />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
