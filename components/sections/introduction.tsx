import Link from "next/link";
import MotionSlideLeft from "../custom/motion-slide-left";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";
import { TextAnimate } from "../ui/text-animate";
import { Button } from "../ui/8bit/button";
import { BlurFade } from "../ui/blur-fade";
import { introductionItems } from "@/lib/data";

export default function Introduction() {
  return (
    <>
      <DraggableCardContainer className="relative flex lg:flex-row flex-col min-h-screen w-full justify-center lg:justify-start items-center overflow-clip">
        <div className="flex flex-col gap-8 lg:max-w-[60%] lg:p-30 p-10">
          <div className="flex flex-col gap-4">
            <TextAnimate animation="scaleUp" className="md:text-4xl text-lg text-primary">
              Hi, I'm Chor Yan!
            </TextAnimate>
            <TextAnimate animation="slideLeft" className="md:text-2xl text-sm">
              A second-year degree student in Computer Science
            </TextAnimate>
          </div>

          <TextAnimate
            animation="slideLeft"
            className="md:text-lg text-sm text-secondary-foreground"
          >
            Passionate about software engineering, networking and web
            development. Possess hands-on experience in full-stack development
            in industrial and academic projects. Eager to contribute to team
            success through dedication, collaboration, and a continuous drive to
            learn.
          </TextAnimate>

          <MotionSlideLeft>
            <Link
              href="/about-me/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="md:text-base text-xs">View Resume</Button>
            </Link>
          </MotionSlideLeft>
        </div>

        {introductionItems.map((item) => (
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
    </>
  );
}
