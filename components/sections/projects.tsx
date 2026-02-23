import { academicProjects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/8bit/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/8bit/tabs";
import { BlurFade } from "../ui/blur-fade";
import { TextAnimate } from "../ui/text-animate";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/8bit/dialog";
import { Card, CardContent } from "../ui/8bit/card";
import { Badge } from "../ui/8bit/badge";

export default function Projects() {
  return (
    <>
      <Tabs defaultValue="academic" className="items-center gap-12">
        <div className="flex flex-col gap-8">
          <TextAnimate className="text-primary md:text-4xl text-xl text-center">
            Projects
          </TextAnimate>
          <BlurFade direction="up">
            <TabsList>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
          </BlurFade>
        </div>

        <TabsContent value="academic">
          <Carousel className="max-w-[80vw]">
            <CarouselContent className="px-10 gap-8">
              {academicProjects.map((item, index) => (
                <CarouselItem key={item.title} className="pl-0 lg:basis-1/3">
                  <BlurFade key={item.title} delay={index * 0.15}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card
                          key={item.title}
                          className="h-full cursor-pointer"
                        >
                          <CardContent className="flex flex-col gap-6">
                            {/* {item.image && (
                                <Image
                                  src={`/projects/${item.image}.png`}
                                  alt={`project-${item.image}`}
                                  width={800}
                                  height={300}
                                  className="w-full h-auto rounded-lg"
                                />
                              )} */}
                            <h2>{item.title}</h2>
                            <h3 className="text-gray-500 text-sm">
                              {item.description}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {item.techstack?.map((tech) => (
                                <Badge
                                  key={tech}
                                  className="max-w-full"
                                  title={tech}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="gap-10">
                        <DialogHeader>
                          <DialogTitle className="text-primary font-normal">
                            {item.title}
                          </DialogTitle>
                          <DialogDescription className="text-gray-500">
                            {item.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-primary uppercase">
                            Contributers:
                          </span>
                          <span className="text-sm text-secondary-foreground">
                            {item.contributers?.join(", ")}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-primary uppercase">
                            Tech stack:
                          </span>
                          <div className="flex flex-wrap gap-4">
                            {item.techstack?.map((tech) => (
                              <Badge key={tech}>{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-primary uppercase">
                            Features:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-sm text-secondary-foreground">
                            {item.features?.map((feat) => (
                              <li key={feat}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </BlurFade>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        </TabsContent>
        <TabsContent value="personal">
          <span>Coming soon!</span>
        </TabsContent>
      </Tabs>
    </>
  );
}
