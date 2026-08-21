"use client";

import DesktopIcon from "../custom/desktop-icon";
import DesktopWindow from "../custom/desktop-window";
import AboutMe from "./about-me";
import {
  useWindows,
  WindowId,
  windowTitles,
} from "../providers/window-provider";
import MyCV from "./my-cv";
import Experiences from "./experiences";
import { Timeline } from "../custom/timeline";
import Skills from "./skills";
import Projects from "./projects";
import EmailComposer from "../custom/email-composer";

export default function DesktopContent() {
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
