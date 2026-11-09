"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Indian classical shehnai-like scale frequencies (Bilawal / Yaman flavor)
  const notes = [
    261.63, // Sa (C4)
    293.66, // Re (D4)
    329.63, // Ga (E4)
    349.23, // Ma (F4)
    392.00, // Pa (G4)
    440.00, // Dha (A4)
    493.88, // Ni (B4)
    523.25, // Sa' (C5)
    587.33, // Re' (D5)
  ];

  // A soothing traditional wedding melodic phrase
  const melody = [
    { note: 0, dur: 0.6 },
    { note: 1, dur: 0.4 },
    { note: 2, dur: 0.8 },
    { note: 4, dur: 0.8 },
    { note: 5, dur: 0.5 },
    { note: 4, dur: 0.5 },
    { note: 2, dur: 0.7 },
    { note: 1, dur: 0.5 },
    { note: 0, dur: 1.2 },
    { note: 4, dur: 0.6 },
    { note: 6, dur: 0.6 },
    { note: 7, dur: 1.0 },
    { note: 6, dur: 0.5 },
    { note: 5, dur: 0.5 },
    { note: 4, dur: 0.8 },
    { note: 2, dur: 0.6 },
    { note: 1, dur: 0.8 },
    { note: 0, dur: 1.5 },
  ];

  const playMelody = () => {
    if (!isPlayingRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      let currentTime = ctx.currentTime + 0.1;

      // Play continuous tanpura drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = "sine";
      droneOsc.frequency.setValueAtTime(130.81, ctx.currentTime); // Low Sa (C3)
      droneGain.gain.setValueAtTime(0.02, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start(ctx.currentTime);
      droneGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 12);
      droneOsc.stop(ctx.currentTime + 12.2);

      melody.forEach(({ note, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Shehnai-like warm timber (triangle + subtle vibrato)
        osc.type = "triangle";
        const freq = notes[note];
        osc.frequency.setValueAtTime(freq, currentTime);

        // Soft vibrato
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        vibrato.frequency.setValueAtTime(5.5, currentTime);
        vibratoGain.gain.setValueAtTime(3.5, currentTime);
        vibrato.connect(osc.frequency);
        vibrato.start(currentTime);
        vibrato.stop(currentTime + dur);

        // Soft envelope
        gain.gain.setValueAtTime(0.001, currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(currentTime);
        osc.stop(currentTime + dur);

        currentTime += dur + 0.05;
      });

      const totalTimeMs = (currentTime - ctx.currentTime) * 1000;
      timerRef.current = window.setTimeout(() => {
        if (isPlayingRef.current) {
          playMelody();
        }
      }, totalTimeMs);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      playMelody();
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        type="button"
        className="flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-sm border border-[#e4e1dd] text-[#312d2a] hover:bg-[#f1efed] transition-all rounded-full shadow-sm text-xs font-medium cursor-pointer"
        title={isPlaying ? "संगीत बंद करें" : "मंगल संगीत बजाएं"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#c74634] animate-pulse" />
            <span className="text-[#312d2a] hidden sm:inline">संगीत चालू</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#aea8a2]" />
            <span className="text-[#312d2a] hidden sm:inline">मंगल संगीत</span>
          </>
        )}
        <Music className={`w-3.5 h-3.5 ${isPlaying ? "text-[#f0cc71] animate-spin" : "text-[#aea8a2]"}`} />
      </button>
    </div>
  );
}

