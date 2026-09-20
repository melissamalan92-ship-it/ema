import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";
import { Container } from "@/components/ui/container";
import { serviceSlug } from "./service-anchors";
import {
  LedgerMotif,
  StatuteMotif,
  TaxMotif,
  GrowthMotif,
  PayrollMotif,
  SoftwareMotif,
} from "./service-motifs";

type Tone = "navy" | "white";

type Service = {
  title: string;
  description: string;
  detail: string;
  items: string[];
  motif: () => React.ReactElement;
  span: "wide" | "full" | "half" | "single";
  tone: Tone;
};

const SERVICES: Service[] = [
  {
    title: "Accounting Services",
    description:
      "Accurate, up-to-date financial records that give you a clear picture of where your business stands — and the confidence to make decisions from it.",
    detail:
      "We handle the full cycle, from day-to-day bookkeeping through to annual financial statements prepared to the standard your bank, your funders and SARS expect. Monthly management accounts turn those numbers into something you can act on, and your records stay audit-ready year-round.",
    items: [
      "Accounting records & bookkeeping",
      "Annual financial statements",
      "Management accounts",
    ],
    motif: LedgerMotif,
    span: "wide",
    tone: "navy",
  },
  {
    title: "Corporate Secretarial & Legal",
    description:
      "Keep your company's statutory affairs in order, from registration through every change your business goes through.",
    detail:
      "We register companies and trusts, maintain your statutory records, and file the annual returns and resolutions that keep you in good standing. When directors change or founding documents need amending, we prepare and lodge the paperwork.",
    items: [
      "Company registrations",
      "Statutory compliance",
      "Company changes & amendments",
      "Trust formation",
    ],
    motif: StatuteMotif,
    span: "half",
    tone: "white",
  },
  {
    title: "Accounting Software",
    description:
      "Modern tools set up around how your business actually works, with support that doesn't disappear after go-live.",
    detail:
      "We implement and configure Xero, Sage, Pastel and QuickBooks around your operation rather than a generic template, and handle migration so nothing is lost. Your team is trained on the workflows they'll actually use, with support afterwards.",
    items: [
      "Software implementation & setup",
      "Team training",
      "Ongoing user support",
    ],
    motif: SoftwareMotif,
    span: "single",
    tone: "white",
  },
  {
    title: "Business & Investment Consulting",
    description:
      "Strategic advice grounded in your numbers — for the decisions that shape where your business goes next.",
    detail:
      "We build business plans and cash flow forecasts that hold up to scrutiny from lenders and investors, and prepare valuations for sales, buy-ins and restructures. You get a clear-eyed read on what the numbers actually support.",
    items: [
      "Business plans",
      "Valuations",
      "Investor support & strategic advice",
    ],
    motif: GrowthMotif,
    span: "single",
    tone: "white",
  },
  {
    title: "Payroll Administration",
    description:
      "We take payroll off your plate — accurate, compliant, and on time, every time, for teams of any size.",
    detail:
      "Salaries are processed to your pay cycle, with payslips distributed and PAYE, UIF and SDL calculated correctly. We handle EMP201 submissions, reconciliations and IRP5 certificates, and keep pace with changing tax tables.",
    items: [
      "Salary & wage processing",
      "Payslips",
      "EMP201 submissions & compliance",
    ],
    motif: PayrollMotif,
    span: "single",
    tone: "navy",
  },
  {
    title: "Taxation Services",
    description:
      "Proactive tax planning that keeps you compliant with SARS while making sure you're not paying more than you should.",
    detail:
      "Provisional and annual returns, VAT submissions and employees' tax are prepared, reconciled and filed on schedule. We handle SARS correspondence and verifications on your behalf, and plan through the year rather than at the deadline.",
    items: ["Income tax", "VAT", "Company tax & tax planning"],
    motif: TaxMotif,
    span: "full",
    tone: "white",
  },
];

const TONES: Record<
  Tone,
  {
    card: string;
    index: string;
    title: string;
    titleHover: string;
    lead: string;
    detail: string;
    chip: string;
    panel: string;
    motif: string;
    glow: boolean;
  }
> = {
  navy: {
    card: "bg-navy-primary hover:shadow-[0_34px_70px_-34px_rgba(36,63,74,0.75)]",
    index: "text-cream/45",
    title: "text-cream",
    titleHover: "",
    lead: "text-cream/90",
    detail: "text-cream/60",
    chip: "border-cream/20 bg-cream/5 text-cream/80",
    panel: "border-cream/10 bg-cream/[0.04]",
    motif: "text-cream/35",
    glow: true,
  },
  white: {
    card: "border border-ink/10 bg-white hover:border-blue-accent/45 hover:shadow-[0_28px_60px_-32px_rgba(36,63,74,0.5)]",
    index: "text-ink-soft/60",
    title: "text-ink",
    titleHover: "transition-colors duration-300 group-hover:text-blue-accent",
    lead: "text-ink",
    detail: "text-ink-soft",
    chip: "border-ink/10 bg-bg-warm text-ink-soft",
    panel: "border-ink/10 bg-bg-warm",
    motif: "text-ink/30",
    glow: false,
  },
};

function Index({ n, className }: { n: number; className: string }) {
  return (
    <span
      className={`font-body text-[12px] font-semibold tracking-[0.22em] ${className}`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function Chips({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1 font-body text-[11.5px] leading-none ${className}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 pb-16 pt-20">
      <Container>
        <Reveal className="mx-auto mb-14 flex max-w-[620px] flex-col items-center gap-3 text-center">
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Explore our <em className="italic text-blue-accent">services</em>.
          </h2>
          <p className="font-body text-[16px] leading-[1.6] text-ink-soft">
            Day-to-day bookkeeping, payroll and tax, the statutory work that
            keeps you compliant, the software that runs it all &mdash; and the
            advice behind your bigger decisions.
          </p>
        </Reveal>

        <div className="grid grid-cols-6 gap-5">
          {SERVICES.map((service, i) => {
            const Motif = service.motif;
            const t = TONES[service.tone];
            const horizontal =
              service.span === "wide" || service.span === "full";

            if (horizontal) {
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 80}
                  className={
                    service.span === "full" ? "col-span-6" : "col-span-3"
                  }
                >
                  <article
                    id={serviceSlug(service.title)}
                    className={`group relative flex h-full scroll-mt-32 items-stretch gap-6 overflow-hidden rounded-[24px] p-6 transition-all duration-500 hover:-translate-y-1 ${t.card}`}
                  >
                    {t.glow && (
                      <div
                        className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full opacity-25 blur-[90px]"
                        style={{ background: "var(--blue-accent)" }}
                      />
                    )}
                    <div className="relative flex flex-1 flex-col items-start gap-3">
                      <Index n={i + 1} className={t.index} />
                      <h3
                        className={`font-serif text-[23px] font-normal leading-[1.15] ${t.title} ${t.titleHover}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`max-w-[520px] font-body text-[14px] leading-[1.6] ${t.lead}`}
                      >
                        {service.description}
                      </p>
                      <p
                        className={`max-w-[520px] font-body text-[13px] leading-[1.6] ${t.detail}`}
                      >
                        {service.detail}
                      </p>
                      <div className="mt-auto pt-3">
                        <Chips items={service.items} className={t.chip} />
                      </div>
                    </div>
                    <div className="relative w-[36%] shrink-0">
                      <div
                        className={`absolute inset-0 rounded-[18px] border p-3 ${t.panel} ${t.motif}`}
                      >
                        <Motif />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className={
                  service.span === "half" ? "col-span-3" : "col-span-2"
                }
              >
                <article
                  id={serviceSlug(service.title)}
                  className={`group relative flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[24px] transition-all duration-500 hover:-translate-y-1 ${t.card}`}
                >
                  <div
                    className={`relative shrink-0 border-b px-5 pb-1.5 pt-2.5 ${t.panel} ${t.motif}`}
                  >
                    <div className="mx-auto h-[84px] w-full">
                      <Motif />
                    </div>
                    <span className="absolute left-6 top-4">
                      <Index n={i + 1} className={t.index} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2 px-6 pb-5 pt-4">
                    <h3
                      className={`font-serif text-[20px] font-normal leading-[1.2] ${t.title} ${t.titleHover}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`font-body text-[14px] leading-[1.6] ${t.lead}`}
                    >
                      {service.description}
                    </p>
                    <p
                      className={`font-body text-[13px] leading-[1.6] ${t.detail}`}
                    >
                      {service.detail}
                    </p>
                    <div className="mt-auto pt-3.5">
                      <Chips items={service.items} className={t.chip} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={160}
          className="mx-auto mt-20 flex max-w-[620px] flex-col items-center gap-3 text-center"
        >
          <h2 className="font-serif text-heading-md font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Not sure which{" "}
            <em className="italic text-blue-accent">service</em> you need?
          </h2>
          <p className="font-body text-[15px] leading-[1.6] text-ink-soft">
            Tell us what you&rsquo;re trying to sort out and we&rsquo;ll point
            you to the right team.
          </p>
          <CtaLink href="/contact" className="mt-3">
            Book a consultation
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}
