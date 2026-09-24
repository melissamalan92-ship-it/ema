"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { LOCATIONS, type LocationInfo } from "@/components/home/locations-data";
import { BranchEmailButton } from "./branch-contact-modal";

// The phone view of the branch list: photo tiles two to a row, with the
// details behind a More info card rather than stacked under every tile.
export function BranchTiles() {
  const [open, setOpen] = useState<LocationInfo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {LOCATIONS.map((location) => (
          <div key={location.id} className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => setOpen(location)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[14px] text-left"
              aria-label={`${location.name} details`}
            >
              <Image
                src={location.image}
                alt={location.shortName}
                fill
                sizes="170px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(36,63,74,0.65)] to-transparent" />
              <span className="absolute bottom-2 left-2.5 font-serif text-[13px] italic text-cream">
                {location.shortName}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(location)}
              className="self-start font-body text-[12px] text-ink-soft underline decoration-ink/25 underline-offset-2 transition-colors hover:text-ink"
            >
              More info
            </button>
          </div>
        ))}
      </div>

      {open && <BranchInfoCard location={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function BranchInfoCard({
  location,
  onClose,
}: {
  location: LocationInfo;
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-[2px] sm:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${location.name} contact details`}
        className="relative w-full max-w-[420px] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_70px_-25px_rgba(16,38,62,0.6)]"
      >
        <div className="relative h-[120px] w-full">
          <Image
            src={location.image}
            alt={location.shortName}
            fill
            sizes="420px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,63,74,0.7)] to-transparent" />
          <h3 className="absolute bottom-3 left-4 font-serif text-[19px] text-cream">
            {location.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/30 text-cream transition-colors hover:bg-black/50"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <Row icon={Phone}>
            <a
              href={`tel:${location.phone.replace(/\s+/g, "")}`}
              className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
            >
              {location.phone}
            </a>
          </Row>
          <Row icon={Mail}>
            <BranchEmailButton branch={location} />
          </Row>
          <Row icon={MapPin}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${location.name}, ${location.address}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
            >
              {location.address}
            </a>
          </Row>
        </div>
      </div>
    </div>
  );
}

function Row({
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
