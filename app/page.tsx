import AudioPlayer8bit from "@/components/custom/audio-player";
import MotionSlideLeft from "@/components/custom/motion-slide-left";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardAction, CardContent } from "@/components/ui/8bit/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/8bit/navigation-menu";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Image
        src={"/homepage/bg.gif"}
        alt="homepage-bg"
        fill
        priority
        className="absolute -z-10 object-cover"
      />

      <div className="fixed top-4">
        <Card className="p-1">
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Introduction</NavigationMenuLink>
                    <NavigationMenuLink>Education</NavigationMenuLink>
                    <NavigationMenuLink>Work Experience</NavigationMenuLink>
                    <NavigationMenuLink>Skills</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Contact Me</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-20 p-15 items-center">
        <div className="flex flex-col gap-4">
          <TextAnimate
            animation="slideLeft"
            className="font-retro text-4xl text-white"
          >
            Welcome to My Portfolio
          </TextAnimate>
          <TextAnimate animation="slideLeft" className="font-retro text-2xl">
            where I share my projects, experiences and me!
          </TextAnimate>

          <MotionSlideLeft>
            <Button>Get started</Button>
          </MotionSlideLeft>
        </div>
        <AudioPlayer8bit />
      </div>
    </div>
  );
}
