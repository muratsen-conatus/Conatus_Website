"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TechnologySubsystemMediaPlayerProps = {
  videoSrc: string;
  posterSrc: string;
  label: string;
  className?: string;
};

export function TechnologySubsystemMediaPlayer({
  videoSrc,
  posterSrc,
  label,
  className,
}: TechnologySubsystemMediaPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-brand-200/60 bg-brand-950 shadow-lg",
        className,
      )}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        poster={posterSrc}
        playsInline
        muted
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={label}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {!playing ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
      ) : null}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-700 shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={playing ? label : label}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-brand-950/75 px-4 py-2.5 backdrop-blur-sm">
        <Image
          src="/Favicons/browser.png"
          alt=""
          width={20}
          height={20}
          className="opacity-90"
          aria-hidden
        />
        <span className="text-xs font-medium text-white/90 sm:text-sm">{label}</span>
      </div>
    </div>
  );
}
