const EASE = "transition-transform duration-500 ease-out";

const fillBox = { transformBox: "fill-box", transformOrigin: "center" } as const;
const fromLeft = { transformBox: "fill-box", transformOrigin: "left center" } as const;
const fromBottom = { transformBox: "fill-box", transformOrigin: "bottom" } as const;

// Motifs render complete at rest; hover only enriches them.
function Frame({ box, children }: { box: string; children: React.ReactNode }) {
  return (
    <svg viewBox={box} fill="none" aria-hidden="true" className="h-full w-full">
      {children}
    </svg>
  );
}

export function LedgerMotif() {
  const rows = [
    { y: 68, label: 38, value: 30 },
    { y: 84, label: 46, value: 22 },
    { y: 100, label: 32, value: 34 },
  ];
  return (
    <Frame box="43 13 167 138">
      <rect
        x="46"
        y="16"
        width="134"
        height="132"
        rx="9"
        className="fill-current opacity-[0.05]"
      />
      <rect x="46" y="16" width="134" height="132" rx="9" stroke="currentColor" strokeWidth="1.5" />

      <rect x="62" y="34" width="50" height="7" rx="3.5" className="fill-current opacity-30" />
      <rect x="140" y="34" width="24" height="7" rx="3.5" className="fill-blue-accent opacity-70" />
      <line x1="62" y1="54" x2="164" y2="54" stroke="currentColor" strokeWidth="1.5" />

      {rows.map((row, i) => (
        <g key={row.y}>
          <line
            x1="62"
            y1={row.y}
            x2={62 + row.label}
            y2={row.y}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x={164 - row.value}
            y={row.y - 3}
            width={row.value}
            height="6"
            rx="3"
            className={`fill-blue-accent opacity-40 ${EASE} group-hover:[transform:scaleX(1.25)]`}
            style={{
              transformBox: "fill-box",
              transformOrigin: "right center",
              transitionDelay: `${i * 70}ms`,
            }}
          />
        </g>
      ))}

      <line x1="62" y1="116" x2="164" y2="116" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="62"
        y1="120"
        x2="164"
        y2="120"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50"
      />
      <line
        x1="62"
        y1="132"
        x2="90"
        y2="132"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="126"
        y="127"
        width="38"
        height="9"
        rx="4.5"
        className={`fill-blue-accent ${EASE} group-hover:[transform:scaleX(1.12)]`}
        style={{ transformBox: "fill-box", transformOrigin: "right center" }}
      />

      <g className={`${EASE} group-hover:[transform:scale(1.12)]`} style={fillBox}>
        <circle cx="186" cy="122" r="21" className="fill-blue-accent" />
        <path
          d="M177 122l6 6 12-13"
          className="stroke-cream"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Frame>
  );
}

export function StatuteMotif() {
  return (
    <Frame box="31 15 183 127">
      <path d="M36 56 114 18l78 38Z" className="fill-current opacity-[0.07]" />
      <path
        d="M36 56 114 18l78 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="34" y1="56" x2="194" y2="56" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="46"
        y1="64"
        x2="182"
        y2="64"
        stroke="currentColor"
        strokeWidth="1.5"
        className="opacity-60"
      />

      {[56, 88, 120, 152].map((x, i) => (
        <g
          key={x}
          className={`${EASE} group-hover:[transform:scaleY(1.06)]`}
          style={{ ...fromBottom, transitionDelay: `${i * 60}ms` }}
        >
          <rect x={x} y="70" width="16" height="46" rx="2" className="fill-current opacity-[0.06]" />
          <rect x={x} y="70" width="16" height="46" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line
            x1={x + 5.5}
            y1="76"
            x2={x + 5.5}
            y2="110"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-40"
          />
          <line
            x1={x + 10.5}
            y1="76"
            x2={x + 10.5}
            y2="110"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-40"
          />
        </g>
      ))}

      <line x1="46" y1="122" x2="182" y2="122" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="34"
        y1="132"
        x2="194"
        y2="132"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <g
        className="transition-transform duration-700 ease-out group-hover:[transform:rotate(30deg)]"
        style={fillBox}
      >
        <circle cx="192" cy="120" r="19" className="fill-blue-accent opacity-20" />
        <circle
          cx="192"
          cy="120"
          r="19"
          className="stroke-blue-accent"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <circle cx="192" cy="120" r="10" className="fill-blue-accent" />
        <path
          d="M192 114l1.9 3.9 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6Z"
          className="fill-cream"
        />
      </g>
    </Frame>
  );
}

export function TaxMotif() {
  return (
    <Frame box="38.1 6.6 181.8 140.9">
      <path
        d="M52 18h96v118l-16-9-16 9-16-9-16 9-16-9-16 9Z"
        className="fill-current opacity-[0.05]"
      />
      <path
        d="M52 18h96v118l-16-9-16 9-16-9-16 9-16-9-16 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <rect x="66" y="34" width="44" height="8" rx="4" className="fill-current opacity-30" />
      <line
        x1="66"
        y1="54"
        x2="134"
        y2="54"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50"
      />

      {[
        { y: 68, w: 40, v: 18 },
        { y: 84, w: 52, v: 14 },
        { y: 100, w: 34, v: 22 },
      ].map((row, i) => (
        <g
          key={row.y}
          className={`${EASE} group-hover:[transform:translateX(4px)]`}
          style={{ ...fromLeft, transitionDelay: `${i * 70}ms` }}
        >
          <line
            x1="66"
            y1={row.y}
            x2={66 + row.w}
            y2={row.y}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x={134 - row.v}
            y={row.y - 3}
            width={row.v}
            height="6"
            rx="3"
            className="fill-blue-accent opacity-40"
          />
        </g>
      ))}

      <line x1="66" y1="114" x2="134" y2="114" stroke="currentColor" strokeWidth="1.5" />
      <rect x="104" y="120" width="30" height="8" rx="4" className="fill-blue-accent" />

      <g
        className="transition-transform duration-500 ease-out group-hover:[transform:translateY(-7px)_rotate(-10deg)]"
        style={fillBox}
      >
        <circle cx="172" cy="56" r="34" className="fill-blue-accent" />
        <circle cx="161" cy="45" r="6" className="fill-none stroke-cream" strokeWidth="2.8" />
        <circle cx="183" cy="67" r="6" className="fill-none stroke-cream" strokeWidth="2.8" />
        <line
          x1="187"
          y1="39"
          x2="157"
          y2="73"
          className="stroke-cream"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </g>
    </Frame>
  );
}

export function GrowthMotif() {
  const bars = [
    { x: 48, h: 34 },
    { x: 84, h: 52 },
    { x: 120, h: 44 },
    { x: 156, h: 74 },
  ];
  return (
    <Frame box="33 21 176 112">
      {[40, 66, 92, 118].map((y) => (
        <line
          key={y}
          x1="36"
          y1={y}
          x2="206"
          y2={y}
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-20"
        />
      ))}
      <line x1="36" y1="130" x2="206" y2="130" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36" y1="24" x2="36" y2="130" stroke="currentColor" strokeWidth="1.5" />

      {bars.map((bar, i) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={128 - bar.h}
          width="26"
          height={bar.h}
          rx="5"
          className={`${i === 3 ? "fill-blue-accent" : "fill-blue-accent opacity-30"} ${EASE} group-hover:[transform:scaleY(1.12)]`}
          style={{ ...fromBottom, transitionDelay: `${i * 70}ms` }}
        />
      ))}

      <g
        className="transition-transform duration-500 ease-out group-hover:[transform:translate(5px,-7px)]"
        style={fillBox}
      >
        <path
          d="M52 86 97 66l36 14 43-42"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M160 36h18v18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          { cx: 52, cy: 86 },
          { cx: 97, cy: 66 },
          { cx: 133, cy: 80 },
        ].map((dot) => (
          <circle
            key={dot.cx}
            cx={dot.cx}
            cy={dot.cy}
            r="4.5"
            className="fill-blue-accent stroke-current"
            strokeWidth="1.5"
          />
        ))}
      </g>
    </Frame>
  );
}

export function PayrollMotif() {
  return (
    <Frame box="31 3.6 178 143.4">
      <rect
        x="58"
        y="10"
        width="132"
        height="30"
        rx="8"
        className="fill-current opacity-[0.04]"
        transform="rotate(-3 124 25)"
      />
      {[26, 66, 106].map((y, i) => (
        <g
          key={y}
          className={`${EASE} group-hover:[transform:translateX(9px)]`}
          style={{ ...fromLeft, transitionDelay: `${i * 80}ms` }}
        >
          <rect
            x="34"
            y={y}
            width="172"
            height="38"
            rx="10"
            className="fill-current opacity-[0.05]"
          />
          <rect x="34" y={y} width="172" height="38" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="58" cy={y + 19} r="10" className="fill-current opacity-20" />
          <circle cx="58" cy={y + 19} r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="58" cy={y + 16} r="3.4" className="fill-current opacity-60" />
          <path
            d="M51.5 25.5a7 7 0 0 1 13 0"
            transform={`translate(0 ${y - 1})`}
            className="fill-current opacity-60"
          />
          <line
            x1="78"
            y1={y + 14}
            x2={i === 1 ? 134 : 118}
            y2={y + 14}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="78"
            y1={y + 25}
            x2="106"
            y2={y + 25}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-50"
          />
          <rect
            x="152"
            y={y + 11}
            width="42"
            height="16"
            rx="8"
            className={i === 0 ? "fill-blue-accent" : "fill-blue-accent opacity-35"}
          />
        </g>
      ))}
    </Frame>
  );
}

export function SoftwareMotif() {
  return (
    <Frame box="23 11 194 138">
      <rect x="26" y="14" width="188" height="132" rx="12" className="fill-current opacity-[0.04]" />
      <rect x="26" y="14" width="188" height="132" rx="12" stroke="currentColor" strokeWidth="1.5" />
      <line x1="26" y1="40" x2="214" y2="40" stroke="currentColor" strokeWidth="1.5" />
      {[40, 54, 68].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy="27"
          r="4"
          className={i === 0 ? "fill-blue-accent" : "fill-current opacity-30"}
        />
      ))}

      <line
        x1="72"
        y1="40"
        x2="72"
        y2="146"
        stroke="currentColor"
        strokeWidth="1.5"
        className="opacity-60"
      />
      {[56, 70, 84, 98].map((y, i) => (
        <rect
          key={y}
          x="38"
          y={y}
          width="24"
          height="5"
          rx="2.5"
          className={i === 0 ? "fill-blue-accent opacity-80" : "fill-current opacity-25"}
        />
      ))}

      <path
        d="M88 124 118 104l22 10 26-30 30-18v58Z"
        className="fill-blue-accent opacity-15"
      />
      <path
        d="M88 124 118 104l22 10 26-30 30-18"
        className="stroke-blue-accent"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        { cx: 118, cy: 104 },
        { cx: 166, cy: 84 },
        { cx: 196, cy: 66 },
      ].map((dot, i) => (
        <circle
          key={dot.cx}
          cx={dot.cx}
          cy={dot.cy}
          r="5"
          className={`fill-blue-accent ${EASE} group-hover:[transform:scale(1.5)]`}
          style={{ ...fillBox, transitionDelay: `${i * 80}ms` }}
        />
      ))}
      <line
        x1="88"
        y1="134"
        x2="140"
        y2="134"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-40"
      />
    </Frame>
  );
}
