"use client";

import { useRef, useState } from "react";

const CLIPS = [
  "/images/EMA%20video%201980%27s.mp4",
  "/images/EMA%20video%201990%27s.mp4",
  "/images/EMA%20video%202000%27s.mp4",
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
    <section id="about" className="bg-navy-dark px-10 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_1.2fr] items-center gap-16">
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-blue-accent">
            [ About EMA ]
          </span>
          <h2 className="text-[38px] font-semibold leading-[1.25] text-bg-warm">
            More than{" "}
            <em className="font-serif font-normal italic text-blue-accent">
              numbers
            </em>
            .
          </h2>
          <p className="max-w-[420px] text-base leading-[1.7] text-bg-warm/70">
            For over four decades, we&rsquo;ve worked alongside businesses to
            navigate change, seize opportunities and build stronger futures.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlay}
          className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
        >
          {CLIPS.map((src, i) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={src}
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
    </section>
  );
}
