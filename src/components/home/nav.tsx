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
  return (
    <nav className="sticky top-0 z-50 bg-navy-primary px-10 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Logo variant="light" />
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium capitalize text-bg-warm/80 hover:text-bg-warm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
