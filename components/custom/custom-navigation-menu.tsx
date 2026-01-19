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
    <div className="flex w-full justify-center">
      <div className="fixed top-4 z-10">
        <Card className="p-1">
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Introduction</NavigationMenuLink>
                    <NavigationMenuLink>Education</NavigationMenuLink>
                    <NavigationMenuLink>Work Experience</NavigationMenuLink>
                    <NavigationMenuLink>Skills</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Projects</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Contact Me</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
