"use client";

import DesktopIcon from "@/components/custom/icon";
import DesktopWindow from "@/components/custom/desktop-window";
import { useWindows } from "@/components/providers/window-provider";
import { icons, windowConfig } from "@/lib/data";
import { windowContent } from "@/lib/window-content";

export default function Desktop() {
  const { openWindows, openWindow, closeWindow, focusWindow, toggleMaximize } =
    useWindows();

  return (
    <>
      {/* Desktop Icons */}
      <div className="absolute z-10 top-5 left-5">
        <div className="grid grid-flow-col grid-rows-[repeat(auto-fill,minmax(100px,1fr))] auto-cols-[100px] gap-6 max-h-[calc(100vh-160px)]">
          {icons.map((icon) => (
            <DesktopIcon
              key={icon.id}
              id={icon.id}
              src={icon.src}
              alt={icon.alt}
              label={icon.label}
              width={icon.width}
              height={icon.height}
              onClick={() => openWindow(icon.id)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Window */}
      {openWindows.map((window) => (
        <DesktopWindow
          key={window.id}
          title={windowConfig[window.id].title}
          onClose={() => closeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
          onMaximize={() => toggleMaximize(window.id)}
          isMaximized={window.isMaximized}
          initialPosition={{
            x: window.x,
            y: window.y,
          }}
          style={{ zIndex: window.zIndex }}
        >
          {windowContent[window.id]}
        </DesktopWindow>
      ))}
    </>
  );
}
