"use client";

import { useState } from "react";
import { Badge } from "../ui/8bit/badge";
import { skillsItems } from "@/lib/data";

type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "others";

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("languages");

  const category = skillsItems.find((item) => item.id === activeCategory);

  return (
    <div className="flex min-h-[40vh]">
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
          <h2 className="text-lg text-primary">{category?.label}</h2>
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
