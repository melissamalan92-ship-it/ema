import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/home/nav";
import { Footer } from "@/components/home/footer";
import { CtaLink } from "@/components/home/cta-link";
import { Container } from "@/components/ui/container";
import { LOCATIONS } from "@/components/home/locations-data";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

// Next's default 404 is unstyled black-on-white with no nav, which leaves a
// visitor stranded. This keeps them inside the site.
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col bg-navy-primary">
      <Nav />

      <section className="flex flex-1 items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-28">
        <Container className="flex max-w-[720px] flex-col items-start gap-5 text-left">
          <span className="font-body text-[14px] sm:text-[15px] lg:text-[16px] text-cream/60">
            Error 404
          </span>
          <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-heading-xl font-normal leading-[1.15] tracking-[-0.01em] text-cream">
            We can&rsquo;t find{" "}
            <em className="italic text-blue-accent">that page</em>.
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-cream/70">
            It may have moved, or the link may be out of date. You can head back
            to the homepage, or go straight to what you were after.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <CtaLink href="/" variant="cream">
              Back to home
            </CtaLink>
            <CtaLink href="/contact" variant="cream">
              Contact us
            </CtaLink>
          </div>

          <nav
            aria-label="Site pages"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-cream/15 pt-6"
          >
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/shoe-foundation", label: "Shoe Foundation" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center py-[12px] font-body text-[14px] text-cream/80 underline decoration-cream/25 underline-offset-4 transition-colors hover:text-cream lg:py-0 lg:text-[16px]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="mt-4 font-body text-[13px] leading-[1.6] text-cream/50">
            Looking for a branch? We&rsquo;re in{" "}
            {LOCATIONS.map((l) => l.shortName).join(", ")}.
          </p>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
