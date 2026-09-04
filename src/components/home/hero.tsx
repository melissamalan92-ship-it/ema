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

const STATS = [
  {
    value: "1983",
    label: "Since",
    icon: (
      <path
        d="M7 3.5v3M17 3.5v3M4 9h16M5.5 6h13a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    value: "2,500+",
    label: "Companies served",
    icon: (
      <path
        d="M4 20V9.5L9 6v14M9 9.5h4M9 13h4M9 16.5h4M13 20V4l7 3v13M15.5 9.5h2M15.5 13h2M15.5 16.5h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    value: "40+",
    label: "Years of experience",
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

      {/* Stats band */}
      <div className="bg-navy-secondary px-10 py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-3 divide-x divide-bg-warm/25">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-3 px-10 text-left first:pl-0"
            >
              <span className="text-bg-warm/80">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  {stat.icon}
                </svg>
              </span>
              <span className="text-xl font-semibold text-bg-warm">
                {stat.value}
              </span>
              <span className="text-sm leading-[1.6] text-bg-warm/70">
                {stat.label}
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
