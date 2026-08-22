"use client";

import Image from "next/image";
import { Button } from "@/components/ui/8bit/button";
import { Menubar, MenubarMenu } from "@/components/ui/8bit/menubar";
import { useClickSound } from "@/hooks/use-click-sound";
import { useEffect, useState } from "react";
import { windowConfig } from "@/lib/data";
import { useWindows } from "../providers/window-provider";

export default function Taskbar() {
  const { activeWindow, focusWindow, openWindows } = useWindows();
  const playClickSound = useClickSound();
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
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Menubar className="absolute bottom-0 z-1000 w-full border-b-0 border-t-5 p-6">
      <MenubarMenu>
        <div className="flex items-center justify-center w-full">
          {/* Start */}
          <Button
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={playClickSound}
          >
            <Image
              src="/desktop/start.png"
              alt="start"
              width={30}
              height={30}
            />
          </Button>

          {/* Search */}
          <Button
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={playClickSound}
          >
            <Image
              src="/desktop/search.png"
              alt="search"
              width={30}
              height={30}
            />
          </Button>

          {/* Folder */}
          <Button
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={playClickSound}
          >
            <Image
              src="/desktop/folder.png"
              alt="folder"
              width={30}
              height={30}
            />
          </Button>

          {/* Active Tab */}
          {openWindows.map((window) => {
            const isActive = window.id === activeWindow;
            const windowInfo = windowConfig[window.id];

            return (
              <Button
                key={window.id}
                variant="ghost"
                size="sm"
                className={`p-2 ${
                  isActive ? "bg-primary h-full rounded-sm" : ""
                }`}
                onClick={() => {
                  playClickSound();
                  focusWindow(window.id);
                }}
              >
                <Image
                  src={windowInfo.icon}
                  alt={windowInfo.title}
                  width={30}
                  height={30}
                />
              </Button>
            );
          })}

          {/* Date and Time */}
          <div className="absolute right-0">
            <div className="flex flex-col items-center justify-center text-muted-foreground text-xs leading-tight px-4">
              <span>{time}</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
