import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
];

export function Nav() {
  return (
    <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between px-10 pt-10">
      <Logo variant="light" />
      <div className="hidden items-center gap-10 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-bg-warm/80 hover:text-bg-warm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
