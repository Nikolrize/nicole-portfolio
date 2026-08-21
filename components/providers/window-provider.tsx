"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type WindowId =
  | "aboutme"
  | "cv"
  | "experiences"
  | "skills"
  | "projects"
  | "contactme"
  | "education"
  | "work";

export const windowTitles: Record<WindowId, string> = {
  aboutme: "About Me",
  cv: "My CV",
  experiences: "Experiences",
  skills: "Skills",
  projects: "Projects",
  contactme: "Contact Me",
  education: "Education",
  work: "Work",
};

export const windowIcons: Record<WindowId, string> = {
  aboutme: "/desktop/computer.png",
  cv: "/desktop/cv.png",
  experiences: "/desktop/experiences.png",
  skills: "/desktop/skills.png",
  projects: "/desktop/projects.png",
  contactme: "/desktop/contact me.png",
  education: "/desktop/file.png",
  work: "/desktop/file.png"
};

interface WindowState {
  id: WindowId;
  x: number;
  y: number;
}

interface WindowContextType {
  windows: WindowState[];
  activeWindow: WindowId | null;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
}

const WindowContext = createContext<WindowContextType | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
  const [windows, setWindows] = useState<WindowState[]>([]);

  const openWindow = (id: WindowId) => {
    setWindows((current) => {
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
        },
      ];
    });

    setActiveWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setWindows((current) => current.filter((window) => window.id !== id));

    setActiveWindow((current) => (current === id ? null : current));
  };

  const focusWindow = (id: WindowId) => {
    setActiveWindow(id);
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        activeWindow,
        openWindow,
        closeWindow,
        focusWindow,
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
