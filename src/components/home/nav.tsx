"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "/", label: "home" },
  { href: "/about-us", label: "about" },
  { href: "/services", label: "services" },
  { href: "/shoe-foundation", label: "shoe foundation" },
  { href: "/contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-navy-primary px-10 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "py-4 shadow-none"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center">
        <Link href="/" aria-label="EMA home">
          <Logo variant="light" />
        </Link>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-10 whitespace-nowrap">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/link relative py-1 font-body text-[16px] text-cream/80 transition-colors duration-200 hover:text-cream"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-accent transition-all duration-300 ease-out group-hover/link:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
