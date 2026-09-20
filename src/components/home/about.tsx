import { Reveal } from "./reveal";
import { CtaLink } from "./cta-link";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="bg-bg-warm px-5 sm:px-8 lg:px-20 pb-20 pt-[120px]">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.45fr_1fr] items-stretch gap-8 lg:gap-12">
        <Reveal className="flex flex-col items-start gap-4 lg:pl-[58px] text-left">
          <span className="font-body text-[14px] lg:text-[17px] text-ink-soft">
            Trusted expertise since 1983
          </span>
          <h2 className="font-serif text-[29px] lg:text-heading-lg font-normal leading-[1.15] tracking-[-0.01em] text-ink">
            More than
            <br />
            <em className="italic text-blue-accent">numbers</em>
          </h2>
          <CtaLink
            href="/contact"
            variant="dark"
            className="mt-7 hidden lg:inline-flex"
          >
            Contact Us
          </CtaLink>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col items-start justify-center gap-6 lg:border-l lg:border-ink/20 lg:pl-[60px] text-left"
        >
          <p className="max-w-[640px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink">
            For over{" "}
            <em className="italic text-blue-accent">four decades</em>,
            we&rsquo;ve worked alongside businesses to navigate change, seize
            opportunities and build stronger futures. What started in 1983 as a
            single practice now runs from offices across South Africa, with the
            same people-first approach it began with.
          </p>
          <p className="max-w-[640px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink-soft">
            Our work covers the full picture &mdash; bookkeeping and annual
            financial statements, tax and payroll, company secretarial matters,
            and the advice that sits behind bigger decisions. Much of it is
            deliberately unremarkable: returns filed on time, reconciliations
            that balance, and records that hold up when a bank or SARS asks
            questions.
          </p>
          <p className="max-w-[640px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink-soft">
            Clients stay with us because they deal with people who know their
            business, not a call centre and not a template. As a SAIPA-registered
            practice and accredited training centre, we also help bring through
            the next generation of professional accountants.
          </p>
        </Reveal>

        {/* On phones the CTA reads better after the story than before it. */}
        <Reveal delay={160} className="lg:hidden">
          <CtaLink
            href="/contact"
            variant="dark"
          >
            Contact Us
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}
