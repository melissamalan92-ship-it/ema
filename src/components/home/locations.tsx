"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { Container } from "@/components/ui/container";
import { LocationsBento } from "./locations-bento";

export function Locations() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="locations" className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-20">
      <Container>
      <div className="relative -mx-5 rounded-[24px] bg-navy-primary p-6 sm:-mx-8 lg:mx-0 lg:mr-24 lg:rounded-[32px] lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          <Reveal className="flex h-full flex-col items-start justify-start gap-4 text-left">
            <span className="font-body text-[14px] lg:text-[16px] text-cream/60">
              Where to find us
            </span>
            <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-cream">
              Our <em className="italic text-blue-accent">locations</em>.
            </h2>
            <p className="font-body text-[14px] leading-[1.6] text-cream/70 lg:max-w-[400px] lg:text-[16px]">
              Contact your nearest branch for more information on how we can
              help you, or click a photo to find out more. Each office is run by
              people who work with businesses in that area every day, so
              you&rsquo;re dealing with someone who knows your market. We&rsquo;re
              glad to meet in person, or to handle everything remotely if that
              suits you better.
            </p>
            <CtaLink href="/contact" variant="cream" className="mt-auto">
              Contact Us
            </CtaLink>
          </Reveal>

          <Reveal
            delay={120}
            className="relative h-[320px] w-full sm:h-[420px] lg:-mb-24 lg:-mr-20 lg:h-[540px] lg:w-[calc(100%+5rem)]"
          >
            <LocationsBento active={active} onSelect={setActive} />
          </Reveal>
        </div>
      </div>
      </Container>
    </section>
  );
}
