"use client";

import Image from "next/image";
import { useClickSound } from "@/hooks/use-click-sound";
import { Button } from "../ui/8bit/button";
import { WindowId } from "../providers/window-provider";

export interface DesktopIconProps {
  id: WindowId;
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function DesktopIcon({
  src,
  alt,
  label,
  width = 60,
  height = 60,
  onClick,
}: DesktopIconProps) {
  const playClickSound = useClickSound();

  const handleClick = () => {
    playClickSound();
    onClick?.();
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className="flex flex-col items-center justify-start gap-2 w-24 h-28 p-2"
    >
      {/* Fixed image space */}
      <div className="w-16 h-16 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>

      {/* Label */}
      <h1 className="w-24 whitespace-normal text-muted-foreground text-sm text-center leading-tight break-words">
        {label}
      </h1>
    </Button>
  );
}
