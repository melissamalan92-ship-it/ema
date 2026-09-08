"use client";

import { useRef, useState } from "react";

const CLIPS = [
  { src: "/images/EMA%20video%201980%27s.mp4", label: "1980's" },
  { src: "/images/EMA%20video%201990%27s.mp4", label: "1990's" },
  { src: "/images/EMA%20video%202000%27s.mp4", label: "2000's" },
];

export function About() {
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handlePlay = () => {
    setPlaying(true);
    videoRefs.current[0]?.play();
  };

  const handleEnded = (i: number) => {
    const next = (i + 1) % CLIPS.length;
    setActive(next);
    const nextVideo = videoRefs.current[next];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play();
    }
  };

  return (
    <section id="about" className="bg-bg-warm px-10 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.3fr_1fr] items-center gap-16">
        <div className="flex items-stretch gap-6">
          <div className="flex flex-col items-center justify-between py-4">
            {CLIPS.map((clip, i) => (
              <div key={clip.label} className="flex flex-1 flex-col items-center">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-500 ${
                    i === active ? "bg-navy-primary" : "bg-ink/20"
                  }`}
                />
                <span
                  className={`mt-2 whitespace-nowrap text-xs font-semibold tracking-[0.05em] transition-colors duration-500 ${
                    i === active ? "text-navy-primary" : "text-ink/35"
                  }`}
                >
                  {clip.label}
                </span>
                {i < CLIPS.length - 1 && (
                  <span
                    className={`mt-3 w-px flex-1 transition-colors duration-500 ${
                      i < active ? "bg-navy-primary/60" : "bg-ink/15"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handlePlay}
            className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl"
          >
            {CLIPS.map((clip, i) => (
              <video
                key={clip.src}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={clip.src}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                muted
                playsInline
                preload="auto"
                onEnded={i === active ? () => handleEnded(i) : undefined}
              />
            ))}
            {!playing && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bg-warm/90 text-navy-primary shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-navy-secondary">
            [ About EMA ]
          </span>
          <h2 className="text-[38px] font-semibold leading-[1.25] text-ink">
            More than{" "}
            <em className="font-serif font-normal italic text-navy-secondary">
              numbers
            </em>
            .
          </h2>
          <p className="max-w-[420px] text-base leading-[1.7] text-ink-soft">
            For over four decades, we&rsquo;ve worked alongside businesses to
            navigate change, seize opportunities and build stronger futures.
          </p>
        </div>
      </div>
    </section>
  );
}
