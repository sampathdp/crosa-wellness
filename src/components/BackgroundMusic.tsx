"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "crosa-music-muted";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;

    let userMuted = false;
    try {
      userMuted = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (userMuted) return;

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const removeListeners = () =>
      events.forEach((e) => window.removeEventListener(e, start));

    function start() {
      audio!.play().then(removeListeners).catch(() => {});
    }

    // Browsers block autoplay with sound: try now, fall back to first interaction.
    audio.play().catch(() => {
      events.forEach((e) => window.addEventListener(e, start, { passive: true }));
    });

    return removeListeners;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
    } else {
      audio.pause();
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full surface-dark bg-[#0B1528] text-accent-soft border border-accent/50 shadow-lg flex items-center justify-center hover:bg-[#1C2E50] transition-colors"
      >
        {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
}
