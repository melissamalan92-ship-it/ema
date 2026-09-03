"use client";

import { useState } from "react";
import { SAMap } from "./sa-map";
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
    <section id="locations" className="px-10 pb-[100px] pt-[120px]">
      <div className="mx-auto flex max-w-[1180px] flex-row items-stretch gap-10">
        <div className="flex h-full w-full max-w-[420px] shrink-0 flex-col justify-between">
          <div className="flex flex-col items-start gap-4 text-left">
            <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
              [ Where To Find Us ]
            </span>
            <h2 className="inline-block border-b-2 border-blue-accent pb-2.5 font-serif text-[52px] font-normal text-bg-warm">
              Our Locations
            </h2>
            <p className="max-w-[440px] text-base leading-[1.6] text-bg-warm/70">
              Contact your nearest branch for more information on how we can
              help you, or click a pin to find out more.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[360px]">
              <SAMap active={active} onSelect={handleSelect} />
            </div>
          </div>
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
