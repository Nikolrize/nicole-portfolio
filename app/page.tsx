// import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
// import Home from "@/components/sections/home";
// import Introduction from "@/components/sections/introduction";
// import Experiences from "@/components/sections/experiences";
// import Skills from "@/components/sections/skills";
// import Projects from "@/components/sections/projects";
// import Contact from "@/components/sections/contact";
import BootScreen from "@/components/new-sections/bootscreen";

export default function Main() {
  return (
    // <div className="relative flex flex-col h-screen w-full items-center justify-center font-retro bg-white overflow-hidden">
    //   <AnimatedGridPattern maxOpacity={0.2} />

    //   <div className="flex flex-col overflow-y-scroll w-full h-full snap-mandatory snap-y scroll-smooth">
    //     <section
    //       id="home"
    //       className="flex flex-col lg:flex-row min-h-screen justify-center lg:justify-between gap-15 items-center snap-start lg:p-30 p-10"
    //     >
    //       <Home />
    //     </section>

    //     <section id="introduction" className="snap-start">
    //       <Introduction />
    //     </section>

    //     <section
    //       id="experiences"
    //       className="flex flex-col min-h-screen snap-start lg:p-30 p-10 justify-center"
    //     >
    //       <Experiences />
    //     </section>

    //     <section
    //       id="skills"
    //       className="flex flex-col min-h-screen snap-start lg:p-30 p-10 items-center justify-center lg:gap-12 gap-8"
    //     >
    //       <Skills />
    //     </section>

    //     <section
    //       id="projects"
    //       className="flex flex-col min-h-screen snap-start lg:p-30 p-10 items-center justify-center"
    //     >
    //       <Projects />
    //     </section>

    //     <section
    //       id="contact-me"
    //       className="flex lg:flex-row flex-col min-h-screen snap-start lg:p-30 p-10 items-center justify-center lg:gap-20 gap-4"
    //     >
    //       <Contact />
    //     </section>
    //   </div>
    // </div>

    <div className="relative flex flex-col items-center justify-center font-retro h-screen">
      <BootScreen />
    </div>
  );
}
