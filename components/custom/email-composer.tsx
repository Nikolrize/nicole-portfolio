"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/8bit/button";
import { Input } from "../ui/8bit/input";
import { Textarea } from "../ui/8bit/textarea";
import { toast } from "../ui/8bit/toast";

export default function EmailComposer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast("Email sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast("Failed to send email");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      {/* Email Header */}
      <div className="flex flex-col gap-6">
        {/* To, From, Subject */}
        <div className="grid grid-cols-6 grid-rows-3 gap-2 items-center">
          <span className="text-xs text-primary col-span-1">To:</span>
          <Input
            name="to"
            value="nicolechen119@gmail.com"
            readOnly
            className="text-xs text-muted-foreground placeholder:text-foreground col-span-5"
          />
          <span className="text-xs text-primary col-span-1">From:</span>
          <Input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            maxLength={50}
            className="text-xs text-muted-foreground  placeholder:text-foreground col-span-5"
          />
          <span className="text-xs text-primary  col-span-1">Subject:</span>
          <Input
            name="title"
            placeholder="Subject"
            required
            maxLength={100}
            className="text-xs text-muted-foreground  placeholder:text-foreground col-span-5"
          />
        </div>

        {/* Message */}
        <Textarea
          name="message"
          placeholder="Write your message..."
          required
          maxLength={1000}
          className="min-h-[40vh] resize-none text-xs text-muted-foreground placeholder:text-foreground"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end w-full mt-6">
        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
          <Send />
        </Button>
      </div>
    </form>
  );
}
