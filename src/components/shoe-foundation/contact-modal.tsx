"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Must match the declaration in public/__forms.html, which is what Netlify
// actually scans at deploy time.
const FORM_NAME = "shoe-foundation-enquiry";

const OpenContext = createContext<(() => void) | null>(null);

export function ShoeContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);

  return (
    <OpenContext.Provider value={show}>
      {children}
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </OpenContext.Provider>
  );
}

// Matches CtaLink's styling exactly so the buttons are indistinguishable from
// the ones on every other page — it just opens the modal instead of navigating.
export function ShoeContactButton({
  children,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  variant?: "dark" | "cream";
  className?: string;
}) {
  const show = useContext(OpenContext);

  return (
    <button
      type="button"
      onClick={show ?? undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-[14px] px-[34px] py-[11.5px] text-[13px] font-bold shadow-sm transition-opacity duration-300 ease-out hover:opacity-90 lg:rounded-[17px] lg:px-[43px] lg:py-[14.4px] lg:text-[16.2px]",
        variant === "dark" && "bg-button-navy text-cream",
        variant === "cream" && "bg-cream text-ink",
        className
      )}
    >
      {children}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Stop the page scrolling behind the modal.
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
    data.append("form-name", FORM_NAME);

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
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="shoe-contact-title"
        className="relative w-full max-w-[520px] rounded-[20px] bg-bg-warm p-10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-shoe-blue/10 hover:text-ink"
        >
          <X className="size-5" strokeWidth={1.75} />
        </button>

        {status === "sent" ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 text-center">
            <h2
              id="shoe-contact-title"
              className="font-display text-[29px] sm:text-[30px] lg:text-[34px] font-normal text-shoe-blue"
            >
              Thank you
            </h2>
            <p className="max-w-[340px] font-body text-[13px] lg:text-[15px] leading-[1.6] text-ink-soft">
              Your message is on its way to Zubeida. She&rsquo;ll be in touch
              as soon as she can.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 rounded-[14px] px-[34px] py-[11.5px] text-[13px] bg-button-navy font-bold text-cream transition-opacity hover:opacity-90 lg:rounded-[17px] lg:px-[43px] lg:py-[14.4px] lg:text-[16.2px]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id="shoe-contact-title"
              className="font-display text-[29px] sm:text-[30px] lg:text-[34px] font-normal leading-[1.15] text-shoe-blue"
            >
              Get in touch
            </h2>
            <p className="mt-2 font-body text-[13px] lg:text-[15px] leading-[1.6] text-ink-soft">
              Send a message straight to Zubeida about donations, sponsorships
              or general enquiries.
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
                  className="border-b border-ink/20 bg-transparent py-2 font-body text-[13px] lg:text-[15px] text-ink outline-none transition-colors focus:border-shoe-blue"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[14px] text-ink">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="border-b border-ink/20 bg-transparent py-2 font-body text-[13px] lg:text-[15px] text-ink outline-none transition-colors focus:border-shoe-blue"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-body text-[14px] text-ink">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="resize-none rounded-md border border-ink/20 bg-transparent p-3 font-body text-[13px] lg:text-[15px] text-ink outline-none transition-colors focus:border-shoe-blue"
                />
              </label>

              {status === "error" && (
                <p
                  role="alert"
                  className="font-body text-[14px] leading-[1.5] text-red-700"
                >
                  Something went wrong sending that. Please try again, or email{" "}
                  <a
                    className="underline"
                    href="mailto:Zubeida@ema.co.za"
                  >
                    Zubeida@ema.co.za
                  </a>{" "}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 self-start rounded-[14px] px-[34px] py-[11.5px] text-[13px] bg-button-navy font-bold text-cream shadow-sm transition-opacity duration-300 hover:opacity-90 disabled:opacity-60 lg:rounded-[17px] lg:px-[43px] lg:py-[14.4px] lg:text-[16.2px]"
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
