import Link from "next/link";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group/flink relative w-fit text-[17px] text-cream/80 transition-colors hover:text-cream"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-accent transition-all duration-300 ease-out group-hover/flink:w-full" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-primary px-10 pb-8 pt-16">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-12 pb-12 sm:flex-row">
        <div className="flex max-w-[280px] flex-col gap-3.5">
          <div className="flex items-start gap-2.5">
            <div className="w-[2px] self-stretch bg-cream" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-bold leading-none tracking-[0.02em] text-cream">
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

        <div className="flex flex-col gap-3">
          <span className="font-body text-[17px] text-cream/60">
            Quick Links
          </span>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about-us">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/shoe-foundation">Shoe Foundation</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] justify-between border-t border-cream/15 pt-6">
        <span className="text-xs text-cream/40">
          &copy; 2026 E Malan &amp; Associates. All rights reserved.
        </span>
        <span className="text-xs text-cream/40">
          Joburg &middot; Cape Town &middot; CPT Peninsula &middot; Paarl
          &middot; Tygervalley &middot; Loxton
        </span>
      </div>
    </footer>
  );
}
