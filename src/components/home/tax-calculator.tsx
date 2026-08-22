"use client";

import { useState } from "react";

// SARS individual income tax, 2026/2027 tax year (1 Mar 2026 - 28 Feb 2027).
const BRACKETS = [
  { min: 0, max: 245100, rate: 0.18, base: 0 },
  { min: 245100, max: 383100, rate: 0.26, base: 44118 },
  { min: 383100, max: 530200, rate: 0.31, base: 79998 },
  { min: 530200, max: 695800, rate: 0.36, base: 125599 },
  { min: 695800, max: 887000, rate: 0.39, base: 185215 },
  { min: 887000, max: 1878600, rate: 0.41, base: 259783 },
  { min: 1878600, max: Infinity, rate: 0.45, base: 666339 },
];

const PRIMARY_REBATE = 17820;
const SECONDARY_REBATE = 9765;
const TERTIARY_REBATE = 3249;
const UIF_MONTHLY_CAP = 177.12;

type AgeGroup = "under65" | "65to74" | "75plus";

const numberInputReset =
  "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

function grossTax(income: number) {
  const bracket = BRACKETS.find((b) => income > b.min && income <= b.max) ?? BRACKETS[0];
  return bracket.base + bracket.rate * (income - bracket.min);
}

function marginalRate(income: number) {
  const bracket = BRACKETS.find((b) => income > b.min && income <= b.max) ?? BRACKETS[0];
  return bracket.rate;
}

function rebateFor(age: AgeGroup) {
  if (age === "75plus") return PRIMARY_REBATE + SECONDARY_REBATE + TERTIARY_REBATE;
  if (age === "65to74") return PRIMARY_REBATE + SECONDARY_REBATE;
  return PRIMARY_REBATE;
}

const rand = (n: number) =>
  `R ${Math.round(n).toLocaleString("en-ZA")}`;

export function TaxCalculator() {
  const [period, setPeriod] = useState<"annual" | "monthly">("monthly");
  const [income, setIncome] = useState("");
  const [age, setAge] = useState<AgeGroup>("under65");

  const raw = parseFloat(income) || 0;
  const annualIncome = period === "monthly" ? raw * 12 : raw;

  const tax = Math.max(0, grossTax(annualIncome) - rebateFor(age));
  const uifAnnual = Math.min(annualIncome, UIF_MONTHLY_CAP * 12 * 100) > 0
    ? Math.min(annualIncome * 0.01, UIF_MONTHLY_CAP * 12)
    : 0;
  const netAnnual = Math.max(0, annualIncome - tax - uifAnnual);
  const effectiveRate = annualIncome > 0 ? (tax / annualIncome) * 100 : 0;
  const marginal = marginalRate(annualIncome) * 100;

  return (
    <section id="application" className="px-10 py-[120px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#cddaf0]">
          [ Free Tool ]
        </span>
        <h2 className="text-[38px] font-semibold leading-[1.25] text-bg-warm">
          Know exactly what you&rsquo;ll{" "}
          <em className="font-serif font-normal italic text-[#8fb0ff]">
            take home
          </em>
          .
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-[#cddaf0]">
          A quick income tax estimate using SARS&rsquo;s 2026/2027 tax
          tables &mdash; punch in your salary and see your tax, UIF, and net
          pay update instantly.
        </p>
      </div>

      <div className="mx-auto mt-14 flex max-w-[640px] justify-center">
        <div className="w-full rounded-[20px] border border-[#b9cdcb] bg-bg-mint p-8 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-navy-secondary">
              INCOME TAX CALCULATOR
            </span>
          </div>

          <div className="mb-5 inline-flex rounded-full border border-[#b9cdcb] bg-bg-warm p-1">
            {(["monthly", "annual"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                  period === p
                    ? "bg-navy-primary text-bg-warm"
                    : "text-ink-soft"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="col-span-2 flex flex-col gap-1.5 sm:col-span-1">
              <span className="text-[13px] font-semibold text-ink-soft">
                {period === "monthly" ? "Monthly" : "Annual"} income (ZAR)
              </span>
              <input
                type="number"
                placeholder="0"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent ${numberInputReset}`}
              />
            </label>

            <label className="col-span-2 flex flex-col gap-1.5 sm:col-span-1">
              <span className="text-[13px] font-semibold text-ink-soft">
                Age
              </span>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value as AgeGroup)}
                className="rounded-lg border border-[#b9cdcb] bg-bg-warm px-3.5 py-3 font-mono text-base text-ink outline-none focus:border-blue-accent"
              >
                <option value="under65">Under 65</option>
                <option value="65to74">65 to 74</option>
                <option value="75plus">75 and older</option>
              </select>
            </label>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#b9cdcb] pt-6">
            <Stat label="TAX PAYABLE" value={rand(period === "monthly" ? tax / 12 : tax)} />
            <Stat label="NET PAY" value={rand(period === "monthly" ? netAnnual / 12 : netAnnual)} accent />
            <Stat label="EFFECTIVE RATE" value={`${effectiveRate.toFixed(1)}%`} />
            <Stat label="MARGINAL RATE" value={`${marginal.toFixed(0)}%`} />
          </div>

          <p className="mt-6 text-xs leading-[1.6] text-ink-soft">
            Estimate only, based on SARS 2026/2027 tax tables and standard
            rebates. Includes UIF at 1% (capped at R177.12/month). Excludes
            medical aid credits, retirement contributions, and other
            deductions &mdash; get in touch for a full assessment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold tracking-[0.04em] text-ink-soft">
        {label}
      </span>
      <span
        className={`font-mono text-xl font-semibold ${
          accent ? "text-navy-primary" : "text-ink"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
