import Taskbar from "@/components/custom/taskbar";
import DesktopContent from "@/components/new-sections/desktop-content";
import { WindowProvider } from "@/components/providers/window-provider";
import Image from "next/image";

export default function Desktop() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-retro">
      {/* Wallpaper */}
      <Image
        src="/desktop/wallpaper.jpg"
        alt="wallpaper"
        fill
        priority
        className="object-cover"
      />
      <WindowProvider>
        <DesktopContent />
        <Taskbar />
      </WindowProvider>
    </div>
  );
}
