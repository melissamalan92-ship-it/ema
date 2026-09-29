"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const DECADES = ["1980s", "1990s", "2000s"];
const SEGMENT_SECONDS = 8;

export function HeroVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [blocked, setBlocked] = useState(false);

  // The markup already carries autoplay/muted/playsinline, but iOS refuses
  // autoplay outright in Low Power Mode, and some browsers block it on data
  // saver. Ask explicitly, and if we are refused, offer a play button rather
  // than leaving a still frame that looks broken.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const attempt = video.play();
    if (attempt) attempt.catch(() => setBlocked(true));
  }, []);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play();
    setBlocked(false);
  };

  const handleTimeUpdate = () => {
    const t = videoRef.current?.currentTime ?? 0;
    setActive(Math.min(DECADES.length - 1, Math.floor(t / SEGMENT_SECONDS)));
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={videoRef}
        src="/images/Decades%20video%20colour.mp4"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onPlaying={() => setBlocked(false)}
      />

      {blocked && (
        <button
          type="button"
          onClick={start}
          aria-label="Play the film"
          className="group absolute inset-0 z-10 flex items-center justify-center bg-[rgba(36,63,74,0.3)] transition-colors hover:bg-[rgba(36,63,74,0.42)]"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-cream/95 text-navy-primary shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105 lg:size-16">
            <Play className="ml-0.5 size-6 lg:size-7" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-8 pb-5 pt-12">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/25" />
          {DECADES.map((label, i) => (
            <div key={label} className="relative z-10 flex flex-col items-center gap-2 bg-transparent">
              <span
                className={`size-2.5 rounded-full transition-colors duration-300 ${
                  i === active ? "bg-cream" : "bg-cream/35"
                }`}
              />
              <span
                className={`font-body text-xs tracking-[0.05em] transition-colors duration-300 ${
                  i === active ? "text-cream" : "text-cream/50"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
