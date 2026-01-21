import AudioPlayer8bit from "@/components/custom/audio-player";
import MotionSlideLeft from "@/components/custom/motion-slide-left";
import ScrollToSectionButton from "@/components/custom/scroll-to-section-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent, CardFooter } from "@/components/ui/8bit/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { listofContents } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center font-retro">
      <Image
        src={"/homepage/bg.gif"}
        alt="homepage-bg"
        fill
        priority
        className="fixed -z-10 object-cover"
      />

      <div className="flex flex-col overflow-y-scroll w-full h-full snap-mandatory snap-y scroll-smooth">
        <section
          id="intro"
          className="flex min-h-screen justify-center gap-20 items-center snap-start p-15"
        >
          <div className="flex flex-col gap-4">
            <TextAnimate animation="slideLeft" className="text-4xl text-white">
              Welcome to My Portfolio
            </TextAnimate>
            <TextAnimate animation="slideLeft" className="text-2xl">
              where I share my projects, experiences and me!
            </TextAnimate>

            <MotionSlideLeft>
              <ScrollToSectionButton section="contents">
                Get started
              </ScrollToSectionButton>
            </MotionSlideLeft>
          </div>
          <BlurFade>
            <AudioPlayer8bit />
          </BlurFade>
        </section>

        <section
          id="contents"
          className="flex flex-col min-h-screen justify-center items-center snap-start gap-10 p-15"
        >
          <h1 className="text-white text-4xl">List of Contents</h1>
          <div className="grid grid-cols-3 gap-15">
            {listofContents.map((content, index) => (
              <BlurFade key={content.name} delay={index * 0.15}>
                <Card key={content.name} className="h-full max-w-100">
                  <CardContent className="flex flex-col items-center">
                    <Avatar variant="retro" className="size-50 w-full">
                      <AvatarImage src={content.image} alt={content.name} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4 items-start">
                    <h2>{content.name}</h2>
                    <h3 className="text-sm">{content.description}</h3>
                    <Link
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>View</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
