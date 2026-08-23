"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextAnimate } from "../ui/text-animate";
import { Progress } from "../ui/8bit/progress";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/8bit/button";
import { useRouter } from "next/navigation";
import { useClickSound } from "@/hooks/use-click-sound";
import { useIsMobile } from "@/hooks/use-mobile";
import { BatteryFull, Camera, Flashlight, Signal } from "lucide-react";
import { Input } from "../ui/8bit/input";

export default function BootScreen() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileLockScreen />;
  }

  return <DesktopBootScreen />;
}

export function DesktopBootScreen() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);
  const router = useRouter();
  const playClickSound = useClickSound();
  const fakePassword = "password";

  // Boot Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }

        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Password Animation
  useEffect(() => {
    if (!isReady) return;
    let index = 0;

    const interval = setInterval(() => {
      if (index >= fakePassword.length) {
        clearInterval(interval);
        setIsPasswordComplete(true);
        return;
      }

      setPassword((prev) => prev + fakePassword[index]);
      index++;
    }, 150);

    return () => clearInterval(interval);
  }, [isReady]);

  const handleLogin = () => {
    playClickSound();
    router.push("/desktop");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Image
        src={isReady ? "/desktop/user.png" : "/logo.png"}
        alt="logo"
        width={200}
        height={200}
      />

      <TextAnimate animation="fadeIn" className="text-lg text-primary">
        {isReady ? "Visitor" : "Chor Yan's Portfolio"}
      </TextAnimate>

      <div className="flex flex-col gap-4 w-full items-center">
        {!isReady ? (
          <>
            <TypingAnimation className="text-md text-foreground" typeSpeed={50}>
              Booting up OS...
            </TypingAnimation>

            <Progress value={progress} />
          </>
        ) : (
          <>
            <Input
              type="password"
              value={password}
              readOnly
              placeholder="Password"
              className="placeholder:text-foreground text-muted-foreground"
            />
            <Button
              onClick={handleLogin}
              disabled={!isPasswordComplete}
              className="px-15"
            >
              Log in
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

function MobileLockScreen() {
  const router = useRouter();
  const playClickSound = useClickSound("unlock");

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = currentTime.toLocaleTimeString("en-MY", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = currentTime.toLocaleDateString("en-MY", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const unlock = () => {
    playClickSound();
    router.push("/mobile");
  };

  return (
    <div
      onClick={unlock}
      className="relative flex h-screen w-screen flex-col items-center justify-between overflow-hidden text-white"
    >
      {/* Wallpaper */}
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-2/3"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Status Bar */}
      <div className="relative z-10 flex w-full items-center justify-between px-6 pt-4 text-xs">
        <span>{time}</span>

        <div className="flex items-center gap-2">
          <span>5G</span>
          <span>
            <Signal />
          </span>
          <span>
            <BatteryFull />
          </span>
        </div>
      </div>

      {/* Time */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-5xl font-light tracking-tight">{time}</span>

        <span className="mt-2 text-sm">{date}</span>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex w-full flex-col items-center gap-6 pb-8">
        <div className="flex w-full justify-between px-10">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md">
            <Flashlight />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md">
            <Camera />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs opacity-80">Tap to unlock</span>

          <div className="h-1 w-32 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}
