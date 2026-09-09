import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  variant = "accent",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "accent" | "cream" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 ease-out hover:gap-3 hover:shadow-xl",
        variant === "accent" &&
          "bg-blue-accent text-ink hover:bg-blue-accent/90 hover:shadow-blue-accent/25",
        variant === "cream" &&
          "bg-cream text-ink hover:bg-white hover:shadow-black/10",
        variant === "dark" &&
          "bg-navy-primary text-cream hover:bg-navy-primary/90 hover:shadow-navy-primary/25",
        className
      )}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5"
        strokeWidth={2.25}
      />
    </Link>
  );
}
