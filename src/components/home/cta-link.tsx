import Link from "next/link";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "cream";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[19px] px-12 py-4 text-[18px] font-bold shadow-sm transition-opacity duration-300 ease-out hover:opacity-90",
        variant === "dark" && "bg-button-navy text-cream",
        variant === "cream" && "bg-cream text-ink",
        className
      )}
    >
      {children}
    </Link>
  );
}
