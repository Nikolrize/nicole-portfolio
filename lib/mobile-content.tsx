import AboutMe from "@/components/sections/about-me";
import MyCV from "@/components/sections/my-cv";
import Skills from "@/components/sections/skills";
import {
  AcademicProjects,
  PersonalProjects,
} from "@/components/sections/desktop-projects";
import { Timeline } from "@/components/custom/timeline";
import { WindowId } from "@/components/providers/window-provider";
import { MobileExperiences } from "@/components/sections/mobile-experiences";
import { MobileProjects } from "@/components/sections/mobile-projects";
import EmailComposer from "@/components/custom/email-composer";

export const mobileContent: Record<WindowId, React.ReactNode> = {
  aboutme: <AboutMe />,
  cv: <MyCV />,
  experiences: <MobileExperiences />,
  skills: <Skills />,
  projects: <MobileProjects />,
  contactme: <EmailComposer />,
  education: <Timeline type="education" />,
  work: <Timeline type="work" />,
  academicProjects: <AcademicProjects />,
  personalProjects: <PersonalProjects />,
};
