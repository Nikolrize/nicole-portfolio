import Image from "next/image";
import MusicWidget from "@/components/custom/music-widget";
import Taskbar from "@/components/custom/taskbar";
import { WindowProvider } from "@/components/providers/window-provider";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-retro">
      <Image
        src="/desktop/wallpaper.jpg"
        alt="wallpaper"
        fill
        priority
        className="object-cover"
      />

      <WindowProvider>
        {children}
        <Taskbar />
      </WindowProvider>

      <div className="absolute right-0 bottom-15">
        <MusicWidget />
      </div>
    </div>
  );
}
