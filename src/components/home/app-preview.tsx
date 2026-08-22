import type { ReactNode } from "react";

function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl border border-[rgba(253,255,248,0.18)] bg-[rgba(253,255,248,0.1)] px-4 py-3 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(16,31,46,0.55)] text-bg-warm">
      {children}
    </span>
  );
}

export function AppPreview() {
  return (
    <section className="px-10 py-[120px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
          [ Coming Soon ]
        </span>
        <h2 className="text-[38px] font-semibold leading-[1.25] text-bg-warm">
          Your accounts,{" "}
          <em className="font-serif font-normal italic text-[#8fb0ff]">
            in your pocket
          </em>
          .
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-[#cddaf0]">
          We&rsquo;re building an app that brings the same clarity we bring
          to every client relationship straight to your phone.
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex w-full max-w-[560px] justify-center" style={{ minHeight: 560 }}>
        {/* Phone */}
        <div
          className="relative z-0 mt-6 h-[500px] w-[248px] shrink-0 rounded-[44px] bg-[#0b1220] p-[10px] shadow-[0_60px_100px_-30px_rgba(0,0,0,0.7)]"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-[34px]"
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 20% 10%, #d0e0df 0%, #4375cd 40%, #243b78 72%, #101f2e 100%)",
            }}
          >
            <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black/70" />
          </div>
        </div>

        {/* Floating glass cards -- overlapping the phone's edges */}
        <GlassCard className="left-[2%] top-[14%] z-10 -rotate-3">
          <IconBadge>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconBadge>
          <span className="whitespace-nowrap text-sm font-semibold text-bg-warm">
            Tax Calculator
          </span>
        </GlassCard>

        <GlassCard className="right-[6%] top-[24%] z-10 rotate-2">
          <IconBadge>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </IconBadge>
          <span className="whitespace-nowrap text-sm font-semibold text-bg-warm">
            Find a Branch
          </span>
        </GlassCard>

        <GlassCard className="left-[4%] bottom-[22%] z-10 rotate-2">
          <IconBadge>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M17 7 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconBadge>
          <span className="whitespace-nowrap text-sm font-semibold text-bg-warm">
            Tax Returns
          </span>
        </GlassCard>

        <GlassCard className="right-[2%] bottom-[8%] z-10 max-w-[220px] -rotate-2 flex-col items-start gap-2 text-left">
          <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-[#8fb0ff]">
            [ EMA APP ]
          </span>
          <p className="text-sm leading-[1.5] text-bg-warm">
            One place to track your numbers, reach your branch, and stay on
            top of your accounts.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
