"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { WindowId } from "./window-provider";

interface MobileAppContextType {
  activeApp: WindowId | null;

  // Navigation
  openApp: (id: WindowId) => void;
  closeApp: () => void;
  goBack: () => void;

  // Recent apps
  recentApps: WindowId[];
  showRecentApps: boolean;
  toggleRecentApps: () => void;
  closeRecentApps: () => void;
  clearRecentApps: () => void;
}

const MobileAppContext = createContext<MobileAppContextType | null>(null);

export function MobileAppProvider({ children }: { children: ReactNode }) {
  const [activeApp, setActiveApp] = useState<WindowId | null>(null);

  // Used ONLY for Back navigation
  const [appHistory, setAppHistory] = useState<WindowId[]>([]);

  // Used ONLY for Recent Apps
  const [recentApps, setRecentApps] = useState<WindowId[]>([]);

  const [showRecentApps, setShowRecentApps] = useState(false);

  const openApp = (id: WindowId) => {
    // Close recent apps when opening an app
    setShowRecentApps(false);

    setActiveApp((current) => {
      // Add current app to navigation history
      if (current && current !== id) {
        setAppHistory((history) => [...history, current]);
      }

      return id;
    });

    // Add to recent apps
    setRecentApps((apps) => [id, ...apps.filter((app) => app !== id)]);
  };

  const closeApp = () => {
    setActiveApp(null);
    setAppHistory([]);
    setShowRecentApps(false);
  };

  const goBack = () => {
    setShowRecentApps(false);

    setAppHistory((history) => {
      if (history.length === 0) {
        setActiveApp(null);
        return [];
      }

      const previousApp = history[history.length - 1];

      setActiveApp(previousApp);

      return history.slice(0, -1);
    });
  };

  const toggleRecentApps = () => {
    setShowRecentApps((current) => !current);
  };

  const closeRecentApps = () => {
    setShowRecentApps(false);
  };

  const clearRecentApps = () => {
    setRecentApps([]);
    setShowRecentApps(false);
  };

  return (
    <MobileAppContext.Provider
      value={{
        activeApp,

        openApp,
        closeApp,
        goBack,

        recentApps,
        showRecentApps,
        toggleRecentApps,
        closeRecentApps,
        clearRecentApps,
      }}
    >
      {children}
    </MobileAppContext.Provider>
  );
}

export function useMobileApps() {
  const context = useContext(MobileAppContext);

  if (!context) {
    throw new Error("useMobileApps must be used inside MobileAppProvider");
  }

  return context;
}
