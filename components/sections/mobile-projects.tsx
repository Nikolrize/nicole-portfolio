"use client";

import { useState } from "react";
import { academicProjects, personalProjects } from "@/lib/data";
import { Badge } from "../ui/8bit/badge";
import { ChevronLeft, ChevronRight, Folder } from "lucide-react";
import { Button } from "../ui/8bit/button";
import { Card, CardContent } from "../ui/8bit/card";

interface MobileProjectListProps {
  type: "academic" | "personal";
  onBack: () => void;
}

interface MobileProjectDetailsProps {
  project: {
    id: number;
    title: string;
    description: string;
    techstack: string[];
    features: string[];
  };
  onBack: () => void;
}

export function MobileProjects() {
  const [category, setCategory] = useState<"academic" | "personal" | null>(
    null,
  );

  if (!category) {
    return (
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg text-primary">Projects</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Explore my academic and personal projects
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Academic */}
          <button
            type="button"
            onClick={() => setCategory("academic")}
            className="text-left"
          >
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="size-14 shrink-0 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Folder size={28} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-sm text-primary">Academic Projects</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Projects developed for my studies
                  </p>
                </div>

                <ChevronRight
                  size={20}
                  className="text-muted-foreground shrink-0"
                />
              </CardContent>
            </Card>
          </button>

          {/* Personal */}
          <button
            type="button"
            onClick={() => setCategory("personal")}
            className="text-left"
          >
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="size-14 shrink-0 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Folder size={28} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-sm text-primary">Personal Projects</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hackathons and projects I built independently
                  </p>
                </div>

                <ChevronRight
                  size={20}
                  className="text-muted-foreground shrink-0"
                />
              </CardContent>
            </Card>
          </button>
        </div>
      </div>
    );
  }

  return <MobileProjectList type={category} onBack={() => setCategory(null)} />;
}

function MobileProjectList({ type, onBack }: MobileProjectListProps) {
  const projects = type === "academic" ? academicProjects : personalProjects;
  const [activeProject, setActiveProject] = useState<number | string | null>(
    null,
  );

  if (activeProject !== null) {
    const project = projects.find((item) => item.id === activeProject);

    if (!project) return null;

    return (
      <MobileProjectDetails
        project={project}
        onBack={() => setActiveProject(null)}
      />
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button onClick={onBack} size={"icon"}>
          <ChevronLeft />
        </Button>

        <div>
          <h1 className="text-lg text-primary">
            {type === "academic" ? "Academic Projects" : "Personal Projects"}
          </h1>

          <p className="text-xs text-muted-foreground mt-1">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveProject(project.id)}
            className="text-left"
          >
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="size-12 shrink-0 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <Folder size={24} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-sm text-primary truncate">
                    {project.title}
                  </h2>

                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-muted-foreground shrink-0"
                />
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileProjectDetails({ project, onBack }: MobileProjectDetailsProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-3 mb-6">
        <Button onClick={onBack} size={"icon"}>
          <ChevronLeft />
        </Button>

        <h1 className="text-primary">{project.title}</h1>
      </div>

      <div className="flex flex-col gap-6">
        {/* Description */}
        <section>
          <h2 className="text-sm text-primary mb-2">About</h2>

          <p className="text-xs leading-6 text-secondary-foreground">
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-sm text-primary mb-3">Tech Stack</h2>

          <div className="flex flex-wrap gap-4">
            {project.techstack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-sm text-primary mb-3">Features</h2>

          <div className="flex flex-col gap-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 text-xs text-secondary-foreground"
              >
                <span className="text-primary shrink-0">▸</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
