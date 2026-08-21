"use client";

import { useState } from "react";

const ERAS = ["1980s", "1990s", "2000s+"] as const;

export function Snapshot() {
  const [era, setEra] = useState(0);
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const incomeNum = parseFloat(income) || 0;
  const expensesNum = parseFloat(expenses) || 0;
  const net = incomeNum - expensesNum;
  const margin = incomeNum > 0 ? (net / incomeNum) * 100 : 0;

  const shared = {
    income,
    expenses,
    setIncome,
    setExpenses,
    net,
    margin,
  };

  return (
    <section id="snapshot" className="px-10 py-[120px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
          [ See It In Numbers ]
        </span>
        <h2 className="text-[38px] font-bold leading-[1.2] text-bg-warm">
          A quick look at where you stand.
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-[#cddaf0]">
          From ledger books to real-time dashboards, the tools have changed
          &mdash; the care hasn&rsquo;t. Slide through the decades to see how
          we&rsquo;ve always kept your numbers straight.
        </p>

        <div className="mt-4 w-full max-w-[360px]">
          <input
            type="range"
            min={0}
            max={2}
            step={1}
            value={era}
            onChange={(e) => setEra(Number(e.target.value))}
            className="w-full accent-blue-accent"
            aria-label="Choose a decade"
          />
          <div className="mt-2 flex justify-between font-mono text-xs font-medium tracking-[0.08em] text-[#cddaf0]">
            {ERAS.map((label, i) => (
              <span
                key={label}
                className={i === era ? "text-bg-warm" : undefined}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex justify-center">
        {era === 0 && <CalculatorPanel {...shared} />}
        {era === 1 && <LedgerPanel {...shared} />}
        {era === 2 && <ModernPanel {...shared} />}
      </div>
    </section>
  );
}

type PanelProps = {
  income: string;
  expenses: string;
  setIncome: (v: string) => void;
  setExpenses: (v: string) => void;
  net: number;
  margin: number;
};

const numberInputReset =
  "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

function CalculatorPanel({
  income,
  expenses,
  setIncome,
  setExpenses,
  net,
  margin,
}: PanelProps) {
  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"];

  return (
    <div className="w-[300px] rounded-[18px] border border-[#d8d0bc] bg-[linear-gradient(175deg,#f2ede2,#e4ddcd)] p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-baseline justify-between px-1 pb-3">
        <span className="text-[15px] font-bold tracking-[0.03em] text-[#2a2620]">EMA</span>
        <span className="font-mono text-[10px] tracking-[0.06em] text-[#6b6454]">EST. 1983</span>
      </div>

      <div className="mb-4 rounded-md bg-[#c7cfb9] px-3.5 py-3 shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.04em] text-[#1d2b1a]/70">
          <span>NET</span>
          <span>MRGN</span>
        </div>
        <div className="flex items-baseline justify-between font-mono text-2xl font-medium text-[#1d2b1a]">
          <span>R{net.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}</span>
          <span>{margin.toFixed(1)}%</span>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <label className="flex items-center justify-between gap-2 rounded-md bg-[#2a2b2e]/5 px-3 py-2">
          <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-[#6b6454]">
            INCOME
          </span>
          <input
            type="number"
            placeholder="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`w-24 bg-transparent text-right font-mono text-sm text-[#2a2620] outline-none ${numberInputReset}`}
          />
        </label>
        <label className="flex items-center justify-between gap-2 rounded-md bg-[#2a2b2e]/5 px-3 py-2">
          <span className="font-mono text-[11px] font-semibold tracking-[0.04em] text-[#6b6454]">
            EXPENSES
          </span>
          <input
            type="number"
            placeholder="0"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className={`w-24 bg-transparent text-right font-mono text-sm text-[#2a2620] outline-none ${numberInputReset}`}
          />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {keys.map((k) => (
          <div
            key={k}
            className="flex h-9 items-center justify-center rounded-md bg-[#2a2b2e] font-mono text-sm font-semibold text-[#f2ede2]/70"
          >
            {k}
          </div>
        ))}
      </div>
    </div>
  );
}

function LedgerPanel({
  income,
  expenses,
  setIncome,
  setExpenses,
  net,
  margin,
}: PanelProps) {
  return (
    <div className="relative w-[520px] overflow-hidden rounded-sm border-2 border-[#33ff66] bg-black p-5 font-mono text-[#33ff66] shadow-[0_0_40px_rgba(51,255,102,0.15)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #33ff66 0px, #33ff66 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative border-b border-[#33ff66]/50 pb-2 text-xs">
        EMA-LEDGER Professional v2.1 (C) 1991 [ FISCAL.DAT ]
      </div>
      <div className="relative border-b border-[#33ff66]/30 py-2 text-[11px] tracking-[0.15em] text-[#33ff66]/60">
        FILE&nbsp;&nbsp;EDIT&nbsp;&nbsp;VIEW&nbsp;&nbsp;REPORTS&nbsp;&nbsp;TOOLS&nbsp;&nbsp;HELP
      </div>

      <div className="relative flex flex-col gap-3 py-5 text-sm">
        <label className="flex items-center gap-2">
          <span>INCOME.....:</span>
          <span>R</span>
          <input
            type="number"
            placeholder="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`w-32 bg-transparent text-[#33ff66] outline-none placeholder:text-[#33ff66]/40 ${numberInputReset}`}
          />
        </label>
        <label className="flex items-center gap-2">
          <span>EXPENSES...:</span>
          <span>R</span>
          <input
            type="number"
            placeholder="0"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className={`w-32 bg-transparent text-[#33ff66] outline-none placeholder:text-[#33ff66]/40 ${numberInputReset}`}
          />
          <span className="animate-[blink_1s_step-end_infinite]">█</span>
        </label>
      </div>

      <div className="relative border-t border-[#33ff66]/50 pt-3 text-sm">
        <div className="mb-1 text-[11px] tracking-[0.15em] text-[#33ff66]/60">[ SUMMARY ]</div>
        <div>
          NET PROFIT: R{net.toLocaleString("en-ZA", { maximumFractionDigits: 2 })}
          &nbsp;&nbsp;&nbsp;MARGIN: {margin.toFixed(1)}%
        </div>
        <div className="text-[#33ff66]/70">
          STATUS: {net >= 0 ? "POSITIVE" : "NEEDS REVIEW"}
        </div>
      </div>

      <div className="relative mt-4 border-t border-[#33ff66]/50 pt-2 text-[11px] tracking-[0.1em] text-[#33ff66]/60">
        [F1]HELP&nbsp;&nbsp;[F2]SAVE&nbsp;&nbsp;[F7]POST&nbsp;&nbsp;[ESC]EXIT
      </div>
    </div>
  );
}

function ModernPanel({
  income,
  expenses,
  setIncome,
  setExpenses,
  net,
  margin,
}: PanelProps) {
  const marginPct = Math.max(0, Math.min(100, margin));

  return (
    <div className="w-[400px] rounded-[20px] border border-[#b9cdcb] bg-bg-mint p-8 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
      <div className="mb-6 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
        <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-navy-secondary">
          LIVE SNAPSHOT
        </span>
      </div>

      <div className="flex flex-col gap-3.5">
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-semibold text-ink-soft">
            Monthly income (ZAR)
          </span>
          <input
            type="number"
            placeholder="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent ${numberInputReset}`}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-semibold text-ink-soft">
            Monthly expenses (ZAR)
          </span>
          <input
            type="number"
            placeholder="0"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className={`rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent ${numberInputReset}`}
          />
        </label>
      </div>

      <div className="mt-6 border-t border-[#b9cdcb] pt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.04em] text-ink-soft">
            MARGIN
          </span>
          <span className="font-mono text-sm font-semibold text-navy-primary">
            {margin.toFixed(1)}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-warm">
          <div
            className="h-full rounded-full bg-blue-accent transition-all duration-300"
            style={{ width: `${marginPct}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <span className="text-xs font-semibold tracking-[0.04em] text-ink-soft">
          NET PROFIT
        </span>
        <span className="font-mono text-[26px] font-semibold text-navy-primary">
          R {net.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}
        </span>
      </div>
    </div>
  );
}
