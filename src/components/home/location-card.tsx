"use client";

import { useEffect } from "react";
import { Phone, Mail, MapPin, X } from "lucide-react";
import type { LocationInfo } from "./locations-data";

export function LocationCard({
  location,
  onClose,
}: {
  location: LocationInfo;
  onClose: () => void;
}) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.address
  )}`;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    // The card is 220px wide but a phone tile is ~100px, so anchoring it to
    // the tile pushes it off-screen for the leftmost column. On phones it
    // centres over the page instead; desktop keeps the tile-anchored card.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-5 lg:pointer-events-none lg:absolute lg:z-10 lg:items-end lg:justify-end lg:bg-transparent lg:p-0"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="pointer-events-auto relative flex h-[205px] w-[220px] shrink-0 flex-col gap-3 rounded-[14px] bg-white p-5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.4)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-ink/5 text-ink-soft transition-colors hover:bg-ink/10"
        >
          <X size={13} strokeWidth={1.75} />
        </button>

        <h3 className="pr-6 font-serif text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-tight text-ink">
          {location.name}
        </h3>

        <div className="flex flex-col gap-2">
          <ContactRow icon={Phone}>
            <a href={`tel:${location.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
              {location.phone}
            </a>
          </ContactRow>
          <ContactRow icon={Mail}>
            <a href={`mailto:${location.email}`} className="hover:text-ink">
              {location.email}
            </a>
          </ContactRow>
          <ContactRow icon={MapPin}>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="line-clamp-3 hover:text-ink"
            >
              {location.address}
            </a>
          </ContactRow>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: typeof Phone;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5 font-body text-[13px] leading-[1.5] text-ink-soft">
      <Icon className="mt-[1px] size-3.5 shrink-0 text-blue-accent" strokeWidth={1.75} />
      <span>{children}</span>
    </div>
  );
}
