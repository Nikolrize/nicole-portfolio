"use client";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { Badge } from "../ui/8bit/badge";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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

export function Timeline({ type }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  const educationInfo = [
    {
      index: 1,
      startTime: 2018,
      endTime: 2022,
      title: "SPM",
      venue: "Kuen Cheng High School",
      ref: div1Ref,
    },
    {
      index: 2,
      startTime: 2023,
      endTime: 2025,
      title: "Diploma in Information and Communication Technology",
      venue: "Asia Pacific University of Technology and Innovation",
      description: "CGPA: 3.84",
      ref: div2Ref,
    },
    {
      index: 3,
      startTime: 2026,
      endTime: null,
      title: "Bachelor of Science (Honours) in Computer Science",
      venue: "Asia Pacific University of Technology and Innovation",
      description: "CGPA: 3.88",
      ref: div3Ref,
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
        "Developed responsive web applications using React and Next.js for desktop and mobile",
        "Contributed to Property Listing, Questionnaire Builder, and AI Business Solution projects",
        "Implemented responsive UI using Tailwind CSS, shadcn/ui, and Ant Design from Figma designs",
        "Managed global state using Recoil and implemented i18n and PWA functionality",
      ],
      projects: "Property Listing, Questionnaire, AI Business Solution",
      techstack:
        "Figma, Tailwind CSS, Shadcn, Ant Design, i18n, PWA and Recoil",
      ref: div1Ref,
    },
  ];

  if (type === "education")
    return (
      <div ref={containerRef} className="relative w-full">
        <div className="flex lg:flex-row flex-col w-full gap-8">
          {educationInfo.map((item) => (
            <div key={item.index} className="flex flex-1 lg:flex-col gap-4">
              <Circle ref={item.ref}>{item.index}</Circle>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-secondary-foreground">
                  {item.startTime} - {!item.endTime ? "Present" : item.endTime}
                </span>

                <span className="text-muted-foreground">{item.title}</span>

                <span className="text-primary">{item.venue}</span>

                {item.description && (
                  <Badge className="w-min">{item.description}</Badge>
                )}
              </div>
            </div>
          ))}
        </div>

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
      </div>
    );

  if (type === "work")
    return (
      <div ref={containerRef} className="relative w-full">
        <div className="flex lg:flex-row flex-col w-full gap-8">
          {workInfo.map((item) => (
            <div key={item.index} className="flex flex-1 lg:flex-col gap-4">
              <Circle ref={item.ref}>{item.index}</Circle>

              <div className="flex flex-col gap-1 text-sm">
                <span className="text-secondary-foreground">
                  {item.startTime} - {!item.endTime ? "Present" : item.endTime}
                </span>
                <span className="text-muted-foreground break-words">
                  {item.title}
                </span>
                <span className="text-primary break-words">{item.venue}</span>

                {item.description.map((item) => (
                  <span
                    key={item}
                    className="text-secondary-foreground text-sm"
                  >
                    - {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        /> */}
      </div>
    );
}
