import Image from "next/image";
import { LOCATIONS } from "./locations-data";
import { LocationCard } from "./location-card";

const AREAS: Record<string, string> = {
  capetown: "capetown",
  joburg: "joburg",
  tygervalley: "tygervalley",
  paarl: "paarl",
  loxton: "loxton",
  cptpeninsula: "cptpeninsula",
};

type Props = {
  active: string | null;
  onHover: (id: string | null) => void;
};

export function LocationsBento({ active, onHover }: Props) {
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
        <div
          key={loc.id}
          onMouseEnter={() => onHover(loc.id)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(loc.id)}
          onBlur={() => onHover(null)}
          style={{ gridArea: AREAS[loc.id] }}
          className="group relative overflow-hidden rounded-[14px]"
        >
          <Image
            src={loc.image}
            alt={loc.shortName}
            fill
            sizes="260px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(36,63,74,0.55)] to-transparent" />
          <span className="absolute bottom-3 left-3 font-serif text-sm italic text-cream">
            {loc.shortName}
          </span>
          {active === loc.id && (
            <LocationCard location={loc} onClose={() => onHover(null)} />
          )}
        </div>
      ))}
    </div>
  );
}
