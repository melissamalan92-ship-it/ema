import { Reveal } from "@/components/home/reveal";
import { CtaLink } from "@/components/home/cta-link";
import { Container } from "@/components/ui/container";
import { serviceSlug } from "./service-anchors";
import { SERVICES, TONES } from "./services-data";
import { ServicesAccordion } from "./services-accordion";

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
    <section className="bg-bg-warm px-5 sm:px-8 lg:px-20 pb-9 lg:pb-16 pt-10 lg:pt-20">
      <Container>
        <Reveal className="mx-auto mb-14 flex max-w-[620px] flex-col items-center gap-3 text-center">
          <h2 className="font-serif text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Explore our <em className="italic text-blue-accent">services</em>.
          </h2>
          <p className="font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink-soft">
            Day-to-day bookkeeping, payroll and tax, the statutory work that
            keeps you compliant, the software that runs it all &mdash; and the
            advice behind your bigger decisions.
          </p>
        </Reveal>

        <ServicesAccordion />

        {/* The bento is desktop-only; phones get the accordion above. */}
        <div className="hidden gap-4 lg:grid lg:grid-cols-6 lg:gap-5">
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
                    service.span === "full" ? "lg:col-span-6" : "lg:col-span-3"
                  }
                >
                  <article
                    id={serviceSlug(service.title)}
                    className={`group relative flex h-full scroll-mt-32 items-stretch gap-6 overflow-hidden rounded-[24px] p-5 transition-all duration-500 hover:-translate-y-1 lg:p-6 ${t.card}`}
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
                    <div className="relative hidden w-[36%] shrink-0 lg:block">
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
                  service.span === "half" ? "lg:col-span-3" : "lg:col-span-2"
                }
              >
                <article
                  id={serviceSlug(service.title)}
                  className={`group relative flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[24px] transition-all duration-500 hover:-translate-y-1 ${t.card}`}
                >
                  <div
                    className={`relative hidden shrink-0 border-b px-5 pb-1.5 pt-2.5 lg:block ${t.panel} ${t.motif}`}
                  >
                    <div className="mx-auto h-[84px] w-full">
                      <Motif />
                    </div>
                    <span className="absolute left-6 top-4 hidden lg:block">
                      <Index n={i + 1} className={t.index} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2 px-5 pb-5 pt-5 lg:px-6 lg:pt-4">
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
          <h2 className="font-serif text-[29px] lg:text-heading-md font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            Not sure which <em className="italic text-blue-accent">service</em>{" "}
            you need?
          </h2>
          <p className="font-body text-[13px] lg:text-[15px] leading-[1.6] text-ink-soft">
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
