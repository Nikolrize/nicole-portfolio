"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { Badge } from "../ui/8bit/badge";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "../ui/8bit/card";

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
  }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

interface TimelineProps {
  type: "education" | "work";
}

const educationInfo = [
  {
    index: 1,
    startTime: 2018,
    endTime: 2022,
    title: "SPM",
    venue: "Kuen Cheng High School",
    description: "Secondary education",
  },
  {
    index: 2,
    startTime: 2023,
    endTime: 2025,
    title: "Diploma in Information and Communication Technology",
    venue: "Asia Pacific University of Technology and Innovation",
    description: "CGPA: 3.84",
  },
  {
    index: 3,
    startTime: 2026,
    endTime: null,
    title: "Bachelor of Science (Honours) in Computer Science",
    venue: "Asia Pacific University of Technology and Innovation",
    description: "CGPA: 3.88",
  },
];

const workInfo = [
  {
    index: 1,
    startTime: "August 2025",
    endTime: "December 2025",
    title: "Frontend Developer Intern",
    venue: "DP Solutions Sdn. Bhd.",
    description: [
      "Developed responsive web applications using React and Next.js",
      "Contributed to Property Listing, Questionnaire Builder, and AI Business Solution",
      "Implemented UI using Tailwind CSS, shadcn/ui, and Ant Design",
      "Managed global state using Recoil and implemented i18n and PWA functionality",
    ],
    techstack: "Figma, Tailwind CSS, shadcn/ui, Ant Design, i18n, PWA, Recoil",
  },
];

export function Timeline({ type }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  const items = type === "education" ? educationInfo : workInfo;
  const refs = [div1Ref, div2Ref, div3Ref];

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP */}
      {/* ================================================= */}

      <div className="hidden md:block">
        <div ref={containerRef} className="relative w-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex size-10 items-center justify-center border-2 border-primary rounded-md">
              {type === "education" ? (
                <GraduationCap className="text-primary" />
              ) : (
                <Briefcase className="text-primary" />
              )}
            </div>

            <div>
              <h1 className="text-lg text-primary">
                {type === "education" ? "Education" : "Work Experience"}
              </h1>

              <p className="text-xs text-muted-foreground">
                {type === "education"
                  ? "My academic journey"
                  : "My professional journey"}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-10">
            {items.map((item, index) => {
              const ref = refs[index];

              return (
                <div key={item.index} className="relative flex gap-6">
                  {/* Timeline node */}
                  <div className="flex flex-col items-center">
                    <Circle ref={ref}>{item.index}</Circle>

                    {index !== items.length - 1 && (
                      <div className="w-[2px] flex-1 bg-primary/30 mt-2" />
                    )}
                  </div>

                  {/* Card */}
                  <Card className="flex-1 p-5">
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        {/* Title + Venue */}
                        <div className="flex-1 flex flex-col gap-1">
                          <h2 className="text-sm text-primary break-words">
                            {item.title}
                          </h2>

                          <p className="text-xs text-muted-foreground break-words">
                            {item.venue}
                          </p>
                        </div>

                        {/* Time */}
                        <span className="w-50 text-xs text-secondary-foreground text-right">
                          {item.startTime} - {item.endTime ?? "Present"}
                        </span>
                      </div>

                      {"description" in item && (
                        <>
                          {Array.isArray(item.description) ? (
                            <div className="flex flex-col gap-2">
                              {item.description.map((description) => (
                                <p
                                  key={description}
                                  className="text-xs text-secondary-foreground"
                                >
                                  - {description}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <Badge className="w-min">{item.description}</Badge>
                          )}
                        </>
                      )}

                      {"techstack" in item && (
                        <p className="text-xs text-muted-foreground">
                          <span className="text-primary">Tech:</span>{" "}
                          {item.techstack}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Animated beam */}
          {type === "education" && (
            <>
              <AnimatedBeam
                duration={3}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div3Ref}
              />
            </>
          )}
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE */}
      {/* ================================================= */}

      <div className="block md:hidden">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl border-2 border-primary bg-primary/10 flex items-center justify-center">
              {type === "education" ? (
                <GraduationCap size={24} className="text-primary" />
              ) : (
                <Briefcase size={24} className="text-primary" />
              )}
            </div>

            <div>
              <h1 className="text-lg text-primary">
                {type === "education" ? "Education" : "Work Experience"}
              </h1>

              <p className="text-xs text-muted-foreground">
                {type === "education"
                  ? "My academic journey"
                  : "My professional journey"}
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Card key={item.index}>
                <CardContent className="flex flex-col gap-4">
                  {/* Date */}
                  <span className="text-xs text-secondary-foreground">
                    {item.startTime} - {item.endTime ?? "Present"}
                  </span>

                  <div className="flex flex-col gap-1">
                    {/* Title */}
                    <h2 className="text-sm text-primary leading-relaxed">
                      {item.title}
                    </h2>

                    {/* Venue */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.venue}
                    </p>
                  </div>

                  {/* Education description */}
                  {"description" in item &&
                    !Array.isArray(item.description) && (
                      <Badge className="w-min">{item.description}</Badge>
                    )}

                  {/* Work description */}
                  {"description" in item && Array.isArray(item.description) && (
                    <div className="flex flex-col gap-2">
                      {item.description.map((description) => (
                        <p
                          key={description}
                          className="text-xs text-secondary-foreground leading-relaxed"
                        >
                          • {description}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Tech */}
                  {"techstack" in item && (
                    <div className="flex flex-col gap-1 border-t-2 border-primary/20">
                      <p className="text-xs leading-relaxed mt-4">
                        <span className="text-primary">Tech Stack</span>
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.techstack}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
