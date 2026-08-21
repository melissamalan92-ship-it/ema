"use client";

import { useState } from "react";
import { RetroCalculator } from "./retro-calculator";
import { RetroTerminal } from "./retro-terminal";

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
      </div>

      <div className="mx-auto mt-14 flex max-w-[1000px] items-center justify-center gap-16">
        <EraStepper era={era} setEra={setEra} />

        <div className="flex flex-1 justify-center">
          {era === 0 && (
            <RetroCalculator setIncome={setIncome} setExpenses={setExpenses} />
          )}
          {era === 1 && <RetroTerminal {...shared} />}
          {era === 2 && <ModernPanel {...shared} />}
        </div>
      </div>
    </section>
  );
}

function EraStepper({
  era,
  setEra,
}: {
  era: number;
  setEra: (n: number) => void;
}) {
  return (
    <div className="relative flex shrink-0 flex-col">
      <div className="absolute left-[15px] top-[55px] bottom-[55px] w-px bg-[rgba(253,255,248,0.3)]" />
      {ERAS.map((label, i) => (
        <button
          key={label}
          type="button"
          onClick={() => setEra(i)}
          className="relative z-10 flex h-[110px] items-center gap-3 text-left"
        >
          <span
            className={`h-[30px] w-[30px] shrink-0 rounded-full border-2 transition-colors ${
              i === era
                ? "border-bg-warm bg-blue-accent"
                : "border-[rgba(253,255,248,0.4)] bg-transparent"
            }`}
          />
          <span
            className={`font-mono text-xs font-medium tracking-[0.08em] whitespace-nowrap ${
              i === era ? "text-bg-warm" : "text-[#cddaf0]"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
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
