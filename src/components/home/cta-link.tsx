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
        // 20% smaller on phones, full size from lg up.
        "inline-flex items-center justify-center rounded-[14px] px-[34px] py-[11.5px] text-[13px] font-bold shadow-sm transition-opacity duration-300 ease-out hover:opacity-90 lg:rounded-[17px] lg:px-[43px] lg:py-[14.4px] lg:text-[16.2px]",
        variant === "dark" && "bg-button-navy text-cream",
        variant === "cream" && "bg-cream text-ink",
        className
      )}
    >
      {children}
    </Link>
  );
}
