import React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default async function NavMenu() {
    return (
        <div className="flex items-center justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <Link href="./"><NavigationMenuItem>
                        <NavigationMenuTrigger className="home">Home</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                    <Link href="./About"><NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                    <Link href="./Skills"><NavigationMenuItem>
                        <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                    <Link href="./Experience"><NavigationMenuItem>
                        <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                    <Link href="./Projects"><NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                    <Link href="./Connect"><NavigationMenuItem>
                        <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                    </NavigationMenuItem></Link>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    );
}

{/* <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent> */}