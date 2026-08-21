export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const wordmark = size === "sm" ? "text-[17px]" : "text-[22px]";
  const subline = size === "sm" ? "text-[7px] tracking-[0.16em]" : "text-[9px] tracking-[0.18em]";

  return (
    <div className="flex items-start gap-2.5">
      <div className="w-[2px] self-stretch bg-navy-primary" />
      <div className="flex flex-col gap-0.5 text-left">
        <span className={`${wordmark} font-bold leading-none tracking-[0.02em] text-navy-primary`}>
          EMA
        </span>
        <span className={`${subline} whitespace-nowrap font-medium text-ink-soft`}>
          E MALAN AND ASSOCIATES
        </span>
      </div>
    </div>
  );
}
