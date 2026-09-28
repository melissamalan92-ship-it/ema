"use client";

import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

// The film is 21MB and nearly three minutes long. It used to autoplay, so
// every visitor downloaded all of it whether or not they watched. preload
//="none" plus a poster means nothing but the still image loads until someone
// actually asks for it.
export function ShoeFoundationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    // Starting from a click means sound is allowed, and is what someone
    // pressing play on a film about the learners would expect.
    video.muted = false;
    setMuted(false);
    void video.play();
    setStarted(true);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]">
      <video
        ref={videoRef}
        src="/images/Shoe%20Foundation%20video.mp4"
        poster="/images/shoe-foundation-poster.jpg"
        preload="none"
        playsInline
        onClick={started ? togglePlay : undefined}
        className={`absolute inset-0 h-full w-full object-cover ${
          started ? "cursor-pointer" : ""
        }`}
      />

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label="Play the Shoe Foundation film"
          className="group absolute inset-0 flex items-center justify-center bg-[rgba(36,63,74,0.35)] transition-colors hover:bg-[rgba(36,63,74,0.45)]"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-cream/95 sm:size-[72px] text-shoe-blue shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105 lg:size-20">
            <Play className="ml-1 size-7 lg:size-8" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}

      {started && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-[rgba(36,63,74,0.55)] text-cream backdrop-blur-md transition-colors hover:bg-[rgba(36,63,74,0.75)]"
        >
          {muted ? (
            <VolumeX className="size-5" strokeWidth={1.75} />
          ) : (
            <Volume2 className="size-5" strokeWidth={1.75} />
          )}
        </button>
      )}
    </div>
  );
}
