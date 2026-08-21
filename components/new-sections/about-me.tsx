import Image from "next/image";
import { Card, CardContent } from "../ui/8bit/card";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/8bit/button";
import { TypingAnimation } from "../ui/typing-animation";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-10">
      {/* Top */}
      <div className="flex gap-10">
        <Card className="p-0">
          <CardContent className="relative size-30 p-0 overflow-hidden">
            <Image
              src="/about-me/me.jpeg"
              alt="me"
              fill
              className="object-cover"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col justify-between">
          <h1 className="text-muted-foreground  text-lg">
            Chen Chor Yan (Nicole)
          </h1>
          <TypingAnimation
            words={[
              "Computer Science Student",
              "Software Engineer",
              "Full Stack Developer",
            ]}
            className="text-sm text-primary"
            loop
          />

          <div className="flex gap-2">
            <Link
              href={"https://www.linkedin.com/in/chenchoryan"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"sm"}>
                <Linkedin />
              </Button>
            </Link>
            <Link
              href={"https://www.github.com/Nikolrize"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"sm"}>
                <Github />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom */}
      <h2 className="text-sm text-muted-foreground">
        Computer Science student and Diploma in ICT graduate with hands-on
        experience in full-stack web development through academic and industry
        projects. Passionate about software engineering, eager to learn, and
        committed to creating meaningful and practical solutions.
      </h2>
    </div>
  );
}
