"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function ShoeFoundationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

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
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
      />
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
    </div>
  );
}
