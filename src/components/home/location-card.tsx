"use client";

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
    <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-2.5 rounded-[14px] bg-[rgba(36,63,74,0.82)] p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="pointer-events-auto absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(242,244,239,0.15)] text-cream transition-colors hover:bg-[rgba(242,244,239,0.28)]"
      >
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 4l8 8M12 4l-8 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <h3 className="font-serif text-base italic leading-tight text-cream">
        {location.name}
      </h3>

      <Link
        href="/contact"
        className="pointer-events-auto self-start rounded-[14px] bg-blue-accent px-4 py-1.5 text-xs font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>
    </div>
  );
}
