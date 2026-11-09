"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music, Disc3, ChevronDown, Check } from "lucide-react";

interface Track {
  id: string;
  name: string;
  subtitle: string;
  src: string;
}

const tracks: Track[] = [
  {
    id: "track-1",
    name: "मधुर संगीत (धुन १)",
    subtitle: "विवाह धुन",
    src: "/absolutesound-violin-emotional-557859.mp3",
  },
  {
    id: "track-2",
    name: "भावुक वायलिन (धुन २)",
    subtitle: "मधुर धुन",
    src: "/absolutesound-violin-violin-music-557858.mp3",
  },
];

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Initialize and load audio whenever currentTrack changes
  useEffect(() => {
    // Stop previous audio if any
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(currentTrack.src);
    audio.preload = "auto";
    audio.loop = true; // Continuous loop
    audio.volume = 0.55;

    // Fallback onEnded to guarantee continuous looping
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => { });
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    audioRef.current = audio;

    // If it was already playing before track switch, start the new track immediately
    if (isPlaying) {
      audio.play().catch(() => { });
    }

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [currentTrackIndex]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const selectTrack = (index: number) => {
    if (index === currentTrackIndex) {
      // Toggle play if same track is clicked
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().catch(() => { });
      }
    } else {
      // Switch track and auto-play
      setIsPlaying(true);
      setCurrentTrackIndex(index);
    }
    setIsMenuOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed top-4 right-4 z-50">
      {/* Main Pill Widget */}
      <div className="flex items-center bg-[#fffdfa]/95 backdrop-blur-sm border border-[#e8d5be] rounded-full shadow-sm">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={toggleMusic}
          type="button"
          className="flex items-center gap-2 pl-3.5 pr-2 py-2 text-[#7f1d1d] hover:bg-[#fdf4e7] transition-all rounded-l-full text-xs font-medium cursor-pointer"
          title={isPlaying ? "संगीत रोकें" : "संगीत बजाएं"}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#991b1b] animate-pulse" />
              <span className="text-[#7f1d1d] hidden sm:inline font-semibold">
                {currentTrack.name}
              </span>
              <Disc3 className="w-4 h-4 text-[#c28b14] animate-spin" />
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#92400e]" />
              <span className="text-[#7f1d1d] hidden sm:inline font-medium">
                {currentTrack.name}
              </span>
              <Music className="w-3.5 h-3.5 text-[#c28b14]" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-[#e8d5be]" />

        {/* Track Selector Dropdown Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="px-2.5 py-2 text-[#7f1d1d] hover:bg-[#fdf4e7] transition-all rounded-r-full cursor-pointer flex items-center justify-center"
          title="संगीत धुन बदलें (Change Track)"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 text-[#c28b14] transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </button>
      </div>

      {/* Floating Track Selection Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-[#fffdfa] border border-[#e8d5be] rounded-[8px] shadow-lg p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1 text-[11px] font-semibold text-[#92400e] border-b border-[#e8d5be] pb-1.5 flex items-center justify-between">
            <span>संगीत धुन चुनें</span>
            <span className="text-[10px] text-[#991b1b] font-normal"></span>
          </div>

          {tracks.map((track, idx) => {
            const isSelected = idx === currentTrackIndex;
            return (
              <button
                key={track.id}
                onClick={() => selectTrack(idx)}
                type="button"
                className={`w-full text-left px-2.5 py-2 rounded-[6px] text-xs transition-colors flex items-center justify-between cursor-pointer ${isSelected
                  ? "bg-[#fdf2e4] text-[#7f1d1d] font-semibold"
                  : "hover:bg-[#fdf8f0] text-[#78350f]"
                  }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <Music
                      className={`w-3 h-3 ${isSelected ? "text-[#991b1b]" : "text-[#c28b14]"
                        }`}
                    />
                    <span>{track.name}</span>
                  </div>
                  <p className="text-[10px] text-[#92400e] ml-4 font-normal">
                    {track.subtitle}
                  </p>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#991b1b] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
