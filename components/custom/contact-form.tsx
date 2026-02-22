"use client";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/8bit/card";
import { Input } from "../ui/8bit/input";
import { Textarea } from "../ui/8bit/textarea";
import { Button } from "../ui/8bit/button";
import { Send } from "lucide-react";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <Card className="w-[35vw]">
        <CardHeader>
          <h1>Get in touch with me!</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Your Name:</span>
            <Input name="name" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Your Email:</span>
            <Input name="email" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Title:</span>
            <Input name="title" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground">Message:</span>
            <Textarea name="message" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">
            Send <Send />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
