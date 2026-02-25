import { Timeline } from "../custom/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/8bit/tabs";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";

export default function Experiences() {
  return (
    <>
      <Tabs defaultValue="education" className="gap-12">
        <div className="flex flex-col gap-8">
          <TextAnimate
            animation="slideLeft"
            className="text-primary md:text-4xl text-lg"
          >
            Experiences
          </TextAnimate>
          <BlurFade direction="left">
            <TabsList>
              <TabsTrigger value="education" className="md:text-base text-xs">
                Education
              </TabsTrigger>
              <TabsTrigger value="work" className="md:text-base text-xs">
                Work
              </TabsTrigger>
            </TabsList>
          </BlurFade>
        </div>

        <BlurFade direction="left">
          <TabsContent value="education">
            <Timeline type="education" />
          </TabsContent>
          <TabsContent value="work">
            <Timeline type="work" />
          </TabsContent>
        </BlurFade>
      </Tabs>
    </>
  );
}
