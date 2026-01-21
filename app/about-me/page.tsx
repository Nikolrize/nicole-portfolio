import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { TextAnimate } from "@/components/ui/text-animate";
import { aboutMeItems } from "@/lib/data";

export default function AboutMe() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center font-retro bg-white">
      <AnimatedGridPattern maxOpacity={0.2} />

      <div className="flex flex-col overflow-y-scroll w-full h-full snap-mandatory snap-y scroll-smooth">
        <section id="introduction" className="snap-start">
          <DraggableCardContainer className="relative flex min-h-screen w-full items-center overflow-clip">
            <div className="flex flex-col gap-12 max-w-[60%] p-30">
              <div className="flex flex-col gap-4">
                <TextAnimate
                  animation="scaleUp"
                  className="text-4xl text-primary"
                >
                  Hi, I'm Chor Yan!
                </TextAnimate>
                <TextAnimate
                  animation="slideLeft"
                  by="line"
                  className="text-2xl"
                >
                  A second-year degree student in Computer Science
                </TextAnimate>
              </div>

              <div className="flex flex-col gap-4 text-gray-400">
                <TextAnimate
                  animation="slideLeft"
                  by="line"
                  className="text-xl"
                >
                  - Passionate about software engineering, networking and web
                  development
                </TextAnimate>
                <TextAnimate
                  animation="slideLeft"
                  by="line"
                  className="text-xl"
                >
                  - Possess hands-on experience in full-stack development in
                  industrial and academic projects
                </TextAnimate>
                <TextAnimate
                  animation="slideLeft"
                  by="line"
                  className="text-xl"
                >
                  - Eager to contribute to team success through dedication,
                  collaboration, and a continuous drive to learn
                </TextAnimate>
              </div>
            </div>

            <a
              href="/about-me"
              className="absolute right-1/5 underline cursor-pointer"
            >
              <TextAnimate>Reset</TextAnimate>
            </a>

            {aboutMeItems.map((item) => (
              <BlurFade key={item.title} className={item.className}>
                <DraggableCardBody key={item.title} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-xl">{item.title}</h3>
                </DraggableCardBody>
              </BlurFade>
            ))}
          </DraggableCardContainer>
        </section>

        <section
          id="education"
          className="flex flex-col min-h-screen justify-center items-center snap-start gap-10 p-15"
        >
          <h1 className="text-primary text-4xl">Education</h1>
          <div className="grid grid-cols-3 gap-15"></div>
        </section>
      </div>
    </div>
  );
}
