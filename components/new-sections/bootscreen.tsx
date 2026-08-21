"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextAnimate } from "../ui/text-animate";
import { Progress } from "../ui/8bit/progress";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/8bit/button";
import { useRouter } from "next/navigation";
import { useClickSound } from "@/hooks/use-click-sound";

export default function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const playClickSound = useClickSound();

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

  const handleLogin = () => {
    playClickSound();
    router.push("/desktop");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Image src="/logo.png" alt="logo" width={300} height={300} />

      <TextAnimate
        animation="fadeIn"
        className="text-lg text-primary"
      >
        {isReady
          ? "Welcome to Chor Yan's Portfolio"
          : "Chor Yan's Portfolio"}
      </TextAnimate>

      <div className="flex flex-col gap-4 w-full items-center">
        {!isReady ? (
          <>
            <TypingAnimation
              className="text-md text-foreground"
              typeSpeed={50}
            >
              Booting up OS...
            </TypingAnimation>

            <Progress value={progress} />
          </>
        ) : (
          <>
            <Button onClick={handleLogin} className="px-15">
              Log in
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
