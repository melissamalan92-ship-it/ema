import Link from "next/link";
import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { Container } from "@/components/ui/container";
import {
  LedgerMotif,
  StatuteMotif,
  TaxMotif,
  GrowthMotif,
  PayrollMotif,
  SoftwareMotif,
} from "@/components/services/service-motifs";
import { serviceSlug } from "@/components/services/service-anchors";

type Tone = "navy" | "white";

type Service = {
  title: string;
  description: string;
  motif: () => React.ReactElement;
  tone: Tone;
  wide?: boolean;
};

// Order and tones mirror the services page bento.
const SERVICES: Service[] = [
  {
    title: "Accounting Services",
    description:
      "Accounting records, annual financial statements, and audit file support for your business.",
    motif: LedgerMotif,
    tone: "white",
    wide: true,
  },
  {
    title: "Corporate Secretarial & Legal",
    description:
      "Company registration, trust formation, and statutory compliance.",
    motif: StatuteMotif,
    tone: "white",
  },
  {
    title: "Accounting Software",
    description: "Setup and support across Xero, Sage, Pastel, and QuickBooks.",
    motif: SoftwareMotif,
    tone: "white",
  },
  {
    title: "Business & Investment Consulting",
    description:
      "Entity formation, tax planning, and property investment advisory.",
    motif: GrowthMotif,
    tone: "white",
  },
  {
    title: "Payroll Administration",
    description:
      "Salary and wage processing, PAYE, IRP5s, and HR administration support.",
    motif: PayrollMotif,
    tone: "white",
  },
  {
    title: "Taxation Services",
    description:
      "Income tax, VAT, employees' tax, and statutory levies handled end-to-end.",
    motif: TaxMotif,
    tone: "white",
    wide: true,
  },
];

const TONES: Record<
  Tone,
  {
    card: string;
    title: string;
    titleHover: string;
    body: string;
    panel: string;
    motif: string;
  }
> = {
  navy: {
    card: "bg-navy-primary hover:shadow-[0_26px_54px_-30px_rgba(36,63,74,0.75)]",
    title: "text-cream",
    titleHover: "",
    body: "text-cream/70",
    panel: "border-cream/10 bg-cream/[0.04]",
    motif: "text-cream/35",
  },
  // White at rest, navy on hover — every colour inside flips with the card.
  white: {
    card: "border border-ink/10 bg-white transition-colors hover:border-navy-primary hover:bg-navy-primary hover:shadow-[0_26px_54px_-30px_rgba(36,63,74,0.75)]",
    title: "text-ink transition-colors duration-300 group-hover:text-cream",
    titleHover: "",
    body: "text-ink-soft transition-colors duration-300 group-hover:text-cream/70",
    panel: "border-ink/[0.07] bg-bg-warm transition-colors duration-300 group-hover:border-cream/10 group-hover:bg-cream/[0.04]",
    motif: "text-ink/30 transition-colors duration-300 group-hover:text-cream/35",
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-10 lg:py-20"
    >
      <Container className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => {
            const Motif = service.motif;
            const t = TONES[service.tone];

            if (service.wide) {
              return (
                <Reveal
                  key={service.title}
                  delay={i * 60}
                  className="lg:col-span-2"
                >
                  <Link
                    href={`/services#${serviceSlug(service.title)}`}
                    className="block h-full"
                  >
                    <article
                      className={`group relative flex h-full items-stretch gap-4 overflow-hidden rounded-[18px] p-4 transition-all duration-500 hover:-translate-y-1 ${t.card}`}
                    >
                      <div className="flex flex-1 flex-col justify-center gap-1.5">
                        <h3
                          className={`font-serif text-[19px] font-normal leading-tight ${t.title} ${t.titleHover}`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`max-w-[320px] font-body text-[12.5px] leading-[1.5] ${t.body}`}
                        >
                          {service.description}
                        </p>
                      </div>
                      <div className="relative order-first size-11 shrink-0 lg:order-none lg:size-auto lg:w-[30%]">
                        <div
                          className={`absolute inset-0 rounded-[12px] border p-3 ${t.panel} ${t.motif}`}
                        >
                          <Motif />
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              );
            }

            return (
              <Reveal key={service.title} delay={i * 60}>
                <Link
                  href={`/services#${serviceSlug(service.title)}`}
                  className="block h-full"
                >
                  <article
                    className={`group flex h-full items-start gap-3 overflow-hidden rounded-[18px] p-4 transition-all duration-500 hover:-translate-y-1 lg:flex-col lg:items-stretch lg:gap-0 lg:p-0 ${t.card}`}
                  >
                    <div
                      className={`size-11 shrink-0 rounded-[10px] border p-2 lg:size-auto lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:px-4 lg:pb-2 lg:pt-3 ${t.panel} ${t.motif}`}
                    >
                      <div className="h-full w-full lg:mx-auto lg:h-[52px]">
                        <Motif />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 lg:gap-1.5 lg:p-4">
                      <h3
                        className={`font-serif text-[16px] font-normal leading-tight ${t.title} ${t.titleHover}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`font-body text-[12.5px] leading-[1.5] ${t.body}`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={150}
          className="flex flex-col items-start justify-center gap-6 border-l border-blue-accent/20 pl-12 text-left"
        >
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Everything your{" "}
            <em className="italic text-blue-accent">business</em> needs to{" "}
            <em className="italic text-blue-accent">grow</em>.
          </h2>
          <p className="max-w-[420px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink">
            We offer a full range of professional services to support your
            business at every stage. Whether you need one piece of work handled
            or your whole finance function looked after, it&apos;s the same team
            seeing it through. That means advice built around how your business
            actually runs, rather than a standard package applied to everyone.
          </p>
          <CtaLink href="/contact" className="mt-10">
            Contact Us
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}
