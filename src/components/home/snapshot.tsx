"use client";

import { useState } from "react";
import Link from "next/link";

export function Snapshot() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const incomeNum = parseFloat(income) || 0;
  const expensesNum = parseFloat(expenses) || 0;
  const net = incomeNum - expensesNum;
  const margin = incomeNum > 0 ? ((net / incomeNum) * 100).toFixed(1) : "0.0";
  const netFormatted = `R ${net.toLocaleString("en-ZA", { maximumFractionDigits: 0 })}`;

  return (
    <section id="snapshot" className="px-10 py-[120px]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-20 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
            [ See It In Numbers ]
          </span>
          <h2 className="text-[38px] font-bold leading-[1.2] text-bg-warm">
            A quick look at where you stand.
          </h2>
          <p className="max-w-[420px] text-base leading-[1.7] text-[#cddaf0]">
            Drop in your monthly income and expenses for an instant snapshot
            of your margin &mdash; the same clarity we bring to every client
            relationship.
          </p>
          <Link
            href="#contact"
            className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-bg-warm hover:text-blue-accent"
          >
            Want the full breakdown? Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-5 rounded-[20px] border border-[#b9cdcb] bg-bg-mint p-9 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
          <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-navy-secondary">
            QUICK FINANCIAL SNAPSHOT
          </span>

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
                className="rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                className="rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3.5 border-t border-[#b9cdcb] pt-1.5">
            <div className="flex flex-col gap-1 pt-4">
              <span className="text-xs font-semibold tracking-[0.04em] text-ink-soft">
                NET PROFIT
              </span>
              <span className="font-mono text-[26px] font-semibold text-navy-primary">
                {netFormatted}
              </span>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <span className="text-xs font-semibold tracking-[0.04em] text-ink-soft">
                MARGIN
              </span>
              <span className="font-mono text-[26px] font-semibold text-navy-primary">
                {margin}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
