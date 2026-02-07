import AudioPlayer8bit from "@/components/custom/audio-player";
import { Timeline } from "@/components/custom/timeline";
import MotionSlideLeft from "@/components/custom/motion-slide-left";
import ScrollToSectionButton from "@/components/custom/scroll-to-section-button";
import { Button } from "@/components/ui/8bit/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/8bit/tabs";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { TextAnimate } from "@/components/ui/text-animate";
import { academicProjects, introductionItems, skillsItems } from "@/lib/data";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/8bit/card";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/8bit/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/8bit/input";
import { Textarea } from "@/components/ui/8bit/textarea";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center font-retro bg-white">
      <AnimatedGridPattern maxOpacity={0.2} />

      <div className="flex flex-col overflow-y-scroll w-full h-full snap-mandatory snap-y scroll-smooth">
        <section
          id="home"
          className="flex min-h-screen justify-between gap-15 items-center snap-start p-30"
        >
          <div className="flex flex-col gap-4">
            <TextAnimate
              animation="slideLeft"
              className="text-4xl text-primary"
            >
              Welcome to My Portfolio
            </TextAnimate>
            <TextAnimate animation="slideLeft" className="text-2xl">
              Where I share my projects, experiences and me!
            </TextAnimate>

            <MotionSlideLeft>
              <ScrollToSectionButton section="introduction">
                Get started
              </ScrollToSectionButton>
            </MotionSlideLeft>
          </div>
          <BlurFade>
            <AudioPlayer8bit />
          </BlurFade>
        </section>

        <section id="introduction" className="snap-start">
          <DraggableCardContainer className="relative flex min-h-screen w-full items-center overflow-clip">
            <div className="flex flex-col gap-8 max-w-[60%] p-30">
              <div className="flex flex-col gap-4">
                <TextAnimate
                  animation="scaleUp"
                  className="text-4xl text-primary"
                >
                  Hi, I'm Chor Yan!
                </TextAnimate>
                <TextAnimate animation="slideLeft" className="text-2xl">
                  A second-year degree student in Computer Science
                </TextAnimate>
              </div>

              <TextAnimate
                animation="slideLeft"
                className="text-lg text-secondary-foreground"
              >
                Passionate about software engineering, networking and web
                development. Possess hands-on experience in full-stack
                development in industrial and academic projects. Eager to
                contribute to team success through dedication, collaboration,
                and a continuous drive to learn.
              </TextAnimate>

              <MotionSlideLeft>
                <Link
                  href="/about-me/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>View Resume</Button>
                </Link>
              </MotionSlideLeft>
            </div>

            {introductionItems.map((item) => (
              <BlurFade key={item.title} className={item.className}>
                <DraggableCardBody key={item.title} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-xl">{item.title}</h3>
                </DraggableCardBody>
              </BlurFade>
            ))}
          </DraggableCardContainer>
        </section>

        <section
          id="experiences"
          className="flex flex-col min-h-screen snap-start p-30 justify-center"
        >
          <Tabs defaultValue="education" className="gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-primary text-4xl">Experiences</h1>
              <TabsList>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education">
              <Timeline type="education" />
            </TabsContent>
            <TabsContent value="work">
              <Timeline type="work" />
            </TabsContent>
          </Tabs>
        </section>

        <section
          id="skills"
          className="flex flex-col min-h-screen snap-start p-30 items-center justify-center gap-12"
        >
          <h1 className="text-primary text-4xl">Skills</h1>

          <div className="grid grid-cols-3 gap-6 w-full">
            {skillsItems.map((item) => (
              <Accordion key={item.title} type="multiple">
                <Card className="py-0">
                  <AccordionItem value={item.title}>
                    <AccordionTrigger className="pb-2 pr-6">
                      <CardHeader>
                        <h2>{item.title}</h2>
                      </CardHeader>
                    </AccordionTrigger>

                    <AccordionContent>
                      <CardContent className="flex flex-wrap gap-4">
                        {item.skills.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </CardContent>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              </Accordion>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col min-h-screen snap-start p-30 items-center justify-center"
        >
          <Tabs defaultValue="academic" className="items-center gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-primary text-4xl">Projects</h1>
              <TabsList>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academic">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="px-10"
              >
                <CarouselContent className="px-10 mr-10 gap-4">
                  {academicProjects.map((item) => (
                    <CarouselItem key={item.title} className="basis-1/3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card
                            key={item.title}
                            className="h-full cursor-pointer"
                          >
                            <CardContent className="flex flex-col gap-6">
                              <h2>{item.title}</h2>
                              <h3 className="text-gray-500 text-sm">
                                {item.description}
                              </h3>
                              <div className="flex flex-wrap gap-4">
                                {item.techstack?.map((tech) => (
                                  <Badge key={tech}>{tech}</Badge>
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="personal">
              <span>Coming soon!</span>
            </TabsContent>
          </Tabs>
        </section>

        <section
          id="contact-me"
          className="flex min-h-screen snap-start p-30 items-center justify-center gap-20"
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-primary text-4xl">Contact Me</h1>
            <Card className="h-min">
              <CardContent className="flex flex-col gap-4">
                <span className="flex gap-4">
                  <Phone /> +60133388696
                </span>
                <span className="flex gap-4">
                  <Mail /> nicolechen119@gmail.com
                </span>

                <div className="flex gap-2">
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
          </div>
          <form>
            <Card className="w-[35vw]">
              <CardHeader>
                <h1>Get in touch with me!</h1>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-2">
                  <span className="text-secondary-foreground">Your Name:</span>
                  <Input />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-secondary-foreground">Your Email:</span>
                  <Input />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-secondary-foreground">Subject:</span>
                  <Input />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-secondary-foreground">Content:</span>
                  <Textarea />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  Send <Send />
                </Button>
              </CardFooter>
            </Card>
          </form>
        </section>
      </div>
    </div>
  );
}
