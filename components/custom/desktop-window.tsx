"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/8bit/button";

interface DesktopWindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  initialPosition?: {
    x: number;
    y: number;
  };
  onFocus?: () => void;
}

export default function DesktopWindow({
  title,
  children,
  onClose,
  initialPosition = { x: 0, y: 0 },
  onFocus,
}: DesktopWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

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
      className="absolute z-20 top-1/2 left-1/2 min-w-[50vw] max-w-[90vw]"
      style={{
        transform: `translate(
          calc(-50% + ${position.x}px),
          calc(-50% + ${position.y}px)
        )`,
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={onFocus}
    >
      <div className="bg-background border-4 border-primary shadow-lg">
        {/* Title Bar */}
        <div
          className={`flex items-center justify-between bg-primary px-3 py-2 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
        >
          <h1 className="text-primary-foreground">{title}</h1>

          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground"
            onClick={onClose}
          >
            x
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[40vh] max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
