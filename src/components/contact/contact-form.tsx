"use client";

import { useState } from "react";

// Must match the declaration in public/__forms.html, which is what Netlify
// scans at deploy time. Notifications for this form go to info@ema.co.za.
const FORM_NAME = "general-enquiry";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "business", label: "Business Name", type: "text", required: false },
  { name: "subject", label: "Subject", type: "text", required: false },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
        <h3 className="font-serif text-[22px] lg:text-[32px] font-normal text-ink">
          Thank you
        </h3>
        <p className="max-w-[320px] font-body text-[14px] lg:text-[16px] leading-[1.6] text-ink-soft">
          We&rsquo;ve got your message and someone will come back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
      {/* Honeypot: real people never fill this in, bots usually do. */}
      <p className="hidden">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1 lg:gap-2">
          <span className="font-body text-[15px] lg:text-[18px] text-ink">
            {field.label}
          </span>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            className="border-b border-ink/20 bg-transparent py-2 font-body text-[13px] lg:text-[15px] text-ink outline-none transition-colors focus:border-blue-accent"
          />
        </label>
      ))}

      <label className="flex flex-col gap-1 lg:gap-2">
        <span className="font-body text-[15px] lg:text-[18px] text-ink">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="h-[92px] resize-none rounded-md border border-ink/20 bg-transparent p-3 font-body text-[13px] text-ink outline-none transition-colors focus:border-blue-accent lg:h-auto lg:text-[15px]"
        />
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="font-body text-[14px] leading-[1.5] text-red-700"
        >
          Something went wrong sending that. Please try again, or email{" "}
          <a className="underline" href="mailto:info@ema.co.za">
            info@ema.co.za
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 self-start rounded-[14px] px-[34px] py-[11.5px] text-[13px] bg-ink font-body font-bold text-cream transition-opacity hover:opacity-90 disabled:opacity-60 lg:rounded-[19px] lg:px-8 lg:py-3.5 lg:text-[16px]"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
