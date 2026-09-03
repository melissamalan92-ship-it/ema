const PILLARS = [
  {
    title: "Established experience",
    description: "Trusted expertise built over more than 40 years.",
    icon: (
      <path
        d="M12 3.5 4.5 7v3c0 5 3.2 8.3 7.5 10.5 4.3-2.2 7.5-5.5 7.5-10.5V7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Personal relationships",
    description: "Advice shaped around your business, not a template.",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M3.5 19c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M15.5 5.5a2.8 2.8 0 0 1 0 5.4M17.5 19c-.3-2.1-1.3-3.7-2.9-4.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: "Built for today",
    description: "Modern tools and practical support that moves with you.",
    icon: (
      <path
        d="m3 17 6-6 4 4 8-8M21 7v6M21 7h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function WhyEma() {
  return (
    <section className="bg-navy-secondary px-10 py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-4 pb-16 text-left">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
          [ Why EMA ]
        </span>
        <h2 className="max-w-[560px] text-[38px] font-semibold leading-[1.25] text-bg-warm">
          Experience behind you.{" "}
          <em className="font-serif font-normal italic text-blue-accent">
            Forward thinking beside you.
          </em>
        </h2>
        <p className="max-w-[560px] text-base leading-[1.7] text-bg-warm/70">
          For over four decades, EMA has helped businesses navigate change,
          make confident decisions and keep moving forward. We combine the
          experience of an established firm with the personal, practical
          support businesses need today.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-12">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="flex flex-col gap-3">
            <span className="text-bg-warm">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                {pillar.icon}
              </svg>
            </span>
            <h3 className="text-base font-semibold text-bg-warm">
              {pillar.title}
            </h3>
            <p className="text-sm leading-[1.6] text-bg-warm/70">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
