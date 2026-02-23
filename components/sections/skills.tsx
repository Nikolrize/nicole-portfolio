import { skillsItems } from "@/lib/data";
import { TextAnimate } from "../ui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/8bit/accordion";
import { BlurFade } from "../ui/blur-fade";
import { Card, CardContent, CardHeader } from "../ui/8bit/card";
import { Badge } from "../ui/8bit/badge";

export default function Skills() {
  return (
    <>
      <TextAnimate className="text-primary md:text-4xl text-xl">
        Skills
      </TextAnimate>
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-2 w-full p-2 overflow-y-auto">
        {skillsItems.map((item, index) => (
          <Accordion key={item.title} type="multiple">
            <BlurFade key={item.title} delay={index * 0.1}>
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
            </BlurFade>
          </Accordion>
        ))}
      </div>
    </>
  );
}
