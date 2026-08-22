"use client";

import DesktopIcon from "../custom/desktop-icon";
import { useWindows } from "../providers/window-provider";

export default function Experiences() {
  const { openWindow } = useWindows();

  return (
    <div className="flex flex-row">
      <DesktopIcon
        id="education"
        src="/desktop/file.png"
        alt="education"
        label="Education"
        onClick={() => openWindow("education")}
      />

      <DesktopIcon
        id="work"
        src="/desktop/file.png"
        alt="work"
        label="Work"
        onClick={() => openWindow("work")}
      />
    </div>
  );
}