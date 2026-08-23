"use client";

import Image from "next/image";
import { Button } from "@/components/ui/8bit/button";
import { Menubar, MenubarMenu } from "@/components/ui/8bit/menubar";
import { useClickSound } from "@/hooks/use-click-sound";
import { useEffect, useState } from "react";
import { windowConfig } from "@/lib/data";
import { useWindows } from "../providers/window-provider";
import { Home, Play, Square } from "lucide-react";
import { useMobileApps } from "../providers/mobile-app-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/8bit/dropdown-menu";
import { useRouter } from "next/navigation";

export default function DesktopTaskbar() {
  const { activeWindow, focusWindow, openWindows } = useWindows();
  const playClickSound = useClickSound();
  const [currentTime, setCurrentTime] = useState(new Date());
  const router = useRouter();

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

  const handleLogout = () => {
    playClickSound();
    router.push("/");
  };

  return (
    <Menubar className="absolute bottom-0 z-1000 w-full border-b-0 border-t-5 p-6">
      <MenubarMenu>
        <div className="flex items-center justify-center w-full">
          {/* Start */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleLogout()}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          {/* <Button
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
          </Button> */}

          {/* Folder */}
          {/* <Button
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
          </Button> */}

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

export function MobileTaskbar() {
  const {
    goBack,
    closeApp,
    openApp,
    recentApps,
    showRecentApps,
    toggleRecentApps,
    clearRecentApps,
  } = useMobileApps();

  const playTapSound = useClickSound("tap");

  const handleBack = () => {
    playTapSound();
    goBack();
  };

  const handleHome = () => {
    playTapSound();
    closeApp();
  };

  const handleRecentApps = () => {
    playTapSound();
    toggleRecentApps();
  };

  return (
    <>
      {/* Recent Apps Panel */}
      {showRecentApps && (
        <div className="absolute bottom-15 left-2 right-2 z-[1001] rounded-xl border-2 border-primary bg-background p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-primary">Recent Apps</h2>

            {recentApps.length > 0 && (
              <Button
                variant="ghost"
                onClick={clearRecentApps}
                className="text-xs"
              >
                Clear
              </Button>
            )}
          </div>

          {recentApps.length === 0 ? (
            <p className="py-6 text-center text-xs text-muted-foreground">
              No recent apps
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {recentApps.map((app) => (
                <Button
                  key={app}
                  variant={"outline"}
                  type="button"
                  onClick={() => openApp(app)}
                  className="flex justify-start items-center gap-3 p-6"
                >
                  <img
                    src={windowConfig[app].icon}
                    alt={windowConfig[app].title}
                    className="size-8 object-contain"
                  />

                  <span className="text-xs text-primary">
                    {windowConfig[app].title}
                  </span>
                </Button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Taskbar */}
      <Menubar className="absolute bottom-0 z-[1000] w-full border-b-0 border-t-5 p-6">
        <MenubarMenu>
          <div className="flex w-full items-center justify-center gap-4 text-primary">
            {/* Back */}
            <Button variant="ghost" onClick={handleBack} aria-label="Back">
              <Play
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            </Button>

            {/* Home */}
            <Button variant="ghost" onClick={handleHome} aria-label="Home">
              <Home />
            </Button>

            {/* Recent Apps */}
            <Button
              variant="ghost"
              onClick={handleRecentApps}
              aria-label="Recent apps"
            >
              <Square />
            </Button>
          </div>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
