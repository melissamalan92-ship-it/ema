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
    tone: "navy",
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
    tone: "navy",
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
  white: {
    card: "border border-ink/10 bg-white hover:border-blue-accent/45 hover:shadow-[0_22px_48px_-28px_rgba(36,63,74,0.5)]",
    title: "text-ink",
    titleHover: "transition-colors duration-300 group-hover:text-blue-accent",
    body: "text-ink-soft",
    panel: "border-ink/[0.07] bg-bg-warm",
    motif: "text-ink/30",
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="bg-bg-warm px-5 sm:px-8 lg:px-20 py-20"
    >
      <Container className="grid grid-cols-[1.2fr_1fr] items-stretch gap-8 lg:gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => {
            const Motif = service.motif;
            const t = TONES[service.tone];

            if (service.wide) {
              return (
                <Reveal
                  key={service.title}
                  delay={i * 60}
                  className="col-span-2"
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
                      <div className="relative w-[30%] shrink-0">
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
                    className={`group flex h-full flex-col overflow-hidden rounded-[18px] transition-all duration-500 hover:-translate-y-1 ${t.card}`}
                  >
                    <div
                      className={`shrink-0 border-b px-4 pb-2 pt-3 ${t.panel} ${t.motif}`}
                    >
                      <div className="mx-auto h-[52px] w-full">
                        <Motif />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 p-4">
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
          <p className="max-w-[420px] font-body text-[16px] leading-[1.6] text-ink">
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
