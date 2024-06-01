"use client"
import React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuList,
    NavigationMenuContent
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import aboutImg from "@/components/navbar/preview/About.png"
import aboutLImg from "@/components/navbar/preview/aboutL.png"
import skillImg from "@/components/navbar/preview/Skills.png"
import skillLImg from "@/components/navbar/preview/SkillsL.png"
import connectImg from "@/components/navbar/preview/Connect.png"
import connectLImg from "@/components/navbar/preview/ConnectL.png"

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
                        <NavigationMenuContent>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/About" passHref>
                            <NavigationMenuTrigger className={isActive("/About") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>About</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                            <div className="w-[40vw] hidden dark:block">
                                <Image src={aboutImg}/>
                            </div>
                            <div className="w-[40vw] dark:hidden">
                                <Image src={aboutLImg}/>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Skills" passHref>
                            <NavigationMenuTrigger className={isActive("/Skills") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Skills</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                            <div className="w-[40vw] h-[60vh] hidden dark:block">
                                <Image src={skillImg}/>
                            </div>
                            <div className="w-[40vw] h-[60vh] dark:hidden">
                                <Image src={skillLImg}/>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Experience" passHref>
                            <NavigationMenuTrigger className={isActive("/Experience") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Experience</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Projects" passHref>
                            <NavigationMenuTrigger className={isActive("/Projects") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Projects</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/Connect" passHref>
                            <NavigationMenuTrigger className={isActive("/Connect") ? "active bg-[#e0e0e0] dark:bg-accent text-accent-foreground outline-none" : ""}>Connect</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                            <div className="w-[40vw] hidden dark:block">
                                <Image src={connectImg}/>
                            </div>
                            <div className="w-[40vw] dark:hidden">
                                <Image src={connectLImg}/>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};


