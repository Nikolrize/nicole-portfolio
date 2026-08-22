import Image from "next/image";
import { Card, CardContent } from "../ui/8bit/card";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/8bit/button";
import { TypingAnimation } from "../ui/typing-animation";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-10">
      {/* Top */}
      <div className="flex gap-10">
        <Card className="p-0">
          <CardContent className="size-40 p-0 overflow-hidden">
            <Image
              src="/about-me/me.jpeg"
              alt="me"
              fill
              className="object-cover"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-muted-foreground text-lg">
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
          </div>

          <div className="flex flex-col text-xs text-muted-foreground gap-2">
            <Link
              href="tel:+60133388696"
              className="flex items-center gap-2  hover:text-primary transition-colors"
            >
              <Phone size={15} />
              <span className="hidden md:inline">+60133388696</span>
            </Link>

            <Link
              href="mailto:nicolechen119@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={15} />
              <span className="hidden md:inline">nicolechen119@gmail.com</span>
            </Link>
          </div>

          <div className="flex gap-2">
            <Link
              href={"https://www.linkedin.com/in/chenchoryan"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Linkedin />
              </Button>
            </Link>
            <Link
              href={"https://www.github.com/Nikolrize"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
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
