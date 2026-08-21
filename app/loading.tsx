import { Progress } from "@/components/ui/8bit/progress";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center font-retro p-30 h-screen">
        <div className="flex flex-col gap-4 w-full items-center">
          <span className="text-primary">Loading...</span>
          <Progress value={50} className="w-100" />
        </div>
    </div>
  );
}
