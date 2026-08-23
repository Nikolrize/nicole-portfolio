import Image from "next/image";
import { Card, CardContent } from "../ui/8bit/card";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/8bit/button";
import { TypingAnimation } from "../ui/typing-animation";

export default function AboutMe() {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex flex-col gap-10">
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
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={15} />
                <span>+60133388696</span>
              </Link>

              <Link
                href="mailto:nicolechen119@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={15} />
                <span>nicolechen119@gmail.com</span>
              </Link>
            </div>

            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/chenchoryan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Linkedin />
                </Button>
              </Link>

              <Link
                href="https://www.github.com/Nikolrize"
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

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center gap-6">
          {/* Profile */}
          <div className="flex flex-col items-center gap-3">
            <div className="size-28 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/about-me/me.jpeg"
                alt="Chen Chor Yan"
                width={112}
                height={112}
                className="size-full object-cover"
              />
            </div>

            <div className="text-center">
              <h1 className="text-lg text-muted-foreground">Chen Chor Yan</h1>

              <p className="text-xs text-muted-foreground">(Nicole)</p>
            </div>

            <TypingAnimation
              words={[
                "Computer Science Student",
                "Software Engineer",
                "Full Stack Developer",
              ]}
              className="text-xs text-primary"
              loop
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-6 w-full text-primary mr-2">
            <Link href="tel:+60133388696">
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col gap-1"
              >
                <Phone />
                <span className="text-[10px]">Call</span>
              </Button>
            </Link>

            <Link href="mailto:nicolechen119@gmail.com">
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col gap-1"
              >
                <Mail size={18} />
                <span className="text-[10px]">Email</span>
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/chenchoryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col gap-1"
              >
                <Linkedin />
                <span className="text-[10px]">LinkedIn</span>
              </Button>
            </Link>
          </div>

          {/* About */}
          <Card className="w-full">
            <CardContent className="p-4">
              <h2 className="text-sm text-primary mb-3">About Me</h2>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Computer Science student and Diploma in ICT graduate with
                hands-on experience in full-stack web development through
                academic and industry projects. Passionate about software
                engineering, eager to learn, and committed to creating
                meaningful and practical solutions.
              </p>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Link
            href="https://www.github.com/Nikolrize"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full">
              <Github />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
