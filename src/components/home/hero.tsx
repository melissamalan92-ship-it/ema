"use client";

import { useEffect, useRef, useState } from "react";
import { Nav } from "./nav";
import { Logo } from "./logo";
import { SERVICES } from "./services";
import { Cta } from "./cta";

const CLIPS = [
  { src: "/images/EMA%20video%201980%27s.mp4", label: "1980s" },
  { src: "/images/EMA%20video%201990%27s.mp4", label: "1990s" },
  { src: "/images/EMA%20video%202000%27s.mp4", label: "Now" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const current = videoRefs.current[active];
    if (!current) return;
    current.currentTime = 0;
    current.play().catch(() => {});
  }, [active]);

  const handleEnded = () => {
    setActive((prev) => (prev + 1) % CLIPS.length);
  };

  return (
    <section id="services" className="relative">
      <div className="relative h-[70vh] w-full overflow-hidden">
        {CLIPS.map((clip, i) => (
          <video
            key={clip.src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            src={clip.src}
            muted
            playsInline
            preload="auto"
            onEnded={i === active ? handleEnded : undefined}
          />
        ))}

        {/* Neutral glass effect over the video -- no blue hue */}
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-[3px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.12) 100%), linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        <div className="relative z-10 h-full">
          <div className="absolute inset-x-0 top-0">
            <Nav />
          </div>

          <div className="flex h-full items-center">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-6 px-10">
              <Logo size="lg" variant="blue" />
              <h1 className="max-w-[620px] text-[52px] font-semibold leading-[1.2] text-bg-warm">
                Accounting services{" "}
                <em className="font-serif font-normal italic text-[#8fb0ff]">
                  designed
                </em>{" "}
                for{" "}
                <em className="font-serif font-normal italic text-[#8fb0ff]">
                  growth
                </em>
                .
              </h1>
              <p className="max-w-[480px] text-lg leading-[1.7] text-[#e3e6e9]">
                Working since 1983 with over 2,500 companies.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 z-20 flex items-end gap-3">
            {CLIPS.map((clip, i) => (
              <div key={clip.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                      i === active ? "bg-bg-warm" : "bg-bg-warm/30"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-500 ${
                      i === active ? "text-bg-warm" : "text-bg-warm/40"
                    }`}
                  >
                    {clip.label}
                  </span>
                </div>
                {i < CLIPS.length - 1 && (
                  <span
                    className={`mb-[18px] h-px w-10 transition-colors duration-500 ${
                      i < active ? "bg-bg-warm/70" : "bg-bg-warm/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cta />

      <div className="bg-bg-grey px-10 py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 rounded-2xl bg-[#d9dcd6] p-6 shadow-[0_20px_40px_-28px_rgba(16,31,46,0.4)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-primary text-bg-warm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {service.icon}
                  </svg>
                </span>
                <h3 className="text-base font-semibold text-ink">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-[1.6] text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
