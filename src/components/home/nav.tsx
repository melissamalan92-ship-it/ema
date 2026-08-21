import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#snapshot", label: "Services" },
  { href: "#locations", label: "Locations" },
];

export function Nav() {
  return (
    <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between px-10 pt-7">
      <Logo variant="light" />
      <div className="hidden items-center gap-10 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-[#dbe1ee] hover:text-bg-warm"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="rounded-full border border-[rgba(253,255,248,0.4)] px-5 py-[10px] text-sm font-semibold text-bg-warm transition-colors hover:bg-[rgba(253,255,248,0.1)]"
      >
        Get in touch
      </Link>
    </nav>
  );
}
