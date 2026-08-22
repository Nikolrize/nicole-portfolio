import DesktopIcon from "../custom/desktop-icon";
import { useWindows } from "../providers/window-provider";

export default function Projects() {
  const { openWindow } = useWindows();

  return (
    <div className="flex flex-row">
      <DesktopIcon
        src="/desktop/folder.png"
        alt="education"
        label="Education"
        onClick={() => openWindow("education")}
      />

      <DesktopIcon
        src="/desktop/folder.png"
        alt="work"
        label="Work"
        onClick={() => openWindow("work")}
      />
    </div>
  );
}
