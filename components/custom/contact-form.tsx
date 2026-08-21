"use client";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/8bit/card";
import { Input } from "../ui/8bit/input";
import { Textarea } from "../ui/8bit/textarea";
import { Button } from "../ui/8bit/button";
import { Send } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "../ui/8bit/toast";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/8bit/sheet";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const isMobile = useIsMobile();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_gmail",
        "template_portfolio",
        formRef.current,
        "uWZ2Z9RdOA-mctbhU",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast("Failed to send email");
        },
      );
  };

  if (isMobile)
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-full text-xs">Contact Me Now!</Button>
        </SheetTrigger>
        <SheetContent className="min-w-full">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col h-full"
          >
            <SheetHeader>
              <SheetTitle className="text-sm text-primary text-center">
                Get In Touch With Me!
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 flex flex-col px-10 py-2 gap-4 text-xs overflow-auto">
              <div className="flex flex-col gap-2">
                <span className="text-secondary-foreground">Your Name:</span>
                <Input
                  name="name"
                  className="text-primary text-xs"
                  maxLength={50}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-secondary-foreground">Your Email:</span>
                <Input
                  type="email"
                  name="email"
                  className="text-primary text-xs"
                  maxLength={50}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-secondary-foreground">Title:</span>
                <Input
                  name="title"
                  className="text-primary text-xs"
                  maxLength={100}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-secondary-foreground">Message:</span>
                <Textarea
                  name="message"
                  className="text-primary text-xs"
                  maxLength={300}
                />
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="text-xs">
                  Send <Send />
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="outline" className="text-primary text-xs">
                  Cancel
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    );

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <Card>
        <CardHeader className="text-sm">Get in touch with me!</CardHeader>
        <CardContent className="flex flex-col gap-4 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Your Name:</span>
            <Input name="name" maxLength={50} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Your Email:</span>
            <Input name="email" maxLength={50} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Title:</span>
            <Input name="title" maxLength={100} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Message:</span>
            <Textarea name="message" maxLength={300} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="text-xs">
            Send <Send />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
