import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1180px] flex-col items-center gap-[22px] px-10 pt-14 text-center"
    >
      <div className="w-full max-w-[880px] rounded-[32px] border border-[rgba(253,255,248,0.18)] bg-[rgba(253,255,248,0.08)] px-10 py-14 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[36px] backdrop-saturate-150 sm:px-16">
        <div className="mb-8 flex justify-center">
          <Logo size="sm" variant="light" />
        </div>

        <h1 className="mx-auto max-w-[680px] font-sans text-[46px] font-semibold leading-[1.25] tracking-[-0.01em] text-bg-warm">
          Accounting and Financial Guidance to Grow and Protect What
          You&rsquo;ve Built
        </h1>

        <p className="mx-auto mt-5 max-w-[520px] text-base leading-[1.7] text-[#cddaf0]">
          We provide practical accounting and financial guidance for
          individuals and businesses seeking long-term clarity and control.
        </p>

        <Link
          href="#contact"
          className="mt-7 inline-block rounded-full bg-blue-accent px-[30px] py-[14px] text-[15px] font-semibold text-bg-warm transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>

      <WaveChart />
    </section>
  );
}

function WaveChart() {
  return (
    <div className="relative mt-11 h-[340px] w-full max-w-[1180px]">
      <svg
        width="100%"
        height="340"
        viewBox="0 0 1180 340"
        preserveAspectRatio="none"
        className="block"
      >
        <defs>
          <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fb0ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8fb0ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,190 C70,120 140,240 210,190 C280,140 330,230 390,210 C430,196 450,172 480,168 C520,162 540,220 570,250 C610,290 650,300 690,270 C730,238 760,150 810,90 C850,44 900,50 950,86 C1000,122 1030,190 1080,196 C1110,200 1150,178 1180,160 L1180,340 L0,340 Z"
          fill="url(#waveFill)"
        />
        <path
          d="M0,190 C70,120 140,240 210,190 C280,140 330,230 390,210 C430,196 450,172 480,168 C520,162 540,220 570,250 C610,290 650,300 690,270 C730,238 760,150 810,90 C850,44 900,50 950,86 C1000,122 1030,190 1080,196 C1110,200 1150,178 1180,160"
          stroke="#8fb0ff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="480" cy="168" r="7" fill="#fdfff8" stroke="#243b78" strokeWidth="3" />
        <line
          x1="480"
          y1="168"
          x2="480"
          y2="228"
          stroke="#cddaf0"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>

      <div className="absolute left-[6%] top-[14%] rounded-2xl bg-bg-warm px-5 py-4 text-left shadow-[0_20px_40px_-16px_rgba(0,0,0,0.4)]">
        <div className="mb-1 text-xs font-semibold text-ink-soft">Income</div>
        <div className="font-mono text-xl font-semibold text-navy-primary">
          +R15,500.90
        </div>
      </div>

      <div className="absolute left-[37%] top-[38%] rounded-full bg-bg-warm px-4 py-[9px] shadow-[0_16px_32px_-14px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-sm font-semibold text-ink">R8,733.02</span>
      </div>

      <div className="absolute right-[6%] top-[44%] rounded-2xl bg-bg-warm px-5 py-4 text-left shadow-[0_20px_40px_-16px_rgba(0,0,0,0.4)]">
        <div className="mb-1 text-xs font-semibold text-ink-soft">Expenses</div>
        <div className="font-mono text-xl font-semibold text-[#a8433c]">
          -R12,200.34
        </div>
      </div>
    </div>
  );
}
