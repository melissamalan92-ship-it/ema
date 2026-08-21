"use client";

import { useState } from "react";
import Image from "next/image";

type Entry = { amount: number };

type Props = {
  setIncome: (updater: (prev: string) => string) => void;
  setExpenses: (updater: (prev: string) => string) => void;
};

// Percent boxes measured directly off the photo (public/images/calculator.avif).
const SCREEN = { left: 12.9, top: 15.5, width: 73.7, height: 12.55 };

const COLS = {
  c1: { left: 7.7, width: 14.7 },
  c2: { left: 26.5, width: 14.6 },
  c3: { left: 43.4, width: 14.7 },
  c4: { left: 60.1, width: 14.7 },
  c5: { left: 78.0, width: 14.6 },
};
const ROWS = {
  r1: { top: 44.0, height: 9.9 },
  r2: { top: 54.9, height: 8.8 },
  r3: { top: 64.7, height: 8.8 },
  r4: { top: 74.7, height: 9.0 },
  r5: { top: 83.7, height: 8.9 },
  r4r5: { top: 74.7, height: 17.9 },
};

type KeyDef = {
  id: string;
  col: keyof typeof COLS;
  row: keyof typeof ROWS;
  action: string;
};

const KEYS: KeyDef[] = [
  { id: "%", col: "c1", row: "r1", action: "percent" },
  { id: "÷", col: "c5", row: "r1", action: "op÷" },
  { id: "+/-", col: "c1", row: "r2", action: "sign" },
  { id: "7", col: "c2", row: "r2", action: "digit7" },
  { id: "8", col: "c3", row: "r2", action: "digit8" },
  { id: "9", col: "c4", row: "r2", action: "digit9" },
  { id: "×", col: "c5", row: "r2", action: "op×" },
  { id: "→", col: "c1", row: "r3", action: "backspace" },
  { id: "4", col: "c2", row: "r3", action: "digit4" },
  { id: "5", col: "c3", row: "r3", action: "digit5" },
  { id: "6", col: "c4", row: "r3", action: "digit6" },
  { id: "−", col: "c5", row: "r3", action: "op−" },
  { id: "ON", col: "c1", row: "r4", action: "clear" },
  { id: "1", col: "c2", row: "r4", action: "digit1" },
  { id: "2", col: "c3", row: "r4", action: "digit2" },
  { id: "3", col: "c4", row: "r4", action: "digit3" },
  { id: "+", col: "c5", row: "r4r5", action: "op+" },
  { id: "0", col: "c1", row: "r5", action: "digit0" },
  { id: "00", col: "c2", row: "r5", action: "digit00" },
  { id: ".", col: "c3", row: "r5", action: "decimal" },
  { id: "=", col: "c4", row: "r5", action: "equals" },
];

export function RetroCalculator({ setIncome, setExpenses }: Props) {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waiting, setWaiting] = useState(false);
  const [incomeEntries, setIncomeEntries] = useState<Entry[]>([]);
  const [expenseEntries, setExpenseEntries] = useState<Entry[]>([]);

  const calc = (a: number, b: number, op: string) => {
    switch (op) {
      case "÷":
        return b === 0 ? NaN : a / b;
      case "×":
        return a * b;
      case "−":
        return a - b;
      case "+":
        return a + b;
      default:
        return b;
    }
  };

  const format = (n: number) => {
    if (!isFinite(n)) return "Error";
    const rounded = Math.round(n * 1e8) / 1e8;
    const s = String(rounded);
    return s.length > 10 ? rounded.toExponential(4) : s;
  };

  const appendDigit = (d: string) => {
    if (waiting) {
      setDisplay(d);
      setWaiting(false);
      return;
    }
    setDisplay((prev) => (prev === "0" ? d : prev.length < 9 ? prev + d : prev));
  };

  const handleAction = (action: string) => {
    if (action.startsWith("digit")) {
      appendDigit(action.replace("digit", ""));
      return;
    }
    if (action === "decimal") {
      if (waiting) {
        setDisplay("0.");
        setWaiting(false);
        return;
      }
      setDisplay((prev) => (prev.includes(".") ? prev : prev + "."));
      return;
    }
    if (action === "sign") {
      setDisplay((prev) => format(parseFloat(prev) * -1));
      return;
    }
    if (action === "percent") {
      setDisplay((prev) => format(parseFloat(prev) / 100));
      return;
    }
    if (action === "backspace") {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      return;
    }
    if (action === "clear") {
      setDisplay("0");
      setPrevValue(null);
      setOperator(null);
      setWaiting(false);
      return;
    }
    if (action.startsWith("op")) {
      const nextOp = action.replace("op", "");
      const inputValue = parseFloat(display);
      if (prevValue === null) {
        setPrevValue(inputValue);
      } else if (operator) {
        const result = calc(prevValue, inputValue, operator);
        setDisplay(format(result));
        setPrevValue(result);
      }
      setOperator(nextOp);
      setWaiting(true);
      return;
    }
    if (action === "equals") {
      if (operator === null || prevValue === null) return;
      const inputValue = parseFloat(display);
      const result = calc(prevValue, inputValue, operator);
      setDisplay(format(result));
      setPrevValue(null);
      setOperator(null);
      setWaiting(true);
      return;
    }
  };

  const logEntry = (kind: "income" | "expense") => {
    const amount = parseFloat(display);
    if (!amount || amount <= 0) return;
    if (kind === "income") {
      setIncomeEntries((prev) => [...prev, { amount }]);
      setIncome((prev) => String((parseFloat(prev) || 0) + amount));
    } else {
      setExpenseEntries((prev) => [...prev, { amount }]);
      setExpenses((prev) => String((parseFloat(prev) || 0) + amount));
    }
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaiting(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex flex-col items-center gap-3">
        <div
          className="relative"
          style={{ width: 260, height: (260 * 1571) / 1179 }}
        >
          <Image
            src="/images/calculator.avif"
            alt="Retro calculator"
            fill
            sizes="260px"
            className="pointer-events-none select-none object-contain"
            priority
          />

          <div
            className="absolute flex items-center justify-end overflow-hidden pr-2 font-mono font-medium text-[#1d2b1a]"
            style={{
              left: `${SCREEN.left}%`,
              top: `${SCREEN.top}%`,
              width: `${SCREEN.width}%`,
              height: `${SCREEN.height}%`,
              fontSize: 20,
            }}
          >
            {display}
          </div>

          {KEYS.map((k) => {
            const col = COLS[k.col];
            const row = ROWS[k.row];
            return (
              <button
                key={k.id}
                type="button"
                aria-label={k.id}
                onClick={() => handleAction(k.action)}
                className="absolute rounded-[6px] transition-colors hover:bg-[rgba(255,255,255,0.18)] active:bg-[rgba(255,255,255,0.3)]"
                style={{
                  left: `${col.left}%`,
                  top: `${row.top}%`,
                  width: `${col.width}%`,
                  height: `${row.height}%`,
                }}
              />
            );
          })}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => logEntry("income")}
            className="rounded-full border border-[rgba(253,255,248,0.35)] bg-[rgba(253,255,248,0.1)] px-3.5 py-1.5 text-xs font-semibold text-bg-warm backdrop-blur-md hover:bg-[rgba(253,255,248,0.18)]"
          >
            + Log as income
          </button>
          <button
            type="button"
            onClick={() => logEntry("expense")}
            className="rounded-full border border-[rgba(253,255,248,0.35)] bg-[rgba(253,255,248,0.1)] px-3.5 py-1.5 text-xs font-semibold text-bg-warm backdrop-blur-md hover:bg-[rgba(253,255,248,0.18)]"
          >
            + Log as expense
          </button>
        </div>
      </div>

      <Notepad incomeEntries={incomeEntries} expenseEntries={expenseEntries} />
    </div>
  );
}

function Notepad({
  incomeEntries,
  expenseEntries,
}: {
  incomeEntries: Entry[];
  expenseEntries: Entry[];
}) {
  const incomeTotal = incomeEntries.reduce((s, e) => s + e.amount, 0);
  const expenseTotal = expenseEntries.reduce((s, e) => s + e.amount, 0);

  return (
    <div
      className="relative w-[260px] rounded-sm bg-[#fdfbef] p-5 pl-9 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.5)]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(180deg, transparent 0px, transparent 27px, rgba(120,140,180,0.35) 28px)",
        backgroundPositionY: "8px",
        transform: "rotate(1.5deg)",
      }}
    >
      <div className="absolute bottom-0 left-6 top-0 w-px bg-[rgba(200,70,70,0.4)]" />

      <div
        className="mb-3 text-lg font-semibold text-[#2a2620]"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        Income &amp; Expenses
      </div>

      <div className="mb-3">
        <div
          className="text-base font-semibold text-navy-primary"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          Income
        </div>
        {incomeEntries.length === 0 ? (
          <div
            className="text-base text-[#2a2620]/40"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            &mdash;
          </div>
        ) : (
          incomeEntries.map((e, i) => (
            <div
              key={i}
              className="text-base text-[#2a2620]"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              + R{e.amount.toLocaleString("en-ZA")}
            </div>
          ))
        )}
      </div>

      <div className="mb-4">
        <div
          className="text-base font-semibold text-[#a8433c]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          Expenses
        </div>
        {expenseEntries.length === 0 ? (
          <div
            className="text-base text-[#2a2620]/40"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            &mdash;
          </div>
        ) : (
          expenseEntries.map((e, i) => (
            <div
              key={i}
              className="text-base text-[#2a2620]"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              &minus; R{e.amount.toLocaleString("en-ZA")}
            </div>
          ))
        )}
      </div>

      <div className="border-t border-[#2a2620]/15 pt-2">
        <div
          className="text-lg font-semibold text-[#2a2620]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          Net: R{(incomeTotal - expenseTotal).toLocaleString("en-ZA")}
        </div>
      </div>
    </div>
  );
}
