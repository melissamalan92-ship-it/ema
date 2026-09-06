"use client";

import { useEffect, useRef, useState } from "react";
import { Nav } from "./nav";
import { Logo } from "./logo";
import { SERVICES } from "./services";

const CLIPS = [
  { src: "/images/EMA%20video%201980%27s.mp4", label: "1980s" },
  { src: "/images/EMA%20video%201990%27s.mp4", label: "1990s" },
  { src: "/images/EMA%20video%202000%27s.mp4", label: "Now" },
];

const PILLARS = [
  {
    value: "Established experience",
    label: "Trusted expertise built over more than 40 years.",
    icon: (
      <path
        d="M12 3.5 4.5 7v3c0 5 3.2 8.3 7.5 10.5 4.3-2.2 7.5-5.5 7.5-10.5V7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    value: "Personal relationships",
    label: "Advice shaped around your business, not a template.",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M3.5 19c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M15.5 5.5a2.8 2.8 0 0 1 0 5.4M17.5 19c-.3-2.1-1.3-3.7-2.9-4.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    value: "Built for today",
    label: "Modern tools and practical support that evolves with you.",
    icon: (
      <path
        d="m3 17 6-6 4 4 8-8M21 7v6M21 7h-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
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
                <em className="font-serif font-normal italic text-blue-accent">
                  designed
                </em>{" "}
                for{" "}
                <em className="font-serif font-normal italic text-blue-accent">
                  growth
                </em>
                .
              </h1>
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

      {/* Pillars band */}
      <div className="bg-navy-secondary px-10 py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-3 divide-x divide-bg-warm/25">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.value}
              className="flex flex-col items-start gap-3 px-12 text-left first:pl-0"
            >
              <span className="text-bg-warm/80">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {pillar.icon}
                </svg>
              </span>
              <span className="text-lg font-semibold text-bg-warm">
                {pillar.value}
              </span>
              <span className="text-sm leading-[1.6] text-bg-warm/70">
                {pillar.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 py-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[0.85fr_1.15fr] items-start gap-16">
          <div className="flex flex-col items-start gap-4 text-left">
            <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
              [ What We Do ]
            </span>
            <h2 className="text-[38px] font-semibold leading-[1.25] text-bg-warm">
              Everything your business needs to{" "}
              <em className="font-serif font-normal italic text-blue-accent">
                grow
              </em>
              .
            </h2>
            <span className="h-0.5 w-16 bg-blue-accent" />
            <p className="max-w-[420px] text-base leading-[1.7] text-bg-warm/70">
              We offer a full range of professional services to support your
              business at every stage.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col gap-2">
                <span className="text-bg-warm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {service.icon}
                  </svg>
                </span>
                <h3 className="text-sm font-semibold leading-[1.4] text-bg-warm">
                  {service.title}
                </h3>
                <p className="text-xs leading-[1.5] text-bg-warm/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
