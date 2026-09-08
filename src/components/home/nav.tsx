import Link from "next/link";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#shoe-foundation", label: "Shoe Foundation" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="bg-bg-warm px-16 py-4">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium capitalize text-navy-primary hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
