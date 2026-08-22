import AboutMe from "@/components/sections/about-me";
import MyCV from "@/components/sections/my-cv";
import Experiences from "@/components/sections/experiences";
import Skills from "@/components/sections/skills";
import Projects, {
  AcademicProjects,
  PersonalProjects,
} from "@/components/sections/projects";
import EmailComposer from "@/components/custom/email-composer";
import { Timeline } from "@/components/custom/timeline";
import { WindowId } from "@/components/providers/window-provider";

export const windowContent: Record<WindowId, React.ReactNode> = {
  aboutme: <AboutMe />,
  cv: <MyCV />,
  experiences: <Experiences />,
  skills: <Skills />,
  projects: <Projects />,
  contactme: <EmailComposer />,
  education: <Timeline type="education" />,
  work: <Timeline type="work" />,
  academicProjects: <AcademicProjects />,
  personalProjects: <PersonalProjects />,
};
