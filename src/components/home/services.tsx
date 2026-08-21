const SERVICES = [
  {
    title: "Accounting Services",
    description:
      "Accounting records, annual financial statements, and audit file support for your business.",
    icon: (
      <path
        d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z M15 3.5V7h3.5M8.5 12h7M8.5 15h7M8.5 9h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Taxation Services",
    description:
      "Income tax, VAT, employees' tax, and statutory levies handled end-to-end.",
    icon: (
      <>
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M17 7 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Payroll Administration",
    description:
      "Salary and wage processing, PAYE, IRP5s, and HR administration support.",
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
    title: "Corporate Secretarial & Legal",
    description:
      "Company registration, trust formation, and statutory compliance.",
    icon: (
      <>
        <path
          d="M12 3.5 4.5 7v3c0 5 3.2 8.3 7.5 10.5 4.3-2.2 7.5-5.5 7.5-10.5V7L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="m9 12 2 2 4-4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: "Business & Investment Consulting",
    description:
      "Entity formation, tax planning, and property investment advisory.",
    icon: (
      <path
        d="M4 18V9.5M9 18V6M14 18v-7M19 18V4M3.5 18h17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Accounting Software",
    description:
      "Setup and support across Xero, Sage, Pastel, and QuickBooks.",
    icon: (
      <>
        <rect
          x="3.5"
          y="5"
          width="17"
          height="11"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M8.5 20h7M12 16v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="px-10 py-[120px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
          [ What We Do ]
        </span>
        <h2 className="text-[38px] font-semibold leading-[1.25] text-bg-warm">
          Accounting services{" "}
          <em className="font-serif font-normal italic text-[#8fb0ff]">
            designed
          </em>{" "}
          for{" "}
          <em className="font-serif font-normal italic text-[#8fb0ff]">
            growth
          </em>
          .
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-[#cddaf0]">
          From day-to-day bookkeeping to business advisory, here&rsquo;s the
          full range of support we bring to every client relationship.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-4 rounded-[20px] border border-[rgba(253,255,248,0.16)] bg-[rgba(253,255,248,0.07)] p-7 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(16,31,46,0.55)] text-bg-warm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {service.icon}
              </svg>
            </span>
            <h3 className="text-[17px] font-semibold text-bg-warm">
              {service.title}
            </h3>
            <p className="text-sm leading-[1.6] text-[#cddaf0]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
