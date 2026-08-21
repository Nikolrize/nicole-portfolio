"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

import { Button } from "../ui/8bit/button";
import { playlist } from "@/lib/data";
import { Progress } from "../ui/8bit/progress";
import { Slider } from "../ui/slider";

export default function MusicWidget() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [showVolume, setShowVolume] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = playlist[currentTrackIndex];

  // Set default volume to 0.10
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Play/pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Next track
  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setProgress(0);
  };

  // Previous track
  const prevTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setProgress(0);
  };

  // Handle progress bar change
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
    setProgress(Number(e.target.value));
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    if (audioRef.current) audioRef.current.volume = vol;
    setVolume(vol);
  };

  // Handle autoplay next track when track ended
  const handleEnded = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  // Update progress as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Load and play new audio when track index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentTrackIndex].src;
    audio.currentTime = 0;

    const playAfterLoad = async () => {
      try {
        if (isPlaying) {
          await audio.play();
        }
      } catch (err) {
        console.warn("Autoplay blocked:", err);
      }
    };

    playAfterLoad();
  }, [currentTrackIndex]);

  return (
    <div className="w-[25vw] border-4 border-primary bg-background p-3 shadow-lg">
      <audio ref={audioRef} />

      {/* Track Information */}
      <div className="flex items-center gap-4">
        {/* Album Art */}
        <div className="relative size-20 border-2 border-primary">
          <Image
            src={currentTrack.cover}
            alt={currentTrack.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Song */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-primary">{currentTrack.title}</p>
          <p className="text-xs text-muted-foreground">Now Playing</p>

          {/* Progress */}
          <Slider
            value={[progress]}
            min={0}
            max={audioRef.current?.duration || 0}
            step={0.1}
            onValueChange={(value) => {
              if (!audioRef.current) return;

              const newValue = value[0];

              audioRef.current.currentTime = newValue;
              setProgress(newValue);
            }}
            className="mt-2 w-full"
          />

          {/* Controls */}
          <div className="mt-2 ml-2 flex items-center justify-center gap-2">
            <Button size="icon" onClick={prevTrack}>
              <SkipBack size={16} />
            </Button>

            <Button size="icon" onClick={togglePlay}>
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </Button>

            <Button size="icon" onClick={nextTrack}>
              <SkipForward size={16} />
            </Button>

            {/* Volume */}
            <div className="relative">
              <Button
                size="icon"
                onClick={() => setShowVolume((prev) => !prev)}
              >
                <Volume2 size={16} />
              </Button>

              {/* Volume Popup */}
              {showVolume && (
                <div className="absolute bottom-full right-0 mb-2 w-32 border-4 border-primary bg-background p-3">
                  <Slider
                    value={[volume * 100]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      const newVolume = value[0] / 100;

                      setVolume(newVolume);

                      if (audioRef.current) {
                        audioRef.current.volume = newVolume;
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
