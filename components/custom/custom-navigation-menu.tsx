import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/8bit/navigation-menu";
import { Card, CardContent } from "../ui/8bit/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/8bit/dropdown-menu";
import { Button } from "../ui/8bit/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function CustomNavigationMenu() {
  return (
    <>
      <div className="md:hidden fixed top-4 right-4 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Menu strokeWidth={4} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="#home">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#introduction">Introduction</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#experiences">Experiences</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#skills">Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#contact-me">Contact Me</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-10">
        <Card className="p-1">
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#home">Home</NavigationMenuLink>
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
                    <NavigationMenuLink href="#skills">
                      Skills
                    </NavigationMenuLink>
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
    </>
  );
}
