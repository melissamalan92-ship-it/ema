"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Dims every section heading -- plus anything marked data-glow -- and lights
// it up once it scrolls into view.
// Applied from JS so headings stay fully legible if it never runs.
export function HeadingGlow() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("main h1, main h2, main [data-glow]")
    );
    if (!headings.length) return;

    headings.forEach((h) => h.classList.add("heading-glow"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-lit");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -35% 0px" }
    );

    headings.forEach((h) => io.observe(h));

    return () => {
      io.disconnect();
      headings.forEach((h) => h.classList.remove("heading-glow", "is-lit"));
    };
  }, [pathname]);

  return null;
}
