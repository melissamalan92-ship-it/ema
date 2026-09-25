"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { LocationInfo } from "@/components/home/locations-data";

// Each branch has its own Netlify form so its notification can be pointed at
// that branch's own inbox — Netlify routes per form, not per submission.
// These names must match the declarations in public/__forms.html.
const formNameFor = (branch: LocationInfo) => `branch-${branch.id}`;

const OpenContext = createContext<((branch: LocationInfo) => void) | null>(
  null
);

export function BranchContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [branch, setBranch] = useState<LocationInfo | null>(null);

  return (
    <OpenContext.Provider value={setBranch}>
      {children}
      {branch && (
        <BranchModal branch={branch} onClose={() => setBranch(null)} />
      )}
    </OpenContext.Provider>
  );
}

export function BranchEmailButton({ branch }: { branch: LocationInfo }) {
  const open = useContext(OpenContext);

  return (
    <button
      type="button"
      onClick={() => open?.(branch)}
      className="text-left underline decoration-ink/20 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink/50"
    >
      {branch.email}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

function BranchModal({
  branch,
  onClose,
}: {
  branch: LocationInfo;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    data.append("form-name", formNameFor(branch));
    data.append("branch", branch.name);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-6 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="branch-contact-title"
        className="relative w-full max-w-[520px] rounded-[20px] bg-bg-warm p-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/10 hover:text-ink"
        >
          <X className="size-5" strokeWidth={1.75} />
        </button>

        {status === "sent" ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 text-center">
            <h2
              id="branch-contact-title"
              className="font-serif text-[21px] sm:text-[26px] lg:text-[30px] font-normal text-ink"
            >
              Message sent
            </h2>
            <p className="max-w-[340px] font-body text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] text-ink-soft">
              {branch.name} has your message and will be in touch shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 rounded-[14px] px-[34px] py-[11.5px] text-[13px] bg-ink font-body font-bold text-cream transition-opacity hover:opacity-90 lg:rounded-[19px] lg:px-8 lg:py-3.5 lg:text-[16px]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id="branch-contact-title"
              className="font-serif text-[21px] sm:text-[26px] lg:text-[30px] font-normal leading-[1.15] text-ink"
            >
              Email {branch.name}
            </h2>
            <p className="mt-2 font-body text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] text-ink-soft">
              Your message goes straight to {branch.email}.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              {/* Honeypot: real people never fill this in, bots usually do. */}
              <p className="hidden">
                <label>
                  Leave this field empty
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[14px] text-ink">Name</span>
                <input
                  ref={firstFieldRef}
                  name="name"
                  type="text"
                  required
                  className="border-b border-ink/20 bg-transparent py-2 font-body text-[13px] sm:text-[14px] lg:text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[14px] text-ink">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="border-b border-ink/20 bg-transparent py-2 font-body text-[13px] sm:text-[14px] lg:text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[14px] text-ink">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="resize-none rounded-md border border-ink/20 bg-transparent p-3 font-body text-[13px] sm:text-[14px] lg:text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
                />
              </label>

              {status === "error" && (
                <p
                  role="alert"
                  className="font-body text-[14px] leading-[1.5] text-red-700"
                >
                  Something went wrong sending that. Please try again, or email{" "}
                  <a className="underline" href={`mailto:${branch.email}`}>
                    {branch.email}
                  </a>{" "}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 self-start rounded-[14px] px-[34px] py-[11.5px] text-[13px] bg-ink font-body font-bold text-cream transition-opacity hover:opacity-90 disabled:opacity-60 lg:rounded-[19px] lg:px-8 lg:py-3.5 lg:text-[16px]"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
