"use client";

import { Button } from "@/components/ui/8bit/button";
import { ReactNode } from "react";

interface ScrollToSectionButtonProps {
  section: string;
  children: ReactNode;
}

export default function ScrollToSectionButton({
  section,
  children,
}: ScrollToSectionButtonProps) {
  return (
    <Button
      onClick={() =>
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
      }
    >
      {children}
    </Button>
  );
}
