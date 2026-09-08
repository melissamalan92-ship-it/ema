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
    <nav className="bg-navy-primary px-10 py-4">
      <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-10">
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
    </nav>
  );
}
