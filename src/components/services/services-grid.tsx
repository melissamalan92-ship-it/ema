import { SERVICES as SERVICE_ICONS } from "@/components/home/services";
import { Reveal } from "@/components/home/reveal";

function iconFor(title: string) {
  return SERVICE_ICONS.find((s) => s.title === title)?.icon ?? null;
}

const SERVICES = [
  {
    title: "Accounting Services",
    description:
      "Accurate, up-to-date financial records that give you a clear picture of where your business stands — and the confidence to make decisions from it.",
    items: [
      "Accounting records & bookkeeping",
      "Annual financial statements",
      "Management accounts",
    ],
  },
  {
    title: "Corporate Secretarial & Legal",
    description:
      "Keep your company's statutory affairs in order, from registration through every change your business goes through.",
    items: [
      "Company registrations",
      "Statutory compliance",
      "Company changes & amendments",
      "Trust formation",
    ],
  },
  {
    title: "Taxation Services",
    description:
      "Proactive tax planning that keeps you compliant with SARS while making sure you're not paying more than you should.",
    items: ["Income tax", "VAT", "Company tax & tax planning"],
  },
  {
    title: "Business & Investment Consulting",
    description:
      "Strategic advice grounded in your numbers — for the decisions that shape where your business goes next.",
    items: [
      "Business plans",
      "Valuations",
      "Investor support & strategic advice",
    ],
  },
  {
    title: "Payroll Administration",
    description:
      "We take payroll off your plate — accurate, compliant, and on time, every time, for teams of any size.",
    items: [
      "Salary & wage processing",
      "Payslips",
      "EMP201 submissions & compliance",
    ],
  },
  {
    title: "Accounting Software",
    description:
      "Modern tools set up around how your business actually works, with support that doesn't disappear after go-live.",
    items: [
      "Software implementation & setup",
      "Team training",
      "Ongoing user support",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-x-16 gap-y-16">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.title}
            delay={(i % 2) * 80}
            className="flex flex-col items-start gap-4 border-t border-ink/10 pt-8 text-left"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-navy-primary text-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {iconFor(service.title)}
              </svg>
            </span>
            <h3 className="font-serif text-[26px] font-normal leading-[1.2] text-ink">
              {service.title}
            </h3>
            <p className="max-w-[440px] font-body text-[17px] leading-[1.55] text-ink-soft">
              {service.description}
            </p>
            <ul className="flex flex-col gap-2 pt-1">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-body text-[15px] leading-[1.4] text-ink"
                >
                  <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-blue-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
