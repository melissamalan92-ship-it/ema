"use client";

import Image from "next/image";
import Link from "next/link";
import type { LocationInfo } from "./locations-data";

export function LocationCard({
  location,
  onClose,
}: {
  location: LocationInfo;
  onClose: () => void;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[20px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
      <Image
        src={location.image}
        alt={location.shortName}
        fill
        sizes="500px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(36,63,74,0.15)] via-[rgba(36,63,74,0.1)] to-[rgba(36,63,74,0.8)]" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="pointer-events-auto absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(36,63,74,0.5)] text-cream backdrop-blur-md transition-colors hover:bg-[rgba(36,63,74,0.7)]"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="pointer-events-auto absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-[16px] border border-[rgba(242,244,239,0.18)] bg-[rgba(36,63,74,0.55)] p-6 backdrop-blur-xl backdrop-saturate-150">
        <h3 className="text-xl font-semibold text-cream">{location.name}</h3>

        <div className="flex flex-col gap-2">
          <ContactRow icon="phone" text="[ Phone number ]" />
          <ContactRow icon="mail" text="[ Email address ]" />
          <ContactRow icon="pin" text="[ Physical address ]" />
        </div>

        <Link
          href="#contact"
          className="mt-1 self-start rounded-[19px] bg-blue-accent px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  text,
}: {
  icon: "phone" | "mail" | "pin";
  text: string;
}) {
  return (
    <div className="flex items-center gap-2.5 text-[13px] text-cream/80">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0">
        {icon === "phone" && (
          <path
            d="M5 4.5h3.2l1.5 4-2 1.5a11 11 0 0 0 5.3 5.3l1.5-2 4 1.5V18a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="none"
          />
        )}
        {icon === "mail" && (
          <>
            <rect
              x="3.5"
              y="5.5"
              width="17"
              height="13"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
            <path
              d="m4 6.5 8 6.5 8-6.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        )}
        {icon === "pin" && (
          <>
            <path
              d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </>
        )}
      </svg>
      <span>{text}</span>
    </div>
  );
}
