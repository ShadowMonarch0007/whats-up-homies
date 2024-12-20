import React from "react";
import logo from '@/components/header/svg/lgd.png'
import logoL from '@/components/header/svg/lglight.png'
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default async function HamSheet() {
    return (
        <div className="absolute z-[100]">
            <Sheet>
                <SheetTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle><div className="-translate-y-2.5">
                            <Image className="h-12 w-12 hidden dark:block" src={logo} />
                            <Image className="h-12 w-12 dark:hidden" src={logoL} />
                        </div></SheetTitle>
                        <SheetDescription className="pt-5 flex flex-col gap-4">
                            <Link href="./"><Button className="w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">Home <ChevronDown /> </Button></Link>
                            <Link href="./About"><Button className=" w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">About <ChevronDown /> </Button></Link>
                            <Link href="./Skills"><Button className=" w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">Skills <ChevronDown /> </Button></Link>
                            <Link href="./Experience"><Button className=" w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">Experience <ChevronDown /> </Button></Link>
                            <Link href="./Projects"><Button className=" w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">Projects <ChevronDown /> </Button></Link>
                            <Link href="./Connect"><Button className=" w-[90%] text-lg flex dark:text-white text-[#202020] justify-between bg-gradient-to-r from-[#303030]/50 to-[#ffffff]/50 dark:from-[#ffffff]/50 dark:to-[#303030]/50 backdrop-blur-lg bg-clip-padding backdrop-filter " variant="outline ">Connect <ChevronDown /> </Button></Link>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}