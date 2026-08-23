"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Badge } from "../ui/8bit/badge";
import { skillsItems } from "@/lib/data";
import { Button } from "../ui/8bit/button";

type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "others";

export default function Skills() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileSkills /> : <DesktopSkills />;
}

function DesktopSkills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("languages");

  const category = skillsItems.find((item) => item.id === activeCategory);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="border-r-2 border-primary pr-4">
        <div className="flex flex-col gap-2">
          {skillsItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id as SkillCategory)}
              className={`
                flex items-center gap-2 p-2 rounded-sm
                text-left text-sm
                transition-colors
                ${
                  activeCategory === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }
              `}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 pl-6">
        <div className="mb-6">
          <h2 className="text-lg text-muted-foreground">{category?.label}</h2>
        </div>

        <div className="flex flex-wrap gap-5">
          {category?.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </main>
    </div>
  );
}

function MobileSkills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("languages");

  const category = skillsItems.find((item) => item.id === activeCategory);

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1 className="text-lg text-primary">Skills</h1>

        <p className="text-xs text-muted-foreground mt-1">
          Technologies and tools I work with
        </p>
      </div>

      {/* Category selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {skillsItems.map((item) => {
          const isActive = activeCategory === item.id;

          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "secondary"}
              size={"sm"}
              className="text-xs"
              onClick={() => setActiveCategory(item.id as SkillCategory)}
            >
              {item.label}
            </Button>
          );
        })}
      </div>

      {/* Selected category */}
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-sm text-primary">{category?.label}</h2>

          <p className="text-xs text-muted-foreground mt-1">
            {category?.skills.length} technologies
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-3">
          {category?.skills.map((skill) => (
            <Button variant={"outline"} key={skill}>
              <span className="text-xs text-muted-foreground">{skill}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
