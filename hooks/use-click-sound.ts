"use client";

type Mode = "click" | "tap" | "unlock";

export function useClickSound(mode: Mode = "click") {
  const playClickSound = () => {
    const sound =
      mode === "tap"
        ? "/audio/phone-tap-sound.mp3"
        : mode === "unlock"
          ? "/audio/phone-unlock-sound.mp3"
          : "/audio/click-sound-effect.mp3";

    const audio = new Audio(sound);

    audio.volume = 1;
    audio.play();
  };

  return playClickSound;
}
