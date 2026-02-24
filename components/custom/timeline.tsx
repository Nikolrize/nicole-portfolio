"use client";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";

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
      title: "Kuen Cheng High School",
      description: "Graduated with SPM certification",
      ref: div1Ref,
    },
    {
      index: 2,
      startTime: 2023,
      endTime: 2025,
      title: "Asia Pacific University of Technology and Innovation",
      description: "Diploma in Information and Communication Technology",
      cgpa: "CGPA: 3.84",
      ref: div2Ref,
    },
    {
      index: 3,
      startTime: 2026,
      endTime: null,
      title: "Asia Pacific University of Technology and Innovation",
      description: "Bachelor of Science (Honours) in Computer Science",
      ref: div3Ref,
    },
  ];

  const workInfo = [
    {
      index: 1,
      startTime: "August 2025",
      endTime: "December 2025",
      title: "DP Solutions Sdn. Bhd.",
      position: "Frontend Developer Intern",
      description: "Designed and built websites using React and Next.js",
      projects: "Property Listing, Questionnaire, AI Business Solution",
      techstack:
        "Figma, Tailwind CSS, Shadcn, Ant Design, i18n, PWA and Recoil",
      ref: div1Ref,
    },
  ];

  if (type === "education")
    return (
      <div ref={containerRef} className="relative flex w-full">
        <div className="flex lg:flex-row flex-col max-h-[70vh] w-full justify-between gap-12 overflow-auto">
          {educationInfo.map((item) => (
            <div key={item.index} className="flex lg:flex-col gap-4">
              <Circle ref={item.ref}>{item.index}</Circle>

              <div className="flex flex-col gap-1 lg:text-base text-xs">
                <span className="text-primary">
                  {item.startTime} - {!item.endTime ? "Present" : item.endTime}
                </span>
                <span className="text-primary">{item.title}</span>
                <span className="text-secondary-foreground">
                  - {item.description}
                </span>
                {item.cgpa && (
                  <span className="text-secondary-foreground">
                    - {item.cgpa}
                  </span>
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
      <div ref={containerRef} className="relative flex w-full">
        <div className="flex lg:flex-row flex-col max-h-[70vh] w-full justify-between gap-12 overflow-auto">
          {workInfo.map((item) => (
            <div key={item.index} className="flex lg:flex-col gap-4">
              <Circle ref={item.ref}>{item.index}</Circle>

              <div className="flex flex-col gap-1 lg:text-base text-xs">
                <span className="text-primary">
                  {item.startTime} - {!item.endTime ? "Current" : item.endTime}
                </span>
                <span className="text-primary">{item.title}</span>
                <span className="text-yellow-400">{item.position}</span>
                <span className="text-secondary-foreground">
                  - {item.description}
                </span>
                <span>
                  - Projects:{" "}
                  <span className="text-secondary-foreground">
                    {item.projects}
                  </span>
                </span>
                <span>
                  - Tech Stack:{" "}
                  <span className="text-secondary-foreground">
                    {item.techstack}
                  </span>
                </span>
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
