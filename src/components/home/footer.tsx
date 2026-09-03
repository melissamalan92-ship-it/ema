import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="px-10 pb-8 pt-16">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-12 pb-12 sm:flex-row">
        <div className="flex max-w-[280px] flex-col gap-3.5">
          <div className="flex items-start gap-2.5">
            <div className="w-[2px] self-stretch bg-bg-warm" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-bold leading-none tracking-[0.02em] text-bg-warm">
                EMA
              </span>
              <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.18em] text-bg-warm/60">
                E MALAN AND ASSOCIATES
              </span>
            </div>
          </div>
          <p className="text-[13px] leading-[1.6] text-bg-warm/50">
            Accounting &amp; financial consulting since 1983.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.08em] text-bg-warm/50">
              SERVICES
            </span>
            <Link href="#" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              Business Consulting
            </Link>
            <Link href="#" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              Personal Consulting
            </Link>
            <Link href="#" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              Tax &amp; Retirement
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.08em] text-bg-warm/50">
              COMPANY
            </span>
            <Link href="#about" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              About
            </Link>
            <Link href="#locations" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              Locations
            </Link>
            <Link href="#" className="text-sm text-bg-warm/80 hover:text-bg-warm">
              Careers
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] justify-between border-t border-bg-warm/15 pt-6">
        <span className="text-xs text-bg-warm/40">
          &copy; 2026 E Malan &amp; Associates. All rights reserved.
        </span>
        <span className="text-xs text-bg-warm/40">
          Johannesburg &middot; Cape Town &middot; Paarl
        </span>
      </div>
    </footer>
  );
}
