export function Logo({
  size = "md",
  variant = "dark",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const wordmark =
    size === "sm" ? "text-[17px]" : size === "lg" ? "text-[34px]" : "text-[22px]";
  const subline =
    size === "sm"
      ? "text-[7px] tracking-[0.16em]"
      : size === "lg"
        ? "text-[11px] tracking-[0.2em]"
        : "text-[9px] tracking-[0.18em]";
  const bar = variant === "light" ? "bg-bg-warm" : "bg-navy-primary";
  const word = variant === "light" ? "text-bg-warm" : "text-navy-primary";
  const sub = variant === "light" ? "text-[#b7c2d6]" : "text-ink-soft";

  return (
    <div className="flex items-start gap-2.5">
      <div className={`w-[2px] self-stretch ${bar}`} />
      <div className="flex flex-col gap-0.5 text-left">
        <span className={`${wordmark} font-bold leading-none tracking-[0.02em] ${word}`}>
          EMA
        </span>
        <span className={`${subline} whitespace-nowrap font-medium ${sub}`}>
          E MALAN AND ASSOCIATES
        </span>
      </div>
    </div>
  );
}
