"use client";

import { useMobileApps } from "@/components/providers/mobile-app-provider";
import { icons } from "@/lib/data";
import { MobileIcon } from "@/components/custom/icon";
import { mobileContent } from "@/lib/mobile-content";

export default function Mobile() {
  const { activeApp, openApp } = useMobileApps();

  // App is open
  if (activeApp) {
    return (
      <div className="relative z-[100] h-full w-full overflow-y-auto bg-muted p-8">
        {mobileContent[activeApp]}
      </div>
    );
  }

  // Home screen
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-4 gap-x-4 gap-y-6 p-8">
        {icons.map((icon) => (
          <MobileIcon
            key={icon.id}
            id={icon.id}
            src={icon.src}
            alt={icon.alt}
            label={icon.label}
            width={icon.width}
            height={icon.height}
            onClick={() => openApp(icon.id)}
          />
        ))}
      </div>
    </div>
  );
}
