"use client";

import { useRef, useState } from "react";

const DECADES = ["1980s", "1990s", "2000s"];
const SEGMENT_SECONDS = 8;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);

  const handleTimeUpdate = () => {
    const t = videoRef.current?.currentTime ?? 0;
    setActive(Math.min(DECADES.length - 1, Math.floor(t / SEGMENT_SECONDS)));
  };

  return (
    <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]">
      <video
        ref={videoRef}
        src="/images/Decades%20video%20colour.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />
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
