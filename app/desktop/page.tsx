"use client";

import DesktopIcon from "@/components/custom/desktop-icon";
import DesktopWindow from "@/components/custom/desktop-window";
import EmailComposer from "@/components/custom/email-composer";
import MusicWidget from "@/components/custom/music-widget";
import { Timeline } from "@/components/custom/timeline";
import {
  useWindows,
  WindowId,
  windowTitles,
} from "@/components/providers/window-provider";
import AboutMe from "@/components/sections/about-me";
import Experiences from "@/components/sections/experiences";
import MyCV from "@/components/sections/my-cv";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Desktop() {
  const { windows, openWindow, closeWindow, focusWindow } = useWindows();

  return (
    <>
      {/* Desktop Icons */}
      <div className="absolute z-10 top-5 left-5">
        <div className="grid grid-flow-col grid-rows-[repeat(auto-fill,minmax(100px,1fr))] auto-cols-[100px] gap-6 max-h-[calc(100vh-160px)]">
          <DesktopIcon
            src="/desktop/computer.png"
            alt="computer"
            label="About Me"
            onClick={() => openWindow("aboutme")}
          />

          <DesktopIcon
            src="/desktop/cv.png"
            alt="cv"
            label="My CV"
            width={50}
            height={50}
            onClick={() => openWindow("cv")}
          />

          <DesktopIcon
            src="/desktop/experiences.png"
            alt="experiences"
            label="Experiences"
            onClick={() => openWindow("experiences")}
          />

          <DesktopIcon
            src="/desktop/skills.png"
            alt="skills"
            label="Skills"
            onClick={() => openWindow("skills")}
          />

          <DesktopIcon
            src="/desktop/projects.png"
            alt="projects"
            label="Projects"
            onClick={() => openWindow("projects")}
          />

          <DesktopIcon
            src="/desktop/contact me.png"
            alt="contact me"
            label="Contact Me"
            onClick={() => openWindow("contactme")}
          />
        </div>
      </div>

      {/* Desktop Window */}
      {windows.map((window) => (
        <DesktopWindow
          key={window.id}
          title={windowTitles[window.id]}
          onClose={() => closeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
          initialPosition={{
            x: window.x,
            y: window.y,
          }}
        >
          {getWindowContent(window.id)}
        </DesktopWindow>
      ))}
    </>
  );
}

function getWindowContent(id: WindowId) {
  switch (id) {
    case "aboutme":
      return <AboutMe />;

    case "cv":
      return <MyCV />;

    case "experiences":
      return <Experiences />;

    case "skills":
      return <Skills />;

    case "projects":
      return <Projects />;

    case "contactme":
      return <EmailComposer />;

    case "education":
      return <Timeline type="education" />;

    case "work":
      return <Timeline type="work" />;
  }
}
