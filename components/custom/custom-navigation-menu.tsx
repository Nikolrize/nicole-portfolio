import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/8bit/navigation-menu";
import { Card, CardContent } from "../ui/8bit/card";

export default function CustomNavigationMenu() {
  return (
    <div className="hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-10">
      <Card className="p-1">
        <CardContent>
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#introduction">
                    Introduction
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#experiences">
                    Experiences
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact-me">
                  Contact Me
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>
    </div>
  );
}
