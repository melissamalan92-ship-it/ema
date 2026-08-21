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
      <div className="mx-auto mb-16 flex max-w-[1180px] flex-col items-center gap-4 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-bg-mint">
          [ Where To Find Us ]
        </span>
        <h2 className="inline-block border-b-2 border-blue-accent pb-2.5 font-serif text-[52px] font-normal text-bg-warm">
          Our Locations
        </h2>
        <p className="mt-2 max-w-[440px] text-base leading-[1.6] text-[#b7c2d6]">
          Contact your nearest branch for more information on how we can help
          you, or click a pin to find out more.
        </p>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-10 lg:flex-row lg:items-stretch">
        <div className="flex w-full max-w-[420px] shrink-0 items-center justify-center">
          <SAMap active={active} onSelect={handleSelect} />
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
