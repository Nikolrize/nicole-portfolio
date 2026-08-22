"use client";

import { windowConfig } from "@/lib/data";
import { createContext, ReactNode, useContext, useState } from "react";

export type WindowId = keyof typeof windowConfig;

interface WindowState {
  id: WindowId;
  x: number;
  y: number;
  zIndex: number;
  isMaximized: boolean;
}

interface WindowContextType {
  openWindows: WindowState[];
  activeWindow: WindowId | null;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  toggleMaximize: (id: WindowId) => void;
}

const WindowContext = createContext<WindowContextType | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
  const [nextZIndex, setNextZIndex] = useState(20);

  const openWindow = (id: WindowId) => {
    setOpenWindows((current) => {
      if (current.some((window) => window.id === id)) {
        return current;
      }

      const offset = current.length * 40;

      return [
        ...current,
        {
          id,
          x: offset,
          y: offset,
          zIndex: nextZIndex,
          isMaximized: false,
        },
      ];
    });

    setNextZIndex((current) => current + 1);
    setActiveWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setOpenWindows((current) => current.filter((window) => window.id !== id));

    setActiveWindow((current) => (current === id ? null : current));
  };

  const focusWindow = (id: WindowId) => {
    setOpenWindows((current) =>
      current.map((window) =>
        window.id === id
          ? {
              ...window,
              zIndex: nextZIndex,
            }
          : window,
      ),
    );

    setNextZIndex((current) => current + 1);
    setActiveWindow(id);
  };
  
  const toggleMaximize = (id: WindowId) => {
    setOpenWindows((current) =>
      current.map((window) =>
        window.id === id
          ? {
              ...window,
              isMaximized: !window.isMaximized,
              zIndex: nextZIndex,
            }
          : window,
      ),
    );

    setNextZIndex((current) => current + 1);
    setActiveWindow(id);
  };

  return (
    <WindowContext.Provider
      value={{
        openWindows,
        activeWindow,
        openWindow,
        closeWindow,
        focusWindow,
        toggleMaximize,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error("useWindows must be used inside WindowProvider");
  }

  return context;
}
