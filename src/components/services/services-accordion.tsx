"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SERVICES, TONES } from "./services-data";
import { serviceSlug } from "./service-anchors";

// The phone view of the services bento: each service is a compact banner
// carrying its motif as an icon, and expands in place for the detail.
export function ServicesAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-start lg:hidden">
      {SERVICES.map((service, i) => {
        const Motif = service.motif;
        const t = TONES[service.tone];
        const slug = serviceSlug(service.title);
        const isOpen = open === slug;

        return (
          <div
            key={service.title}
            id={slug}
            className={`scroll-mt-24 overflow-hidden rounded-[16px] ${t.card}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : slug)}
              aria-expanded={isOpen}
              aria-controls={`${slug}-panel`}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] border p-1.5 sm:size-10 ${t.panel} ${t.motif}`}
              >
                <Motif />
              </span>

              <span className="flex min-w-0 flex-1 flex-col">
                <span
                  className={`font-body text-[10px] font-semibold tracking-[0.22em] ${t.index}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif text-[16px] font-normal leading-tight sm:text-[17px] ${t.title}`}
                >
                  {service.title}
                </span>
              </span>

              <ChevronDown
                className={`size-4 shrink-0 transition-transform duration-300 ${t.detail} ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {/* Height animates via grid-template-rows so the panel can size
                itself to its content rather than needing a fixed max-height. */}
            <div
              id={`${slug}-panel`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-3 px-4 pb-4 pt-1">
                  <p
                    className={`font-body text-[13px] leading-[1.6] sm:text-[14px] ${t.lead}`}
                  >
                    {service.description}
                  </p>
                  <p
                    className={`font-body text-[12.5px] leading-[1.6] sm:text-[13.5px] ${t.detail}`}
                  >
                    {service.detail}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border px-2.5 py-1 font-body text-[11px] leading-none ${t.chip}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
