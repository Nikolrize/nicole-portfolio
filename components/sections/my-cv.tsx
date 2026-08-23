import { FileText, Download } from "lucide-react";
import { Button } from "../ui/8bit/button";
import Link from "next/link";

export default function MyCV() {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-full">
        <iframe
          src="/about-me/Chen Chor Yan CV (ATS).pdf"
          className="w-full min-h-[70vh] h-full"
          title="Chor Yan's CV"
        />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <div className="size-20 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
              <FileText size={40} className="text-primary" />
            </div>

            <div className="text-center">
              <h1 className="text-lg text-primary">My CV</h1>

              <h2 className="text-xs text-muted-foreground mt-1">
                Chen Chor Yan
              </h2>
            </div>
          </div>

          {/* CV Info */}
          <div className="w-full border-y-2 border-primary/30 py-4">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">File</span>

              <span className="text-primary">Chen Chor Yan CV</span>
            </div>

            <div className="flex justify-between text-xs mt-3">
              <span className="text-muted-foreground">Format</span>

              <span className="text-primary">PDF</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 w-full">
            <Link
              href="/about-me/Chen Chor Yan CV (ATS).pdf"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">
                <FileText />
                View CV
              </Button>
            </Link>

            <a
              href="/about-me/Chen Chor Yan CV (ATS).pdf"
              download
              className="w-full"
            >
              <Button variant="outline" className="w-full">
                <Download />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
