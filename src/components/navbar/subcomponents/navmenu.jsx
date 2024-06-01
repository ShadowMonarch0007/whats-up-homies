"use client"
import React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const pathname = usePathname();

    const isActive = (route) => pathname === route;

    return (
        <div className="flex items-center justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" passHref>
                            <NavigationMenuTrigger className={isActive("/") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Home</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/About" passHref>
                            <NavigationMenuTrigger className={isActive("/About") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>About</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Skills" passHref>
                            <NavigationMenuTrigger className={isActive("/Skills") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Skills</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Experience" passHref>
                            <NavigationMenuTrigger className={isActive("/Experience") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Experience</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Projects" passHref>
                            <NavigationMenuTrigger className={isActive("/Projects") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Projects</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Connect" passHref>
                            <NavigationMenuTrigger className={isActive("/Connect") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Connect</NavigationMenuTrigger>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};


