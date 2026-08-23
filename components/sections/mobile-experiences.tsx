"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { useMobileApps } from "../providers/mobile-app-provider";
import { Card, CardContent } from "../ui/8bit/card";

export function MobileExperiences() {
  const { openApp } = useMobileApps();

  return (
    <div className="block md:hidden">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div>
          <h1 className="text-lg text-primary">Experiences</h1>

          <p className="text-xs text-muted-foreground mt-1">
            My education and professional journey
          </p>
        </div>

        {/* Education */}
        <button
          type="button"
          onClick={() => openApp("education")}
          className="text-left"
        >
          <Card className="w-full hover:border-primary transition-colors">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="size-14 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                <GraduationCap size={28} className="text-primary" />
              </div>

              <div>
                <h2 className="text-sm text-primary">Education</h2>

                <p className="text-xs text-muted-foreground mt-1">
                  My academic background and qualifications
                </p>
              </div>
            </CardContent>
          </Card>
        </button>

        {/* Work */}
        <button
          type="button"
          onClick={() => openApp("work")}
          className="text-left"
        >
          <Card className="w-full hover:border-primary transition-colors">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="size-14 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                <Briefcase size={28} className="text-primary" />
              </div>

              <div>
                <h2 className="text-sm text-primary">Work Experience</h2>

                <p className="text-xs text-muted-foreground mt-1">
                  My internships and professional experience
                </p>
              </div>
            </CardContent>
          </Card>
        </button>
      </div>
    </div>
  );
}
