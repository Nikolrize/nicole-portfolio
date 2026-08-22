"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import { Maximize, Minimize } from "lucide-react";

interface DesktopWindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onFocus?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
  initialPosition?: {
    x: number;
    y: number;
  };
  style?: React.CSSProperties;
}

export default function DesktopWindow({
  title,
  children,
  onClose,
  onFocus,
  onMaximize,
  isMaximized = false,
  initialPosition = { x: 0, y: 0 },
  style,
}: DesktopWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;

    setIsDragging(true);

    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMaximized) return;

    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={
        isMaximized
          ? "absolute top-0 left-0 w-full h-[calc(100vh-50px)]"
          : "absolute top-1/2 left-1/2 w-[55vw] max-w-[90vw]"
      }
      style={{
        ...style,
        ...(isMaximized
          ? {}
          : {
              transform: `translate(
            calc(-50% + ${position.x}px),
            calc(-50% + ${position.y}px)
          )`,
            }),
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={onFocus}
    >
      <div
        className={`bg-background border-4 border-primary shadow-lg ${
          isMaximized ? "h-full w-full" : ""
        }`}
      >
        {/* Title Bar */}
        <div
          className={`flex items-center justify-between bg-primary px-3 py-2 ${
            isMaximized
              ? "cursor-default"
              : isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
        >
          <h1 className="text-primary-foreground">{title}</h1>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onMaximize?.();
              }}
            >
              {isMaximized ? <Minimize /> : <Maximize />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              x
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[40vh] h-full max-h-[calc(100vh-110px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
