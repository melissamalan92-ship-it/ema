"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./contact-form";

// Phones get a button rather than an inline form; the form itself is the
// same component, rendered in a sheet.
export function ContactFormLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-[14px] bg-cream px-[34px] py-[11.5px] text-[13px] font-bold text-ink shadow-sm transition-opacity duration-300 ease-out hover:opacity-90"
      >
        Contact Us
      </button>

      {open && <ContactFormSheet onClose={() => setOpen(false)} />}
    </div>
  );
}

function ContactFormSheet({ onClose }: { onClose: () => void }) {
  useEffect(() => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-5 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"
        className="relative max-h-[calc(100dvh-2.5rem)] w-full max-w-[420px] overflow-y-auto rounded-[20px] bg-bg-warm p-5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/10 hover:text-ink"
        >
          <X className="size-5" strokeWidth={1.75} />
        </button>

        <h2
          id="contact-form-title"
          className="mb-4 font-serif text-[22px] font-normal leading-[1.2] text-ink"
        >
          Get in touch
        </h2>

        <ContactForm />
      </div>
    </div>
  );
}
