"use client";

import { useState } from "react";
import Link from "next/link";
import { LocationsBento } from "./locations-bento";
import { LocationCard } from "./location-card";
import { LOCATIONS } from "./locations-data";

export function Locations() {
  const [active, setActive] = useState<string | null>(null);

  const activeLocation = LOCATIONS.find((l) => l.id === active) ?? null;

  const handleSelect = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section id="locations" className="bg-navy-primary px-10 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ Where To Find Us ]
          </span>
          <h2 className="font-serif text-[40px] font-normal leading-[1.2] text-bg-warm">
            Our Locations
          </h2>
          <p className="max-w-[380px] font-body text-base leading-[1.7] text-bg-warm/70">
            Contact your nearest branch for more information on how we can
            help you, or click a pin to find out more.
          </p>
          <Link
            href="#contact"
            className="mt-1 rounded-lg bg-bg-warm px-7 py-3 text-sm font-semibold text-navy-primary transition-opacity hover:opacity-90"
          >
            Find out more
          </Link>
        </div>

        <div className="relative h-[480px] w-full">
          <LocationsBento active={active} onSelect={handleSelect} />
          {activeLocation && (
            <LocationCard
              location={activeLocation}
              onClose={() => setActive(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
