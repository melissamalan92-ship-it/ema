import Image from "next/image";
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

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.7 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.9-.4 7.1 1.2 9.5.8 1.2 1.7 2.5 2.9 2.4 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.6-.9.9-1.5 1.3-2.6-2.5-1-2.9-2.9-2.5-3.9-1.4-.1 0 0 0 0Z" />
      <path d="M14.4 5.8c.6-.8 1-1.9.9-3-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
    </svg>
  );
}

export function AppPreview() {
  return (
    <section className="px-10 py-[120px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div
          className="relative mx-auto flex w-full max-w-[540px] justify-center"
          style={{ minHeight: 560 }}
        >
          {/* Phone */}
          <div
            className="relative z-0 mt-6 h-[500px] w-[248px] shrink-0 rounded-[44px] bg-[#0b1220] p-[10px] shadow-[0_60px_100px_-30px_rgba(0,0,0,0.7)]"
            style={{ transform: "rotate(-6deg)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[34px]">
              <Image
                src="/images/EMA App.jpg"
                alt="EMA app preview"
                fill
                className="object-cover object-top"
                sizes="228px"
                priority
              />
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
              One place to track your numbers, reach your branch, and stay
              on top of your accounts.
            </p>
          </GlassCard>
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
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
          <p className="max-w-[440px] text-base leading-[1.7] text-[#cddaf0]">
            We&rsquo;re building an app that brings the same clarity we
            bring to every client relationship straight to your phone.
          </p>

          <span className="mt-2 inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-bg-warm opacity-70">
            <AppleIcon />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px]">Download on the</span>
              <span className="-mt-0.5 text-xl font-semibold">App Store</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
