import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/8bit/card";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";
import Link from "next/link";
import ContactForm from "../custom/contact-form";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-4 w-full lg:w-auto">
        <TextAnimate
          animation="slideLeft"
          className="text-primary md:text-4xl text-lg"
        >
          Contact Me
        </TextAnimate>
        <BlurFade direction="left">
          <Card className="h-min">
            <CardContent className="flex md:flex-col justify-center md:gap-4 gap-8">
              <Link
                href="tel:+60133388696"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <Phone />
                <span className="hidden md:inline">+60133388696</span>
              </Link>

              <Link
                href="mailto:nicolechen119@gmail.com"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <Mail />
                <span className="hidden md:inline">
                  nicolechen119@gmail.com
                </span>
              </Link>

              <div className="flex md:gap-2 gap-8">
                <Link
                  href={"https://www.linkedin.com/in/chenchoryan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border
               transition-colors bg-primary text-primary-foreground hover:bg-white hover:text-foreground p-2"
                >
                  <Linkedin />
                </Link>
                <Link
                  href={"https://www.github.com/Nikolrize"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border
               transition-colors bg-primary text-primary-foreground hover:bg-white hover:text-foreground p-2"
                >
                  <Github />
                </Link>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
      <BlurFade direction="right" className="w-full lg:w-auto">
        <ContactForm />
      </BlurFade>
    </>
  );
}
