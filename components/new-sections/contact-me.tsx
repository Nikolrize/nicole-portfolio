import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import ContactForm from "../custom/contact-form";
import { Button } from "../ui/8bit/button";

export default function ContactMe() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex text-xs text-muted-foreground justify-between items-center">
        <div className="flex md:flex-col md:gap-2 gap-4">
          <Link
            href="tel:+60133388696"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone />
            <span className="hidden md:inline">+60133388696</span>
          </Link>

          <Link
            href="mailto:nicolechen119@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail />
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

      <BlurFade direction="right" className="w-full lg:w-auto">
        <ContactForm />
      </BlurFade>
    </div>
  );
}
