import Link from "next/link";
import { Container } from "@/components/ui/container";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    "group/flink relative w-fit text-[14px] text-cream/80 transition-colors hover:text-cream lg:text-[17px]";
  const underline = (
    <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-accent transition-all duration-300 ease-out group-hover/flink:w-full" />
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {underline}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-primary px-5 pb-5 pt-8 sm:px-8 lg:px-20 lg:pb-6 lg:pt-12">
      <Container className="flex flex-col justify-between gap-5 pb-5 sm:flex-row lg:gap-12 lg:pb-8">
        <div className="flex max-w-[280px] flex-col gap-2 lg:gap-3.5">
          <div className="flex items-start gap-2.5">
            <div className="w-[2px] self-stretch bg-cream" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[19px] sm:text-[20px] lg:text-[22px] font-bold leading-none tracking-[0.02em] text-cream">
                EMA
              </span>
              <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.18em] text-cream/60">
                E MALAN AND ASSOCIATES
              </span>
            </div>
          </div>
          <p className="text-[13px] leading-[1.6] text-cream/50">
            Accounting &amp; financial consulting since 1983.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 lg:gap-x-14 lg:gap-y-3">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about-us">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/shoe-foundation">Shoe Foundation</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="https://www.linkedin.com/company/emalan&associates/jobs/">
            Careers
          </FooterLink>
        </div>
      </Container>

      <Container className="flex flex-col gap-1 border-t border-cream/15 pt-4 sm:flex-row sm:justify-between lg:pt-6">
        <span className="text-[11px] text-cream/40 lg:text-xs">
          &copy; 2026 E Malan &amp; Associates. All rights reserved.
        </span>
        <span className="text-[11px] text-cream/40 lg:text-xs">
          Joburg &middot; Cape Town &middot; CPT Peninsula &middot; Paarl
          &middot; Tygervalley &middot; Loxton
        </span>
      </Container>
    </footer>
  );
}
