"use client";

import { useState } from "react";
import { academicProjects, personalProjects } from "@/lib/data";
import DesktopIcon from "../custom/icon";
import { useWindows } from "../providers/window-provider";
import { Badge } from "../ui/8bit/badge";

export interface Project {
  id: number;
  title: string;
  description: string;
  techstack: string[];
  features: string[];
}

export default function DesktopProjects() {
  const { openWindow } = useWindows();

  return (
    <div className="flex flex-row">
      <DesktopIcon
        id="academicProjects"
        src="/desktop/folder.png"
        alt="academicProjects"
        label="Academic"
        onClick={() => openWindow("academicProjects")}
      />

      <DesktopIcon
        id="personalProjects"
        src="/desktop/folder.png"
        alt="personalProjects"
        label="Personal"
        onClick={() => openWindow("personalProjects")}
      />
    </div>
  );
}

export function AcademicProjects() {
  const [activeProject, setActiveProject] = useState<number | string>(1);

  const project = academicProjects.find((item) => item.id === activeProject);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="border-r-2 border-primary pr-4">
        <div className="flex flex-col gap-2">
          {academicProjects.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveProject(item.id)}
              className={`
                flex items-center gap-2 p-2 rounded-sm
                text-left text-sm
                transition-colors w-[15vw]
                ${
                  activeProject === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }
              `}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 pl-6">
        {project && (
          <>
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-muted-foreground">{project.title}</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-secondary-foreground mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm text-primary mb-2">Tech Stack</h3>

              <div className="flex flex-wrap gap-4">
                {project.techstack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm text-primary mb-2">Features</h3>

              <ul className="list-disc list-inside space-y-1 text-sm text-secondary-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export function PersonalProjects() {
  const [activeProject, setActiveProject] = useState<number | string>(1);

  const project = personalProjects.find((item) => item.id === activeProject);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="border-r-2 border-primary pr-4">
        <div className="flex flex-col gap-2">
          {personalProjects.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveProject(item.id)}
              className={`
                flex items-center gap-2 p-2 rounded-sm
                text-left text-sm
                transition-colors w-[15vw]
                ${
                  activeProject === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }
              `}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 pl-6">
        {project && (
          <>
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-muted-foreground">{project.title}</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-secondary-foreground mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm text-primary mb-2">Tech Stack</h3>

              <div className="flex flex-wrap gap-4">
                {project.techstack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm text-primary mb-2">Features</h3>

              <ul className="list-disc list-inside space-y-1 text-sm text-secondary-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
