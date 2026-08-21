import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-[1180px] flex-col items-center gap-[22px] px-10 pt-14 text-center"
    >
      <div className="mb-2">
        <Logo size="sm" />
      </div>

      <h1 className="max-w-[700px] font-sans text-[46px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">
        Accounting and Financial Guidance to Grow and Protect What You&rsquo;ve
        Built
      </h1>

      <p className="max-w-[560px] text-base leading-[1.7] text-ink-soft">
        We provide practical accounting and financial guidance for individuals
        and businesses seeking long-term clarity and control.
      </p>

      <Link
        href="#contact"
        className="mt-2 rounded-full bg-navy-primary px-[30px] py-[14px] text-[15px] font-semibold text-bg-warm transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>

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
            <stop offset="0%" stopColor="#4375cd" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#4375cd" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,190 C70,120 140,240 210,190 C280,140 330,230 390,210 C430,196 450,172 480,168 C520,162 540,220 570,250 C610,290 650,300 690,270 C730,238 760,150 810,90 C850,44 900,50 950,86 C1000,122 1030,190 1080,196 C1110,200 1150,178 1180,160 L1180,340 L0,340 Z"
          fill="url(#waveFill)"
        />
        <path
          d="M0,190 C70,120 140,240 210,190 C280,140 330,230 390,210 C430,196 450,172 480,168 C520,162 540,220 570,250 C610,290 650,300 690,270 C730,238 760,150 810,90 C850,44 900,50 950,86 C1000,122 1030,190 1080,196 C1110,200 1150,178 1180,160"
          stroke="#4375cd"
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
          stroke="#33466c"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>

      <div className="absolute left-[6%] top-[14%] rounded-2xl bg-bg-warm px-5 py-4 text-left shadow-[0_20px_40px_-16px_rgba(16,31,46,0.25)]">
        <div className="mb-1 text-xs font-semibold text-ink-soft">Income</div>
        <div className="font-mono text-xl font-semibold text-navy-primary">
          +R15,500.90
        </div>
      </div>

      <div className="absolute left-[37%] top-[38%] rounded-full bg-bg-warm px-4 py-[9px] shadow-[0_16px_32px_-14px_rgba(16,31,46,0.25)]">
        <span className="font-mono text-sm font-semibold text-ink">R8,733.02</span>
      </div>

      <div className="absolute right-[6%] top-[44%] rounded-2xl bg-bg-warm px-5 py-4 text-left shadow-[0_20px_40px_-16px_rgba(16,31,46,0.25)]">
        <div className="mb-1 text-xs font-semibold text-ink-soft">Expenses</div>
        <div className="font-mono text-xl font-semibold text-[#a8433c]">
          -R12,200.34
        </div>
      </div>
    </div>
  );
}
