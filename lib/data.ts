import { DesktopIconProps } from "@/components/custom/desktop-icon";
import { Project } from "@/components/sections/projects";

export const playlist = [
  {
    src: "/audio/keshi - beside you (Lyric Video).mp3",
    cover: "/homepage/keshi - beside you.jpg",
    title: "Keshi - Beside You",
  },
  {
    src: "/audio/Mr. Broken Heart.mp3",
    cover: "/homepage/mr broken heart.jpg",
    title: "YOUYA - Mr Broken Heart",
  },
  {
    src: "/audio/the cutest pair.mp3",
    cover: "/homepage/the cutest pair.jpg",
    title: "Regina Song - The Cutest Pair",
  },
];

export const desktopIcons: DesktopIconProps[] = [
  {
    id: "aboutme",
    src: "/desktop/computer.png",
    alt: "computer",
    label: "About Me",
  },
  {
    id: "cv",
    src: "/desktop/cv.png",
    alt: "cv",
    label: "My CV",
    width: 50,
    height: 50,
  },
  {
    id: "experiences",
    src: "/desktop/experiences.png",
    alt: "experiences",
    label: "Experiences",
  },
  {
    id: "skills",
    src: "/desktop/skills.png",
    alt: "skills",
    label: "Skills",
  },
  {
    id: "projects",
    src: "/desktop/projects.png",
    alt: "projects",
    label: "Projects",
  },
  {
    id: "contactme",
    src: "/desktop/contact me.png",
    alt: "contact me",
    label: "Contact Me",
  },
];

export const windowConfig = {
  aboutme: {
    title: "About Me",
    icon: "/desktop/computer.png",
  },

  cv: {
    title: "My CV",
    icon: "/desktop/cv.png",
  },

  experiences: {
    title: "Experiences",
    icon: "/desktop/experiences.png",
  },

  skills: {
    title: "Skills",
    icon: "/desktop/skills.png",
  },

  projects: {
    title: "Projects",
    icon: "/desktop/projects.png",
  },

  contactme: {
    title: "Contact Me",
    icon: "/desktop/contact me.png",
  },

  education: {
    title: "Education",
    icon: "/desktop/file.png",
  },

  work: {
    title: "Work",
    icon: "/desktop/file.png",
  },

  academicProjects: {
    title: "Academic Projects",
    icon: "/desktop/folder.png",
  },

  personalProjects: {
    title: "Personal Projects",
    icon: "/desktop/folder.png",
  },
};

export const skillsItems = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "C#",
      "PHP",
      "R",
      "Dart",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "Flutter"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "ASP.NET", "Firebase"],
  },
  {
    id: "database",
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "Vercel", "Render", "Postman"],
  },
  {
    id: "others",
    label: "Others",
    skills: ["Figma", "Arduino"],
  },
];

export const academicProjects: Project[] = [
  {
    id: 1,
    title: "MyTour",
    description: "AI-powered trip planner for tourists in Malaysia.",
    techstack: ["Node.js", "Next.js", "Google Gemini API", "PostgreSQL"],
    features: [
      "AI-generated personalized itineraries in Malaysia",
      "Interactive map with route visualization",
      "Community platform to share, save, and explore travel plans",
    ],
  },
  {
    id: 2,
    title: "Automotive Service Management System",
    description:
      "Java-based automotive service management system with appointment, payment, and loyalty features.",
    techstack: ["Java", "OOP"],
    features: [
      "Role-based access control",
      "Appointment booking and customer management",
      "Service operation management",
      "Staff workload reporting",
      "Customer loyalty reward system",
    ],
  },
  {
    id: 3,
    title: "Employee Attrition Analysis",
    description:
      "R-based data analysis project investigating the relationship between employee compensation, benefits, and attrition.",
    techstack: ["R", "Tidyverse", "ggplot2"],
    features: [
      "Data cleaning and preprocessing",
      "Exploratory and descriptive analysis",
      "Correlation analysis between compensation and attrition",
      "Statistical testing and effect size analysis",
      "Logistic regression and odds ratio analysis",
    ],
  },
  {
    id: 4,
    title: "Inoit - Your next school in pocket",
    description: "Web app for interactive assessments and progress tracking.",
    techstack: ["JavaScript", "HTML", "PHP", "CSS"],
    features: [
      "Teacher & student roles with quiz features",
      "Custom GIFs, leaderboards, responsive UI",
    ],
  },
  {
    id: 5,
    title: "Hostel Management Fees Payment System",
    description: "Java application for managing hostel fee payments.",
    techstack: ["Java", "OOP"],
    features: [
      "Developed using an object-oriented approach",
      "Role-based access: manager, staff, resident",
      "Secure login, account control, payment tracking",
    ],
  },
  {
    id: 6,
    title: "Automated Transaction System",
    description: "Python-based system for managing business transactions",
    techstack: ["Python", "JSON"],
    features: [
      "Role-based modules: customer, admin, inventory staff, super user",
      "Order processing, payment, reports",
    ],
  },
];

export const personalProjects: Project[] = [
  {
    id: 1,
    title: "UM Hackathon - AI Business Solution",
    description: "AI-powered business solution with specialized agents.",
    techstack: [
      "Next.js",
      "React",
      "TypeScript",
      "Z.AI GLM",
      "Google Gemini",
      "Anthropic Claude",
    ],
    features: [
      "Integrated multiple LLM providers",
      "Created Admin interface for controlling LLM settings",
      "Specalized business solution agents for different scenarios",
    ],
  },
  {
    id: 2,
    title: "UM Technothon - Watt's Brewing",
    description: "Rail Energy Regeneration Network Concept.",
    techstack: ["Animation", "Illustration", "Figma"],
    features: [
      "Developed dashboard to visualize statistics",
      "Integrated energy recovery via vibration and airflow",
      "Included energy regulation and storage",
    ],
  },
];
