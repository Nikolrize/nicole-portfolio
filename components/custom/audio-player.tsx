"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "../ui/8bit/button";
import { Card, CardContent } from "../ui/8bit/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/8bit/avatar";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

const playlist = [
  {
    src: "/audio/keshi - beside you (Lyric Video).mp3",
    cover: "/homepage/keshi - beside you.jpg",
    title: "Keshi - Beside You",
  },
  {
    src: "/audio/Mr. Broken Heart.mp3",
    cover: "/homepage/mr broken heart.jpg",
    title: "YOUYA - Mr Broken Heart",
  },
  {
    src: "/audio/the cutest pair.mp3",
    cover: "/homepage/the cutest pair.jpg",
    title: "Regina Song - The Cutest Pair",
  },
];

export default function AudioPlayer8bit() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.15);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = playlist[currentTrackIndex];

  // Set default volume to 0.15
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
    <Card className="w-100">
      <CardContent className="flex flex-col items-center gap-4">
        <Avatar variant="retro" className="size-50">
          <AvatarImage src={currentTrack.cover} alt={currentTrack.title} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <audio ref={audioRef} src={currentTrack.src} />

        <div className="text-xs">{isPlaying ? "Now Playing..." : "Paused"}</div>
        <div className="text-sm">{currentTrack.title}</div>

        {/* Progress bar */}
        <input
          type="range"
          min={0}
          max={audioRef.current?.duration || 0}
          value={progress}
          step={0.1}
          onChange={handleProgressChange}
          className="w-full"
        />

        {/* Volume */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs">Volume</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <Button onClick={prevTrack}>
            <SkipBack />
          </Button>
          <Button onClick={togglePlay}>
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          <Button onClick={nextTrack}>
            <SkipForward />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
