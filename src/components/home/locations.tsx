const locations = [
  { name: "Joburg", gradient: "linear-gradient(135deg, #243b78, #101f2e)" },
  { name: "Cape Town", gradient: "linear-gradient(120deg, #33466c, #101f2e)" },
  { name: "Paarl", gradient: "linear-gradient(150deg, #4375cd, #243b78)" },
  { name: "Tygervalley", gradient: "linear-gradient(110deg, #101f2e, #33466c)" },
  { name: "CPT Peninsula", gradient: "linear-gradient(140deg, #243b78, #33466c)" },
  { name: "Loxton CBD", gradient: "linear-gradient(160deg, #33466c, #4375cd)" },
];

export function Locations() {
  return (
    <section id="locations" className="bg-navy-dark px-10 pb-[100px] pt-[120px]">
      <div className="mx-auto mb-16 flex max-w-[1180px] flex-col items-center gap-4 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-bg-mint">
          [ Where To Find Us ]
        </span>
        <h2 className="inline-block border-b-2 border-blue-accent pb-2.5 font-serif text-[52px] font-normal text-bg-warm">
          Our Locations
        </h2>
        <p className="mt-2 max-w-[440px] text-base leading-[1.6] text-[#b7c2d6]">
          Contact your nearest branch for more information on how we can help
          you.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="relative h-[220px] overflow-hidden rounded-[10px]"
            style={{ background: loc.gradient }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
              }}
            />
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[rgba(253,255,248,0.55)] bg-[rgba(16,31,46,0.28)] px-5 py-[9px]">
              <span className="whitespace-nowrap font-serif text-xl italic text-bg-warm">
                {loc.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
