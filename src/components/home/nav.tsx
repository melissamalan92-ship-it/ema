"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#shoe-foundation", label: "Shoe Foundation" },
  { href: "#contact", label: "Contact" },
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
      className={`sticky top-0 z-50 bg-navy-primary/95 px-10 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "py-4 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Logo variant="light" />
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/link relative py-1 text-sm font-medium capitalize text-bg-warm/80 transition-colors duration-200 hover:text-bg-warm"
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
