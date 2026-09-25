"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/", label: "home" },
  { href: "/about-us", label: "about" },
  { href: "/services", label: "services" },
  { href: "/shoe-foundation", label: "shoe foundation" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation, so tapping a link doesn't leave it open.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-navy-primary px-5 transition-all duration-300 sm:px-8 lg:px-20 ${
        scrolled
          ? "py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "py-4 shadow-none"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" aria-label="EMA home">
          <Logo variant="light" />
        </Link>

        {/* Desktop: centred links. Absolute positioning only kicks in once
            there's room for it, so it can't collide with the logo on a phone. */}
        <div className="hidden items-center gap-10 whitespace-nowrap lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/link relative py-1 font-body text-[14px] sm:text-[15px] lg:text-[16px] text-cream/80 transition-colors duration-200 hover:text-cream"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-accent transition-all duration-300 ease-out group-hover/link:w-full" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="-mr-2 flex size-11 items-center justify-center rounded-lg text-cream transition-colors hover:bg-cream/10 lg:hidden"
        >
          {menuOpen ? (
            <X className="size-6" strokeWidth={1.75} />
          ) : (
            <Menu className="size-6" strokeWidth={1.75} />
          )}
        </button>
      </Container>

      {menuOpen && (
        <div className="lg:hidden">
          <div className="mt-4 flex flex-col border-t border-cream/15 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-body text-[14px] sm:text-[16px] lg:text-[17px] text-cream/85 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
