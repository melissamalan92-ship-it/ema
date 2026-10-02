"use client";

import { useEffect } from "react";

// The services page renders two layouts — a phone accordion and a desktop
// bento — and only one is visible at a time. Both used to carry the same
// element id, so every anchor existed twice and the browser targeted the first
// copy, which is the hidden one. A hidden element has no layout position, so
// the jump landed arbitrarily rather than on the service.
//
// Targets are tagged with data-service instead, and resolved here against
// whichever copy is actually visible.
export function ServicesAnchor() {
  useEffect(() => {
    const go = () => {
      const slug = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!slug) return;

      const target = Array.from(
        document.querySelectorAll<HTMLElement>(`[data-service="${CSS.escape(slug)}"]`),
      ).find((el) => el.offsetParent !== null);
      if (!target) return;

      const scrollToTarget = (behavior: ScrollBehavior) => {
        const offset =
          parseInt(getComputedStyle(target).scrollMarginTop, 10) || 96;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior });
      };

      // Move straight away so the jump feels immediate, then correct once the
      // accordion's 300ms expand has finished — rows growing above the target
      // shift it down, and a single early measurement overshoots by ~170px.
      requestAnimationFrame(() => scrollToTarget("smooth"));
      window.setTimeout(() => scrollToTarget("smooth"), 380);
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);

  return null;
}
