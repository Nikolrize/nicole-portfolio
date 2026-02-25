import AudioPlayer8bit from "../custom/audio-player";
import MotionSlideLeft from "../custom/motion-slide-left";
import ScrollToSectionButton from "../custom/scroll-to-section-button";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 text-center lg:text-start">
        <TextAnimate animation="slideLeft" className="md:text-4xl text-lg text-primary">
          Welcome to My Portfolio
        </TextAnimate>
        <TextAnimate animation="slideLeft" className="md:text-2xl text-sm">
          Where I share my projects, experiences and me!
        </TextAnimate>

        <MotionSlideLeft>
          <ScrollToSectionButton section="introduction">
            Get started
          </ScrollToSectionButton>
        </MotionSlideLeft>
      </div>
      <BlurFade>
        <AudioPlayer8bit />
      </BlurFade>
    </>
  );
}
