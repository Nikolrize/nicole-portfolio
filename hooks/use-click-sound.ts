"use client";

export function useClickSound() {
  const playClickSound = () => {
    const audio = new Audio("/audio/click-sound-effect.mp3");

    audio.volume = 1;
    audio.play();
  };

  return playClickSound;
}
