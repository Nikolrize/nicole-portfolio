import MusicWidget from "@/components/custom/music-widget";
import { MobileTaskbar } from "@/components/custom/taskbar";
import { MobileAppProvider } from "@/components/providers/mobile-app-provider";
import Image from "next/image";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-retro pb-[53px]">
      <Image
        src="/desktop/wallpaper.jpg"
        alt="wallpaper"
        fill
        priority
        className="object-cover"
      />

      <MobileAppProvider>
        <div className="relative h-full w-full">{children}</div>
        <MobileTaskbar />
      </MobileAppProvider>

      <div className="absolute right-1/2 translate-x-1/2 bottom-15 z-10">
        <MusicWidget />
      </div>
    </div>
  );
}
