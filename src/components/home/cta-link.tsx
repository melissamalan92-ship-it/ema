import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/cta inline-flex items-center gap-2 rounded-full bg-accent-warm px-7 py-3.5 text-sm font-semibold text-navy-primary shadow-sm transition-all duration-300 ease-out hover:gap-3 hover:bg-accent-warm/90 hover:shadow-xl hover:shadow-accent-warm/25",
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
