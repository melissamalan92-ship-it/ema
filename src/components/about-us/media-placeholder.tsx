import { ImageIcon, VideoIcon } from "lucide-react";

export function MediaPlaceholder({
  kind = "image",
  label,
  tone = "dark",
  className,
}: {
  kind?: "image" | "video";
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const Icon = kind === "video" ? VideoIcon : ImageIcon;
  const toneClasses =
    tone === "dark"
      ? "border-cream/25 bg-cream/5 text-cream/40"
      : "border-ink/20 bg-ink/[0.03] text-ink-soft";
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-dashed text-center ${toneClasses} ${className ?? ""}`}
    >
      <Icon className="size-7" strokeWidth={1.5} />
      <span className="font-body text-[13px]">{label}</span>
    </div>
  );
}
