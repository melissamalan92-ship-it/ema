import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#snapshot", label: "Services" },
  { href: "#locations", label: "Locations" },
];

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-10 pt-7">
      <Logo />
      <div className="hidden items-center gap-10 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-ink hover:text-blue-accent"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="rounded-full bg-navy-primary px-[22px] py-[11px] text-sm font-semibold text-bg-warm transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>
    </nav>
  );
}
