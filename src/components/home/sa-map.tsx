"use client";

import { LOCATIONS } from "./locations-data";

type Props = {
  active: string | null;
  onSelect: (id: string) => void;
};

const ROUTE_ORDER = [
  "cptpeninsula",
  "capetown",
  "tygervalley",
  "paarl",
  "loxton",
  "joburg",
];

export function SAMap({ active, onSelect }: Props) {
  const byId = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));
  const routePoints = ROUTE_ORDER.map((id) => byId[id]);
  const linePath = routePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.mapX} ${p.mapY}`)
    .join(" ");

  return (
    <div className="relative w-full max-w-[420px]">
      <svg viewBox="0 0 420 400" className="w-full">
        <path
          d="M70,40 C130,26 220,24 280,32 C315,44 332,60 342,72 C368,96 388,120 392,142 C396,168 372,200 362,232 C352,266 326,296 300,322 C270,350 234,360 202,362 C168,364 138,368 120,372 C96,376 78,360 70,332 C62,304 44,282 34,252 C24,220 26,186 30,152 C34,120 42,84 54,60 C60,50 64,44 70,40 Z"
          fill="rgba(67,117,205,0.08)"
          stroke="rgba(253,255,248,0.28)"
          strokeWidth="1.5"
        />
        <path
          d="M232,208 C246,202 262,204 270,216 C278,228 276,242 264,248 C252,254 236,250 230,238 C224,226 224,214 232,208 Z"
          fill="rgba(16,31,46,0.35)"
          stroke="rgba(253,255,248,0.22)"
          strokeWidth="1"
        />

        <path
          d={linePath}
          fill="none"
          stroke="rgba(253,255,248,0.35)"
          strokeWidth="1.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />

        {LOCATIONS.map((loc) => {
          const isActive = active === loc.id;
          return (
            <g
              key={loc.id}
              onClick={() => onSelect(loc.id)}
              className="cursor-pointer"
            >
              <circle
                cx={loc.mapX}
                cy={loc.mapY}
                r="14"
                fill="transparent"
              />
              <circle
                cx={loc.mapX}
                cy={loc.mapY}
                r={isActive ? 7 : 5}
                fill={isActive ? "#4375cd" : "transparent"}
                stroke={isActive ? "#fdfff8" : "rgba(253,255,248,0.55)"}
                strokeWidth={isActive ? 2 : 1.5}
                className="transition-all duration-200"
              />
              <text
                x={loc.mapX}
                y={loc.mapY - 12}
                textAnchor="middle"
                className="pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  fill: isActive ? "#fdfff8" : "rgba(253,255,248,0.65)",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {loc.shortName}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
