import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";

export const SERVICES = [
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
        <rect x="6" y="3" width="12" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="8" y="5.5" width="8" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="8.5" cy="12" r="0.9" fill="currentColor" />
        <circle cx="12" cy="12" r="0.9" fill="currentColor" />
        <circle cx="15.5" cy="12" r="0.9" fill="currentColor" />
        <circle cx="8.5" cy="15.5" r="0.9" fill="currentColor" />
        <circle cx="12" cy="15.5" r="0.9" fill="currentColor" />
        <circle cx="15.5" cy="15.5" r="0.9" fill="currentColor" />
        <circle cx="8.5" cy="19" r="0.9" fill="currentColor" />
        <circle cx="12" cy="19" r="0.9" fill="currentColor" />
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
      <path
        d="M4 9 12 4l8 5M5 9h14M6 9v9M9 9v9M12 9v9M15 9v9M18 9v9M4 20h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
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
    <section id="services" className="bg-bg-warm px-10 py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-16">
        <div className="grid grid-cols-3 gap-x-5 gap-y-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink/10 hover:bg-white hover:shadow-[0_20px_40px_-25px_rgba(16,38,62,0.35)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-primary text-bg-warm transition-colors duration-300 group-hover:bg-blue-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  {service.icon}
                </svg>
              </span>
              <h3 className="text-sm font-semibold leading-[1.4] text-ink">
                {service.title}
              </h3>
              <p className="font-body text-xs leading-[1.6] text-ink-soft">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ What We Do ]
          </span>
          <h2 className="font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Everything your{" "}
            <em className="italic text-blue-accent">business</em> needs to{" "}
            <em className="italic text-blue-accent">grow</em>.
          </h2>
          <p className="max-w-[420px] font-body text-base leading-[1.7] text-ink-soft">
            We offer a full range of professional services to support your
            business at every stage.
          </p>
          <CtaLink href="/services">Find out more</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
