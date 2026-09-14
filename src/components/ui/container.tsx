import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[1200px]", className)} {...rest}>
      {children}
    </div>
  );
}
