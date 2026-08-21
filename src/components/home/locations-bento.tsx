"use client";

import Image from "next/image";
import { LOCATIONS } from "./locations-data";

type Props = {
  active: string | null;
  onSelect: (id: string) => void;
};

const AREAS: Record<string, string> = {
  capetown: "capetown",
  joburg: "joburg",
  tygervalley: "tygervalley",
  paarl: "paarl",
  loxton: "loxton",
  cptpeninsula: "cptpeninsula",
};

export function LocationsBento({ active, onSelect }: Props) {
  return (
    <div
      className="grid h-full w-full gap-3"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gridTemplateAreas:
          '"capetown joburg tygervalley" "capetown paarl tygervalley" "loxton loxton cptpeninsula"',
      }}
    >
      {LOCATIONS.map((loc) => (
        <button
          key={loc.id}
          type="button"
          onClick={() => onSelect(loc.id)}
          style={{ gridArea: AREAS[loc.id] }}
          className="group relative overflow-hidden rounded-[14px] text-left"
        >
          <Image
            src={loc.image}
            alt={loc.shortName}
            fill
            sizes="220px"
            className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[rgba(16,31,46,0.45)] mix-blend-multiply" />
          <div
            className={`absolute inset-0 ring-inset transition-all ${
              active === loc.id
                ? "ring-2 ring-[rgba(253,255,248,0.7)]"
                : "ring-0"
            }`}
          />
          <span className="absolute bottom-3 left-3 font-serif text-sm italic text-bg-warm">
            {loc.shortName}
          </span>
        </button>
      ))}
    </div>
  );
}
