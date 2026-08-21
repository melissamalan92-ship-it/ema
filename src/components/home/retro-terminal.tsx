"use client";

import Image from "next/image";

// Screen glass measured directly off the photo (public/images/old computer.jpg).
const SCREEN = { left: 21, top: 20, width: 59, height: 43 };

const numberInputReset =
  "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

type Props = {
  income: string;
  expenses: string;
  setIncome: (v: string) => void;
  setExpenses: (v: string) => void;
  net: number;
  margin: number;
};

export function RetroTerminal({
  income,
  expenses,
  setIncome,
  setExpenses,
  net,
  margin,
}: Props) {
  return (
    <div className="relative" style={{ width: 500, height: (500 * 586) / 612 }}>
      <Image
        src="/images/old-computer-cutout.png"
        alt="Old computer monitor"
        fill
        sizes="500px"
        className="pointer-events-none select-none object-contain"
        priority
      />

      <div
        className="absolute overflow-hidden rounded-[14px] bg-black font-mono text-[#33ff66]"
        style={{
          left: `${SCREEN.left}%`,
          top: `${SCREEN.top}%`,
          width: `${SCREEN.width}%`,
          height: `${SCREEN.height}%`,
          fontSize: 10,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #33ff66 0px, #33ff66 1px, transparent 1px, transparent 2px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            boxShadow: "inset 0 0 22px 6px rgba(0,0,0,0.65)",
          }}
        />

        <div className="relative flex h-full flex-col p-2.5">
          <div className="border-b border-[#33ff66]/50 pb-1 text-[8px] leading-tight">
            EMA-LEDGER Pro v2.1 (C) 1991 [FISCAL.DAT]
          </div>
          <div className="border-b border-[#33ff66]/30 py-1 text-[7px] tracking-[0.1em] text-[#33ff66]/60">
            FILE EDIT VIEW REPORTS TOOLS HELP
          </div>

          <div className="flex flex-col gap-1.5 py-2 text-[9px]">
            <label className="flex items-center gap-1">
              <span>INCOME..:</span>
              <span>R</span>
              <input
                type="number"
                placeholder="0"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`w-14 bg-transparent text-[#33ff66] outline-none placeholder:text-[#33ff66]/40 ${numberInputReset}`}
                style={{ fontSize: 9 }}
              />
            </label>
            <label className="flex items-center gap-1">
              <span>EXPENSE.:</span>
              <span>R</span>
              <input
                type="number"
                placeholder="0"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className={`w-14 bg-transparent text-[#33ff66] outline-none placeholder:text-[#33ff66]/40 ${numberInputReset}`}
                style={{ fontSize: 9 }}
              />
              <span className="animate-[blink_1s_step-end_infinite]">█</span>
            </label>
          </div>

          <div className="mt-auto border-t border-[#33ff66]/50 pt-1 text-[9px]">
            <div className="text-[7px] tracking-[0.1em] text-[#33ff66]/60">[SUMMARY]</div>
            <div>
              NET: R{net.toLocaleString("en-ZA", { maximumFractionDigits: 0 })} MRGN: {margin.toFixed(1)}%
            </div>
            <div className="text-[#33ff66]/70">
              STATUS: {net >= 0 ? "POSITIVE" : "REVIEW"}
            </div>
          </div>

          <div className="mt-1 border-t border-[#33ff66]/50 pt-1 text-[6px] tracking-[0.08em] text-[#33ff66]/60">
            [F1]HELP [F2]SAVE [F7]POST [ESC]EXIT
          </div>
        </div>
      </div>
    </div>
  );
}
